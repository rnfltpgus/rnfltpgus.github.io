---
emoji: 🌗
title: Redux Thunk를 사용하는 이유
date: '2022-12-19 14:16:00'
author: JungSany
tags: blog gatsby 트리쉐이킹 TreeShaking react thunk 비동기처리 재사용성 유지보수
categories: React
---

## 잡썰..

어떤 데이터를 가져오기 위해서 외부 API를 호출하는 경우, 일단 화면에 렌더링할 수 있는 것들을 먼저 렌더링하고 실제 데이터는 비동기로 가져오는 것을 권장한다는 글을 종종 보게 되었다.

<br/>

### 그 이유는?

요청 즉시 1차 렌더링을 함으로써 연동하는 API가 응답이 늦어지거나 응답이 없을 경우에도 영향을 최소화 시킬 수 있어서 사용자 경험 측면에서 유리하기 때문이다.

<br/>

## 본론

리듀서 함수는 순수함수이여야 하며, 사이드 이팩트가 없어야 한다.

그렇기 때문에 api 요청과 같은 비동기 요청 관련 로직을 리듀서에 작성할 수 없고, 적는다면 컴포넌트에서 useEffect에 로직을 작성할 수 있다.

(아래의 로직은 취업을 준비를 모기 업 과제로 얼마 준비하지 않았을 때의 로직이다. 상태관리로 리코일을 이용)

```javascript
// UserList.js
const UserList = () => {
  const catchUsers = useSetRecoilState(userState);

  useEffect(() => {
    async function getUsersData() {
      try {
        const response = await fetch('./data/data.json');
        const data = await response.json();
      } catch (error) {
        console.error(error);
      }
    }

    getUsersData();
  }, [catchUsers]);

  return <>...</>;
};

export default UserList;
```

위와 같이 작성할 경우 시간이 얼마 되지 않았음에도 불구하고 어디서 데이터가 호출하는지 까먹었었다. 그렇다. 외부 API 정보를 컴포넌트에서 호출하게 되면 어디서 호출하는 지 알아봐야하고 다른사람이 이어서 작업하게 되는 경우 흐름을 읽기도 불편할 것이다.

(컴포넌트에 외부 API를 통해 데이터를 호출하는 코드가 작성된다면 `유지보수 및 관리가 힘들어질 것`이다.)

**위와 같은 이유로 Thunk를 이용하게 되었는데 Thunk를 이용하면 비동기 관련 로직을 중앙 집중화하여 재사용이 가능하게 만들고, 비동기식 API 요청을 성공, 오류, 로딩에 대해 처리할 수 있고 유지보수 관리를 조금 더 효율성 있게 바꿀 수 있다.**

또 다른 말로는 데이터를 비동기적으로 받았을때 객체가 찍혀서 엑션 함수처리를 해야되는데, Thunk나 saga, query 같은 것을 쓰면 데이터 받음과 동시에 액션함수 처리를 할 수 있어서 사용한다.

사용방법은 thunk 코드를 작성해주고 이용하는 전역상태 관리 라이브러리에 사용 로직을 작성해주면 된다. 이렇게 되면 아까 말한 데로 외부에서 API를 이용하여 데이터를 사용하는 경우 전역에서 깔끔하게 이용할 수 있는 것 같다.

```typescript
// productThunk.ts
import { createAsyncThunk } from '@reduxjs/toolkit';

import Instance from 'api/Instance';
import { Products } from 'types/product.types';

export interface FetchProduct {
  productList: Products[];
}

const fetchProduct = createAsyncThunk<FetchProduct>('products/fetchProduct', async () => {
  const { data } = await Instance.get<Products[]>('templates/ePNAVU1sgGtQ/data');

  const result: FetchProduct = {
    productList: [],
  };

  data.forEach(({ club, price, leaders, partners, createdAt }) => {
    result.productList.push({ club, price, leaders, partners, createdAt });
  });

  return result;
});

export default fetchProduct;
```

나는 리덕스 툴킷 안에 있는 내장형 thunk를 사용하였기 떄문에 툴킷을 사용하였다.

```typescript
// productSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import fetchProduct from './productThunk';
import { Products } from 'types/product.types';

export interface InitialState {
  allIds: string[];
  byId: {
    [key: string]: Products;
  };
  isLoading: boolean;
  filterList: string[];
  searchKeyword: string;
  listLength: number;
}

const initialState: InitialState = {
  allIds: [],
  byId: {},
  isLoading: false,
  filterList: [],
  searchKeyword: '',
  listLength: 0,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addFilter: (state, action: PayloadAction<string>) => {
      // ...
    },
    removeFilter: (state, action: PayloadAction<string>) => {
      // ...
    },
    resetFilter: (state) => {
      // ...
    },
    setSearchKeyword(state, action: PayloadAction<string>) {
      // ...
    },
    addListLength(state, action: PayloadAction<number>) {
      // ...
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      const { productList } = action.payload;

      productList.forEach((item) => {
        state.byId[item.club.id] = {
          club: item.club,
          price: item.price,
          leaders: item.leaders,
          partners: item.partners,
          createdAt: item.createdAt,
        };

        state.allIds.push(item.club.id);
      });

      state.isLoading = false;
    });
  },
});

export const {
  addFilter,
  removeFilter,
  setSearchKeyword,
  resetFilter,
  addListLength,
} = productSlice.actions;

export default productSlice.reducer;
```

<br />

## 결론

**외부 API를 이용하는 경우, 경우에 따라 다를 수도 있겠지만,**

**비동기 관련 로직을 중앙 집중화하여 재사용이 가능하게 만들고, 유지보수 관리를 조금 더 효율성 있게 바꿀 수 있도록 `thunk, saga, query 등`과 같은 라이브 러리를 사용하여 처리하는 것이 좋을 것 같다.**

<br />

## 용어사전

사이드 이팩트: React 컴포넌트가 화면에 렌더링된 후에 비동기로 처리되어야 하는 부수적인 효과들

<br/>

### 참고링크

[redux toolkit thunk 이용방법](https://redux-toolkit.js.org/usage/usage-with-typescript)

[Why use Redux Thunk?](https://medium.com/@istvanistvan/why-use-redux-thunk-1ca326d6a46#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjE4MzkyM2M4Y2ZlYzEwZjkyY2IwMTNkMDZlMWU3Y2RkNzg3NGFlYTUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2Njk3MDc0NjcsImF1ZCI6IjIxNjI5NjAzNTgzNC1rMWs2cWUwNjBzMnRwMmEyamFtNGxqZGNtczAwc3R0Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExMDEzNTcxNTI1MjY3NzQzMzgzNyIsImVtYWlsIjoianBwOTAxMjIwQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJuYW1lIjoi7KCV7IS47ZiEIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FMbTV3dTNQUHBELURxcUk5MUFpckZ2UHc0UU9Wd3lWWU1EdTV1SmROM1NZcFZBPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IuyEuO2YhCIsImZhbWlseV9uYW1lIjoi7KCVIiwiaWF0IjoxNjY5NzA3NzY3LCJleHAiOjE2Njk3MTEzNjcsImp0aSI6IjJjNTRmN2E0ZTk5ZWQ2NDEwMmE3YjMzZjEyZDg2OGI5NGQ3ZmI4OWQifQ.eJ8Xz27mr8c_3fg7JWZ-DaajOLgqvdTKB-JP-gNyO8z6fw--tEUd_BIozYjSW7f7dmfgd-QxeknGL06_-wKC4kWn9dyifplCKJKkibgMM21kdMJcThqgi33ohDA_wg7fEPjF7Ggqwn_IyCi7oe2eODVDEzKelB86vG8mqiD6GfjGyiMo1RyXhzVWiCrbVrX_i8yfw_P1MGr4ch1xRyFFis3_fk_vKIMaapcUj-5J-GtftZG-pqPFO79VSGj-fJgyMc5angksE-W3t0DsjN8nT45yMwHE2WbQyD00ywJpGbKHWggMaJ4THQ1oz750tZEHdiRW6RzxjKVTYuPkK05NIg)

[[React] Side Effect란?](https://velog.io/@yes3427/React-Side-Effect)

<br />

```toc

```

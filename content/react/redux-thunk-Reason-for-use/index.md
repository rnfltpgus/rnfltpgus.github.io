---
emoji: ๐
title: Redux Thunk๋ฅผ ์ฌ์ฉํ๋ ์ด์ 
date: '2022-12-19 14:16:00'
author: JungSany
tags: blog gatsby JungLog log jung typescript react thunk ๋น๋๊ธฐ์ฒ๋ฆฌ ์ฌ์ฌ์ฉ์ฑ ์ ์ง๋ณด์
categories: React
---

## ์ก์ฐ..

์ด๋ค ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ค๊ธฐ ์ํด์ ์ธ๋ถ API๋ฅผ ํธ์ถํ๋ ๊ฒฝ์ฐ, ์ผ๋จ ํ๋ฉด์ ๋ ๋๋งํ  ์ ์๋ ๊ฒ๋ค์ ๋จผ์  ๋ ๋๋งํ๊ณ  ์ค์  ๋ฐ์ดํฐ๋ ๋น๋๊ธฐ๋ก ๊ฐ์ ธ์ค๋ ๊ฒ์ ๊ถ์ฅํ๋ค๋ ๊ธ์ ์ข์ข ๋ณด๊ฒ ๋์๋ค.

<br/>

### ๊ทธ ์ด์ ๋?

์์ฒญ ์ฆ์ 1์ฐจ ๋ ๋๋ง์ ํจ์ผ๋ก์จ ์ฐ๋ํ๋ API๊ฐ ์๋ต์ด ๋ฆ์ด์ง๊ฑฐ๋ ์๋ต์ด ์์ ๊ฒฝ์ฐ์๋ ์ํฅ์ ์ต์ํ ์ํฌ ์ ์์ด์ ์ฌ์ฉ์ ๊ฒฝํ ์ธก๋ฉด์์ ์ ๋ฆฌํ๊ธฐ ๋๋ฌธ์ด๋ค.

<br/>

## ๋ณธ๋ก 

๋ฆฌ๋์ ํจ์๋ ์์ํจ์์ด์ฌ์ผ ํ๋ฉฐ, ์ฌ์ด๋ ์ดํฉํธ๊ฐ ์์ด์ผ ํ๋ค.

๊ทธ๋ ๊ธฐ ๋๋ฌธ์ api ์์ฒญ๊ณผ ๊ฐ์ ๋น๋๊ธฐ ์์ฒญ ๊ด๋ จ ๋ก์ง์ ๋ฆฌ๋์์ ์์ฑํ  ์ ์๊ณ , ์ ๋๋ค๋ฉด ์ปดํฌ๋ํธ์์ useEffect์ ๋ก์ง์ ์์ฑํ  ์ ์๋ค.

(์๋์ ๋ก์ง์ ์ทจ์์ ์ค๋น๋ฅผ ๋ชจ๊ธฐ ์ ๊ณผ์ ๋ก ์ผ๋ง ์ค๋นํ์ง ์์์ ๋์ ๋ก์ง์ด๋ค. ์ํ๊ด๋ฆฌ๋ก ๋ฆฌ์ฝ์ผ์ ์ด์ฉ)

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

์์ ๊ฐ์ด ์์ฑํ  ๊ฒฝ์ฐ ์๊ฐ์ด ์ผ๋ง ๋์ง ์์์์๋ ๋ถ๊ตฌํ๊ณ  ์ด๋์ ๋ฐ์ดํฐ๊ฐ ํธ์ถํ๋์ง ๊น๋จน์์๋ค. ๊ทธ๋ ๋ค. ์ธ๋ถ API ์ ๋ณด๋ฅผ ์ปดํฌ๋ํธ์์ ํธ์ถํ๊ฒ ๋๋ฉด ์ด๋์ ํธ์ถํ๋ ์ง ์์๋ด์ผํ๊ณ  ๋ค๋ฅธ์ฌ๋์ด ์ด์ด์ ์์ํ๊ฒ ๋๋ ๊ฒฝ์ฐ ํ๋ฆ์ ์ฝ๊ธฐ๋ ๋ถํธํ  ๊ฒ์ด๋ค.

(์ปดํฌ๋ํธ์ ์ธ๋ถ API๋ฅผ ํตํด ๋ฐ์ดํฐ๋ฅผ ํธ์ถํ๋ ์ฝ๋๊ฐ ์์ฑ๋๋ค๋ฉด `์ ์ง๋ณด์ ๋ฐ ๊ด๋ฆฌ๊ฐ ํ๋ค์ด์ง ๊ฒ`์ด๋ค.)

**์์ ๊ฐ์ ์ด์ ๋ก Thunk๋ฅผ ์ด์ฉํ๊ฒ ๋์๋๋ฐ Thunk๋ฅผ ์ด์ฉํ๋ฉด ๋น๋๊ธฐ ๊ด๋ จ ๋ก์ง์ ์ค์ ์ง์คํํ์ฌ ์ฌ์ฌ์ฉ์ด ๊ฐ๋ฅํ๊ฒ ๋ง๋ค๊ณ , ๋น๋๊ธฐ์ API ์์ฒญ์ ์ฑ๊ณต, ์ค๋ฅ, ๋ก๋ฉ์ ๋ํด ์ฒ๋ฆฌํ  ์ ์๊ณ  ์ ์ง๋ณด์ ๊ด๋ฆฌ๋ฅผ ์กฐ๊ธ ๋ ํจ์จ์ฑ ์๊ฒ ๋ฐ๊ฟ ์ ์๋ค.**

๋ ๋ค๋ฅธ ๋ง๋ก๋ ๋ฐ์ดํฐ๋ฅผ ๋น๋๊ธฐ์ ์ผ๋ก ๋ฐ์์๋ ๊ฐ์ฒด๊ฐ ์ฐํ์ ์์ ํจ์์ฒ๋ฆฌ๋ฅผ ํด์ผ๋๋๋ฐ, Thunk๋ saga, query ๊ฐ์ ๊ฒ์ ์ฐ๋ฉด ๋ฐ์ดํฐ ๋ฐ์๊ณผ ๋์์ ์ก์ํจ์ ์ฒ๋ฆฌ๋ฅผ ํ  ์ ์์ด์ ์ฌ์ฉํ๋ค.

์ฌ์ฉ๋ฐฉ๋ฒ์ thunk ์ฝ๋๋ฅผ ์์ฑํด์ฃผ๊ณ  ์ด์ฉํ๋ ์ ์ญ์ํ ๊ด๋ฆฌ ๋ผ์ด๋ธ๋ฌ๋ฆฌ์ ์ฌ์ฉ ๋ก์ง์ ์์ฑํด์ฃผ๋ฉด ๋๋ค. ์ด๋ ๊ฒ ๋๋ฉด ์๊น ๋งํ ๋ฐ๋ก ์ธ๋ถ์์ API๋ฅผ ์ด์ฉํ์ฌ ๋ฐ์ดํฐ๋ฅผ ์ฌ์ฉํ๋ ๊ฒฝ์ฐ ์ ์ญ์์ ๊น๋ํ๊ฒ ์ด์ฉํ  ์ ์๋ ๊ฒ ๊ฐ๋ค.

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

๋๋ ๋ฆฌ๋์ค ํดํท ์์ ์๋ ๋ด์ฅํ thunk๋ฅผ ์ฌ์ฉํ์๊ธฐ ๋๋ฌธ์ ํดํท์ ์ฌ์ฉํ์๋ค.

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
    // ...
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

## ๊ฒฐ๋ก 

**์ธ๋ถ API๋ฅผ ์ด์ฉํ๋ ๊ฒฝ์ฐ, ๊ฒฝ์ฐ์ ๋ฐ๋ผ ๋ค๋ฅผ ์๋ ์๊ฒ ์ง๋ง,**

**๋น๋๊ธฐ ๊ด๋ จ ๋ก์ง์ ์ค์ ์ง์คํํ์ฌ ์ฌ์ฌ์ฉ์ด ๊ฐ๋ฅํ๊ฒ ๋ง๋ค๊ณ , ์ ์ง๋ณด์ ๊ด๋ฆฌ๋ฅผ ์กฐ๊ธ ๋ ํจ์จ์ฑ ์๊ฒ ๋ฐ๊ฟ ์ ์๋๋ก `thunk, saga, query ๋ฑ`๊ณผ ๊ฐ์ ๋ผ์ด๋ธ ๋ฌ๋ฆฌ๋ฅผ ์ฌ์ฉํ์ฌ ์ฒ๋ฆฌํ๋ ๊ฒ์ด ์ข์ ๊ฒ ๊ฐ๋ค.**

<br />

## ์ฉ์ด์ฌ์ 

์ฌ์ด๋ ์ดํฉํธ: React ์ปดํฌ๋ํธ๊ฐ ํ๋ฉด์ ๋ ๋๋ง๋ ํ์ ๋น๋๊ธฐ๋ก ์ฒ๋ฆฌ๋์ด์ผ ํ๋ ๋ถ์์ ์ธ ํจ๊ณผ๋ค

<br/>

### ์ฐธ๊ณ ๋งํฌ

[redux toolkit thunk ์ด์ฉ๋ฐฉ๋ฒ](https://redux-toolkit.js.org/usage/usage-with-typescript)

[Why use Redux Thunk?](https://medium.com/@istvanistvan/why-use-redux-thunk-1ca326d6a46#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjE4MzkyM2M4Y2ZlYzEwZjkyY2IwMTNkMDZlMWU3Y2RkNzg3NGFlYTUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2Njk3MDc0NjcsImF1ZCI6IjIxNjI5NjAzNTgzNC1rMWs2cWUwNjBzMnRwMmEyamFtNGxqZGNtczAwc3R0Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExMDEzNTcxNTI1MjY3NzQzMzgzNyIsImVtYWlsIjoianBwOTAxMjIwQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJuYW1lIjoi7KCV7IS47ZiEIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FMbTV3dTNQUHBELURxcUk5MUFpckZ2UHc0UU9Wd3lWWU1EdTV1SmROM1NZcFZBPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IuyEuO2YhCIsImZhbWlseV9uYW1lIjoi7KCVIiwiaWF0IjoxNjY5NzA3NzY3LCJleHAiOjE2Njk3MTEzNjcsImp0aSI6IjJjNTRmN2E0ZTk5ZWQ2NDEwMmE3YjMzZjEyZDg2OGI5NGQ3ZmI4OWQifQ.eJ8Xz27mr8c_3fg7JWZ-DaajOLgqvdTKB-JP-gNyO8z6fw--tEUd_BIozYjSW7f7dmfgd-QxeknGL06_-wKC4kWn9dyifplCKJKkibgMM21kdMJcThqgi33ohDA_wg7fEPjF7Ggqwn_IyCi7oe2eODVDEzKelB86vG8mqiD6GfjGyiMo1RyXhzVWiCrbVrX_i8yfw_P1MGr4ch1xRyFFis3_fk_vKIMaapcUj-5J-GtftZG-pqPFO79VSGj-fJgyMc5angksE-W3t0DsjN8nT45yMwHE2WbQyD00ywJpGbKHWggMaJ4THQ1oz750tZEHdiRW6RzxjKVTYuPkK05NIg)

[[React] Side Effect๋?](https://velog.io/@yes3427/React-Side-Effect)

<br />

```toc

```

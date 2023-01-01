---
emoji: 🩹
title: React - Suspense, lazy에 대해 잠깐
date: '2023-01-01 15:33:00'
author: JungSany
tags: blog gatsby JungLog log jung react suspense lazy react18
categories: React
---

# Suspense란?

컴포넌트의 랜더링을 어떤 작업이 끝날 때까지 `잠시 중단시키고 다른 컴포넌트를 먼저 랜더링`할 수 있다. (아직 개발적인 경험은 작지만, 페이지를 렌더링할때, 외부로 부터 데이터를 받아올때 `빈 페이지를 보여주기 보다는 로딩 페이지를` 보여주게 처리하여 빈 화면이 출력되지 않게 사용한 경험이 있음)

쉽게 말해 어떤 컴포넌트를 읽어야 하는데, 데이터가 아직 준비되지 않았다고 리엑트에게 알려주는 새로운 매커니즘이다.

사용방법은 아래와 같다.

```jsx
// 아래와 같이 작성하면 컴포넌트가 포함된 JSX 코드를 랜더링할 때, UserList를 바로 호출함
<UserList />

// 아래와 같이 작성하면 Suspense로 감싼 컴포넌트의 랜더링을 특정 작업 이후로 미루고, 그 작업이 끝날 때 까지는 fallback 속성으로 넘긴 컴포넌트를 대신 보여줄 수 있음
<Suspense fallback={<Spinner />}>
  <UserList />
</Suspense>
```

<br/>

# React.lazy()란?

React.lazy 함수를 사용하면 동적으로 컴포넌트를 import하여 렌더링 할 수 있다.

이를 사용하면 초기 렌더링 지연시간을 어느정도 줄일 수 있다.

또 이 방법을 사용한다면 [렌더링 관련 최적화를 진행할 수 있다.](https://rnfltpgus.github.io/react/optimization-plan/)

만약 서비스를 구성하는 컴포넌트에서 import를 그냥 하게되면 코드가 실행되는 시점에서 모든 import 요소를 읽기 때문인데 불필요하게 읽지 않아도 되는 import 요소를 읽게 된다.

하지만 `다이나믹한 임포트 방식`인 **React.lazy()**를 이용한다면 필요한 시점에 import 요소를 읽기 때문에 렌더링 최적화 부분에서도 좋은 효과를 볼 수 있다.

```jsx
const SomeComponent = React.lazy(() => import('./SomeComponent'));
```

Router로 분기가 나누어진 컴포넌트를 위 처럼 import하면 해당 path로 이동할때 컴포넌트를 불러오게 되는데 이 과적에서 로딩하는 시간이 생기게 된다.

- 이 로딩되는 시간 동안 로딩 화면을 보여지도록 해주는 역할을 하는 것이 `Suspense`이다.
- 아래의 예시를 참고하면 좋을 것 같다.

```jsx
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Spinner from './items/Spinner';

// 기존 import 방식
//import Login from './pages/Login';
//import Main from './pages/Main';
//import Search from './pages/Search';
//import Setting from './pages/Setting';

// React.Lazy()를 이용한 방식
const Main = lazy(() => import('./pages/Main'));
const Login = lazy(() => import('./pages/Login'));
const Search = lazy(() => import('./pages/Search'));
const Setting = lazy(() => import('./pages/Setting'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<Spinner text="페이지를 불러오는 중 입니다...🏃🏻🏃🏻‍♀️🏃🏻‍♂️" />}>
        <Routes>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/setting" component={Setting} />
          <Route path="/search/query=:word" component={Search} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
```

<br/>

## 생각

코드를 작성하면서 Suspense와 Lazy를 적절하게 섞어서 미리미리 개발한다면 렌더링 최적화에 대해서도, 사용자가 사용하는 입장에서도 많은 이점이 있어 보인다.

<br/>

## 참고자료

[Suspense 공식 베타버전](https://beta.reactjs.org/reference/react/Suspense)

[Suspense for Data Fetching (Experimental) - React](https://17.reactjs.org/docs/concurrent-mode-suspense.html)

[React Suspense 소개 (feat. React v18)](https://www.daleseo.com/react-suspense/)

[[React] Suspense란?](https://velog.io/@bbaa3218/React-Suspense%EB%9E%80)

[코드 분할 - React](https://ko.reactjs.org/docs/code-splitting.html)

<br/>

```toc

```

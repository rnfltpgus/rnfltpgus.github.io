---
emoji: ๐ฉน
title: React - Suspense, lazy์ ๋ํด ์ ๊น
date: '2023-01-01 15:33:00'
author: JungSany
tags: blog gatsby JungLog log jung react suspense lazy react18
categories: React
---

# Suspense๋?

์ปดํฌ๋ํธ์ ๋๋๋ง์ ์ด๋ค ์์์ด ๋๋  ๋๊น์ง `์ ์ ์ค๋จ์ํค๊ณ  ๋ค๋ฅธ ์ปดํฌ๋ํธ๋ฅผ ๋จผ์  ๋๋๋ง`ํ  ์ ์๋ค. (์์ง ๊ฐ๋ฐ์ ์ธ ๊ฒฝํ์ ์์ง๋ง, ํ์ด์ง๋ฅผ ๋ ๋๋งํ ๋, ์ธ๋ถ๋ก ๋ถํฐ ๋ฐ์ดํฐ๋ฅผ ๋ฐ์์ฌ๋ `๋น ํ์ด์ง๋ฅผ ๋ณด์ฌ์ฃผ๊ธฐ ๋ณด๋ค๋ ๋ก๋ฉ ํ์ด์ง๋ฅผ` ๋ณด์ฌ์ฃผ๊ฒ ์ฒ๋ฆฌํ์ฌ ๋น ํ๋ฉด์ด ์ถ๋ ฅ๋์ง ์๊ฒ ์ฌ์ฉํ ๊ฒฝํ์ด ์์)

์ฝ๊ฒ ๋งํด ์ด๋ค ์ปดํฌ๋ํธ๋ฅผ ์ฝ์ด์ผ ํ๋๋ฐ, ๋ฐ์ดํฐ๊ฐ ์์ง ์ค๋น๋์ง ์์๋ค๊ณ  ๋ฆฌ์ํธ์๊ฒ ์๋ ค์ฃผ๋ ์๋ก์ด ๋งค์ปค๋์ฆ์ด๋ค.

์ฌ์ฉ๋ฐฉ๋ฒ์ ์๋์ ๊ฐ๋ค.

```jsx
// ์๋์ ๊ฐ์ด ์์ฑํ๋ฉด ์ปดํฌ๋ํธ๊ฐ ํฌํจ๋ JSX ์ฝ๋๋ฅผ ๋๋๋งํ  ๋, UserList๋ฅผ ๋ฐ๋ก ํธ์ถํจ
<UserList />

// ์๋์ ๊ฐ์ด ์์ฑํ๋ฉด Suspense๋ก ๊ฐ์ผ ์ปดํฌ๋ํธ์ ๋๋๋ง์ ํน์  ์์ ์ดํ๋ก ๋ฏธ๋ฃจ๊ณ , ๊ทธ ์์์ด ๋๋  ๋ ๊น์ง๋ fallback ์์ฑ์ผ๋ก ๋๊ธด ์ปดํฌ๋ํธ๋ฅผ ๋์  ๋ณด์ฌ์ค ์ ์์
<Suspense fallback={<Spinner />}>
  <UserList />
</Suspense>
```

<br/>

# React.lazy()๋?

React.lazy ํจ์๋ฅผ ์ฌ์ฉํ๋ฉด ๋์ ์ผ๋ก ์ปดํฌ๋ํธ๋ฅผ importํ์ฌ ๋ ๋๋ง ํ  ์ ์๋ค.

์ด๋ฅผ ์ฌ์ฉํ๋ฉด ์ด๊ธฐ ๋ ๋๋ง ์ง์ฐ์๊ฐ์ ์ด๋์ ๋ ์ค์ผ ์ ์๋ค.

๋ ์ด ๋ฐฉ๋ฒ์ ์ฌ์ฉํ๋ค๋ฉด [๋ ๋๋ง ๊ด๋ จ ์ต์ ํ๋ฅผ ์งํํ  ์ ์๋ค.](https://rnfltpgus.github.io/react/optimization-plan/)

๋ง์ฝ ์๋น์ค๋ฅผ ๊ตฌ์ฑํ๋ ์ปดํฌ๋ํธ์์ import๋ฅผ ๊ทธ๋ฅ ํ๊ฒ๋๋ฉด ์ฝ๋๊ฐ ์คํ๋๋ ์์ ์์ ๋ชจ๋  import ์์๋ฅผ ์ฝ๊ธฐ ๋๋ฌธ์ธ๋ฐ ๋ถํ์ํ๊ฒ ์ฝ์ง ์์๋ ๋๋ import ์์๋ฅผ ์ฝ๊ฒ ๋๋ค.

ํ์ง๋ง `๋ค์ด๋๋ฏนํ ์ํฌํธ ๋ฐฉ์`์ธ **React.lazy()**๋ฅผ ์ด์ฉํ๋ค๋ฉด ํ์ํ ์์ ์ import ์์๋ฅผ ์ฝ๊ธฐ ๋๋ฌธ์ ๋ ๋๋ง ์ต์ ํ ๋ถ๋ถ์์๋ ์ข์ ํจ๊ณผ๋ฅผ ๋ณผ ์ ์๋ค.

```jsx
const SomeComponent = React.lazy(() => import('./SomeComponent'));
```

Router๋ก ๋ถ๊ธฐ๊ฐ ๋๋์ด์ง ์ปดํฌ๋ํธ๋ฅผ ์ ์ฒ๋ผ importํ๋ฉด ํด๋น path๋ก ์ด๋ํ ๋ ์ปดํฌ๋ํธ๋ฅผ ๋ถ๋ฌ์ค๊ฒ ๋๋๋ฐ ์ด ๊ณผ์ ์์ ๋ก๋ฉํ๋ ์๊ฐ์ด ์๊ธฐ๊ฒ ๋๋ค.

- ์ด ๋ก๋ฉ๋๋ ์๊ฐ ๋์ ๋ก๋ฉ ํ๋ฉด์ ๋ณด์ฌ์ง๋๋ก ํด์ฃผ๋ ์ญํ ์ ํ๋ ๊ฒ์ด `Suspense`์ด๋ค.
- ์๋์ ์์๋ฅผ ์ฐธ๊ณ ํ๋ฉด ์ข์ ๊ฒ ๊ฐ๋ค.

```jsx
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Spinner from './items/Spinner';

// ๊ธฐ์กด import ๋ฐฉ์
//import Login from './pages/Login';
//import Main from './pages/Main';
//import Search from './pages/Search';
//import Setting from './pages/Setting';

// React.Lazy()๋ฅผ ์ด์ฉํ ๋ฐฉ์
const Main = lazy(() => import('./pages/Main'));
const Login = lazy(() => import('./pages/Login'));
const Search = lazy(() => import('./pages/Search'));
const Setting = lazy(() => import('./pages/Setting'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<Spinner text="ํ์ด์ง๋ฅผ ๋ถ๋ฌ์ค๋ ์ค ์๋๋ค...๐๐ป๐๐ปโโ๏ธ๐๐ปโโ๏ธ" />}>
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

## ์๊ฐ

์ฝ๋๋ฅผ ์์ฑํ๋ฉด์ Suspense์ Lazy๋ฅผ ์ ์ ํ๊ฒ ์์ด์ ๋ฏธ๋ฆฌ๋ฏธ๋ฆฌ ๊ฐ๋ฐํ๋ค๋ฉด ๋ ๋๋ง ์ต์ ํ์ ๋ํด์๋, ์ฌ์ฉ์๊ฐ ์ฌ์ฉํ๋ ์์ฅ์์๋ ๋ง์ ์ด์ ์ด ์์ด ๋ณด์ธ๋ค.

<br/>

## ์ฐธ๊ณ ์๋ฃ

[Suspense ๊ณต์ ๋ฒ ํ๋ฒ์ ](https://beta.reactjs.org/reference/react/Suspense)

[Suspense for Data Fetching (Experimental) - React](https://17.reactjs.org/docs/concurrent-mode-suspense.html)

[React Suspense ์๊ฐ (feat. React v18)](https://www.daleseo.com/react-suspense/)

[[React] Suspense๋?](https://velog.io/@bbaa3218/React-Suspense%EB%9E%80)

[์ฝ๋ ๋ถํ  - React](https://ko.reactjs.org/docs/code-splitting.html)

<br/>

```toc

```

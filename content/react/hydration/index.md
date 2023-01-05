---
emoji: 🛣️
title: React - Hydration와 Helmet이란?
date: '2023-01-05 16:21:00'
author: JungSany
tags: blog gatsby JungLog log jung react hydration ssr next js helmet seo
categories: React
---

# React Hydration

**Hydration**는 `React가 SSR을 할 수 있도록`, HTML 코드와 JS 코드를 서로 매칭시켜 동적인 웹사이트를 브라우저에 렌더링하는 기술이다.

**Next.js**는 React에서 v16부터 제공하는 hydrate 기능을 사용해서 이러한 솔루션을 성공적으로 제공했다.

다른 말로는 서버 측에서 제공된 HTML을 재사용하고 해당 DOM 요소에 이벤트 리스너를 연결하는 작업이라고 할 수 있다.

**`hydrate`는 ReactDOM의 함수인데 리액트 프로젝트 구축 시, 초반에 꼭 작성해주는 render 함수와 잠깐 비교해보면**

`ReactDOM.render`는 `hydration`을 수행하지 않지만 `ReactDOM.hydrate`를 사용하여 `hydration`을 수행할 수 있다.

```jsx
import { App } from './src/app';

ReactDOM.hydrate(<App />, document.getElementById('app'));
```

`ReactDOM.hydrate`는 `ReactDOM.render`와 동일하게 동작하지만 서버 측에서 전달받은 HTML을 사용한다.

<br/>

# React Helmet

**React는 싱글 페이지 애플리케이션(Single Page Application, SPA)이라, React로 구축된 웹 사이트의 경우 크롤러들이 단 하나의 파일인 `public/index.html` 만을 읽게 된다.**

**이는 `각각의 페이지에 대한 정보를 읽지 못한다`는 단점이 있다.**

이러한 `단점`을 극복할 수 있는 방안으로는 `react-helmet 라이브러리`를 사용하면 된다.

## 사용방법에 대해서는 작성중..

<br/>

## 참고링크

[React Docs- - hydrate](https://beta.reactjs.org/reference/react-dom/hydrate)

[React Helmet - npm](https://www.npmjs.com/package/react-helmet)

[React의 Hydration에 대하여](https://velog.io/@huurray/React-Hydration-%EC%97%90-%EB%8C%80%ED%95%98%EC%97%AC)

[Next.js의 Hydrate란?](https://helloinyong.tistory.com/315)

[react-helmet으로 페이지별 SEO 메타태그 설정하기](https://velog.io/@miyoni/noSSRyesSEO)

<br/>

```toc

```

---
emoji: 🌏
title: CSR vs SSR 특징 및 차이
date: '2022-12-21 17:20:00'
author: JungSany
tags: blog gatsby JungLog log jung csr ssr 클라이언트 사이드 렌더링 서버
categories: 개발지식
---

## SSR (Server Side Rendring)

**서버로 부터 완전하게 만들어진 html파일을 받아와 페이지 전체를 렌더링 하는 방식이다.**

<br/>

### 1.1 과정

- 유저가 웹사이트에 요청을 보낸다.
- 서버는 필요하다면 데이터베이스에서 데이터를 가지고 오고, 페이지를 렌더링하는데 필요한 작업을 수행한 HTML 파일을 만든다.
- 유저는 이제 서버가 렌더링 해준 HTML을 이용하여 콘텐츠를 볼 수 있다. (**Time to view**)
- 하지만 아직 페이지에서 상호작용을 할 수 있는 JS파일이 존재하지 않기 때문에 페이지에서 클릭했을 때 반응이 일어나지 않는 부분이 존재한다.
- 브라우저에서 필요한 상호작용에 필요한 JS 파일을 서버로 부터 받는다.
- JS 파일을 브라우저에서 컴파일 후 인터랙티브한 페이지가 완성된다. **(Time To Interact)**

![ssr](https://miro.medium.com/max/1400/1*VG33xLBOqcpfctgiyh0jtA.webp)

<br/>

### 1.2 장점

- HTML 컨텐츠가 이미 담겨져 있기에 **SEO(Search Engine Optimizaion)**에 좋다.
- 사용자에게 **첫 콘텐츠를 빨리 보여줄 수 있는 장점**이 존재한다.

<br/>

### 1.3 단점

- **매번 페이지를 요청할 때마다 새로고침 되는 치명적인 단점이 존재한다.**
- TTV(Time To View)와 TTI(Time To Interact)의 공백이 발생한다.
- 페이지를 구성하는 모든 리소스를 서버에서 처리하므로 요청이 많아질 때 **서버 부담이 증가한다.**

**중요한 부분은 렌더링 주체가 ‘서버’ 라는 점이다.**

<br/>

## CSR (Client Side rendring)

**CSR은 페이지를 브라우저에서 서버로 부터 받은 JS 파일을 이용하여 직접 렌더링 하는 것을 의미한다. (이는 페이지 전환이 이루어지는 것이 아닌 변경이 필요한 부분만 바뀌므로 `화면이 부드럽게 동작하여 사용자 입장에서는 보기 더 편한 느낌`을 준다.)**

<br/>

### 2.1 과정

- 유저가 웹사이트에 요청을 보낸다.
- 브라우저는 링크를 이용하여 화면을 그리는데 필요한 HTML, JS 파일을 다운받는다.
- 브라우저는 JS 코드를 실행하여 리액트를 구동한다.
- 이 때 API를 통해 데이터베이스에 존재하는 데이터를 사용할 경우 API를 호출한다.
- 서버에서 데이터베이스에서 조회한 데이터를 응답한다.
- API로 부터 받은 데이터를 채워준 뒤 리액트가 VirtualDOM에 콘텐츠를 렌더링 한다.
- VirtualDOM이 구성이 완료되면 이를 브라우저 DOM 붙힌다.

![csr](https://miro.medium.com/max/1400/1*cRftPL0mxSxiVSg-E0P7IA.webp)

<br/>

### 2.2 장점

- 렌더링이 필요한 부분만 바꾸기 때문에 페이지 새로고침이 발생하지 않는다.
- 렌더링 주체가 브라우저 이므로 서버에 부하를 줄일 수 있다.

<br/>

### 2.3 단점

- **JS 파일을 번들링**해서 한번에 받기 때문에 초기 유저가 콘텐츠를 보기까지의 속도가 느리다.
- 기본 HTML이 비어있어 `SEO(Search Engine Optimizaion)`에 최적화 되어 있지 않다.

**중요한 부분은 렌더링 주체가 ‘브라우저’ 라는 점이다.**

<br/>

## 정리

**페이지 이동이 많고 유저와 상호작용이 많은 넷플릭스의 경우 CSR을 적극적으로 활용하고, 페이지 이동이 적고 SEO를 최적하여 검색 결과 상위에 위치해야 하는 회사 홈페이지의 경우 SSR이 적절할 것으로 보인다.**

**서비스의 성격**에 따라 적절한 방식을 채용하고, 또 필요에 따라서 **두가지를 섞는 방법**도 고려해야 할 것 같다.

<br/>

### 참고링크

[A Deep Dive into Server-Side Rendering (SSR) in JavaScript](https://towardsdev.com/server-side-rendering-srr-in-javascript-a1b7298f0d04)

[Rendering on the Web](https://web.dev/rendering-on-the-web/)

[여씨의 개발이야기](https://yeoossi.tistory.com/40)

[The Benefits of Server Side Rendering Over Client Side Rendering](https://medium.com/walmartglobaltech/the-benefits-of-server-side-rendering-over-client-side-rendering-5d07ff2cefe8)

[](https://d2.naver.com/helloworld/7804182)

[CSR vs SSR vs SSG](https://ajdkfl6445.gitbook.io/study/web/csr-vs-ssr-vs-ssg#static-site-generator-ssg)

[TTV (Time To View) & TTI (Time To Interact)](https://velog.io/@yu2jeong/TTV-Time-To-View-TTI-Time-To-Interact)

<br/>

```toc

```

---
emoji: 💾
title: Web Storage(Local, Session)
date: '2022-12-12 19:37:00'
author: JungSany
tags: blog gatsby jung log web storage local session
categories: 개발지식
---

- HTML5에는 웹의 데이터를 클라이언트에 저장할 수 있는 새로운 자료구조인 WebStorage 스펙이 포함됨(로컬과 세션스토리지로 나뉨)
- Web Storage API는 브라우저에서 키/값 쌍을 쿠키보다 훨씬 직관적으로 젖아할 수 있는 방법을 제공한다.

<br/>

### SessionStorage

- 각각의 [출처](https://developer.mozilla.org/ko/docs/Glossary/Origin)에 대해서 독립적인 저장 공간을 페이지 세션이 유지되는 동안(브라우저가 열려있는 동안) 제공한다.
  - 세션에 한정해, 즉 브라우저 또는 탭이 닫힐 때까지만 데이터를 저장한다.
  - 데이터를 절대 서버로 전송하지 않는다.
  - 저장 공간이 쿠키보다 큽다.(최대 5MB)
- 입력 폼 정보, 비로그인 장바구니 용도로 많이 사용된다.

<br/>

### LocalStorage

- SessionStorage와 비슷하지만, 브라우저를 닫았다 열어도 데이터가 남아있다.
  - 유효기간 없이 데이터를 저장하고, JavaScript를 사용하거나 브라우저 캐시 또는 로컬 저장 데이터를 지워야만 사라진다.
  - 저장 공간이 셋중 제일 크다.
- 자동 로그인을 유지시킬 때 많이 사용한다.

<br/>

### 요약

**공통점**

- `key / value` 쌍으로 데이터를 저장하고 키를 기반으로 데이터 조회 가능하다.
- 단순 문자열을 넘어 객체정보도 저장할 수 있다.
- iterable이 아니라서 key와 value 전체를 얻으려면 일반적인 for문을 사용해서 다루어야 한다.
  - (for…of, for…in 사용 불가능) iterable/iterator 조사가 필요함

**장단점**

- 서버에 불필요한 데이터를 저장하지 않는다.
- 쿠키보다 저장할 수 있는 용량이 크다.(브라우저마다 다르나 대략 5MB)
- HTML5를 지원하지 않는 브라우저의 경우 사용이 불가하다.

<br/>

### 참고링크

[Web Storage API - Web API | MDN](https://developer.mozilla.org/ko/docs/Web/API/Web_Storage_API)

[LocalStorage, sessionStorage](https://javascript.info/localstorage#sessionstorage)

[출처 - 용어 사전 | MDN](https://developer.mozilla.org/ko/docs/Glossary/Origin)

[쿠키, 웹 스토리지 (로컬 스토리지, 세션 스토리지)](https://velog.io/@dorazi/%EC%BF%A0%ED%82%A4-%EC%9B%B9-%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80-%EB%A1%9C%EC%BB%AC-%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80-%EC%84%B8%EC%85%98-%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80)

<br/>

```toc

```

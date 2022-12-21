---
emoji: 🍍
title: Promise
date: '2022-12-21 15:20:00'
author: JungSany
tags: blog gatsby JungLog log jung callback promise 비동기
categories: JavaScript
---

### Promise란?

- “**_`Promise`란 비동기 처리를 조금 더 수월하게 처리하게끔 도와주는 추상화된 소프트웨어 개념”_**
- 콜백지옥을 해결하기 위해 `ES6`에서 Promise로 지원하게 되었다.
- **Promise의 핵심은 비동기에서 성공과 실패를 분리해서 메소드를 수행하며, `에러핸들링이 가능`하다는 점이 있다.**
- Promise는 `두가지 인수를 받는데`, 비동기식이 정상적으로 실행된다면 `resolve`를 비정상적으로 실행된다면 두번째 인수인 `reject`를 호출한다.

<br/>

### Promise를 호출한 이유 사용할 수 있는 메소드는 `3가지`

- then: reslove()를 통한 리턴 값
- catch: reject()를 통한 리턴 값
- finally: 실행 여부와 상관없이 이후 이벤트 실행

<br/>

### 가장 큰 `장점`으로는

- 코드의 가독성이 증가
- 반복해서 재사용하는 예외처리 작업이 줄어듬
- `throw`를 사용하면 `error` 상황을 쉽게 찾아내 `에러 핸들링이 한결 편해짐`

<br/>

### 한번에 비동기 처리를 해야되는 경우

- **Promise.all**
  - 프로미스가 담겨 있는 배열 등의 이터러블을 인자로 전달 받는다. 그리고 `전달받은 모든 프로미스를 병렬로 처리`하고 그 처리 결과를 resolve하는 새로운 프로미스를 반환한다.
  - **전달받은 모든 프로미스를 병렬로 처리**한다. 이때 모든 프로미스의 처리가 종료될 때까지 기다린 후 모든 처리 결과를 resolve 또는 reject 한다.

```jsx
Promise.all([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
])
  .then(console.log) // [ 1, 2, 3 ]
  .catch(console.log);
```

<br/>

### 참고링크

[Promise - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)

[promise, async/await](https://velog.io/@beberiche/promise-asyncawait)

[프라미스](https://ko.javascript.info/promise-basics)

<br/>

```toc

```

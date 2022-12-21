---
emoji: 🍈
title: Async & await
date: '2022-12-21 15:25:00'
author: JungSany
tags: blog gatsby JungLog log jung callback promise async await 비동기
categories: JavaScript
---

**Callback 지옥을 유발하는 처리방식보다 비동기 프로그래밍을 동기방식처럼 직관적으로 표현할 수 있다.**

<br/>

## Async & await란?

- `Async`를 함수(Function) 앞에 붙이면 항상 promise를 반환한다.

  (프라미스가 아닌 값을 반환하더라도 이행 상태의 프라미스(resolved promise)로 값을 감싸 이행된 프라미스가 반환되도록 함)

- `Async`는 평범한 함수를 프라미스를 리턴하는 비동기적인 함수로 만들어주는 키워드고
- `Async 함수` 안에서 `await`는 코드의 순서를 기다리며 자신의 차례가 올때까지 기다렸다가 자신의 차례가 오면 결과를 반환한다.

```javascript
async function test() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('완료!'), 3000);
  });

  let result = await promise; // 프라미스가 이행될 때까지 치례를 기다림 (*)

  alert(result); // "완료!"
}

test();
```

<br/>

### Async & await 이전에 Promise를 사용할 경우

- promise는 접근할때 .then()을 사용하고 error처리는 .catch()로 한다.
- 단어의 의미 약속 ‘미래’ 시점의 데이터를 위한 것이긴 하지만 ‘promise’를 갖고 있기만 하면, 그 데이터가 미래시점에 있는지?, 이미 받았는지? 에 대해서는 상관없다.
- 프로미스는 일관된 비동기를 강제한다.

<br/>

### Promise와 Async & await 차이

- 프로미스 .then()과 await는 쓰는 방법이 거의 똑같다. `다른 점이 있다면 콜백함수를 요구하지 않는다는 점은 다르다.`

<br/>

### 알아볼것

- 이전에 나온것이지만 최근에 async를 사용하지 않아도 await만으로 작성이 가능하다는 글을 보았는데, 찾아봐아겠다.

### 참고링크

[async await란?](https://ko.javascript.info/async-await)

[Async-await는 어떻게 구현하는가](https://medium.com/@la.place/async-await%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EA%B5%AC%ED%98%84%ED%95%98%EB%8A%94%EA%B0%80-fa08a3157647)

[[번역] async/await 를 사용하기 전에 promise를 이해하기](https://kiwanjung.medium.com/%EB%B2%88%EC%97%AD-async-await-%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-%EC%A0%84%EC%97%90-promise%EB%A5%BC-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-955dbac2c4a4)

<br/>

```toc

```

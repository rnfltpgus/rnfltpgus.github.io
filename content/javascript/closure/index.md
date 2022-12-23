---
emoji: 📎
title: 클로저(Closure)란?
date: '2022-12-23 14:20:00'
author: JungSany
tags: blog gatsby JungLog log jung 중첩함수 closure
categories: JavaScript
---

함수와 함수가 선언된 어휘적 환경의 조합이다.

<br/>

## 어휘적 범위 지정(Lexical scoping)

```jsx
function init() {
  const name = 'Sanny'; // name은 init에 의해 생성된 지역 변수이다.

  function displayName() { // displayName() 은 내부 함수이며, 클로저다.
    alert(name); // 부모 함수에서 선언된 변수를 사용한다.
  }

  displayName();
}

init();
```

- 위 코드를 실행하면 `displayName()` 함수 내의 `alert()`문이 부모 함수에서 정의한 변수 `name`의 값을 성공적으로 출력한다.
- 이 예시를 통해 함수가 `중첩된 상황`에서 파서가 어떻게 변수를 처리하는지 알 수 있다.
- 이는 어휘적 범위 지정(Lexical Scoping)의 한 예이다. 여기서 `Lexical`이란, 어휘적 범위 지정(Lexical Scoping) 과정에서 변수가 어디에서 사용 가능한지 알기 위해 그 변수가 소스코드 내 어디에서 선언되었는지 고려한다는 것을 의미한다.
- 단어 `Lexical`은 이런 사실을 나타낸다. `중첩된 함수`는 외부 범위(scope)에서 선언한 변수에도 접근할 수 있다.

<br/>

## 클로저(Closure)

- 자바스크립트는 함수를 리턴하고, 리턴하는 함수가 클로저를 형성한다.
- 클로저는 함수와 함수가 선언된 어휘적 환경의 조합이다. 이 환경은 클로저가 생성된 시점의 유효 범위 내에 있는 모든 지역 변수로 구성된다.
- `클로저(Closure)`는 **내부함수가 외부함수의 맥락(context)에 접근할 수 있는 것**을 말한다.

<br/>

```toc

```

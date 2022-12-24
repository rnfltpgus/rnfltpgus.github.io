---
emoji: 🏂
title: 이벤트 위임(버블링, 캡쳐링의 차이)이 무엇인지, 적용 경험 & 적용 이유
date: '2022-12-24 13:02:00'
author: JungSany
tags: blog gatsby JungLog log jung javascript knowledge react bubbling capturing event stopPropagation preventDefault
categories: React JavaScript 개발지식
---

## 이벤트 위임이란?

**상위 요소에서 하위 요소의 이벤트를 제어하는 방식**

- `캡처링과 버블링`을 `활용`하면 강력한 이벤트 핸들링 패턴인 `이벤트 위임(event delegation)`을 `구현할 수 있다.`
- `비슷한 방식의 여러 하위 요소를 다루어야할 때` 이벤트 위임을 이용해 요소마다 핸들러를 할당하지 않고, `요소의 공통 조상(부모)`에 이벤트 핸들러를 `단 하나만 할당해 여러요소를 다룰수 있다.`
- 공통 조상에 할당한 핸들러에서 `event.target을 이용`하면 `실제 어디서 이벤트가 발생했는지 알 수 있다.`
- 사용자의 인터랙션을 통해 추가되는, 아직 만들어지지 않은 요소에 이벤트 핸들러를 할당해야 하는 경우 사용한다.

<br/>

## 장점과 단점

### 장점

- 많은 핸들러를 할당하지 않아도 되기 때문에 초기화가 단순해지고 메모리가 절약된다.
- 요소를 추가하거나 제거할 때 해당 요소에 할당된 핸들러를 추가하거나 제거할 필요가 없기 때문에 코드가 짧아진다.
- `innerHTML`이나 유사한 기능을 하는 스크립트로 요소 덩어리를 더하거나 뺄 수 있기 때문에 DOM 수정이 쉬워진다.

<br/>

### 단점

- 이벤트 위임을 사용하려면 이벤트가 반드시 버블링 되어야 합니다. 하지만 몇몇 이벤트는 버블링 되지 않습니다. 그리고 낮은 레벨에 할당한 핸들러엔 `event.stopPropagation()`를 쓸 수 없다.
- 컨테이너 수준에 할당된 핸들러가 응답할 필요가 있는 이벤트이든 아니든 상관없이 모든 하위 컨테이너에서 발생하는 이벤트에 응답해야 하므로 CPU 작업 부하가 늘어날 수 있다. 그런데 이런 부하는 무시할만한 수준이므로 실제로는 잘 고려하지 않는다.

<br/>

## 버블링(Bubbling)과 캡처링(Capturing)

![버블링과 캡처링](https://ko.javascript.info/article/bubbling-and-capturing/eventflow.svg)

### 버블링(Bubbling)

- 특정 화면 요소에서 이벤트가 발생했을 때, 해당 **이벤트가 더 상위의 화면 요소들로 전달**되는 특징

```javascript
// index.html
<body>
  <div class="one">
    <div class="two">
      <div class="three"></div>
    </div>
  </div>
</body>

// index.js
const divs = document.querySelectorAll('div');

divs.forEach(function (div) {
  div.addEventListener('click', logEvent);
});

function logEvent(event) {
  console.log(event.currentTarget.className);
}
```

**결과 : three → two → one** 순으로 콘솔이 찍힘

<br/>

### 캡쳐링(Capturing)

- 버블링과 반대로 **이벤트가 상위에서 하위 방향으로 전달**되는 특징

```javascript
// index.html
<body>
  <div class="one">
    <div class="two">
      <div class="three"></div>
    </div>
  </div>
</body>

// index.js
const divs = document.querySelectorAll('div');

divs.forEach(function (div) {
  div.addEventListener('click', logEvent, {
    capture: true, // -> 캡쳐링 (default 값은 false)
  });
});

function logEvent(event) {
  console.log(event.currentTarget.className);
}
```

**결과 : one → two → three** 순으로 콘솔이 찍힘

<br/>

### 각 핸들러가 접근할 수 있는 Event 객체의 프로퍼티

- event.target – 이벤트가 발생한 가장 안쪽의 요소
- event.currentTarget (=this) – 이벤트를 핸들링 하는 현재 요소 (핸들러가 실제 할당된 요소)
- event.eventPhase – 현재 이벤트 흐름 단계(캡처링=1, 타깃=2, 버블링=3)

<br/>

### 적용 경험

- 간단한 적용 경험으로 TODO 리스트를 만들 때, 새로 리스트를 만들면 클릭 이벤트가 발생하지 않아 최상위 태그인 ul 태그에 이벤트 리스너를 적용하여 새로운 리스트(하위)에서 발생한 클릭 이벤트를 감지(버블링)할 수 있다.

<br/>

### stopPropagation()와 event.preventDefault()의 차이

두개의 이벤트 메소드는 `이벤트 관련 동작에서 많이 사용`되는 코드이며, 알 필요가 있다.

<br/>

#### event.stopPropagation()

- 복잡한 코드에서는 이벤트 전달 방식을 파악하기 다소 어려울 수 있다.
- 이럴 경우, `event.stopPropagation()`을 사용하면 해당 이벤트가 **상위 엘리먼트에 전달되지 않게 전달되는 것을 막는다.**
- **버블링** → 클릭한 요소의 이벤트만 발생시키고 상위 요소로 영향 ❌
- **캡쳐링** → 클릭한 요소의 최상위 요소만 이벤트를 발생시키고 하위 요소로 영향 ❌

<br/>

#### event.preventDefault()

- html에서 a 태그나 submit 태그는 고유의 동작이 있다. 페이지를 이동시킨다거나 form 안에 있는 input 등을 전송한다던가 그러한 동작이 있는데, `event.preventDefault()`는 그런 고유의 동작이 있는 태크의 **고유 동작을 중단시킨다.**

<br/>

### 참고링크

[이벤트 위임](https://ko.javascript.info/event-delegation)

[버블링과 캡처링](https://ko.javascript.info/bubbling-and-capturing)

[캡틴판교 - 이벤트 버블링, 이벤트 캡처 그리고 이벤트 위임까지](https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/)

<br/>

```toc

```

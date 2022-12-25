---
emoji: 🍭
title: Event Loop에 대해서
date: '2022-12-25 20:41:00'
author: JungSany
tags: blog gatsby JungLog log jung javascript event loop
categories: 개발지식 JavaScript
---

![EventLoop 이미지](https://miro.medium.com/max/2048/1*4lHHyfEhVB0LnQ3HlhSs8g.png)

`JS 엔진`은 **Memory Heap / Call Stack / Task Queue**로 구성되어 있으며, JS로 작성된 코드를 해석하고 실행하는 **인터프리터(프로그래밍 언어의 소스 코드를 바로 샐행하는 컴퓨터 프로그램 또는 환경)**다. JS는 단일 스레드(single thread)인데 즉, Call Stack이 한 개(single)라는 뜻이다.

(\* 가장 유명한 `JS 엔진`으로는 구글의 V8 Engine이 있다)

<br/>

### Memory Heap

- 메모리 할당이 일어나는 곳 (변수, 함수 등)

<br/>

### Call Stack

- 코드가 실행될 때 쌓이는 곳. **(stack : 자료구조 중 하나, 선입후출)**

<br/>

### Web API

- 브라우저에서 제공하는 API (DOM, Ajax, Timeout 등)
- Call Stack에서 실행된 비동기 함수는 Web API를 호출하고, Web API는 콜백함수를 Callback Queue 안에 넣는다.

<br/>

### Callback Queue

- 비동기적으로 실행된 콜백함수가 보관되는 곳 (setTimeout, addEventListener 등) **(Queue : 자료구조 중 하나, 선입선출)**

<br/>

### Event Loop

- Call Stack과 Callback Queue 상태를 체크하여, Callback이 빈 상태가 되면, Callback Queue의 첫번째 콜백을 Call Stack으로 넣는다.
  (이런 반복적인 작업을 틱(tick)이라 한다)

<br/>

### Event Loop 동작원리

1. **V8 엔진에서 코드가 실행되면, Call Stack이 쌓인다.**
2. **Stack의 선입후출의 룰에 따라 제일 마지막에 들어온 함수가 먼저 실행되며, Stack에 쌓여진 함수가 모두 실행된다.**
   - 비동기 함수가 실행되면 Web API 호출되고
   - Web API는 비동기 함수의 콜백함수를 Callback Queue에 넣는다.
   - Event Loop는 Call Stack이 빈 상태가 되면, Callback Queue에 있는 첫번째 콜백을 Call Stack으로 이동시킨다. (이러한 반복 작업을 `틱`이라 한다.)

### ⭐️ JS가 씽글(단일) 스레드지만 멀티 스레드처럼 보여지는 이유는, Web API∙Callback Queue∙Event Loop의 작동원리 때문이다.

<br/>

### 참고링크

[The event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)

[JavaScript 비동기 핵심 Event Loop 정리](https://medium.com/sjk5766/javascript-%EB%B9%84%EB%8F%99%EA%B8%B0-%ED%95%B5%EC%8B%AC-event-loop-%EC%A0%95%EB%A6%AC-422eb29231a8)

[Event Loop (이벤트 루프)](https://velog.io/@thms200/Event-Loop-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%A3%A8%ED%94%84)

<br/>

```toc

```

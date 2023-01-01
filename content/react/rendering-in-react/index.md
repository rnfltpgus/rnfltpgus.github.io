---
emoji: 🩹
title: React - Suspense, lazy에 대해 잠깐
date: '2023-01-01 15:33:00'
author: JungSany
tags: blog gatsby JungLog log jung react suspense lazy react18
categories: React
---

# React에서 렌더링이란?

**컴포넌트가 현재 props와 state의 상태에 기초하여 UI를 어떻게 구성할지 컴포넌트에게 요청하는 작업을 의미한다.**

<br/>

## 아래는 URL은 리엑트 렌더링을 이해하는데 도움이 되는 내글

- [React란? 그리고 사용하는 이유와 단점](https://rnfltpgus.github.io/react/react-use-reasons/)
- [Props와 State에 대해서](https://rnfltpgus.github.io/react/props-state/)

<br/>

## 렌더링을 만드는 방법

최초 렌더링이 끝난 이후에, 리액트가 리렌더링을 queueing 하는 방법에는 여러가지가 있다.

- **클래스 컴포넌트**
  - this.setState()
  - this.forceUpdate()
- **함수형 컴포넌트**
  - useState()의 setter
  - useReducer()의 dispatches

<br/>

### 일반적인 렌더링 동작

리액트의 기본적인 동작은 **부모 컴포넌트가 렌더링되면, 리액트는 모든 자식 컴포넌트를 순차적으로 리렌더링 한다**는 것이다.

풀어서 말하면 **컴포넌트를 렌더링 하는 작업은, 기본적으로, 하위에 있는 모든 컴포넌트 또한 렌더링 하게 된다.**

- 일반적인 렌더링의 경우, 리액트는 `props`가 변경되어 있는지 신경쓰지 않는다. 부모 컴포넌트가 렌더링되어 있기 때문에, 자식 컴포넌트도 무조건 리렌더링 된다. `(Diffing 알고리즘(Fiber 알고리즘), 휴리스틱 알고리즘)`
- 즉, 루트에서 `setState()`를 호출한다는 것은, 기본적으로 컴포넌트 트리에 있는 모든 컴포넌트를 렌더링 한다는 것을 의미한다.

<br/>

### 리액트 렌더링 규칙

1. 렌더링은 `순수`해야하고 `부수작용`이 없어야 한다.

- `console.log()`도 부수작업을 야기하지만, 어떠한 로직도 망가 뜨리지 않는다. 하지만 `prop`가 변경되는 것 또는 `렌더링 중간에 ajax 호출` 또한 **명백한 부수효과**이며, 이는 무언가를 로직을 망가 트릴 수 있다.
- 렌더링 로직이 할 수 없는 것
  - 존재하는 변수나 객체를 변경해서는 안된다.
  - `Math.random()`, `Date.now()`와 같은 랜덤 값을 생성할 수 없다.
  - 네트워크 요청을 할 수 없다.
  - `state`를 업데이트
- 렌더링 로직은 아래의 내용이 가능하다.
  - 렌더링 도중에 새롭게 만들어진 객체를 변경
  - 에러 던지기
  - 아직 만들어지지 않은 데이터를 lazy 초기화 하는 일(캐시 같은)

<br/>

## 참고링크

[리액트의 렌더링은 어떻게 일어나는가?](https://yceffort.kr/2022/04/deep-dive-in-react-rendering)

[The Rules of React](https://gist.github.com/sebmarkbage/75f0838967cd003cd7f9ab938eb1958f)

[](https://velog.io/@minbr0ther/React.js-Virtual-DOM-%EA%B0%80%EC%83%81-%EB%8F%94)

<br/>

```toc

```

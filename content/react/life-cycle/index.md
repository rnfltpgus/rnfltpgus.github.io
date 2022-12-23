---
emoji: 🏥
title: 컴포넌트의 생명주기(Life Cycle)
date: '2022-12-23 14:50:00'
author: JungSany
tags: blog gatsby JungLog log jung life cycle react 생명주기 수명 class function hooks
categories: React
---
# 🤯 보완예정

<br/>

# Life Cycle이란?

- `컴포넌트의 수명`은 페이지에 렌더링 되기 전인 **준비과정**에서 시작하여, **브라우저에 렌더링 및 업데이트** 후 페이지에서 **사라질 때** 끝난다.
- 컴포넌트는 `생성(mountion) → 업데이트(updating) → 제거(unmountion)의 생명주기`를 같는다.
- **클래스 컴포넌트**는 라이플 사이클 메서드를 사용하고, **함수형 컴포넌트**는 Hook을 사용한다.

  (라이프사이클 메소드는 **클래스 컴포넌트에서만 사용**. 함수형 컴포넌트 → Hooks 사용)

- 컴포넌트가 처음 렌더링 될 때, 어떤 작업을 처리해야하거나 컴포넌트를 업데이트하기 전후로 어떤 작업을 처리해야 할 수 도 있고, 불필요한 업데이트를 방지해야 할 수도 있다. 이러한 경우에 컴포넌트 **라이프사이클 메소드를 사용**한다.

<br/>

# Life Cycle의 구성

- 라이프 사이클은 총 3가지 카테고리로 구성 - **Mount**, **Update**, **Unmount**

- `will` 접두사 메소드 → 어떤 작업을 **작동하기 전**에 실행
- `Did` 접두사 메소드 → 어떤 작업을 **작동한 후**에 실행

<br/>

## 클래스 컴포넌트의 Life Cycle

![클래스 컴포넌트  Life Cycle](https://cdn.filestackcontent.com/ApNH7030SAG1wAycdj3H)

### Mount

- constructor : 컴포넌트의 생성자 메소드. `컴포넌트가 만들어지면 가장 먼저 실행`됨.
- getDerivedStateFromProps : `props로 받아온 것을 state에 넣어주고 싶을 때 사용`.
- render : `컴포넌트를 렌더링하는 메소드`
- componentDidMount : `컴포넌트의 첫번째 렌더링이 끝나면 호출되는 메소드`. 이 메소드가 호출되는 시점에서 우리가 만든 컴포넌트가 화면에 나타난 상태. (여기서 주로 D3, masonry 처럼 DOM을 사용해야하는 외부 라이브러리 연동을 하거나, 해당 컴포넌트에서 필요로하는 데이터를 요청하기 위해 axios, fetch 등을 이용하여 ajax 요청을 하거나, DOM의 속성을 읽거나 직접 변경하는 작업을 진행)

<br/>

### Update

- getDerivedStateFromProps : `컴포넌트의 props나 state가 바뀌었을때도 이 메소드가 호출`됨.
- ShouldComponenetUpdate : `컴포넌트가 리렌더링 할지 말지를 결정`
- render : mount와 상동
- getSnapshotBeforeUpdate : 컴포넌트에 변화가 일어나기 직전의 DOM 상태를 가져와서 특정 값을 반환하면, 그 다음 발생하게 되는 componentDidUpdate 함수에서 받아와서 사용할 수 있음.
- componentDidUpdate : `리렌더링을 마치고, 화면에 우리가 원하는 변화가 모드 반영되고 난 뒤 호출되는 메소드`. 3번째 파라미터로 getSnapshotBeforeUpdate에서 반환 값 조회 가능.

<br/>

### Unmount

- componentWillUnmount : `컴포넌트가 화면에서 사라지기 직전에 호출`

<br/>

## 함수 컴포넌트의 Life Cycle

![함수형 컴포넌트 Life Cycle](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbF6rTe%2FbtrEvNPPvFs%2FkfuXlK3dGF4bJUpKXQcjH1%2Fimg.png)

**함수 컴포넌트의 생명주기는** 컴포넌트가 호출이 되면 컴포넌트 내부에서 `return`을 통해 화면을 렌더링하고, 그 후 useEffect가 실행되는데, `useEffect()`를 통해서 `상태의 변경∙컴포넌트의 소멸 등`의 이벤트를 관리할 수 있다.

한개의 컴포넌트 내에서 한개 or 여러개를 선언하여 관리할 수 있다.

```jsx
useEffect(() => {}); // 렌더링 결과가 실제 돔에 반영될때 마다 호출
useEffect(() => {}, []); // 컴포넌트가 처음 나타날때 한 번 호출
useEffect(() => {}, [dependencies1, dependencies2, ...]); // 조건부 effect 발생, 의존성 중 하나가 변경된다면, 리렌더링이 일어난다.
```

<br/>

## Life Cycle에 대한 클래스∙함수 컴포넌트 비교

| **분류**   | **클래스형 컴포넌트**  | **함수형 컴포넌트**  |
| ---------- | ---------------------- | -------------------- |
| Mounting   | constructor()          | 함수형 컴포넌트 내부 |
| Mounting   | render()               | return()             |
| Mounting   | componentDidMount()    | useEffect()          |
| Updating   | componentDidUpdate()   | useEffect()          |
| UnMounting | componentWillUnmount() | useEffect()          |

<br/>

#### [Hooks 종류에 대해서](https://rnfltpgus.github.io/react/hooks-use/)

<br/>

# 참고링크

[React.Component - React](https://ko.reactjs.org/docs/react-component.html)

[react: Hooks](https://beta.reactjs.org/apis/react)

[A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)

[React Lifecycle Methods diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

[함수형 컴포넌트 생명주기(lifecycle) 이해하기](https://adjh54.tistory.com/43)

[[React.js] 리액트 라이프사이클(life cycle) 순서, 역할, Hook](https://velog.io/@minbr0ther/React.js-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%9D%BC%EC%9D%B4%ED%94%84%EC%82%AC%EC%9D%B4%ED%81%B4life-cycle-%EC%88%9C%EC%84%9C-%EC%97%AD%ED%95%A0)

[[React] 컴포넌트 생명주기 메서드](https://velog.io/@youngminss/React-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%83%9D%EB%AA%85%EC%A3%BC%EA%B8%B0-%EB%A9%94%EC%84%9C%EB%93%9C)

<br/>

```toc

```

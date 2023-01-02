---
emoji: 👊
title: Hooks의 React.memo과 useMemo 그리고 useCallback에 대해서
date: '2023-01-02 13:04:00'
author: JungSany
tags: blog gatsby JungLog log jung life cycle react hooks difference memo useMemo memoized high order components
categories: React
---

## 우선 Memoization이란?

**기존에 수행한 연산의 결과값을 어딘가에 저장해두고 동일한 입력이 들어오면 재활용하는 프로그래밍 기법 이다.**

`memoization`을 절적히 적용하면 **중복 연산을 피할 수 있기 때문에 메모리를 조금 더 쓰더라도 애플리케이션의 성능을 최적화**할 수 있습니다.

<br/>

## **그리고 React에서 컴포넌트를 다시 실행하는 경우는 아래와 같다.**

1. 부모 컴포넌트가 재실행될 때
2. props가 변경될 때
3. state가 변경되었을 때

<br/>

## **React.memo란?**

React.memo는 **High Order Components(HOC)** 이다.

일반 컴포넌트는 인자로 받은 props를 UI에 활용하는 반면, HOC는 인자로 받은 컴포넌트를 새로운 별도의 컴포넌트로 만든다.

HOC는 리액트의 API가 아니라, **리액트가 컴포넌트를 구성하는 데 있어서 일종의 패턴**이다.

```jsx
export const Movie = ({ title, description }) => {
  return (
    <div>
      <div>Movie title: {title}</div>
      <div>Release date: {description}</div>
    </div>
  );
};

export const MemoizedMovie = React.memo(Movie);
```

- **만약 `컴포넌트가 같은 props를 받을 때 같은 결과를 렌더링한다면` React.memo를 사용하여 `메모이징(Memoizing)된 내용`을 `재사용`하여, 불필요한 렌더링을 방지할 수 있다.**
- React.memo는 `오직 props가 변경됐는지 아닌지만 확인`한다. 하지만, 함수형 컴포넌트가 함수 내부에서 useState와 같은 Hook을 사용하고 있는 경우에는 상태가 변경 되면 리렌더링 된다.

### 사용은 언제 해야 될까?

같은 props로 렌더링이 자주 일어나는 컴퍼넌트에 대해서 사용하면 좋다고 한다. 잘 알지 못한 상태로 React.memo()를 적용하려고 한다면 필요없는 props 비교하는 상황이 생겨 오히려 성능을 악화시킬 수 있으니 잘 이해하고 쓰는 편이 좋을 것 같다.

<br/>

## **useMemo란?**

**useMemo는 메모이즈된 값을 return하는 Hook이다.**

**useMemo는 이전 값을 기억해두었다가 조건에 따라 재활용하여 성능을 최적화 하는 용도로 사용된다.**

```jsx
const Movie = ({ x, y }) => {
  const memoizedMemo = useMemo(() => compute(x, y), [x, y]);

  return <div>{memoizedMemo}</div>;
};
```

- 인자로 함수와 Dependencies를 넘겨 받는다. 의존 인자 중에 하나라도 값이 변경되면 1번째 인자의 함수가 재실행된다. 이를 통해 매 렌더링될 때마다 소요되는 불필요한 함수의 실행을 막을 수 있다.
- 인자가 빈 배열이라면 매번 새롭게 함수가 실행되어 return한다.

### 유의사항

모든 컴포넌트를 useMemo로 감싸게 되면 이 또한 리소스 낭비이므로, 퍼포먼스 최적화가 필요한 연상량이 많은 곳에 사용하는 것이 좋다.

<br/>

## **useCallback란?**

**`useCallback`은 특정 함수를 새로 만들지 않고 재사용하고 싶을 때 사용한다.**

**`함수를 메모이제이션하기 위해 사용`되는 hook 함수로**

**useMemo와의 차이는**

- `useMemo`는 특정 결과값을 재사용할 때 사용하는 반면, `useCallback`은 특정 함수를 새로 만들지 않고 재사용하고 싶을 때 사용한다는 점이 차이이다.

### 사용방법은

첫번째 인자로 넘어온 함수를, 두번쨰 인자로 넘어온 배열 내의 값이 변경될때까지 저장해 놓고 재사용할 수 있게 해준다.

```jsx
const memoizedCallback = useCallback(함수, 배열);
```

예를 들어, 어떤 React 컴포넌트 함수 안에 함수가 선언이 되어 있다면 그 함수는 해당 컴포넌트가 랜더링될 때 마다 새로운 함수를 생성하게 되는데

```jsx
const add = () => x + y;
```

`useCallback()`을 사용하면, 해당 컴포넌트가 랜더링되더라도 그 함수가 의존하는 값들이 바뀌지 않는 한 기존 함수를 계속해서 반환한다.

즉, `x` 또는 `y` 값이 바뀌면 새로운 함수가 생성되어 `add` 변수에 할당되고, `x` 와 `y` 값이 동일하다면 다음 랜더링 때 이 함수를 재사용한다.

<br/>

## 잡썰

1. 성능에 관한 최적화를 하는 함수라고 하여도 아무떄나 사용하는 것이 아닌 코드적으로 이용을 하여 `성능적인 퍼포먼스를 낼 수 있는가를 생각해 보아야 된다`는 것을 알게 되었다.
2. `useCallback()` hook 함수는 자식 컴포넌트의 랜더링의 불필요한 랜더링을 줄이기 위해서 `React.memo()` 함수와 같이 사용하면 좋다는 글을 보았는데 이 부분은 경험을 해보아야 느껴질 것 같다.

<br/>

## 참고링크

[wikipedia- Memoization](https://en.wikipedia.org/wiki/Memoization)

[React.memo() 현명하게 사용하기](https://ui.toast.com/weekly-pick/ko_20190731)

[React Hooks: useMemo 사용법](https://www.daleseo.com/react-hooks-use-memo/)

[React Hooks: useCallback 사용법](https://www.daleseo.com/react-hooks-use-callback/)

<br/>

```toc

```

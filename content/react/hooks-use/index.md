---
emoji: 🛒
title: Hooks의 종류
date: '2022-12-23 17:40:00'
author: JungSany
tags: blog gatsby JungLog log jung life cycle react hooks
categories: React
---

## Hooks이 나온 이유

- 기존의 클래스 문법에서 사용하였던 라이프사이클 메서드 기반은 `관련 없는 로직이 섞여 코드가 작성되는 경우가 있었고 그로 인해서 버그가 쉽게 발생하고, 무결성을 해치는 경우가 많았다.` 때문에 `로직 기반으로` 나눌 수 있고 컴포넌트를 함수 단위로 잘게 쪼갤 수 있는 `React Hooks`가 나와 함수 컴포넌트로 작성하게 되었다.

- **Hooks을 이용하기 위해서는**
  - `최상위`에서만 호출해야하며, `반복문・조건문・중첩된 함수` 내에서 Hook을 실행하면 안 된다.
- 이 규칙을 따르면 컴포넌트가 렌더링될 때마다 동일한 순서로 호출되는 것을 보장할 수 있다.

<br/>

### useState

- 상태를 변수로 선언하여 관리하며, 상태의 불변성을 유지한 채 상태를 변경할 수 있도록 도와준다.
- [state, setState]의 인자로는
  - state: 상태의 `현재 값이 표현`되고 초기에는 사용자가 제공한 초기 상태로 설정되어 표현
  - setState: 상호 작용에 따라 다른 값으로 변경

```jsx
const [state, setState] = useState(initialState);
```

<br/>

### useEffect

- 컴포넌트 내에 `변화가 발생했을 경우`에 실행되는 메서드
- 화면에 렌더링이 완료된 후에 수행된다.
- useEffect(function, ...dependencies?);
  - function : useEffect가 수행될 때 실행되는 함수
  - deps [optional] : 배열 형태이며, 의존(dependency) 값을 의미
- useEffect안에서의 return은 `정리 함수(clean-up)`를 사용하기위해 쓰여집니다.
  - 메모리 누수 방지를 위해 UI에서 컴포넌트를 제거하기 전에 수행한다.
  - 컴포넌트가 여러 번 렌더링 된다면 다음 effect가 수행되기 전에 이전 effect가 정리된다.

```jsx
useEffect(() => {}); // 렌더링 결과가 실제 돔에 반영될때 마다 호출
useEffect(() => {}, []); // 컴포넌트가 처음 나타날때 한 번 호출
useEffect(() => {}, [dependencies1, dependencies2, ...]); // 조건부 effect 발생, 의존성 중 하나가 변경된다면, 리렌더링이 일어난다.
```

<br/>

### useRef

- useState는 상태의 값이 변하면 렌더링이 일어나지만, useRef는 상태의 값이 변하더라도 렌더링을 일으키지 않는다.
- **특정 DOM 요소에 접근할때** 사용하는 편이며, `.current` 프로퍼티로 전달된 인자로 초기화된 변경 가능한 ref 객체를 반환한다.
  (JavaScript의 Document.querySelector와 비슷한 기능)
- 반환된 객체는 컴포넌트의 전 생애주기를 통해 유지된다.

```jsx
const refContainer = useRef(null);
```

<br/>

### useMemo

- 메모이제이션된 값을 반환한다.
- 이미 연산 된 값을 리렌더링 시 다시 계산하지 않도록 한다.
- 의존성이 변경되었을 때에만 메모이제이션된 값만 다시 계산한다.
- 의존성 배열이 없는 경우 매 렌더링 때마다 새 값을 계산한다.

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

<br/>

### useCallback

- 메모이제이션된 콜백을 반환한다.
- useMemo와 유사하게 이용되며, '함수'에 적용해준다.
- 의존성이 변경되었을때만 변경된다. 그렇기 때문에 특정 함수를 새로 만들지 않고 재사용가능하게 한다.

```jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

<br/>

### useContext

- Context API를 통해 만들어진 Context에서 제공하는 Value를 가져올 수 있다.
- 컴포넌트에서 가장 가까운 <MyContext.Provider>가 갱신되면 이 Hook은 그 MyContext provider에게 전달된 가장 최신의 context value를 사용하여 렌더러를 트리거 한다.

```jsx
const value = useContext(MyContext);
```

<br/>

### useReducer

- useState의 대체 함수로 컴포넌트 상태 업데이트 로직을 컴포넌트에서 분리시킬 수 있다.
- 컴포넌트 바깥에 로직을 작성할 수 도 있고, 심지어 다른 파일에 작성한 후 불러와서 사용할 수도 있다.
- reducer란 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수이다.

```jsx
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

<br/>

# 참고링크

[React.Component - React](https://ko.reactjs.org/docs/react-component.html)

[react: Hooks](https://beta.reactjs.org/apis/react)

[별코딩 훅에 대해서](https://www.youtube.com/@starcoding/videos)

<br/>

```toc

```

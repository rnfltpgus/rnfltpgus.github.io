---
emoji: 🥊
title: Props VS State
date: '2022-12-19 16:20:00'
author: JungSany
tags: blog gatsby JungLog log jung react props state
categories: React
---

- **Props VS State**
  - `두 객체 모두 렌더링 결과물`에 영향을 주는 정보를 가지고 있다.
  - **`Props`는 (함수 매개변수처럼) 컴포넌트에 전달되는 반면**
  - **`State`는 (함수 내에 선언된 변수처럼)컴포넌트 안에서 관리한다.**

|                                                  | props | state |
| ------------------------------------------------ | ----- | ----- |
| 상위 구성 요소에서 초기 값을 가져올 수 있습니까? | 예    | 예    |
| 상위 컴포넌트로 변경할 수 있습니까?              | 예    | 아니  |
| Component 내에서 기본값을 설정할 수 있습니까?    | 예    | 예    |
| Component 내부에서 변경할 수 있습니까?           | 아니  | 예    |
| 자식 컴포넌트의 초기값을 설정할 수 있습니까?     | 예    | 예    |
| 자식 구성 요소에서 변경할 수 있습니까?           | 예    | 아니  |

<br/>

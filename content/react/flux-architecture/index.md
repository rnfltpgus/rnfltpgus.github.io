---
emoji: ⚡️
title: Flux Architecture
date: '2022-12-22 21:20:00'
author: JungSany
tags: blog gatsby JungLog log jung react 리엑트 단방향 아키텍처 flux architecture
categories: 개발지식 React
---

![Flux Architecture 이미지](https://facebook.github.io/flux/img/overview/flux-simple-f8-diagram-with-client-action-1300w.png)

- `대규모 어플리케이션`에서 보다 일관된 데이터 관리를 위해 고안된 아키텍처 방식
- 기존에 보편적으로 사용된 MVC 패턴의 사용 시, 데이터 흐름의 복잡도가 올라가는 문제가 발생하였고, `단방향으로 데이터가 흐를 수 있는 설계`를 고안하였고, 이것이 Flux 아키텍처이다.
- Flux 흐름
  - Action은 버튼을 누르는 것과 사용자 액션에 대한 이벤트 이름이다.
  - Dispatcher는 Action에서 발생한 이벤트 이름에 따라 처리할 값들을 Store에 보낼 수 있다.
  - Store는 데이터가 저장되어 있는 저장소로 Disspatcher에서 받은 행동에 따라 데이터를 핸들링한다.
  - View에서는 Store에서 핸들링한 데이터를 받는다. 그리고 Action을 통해 이벤트를 발생시키는데, 데이터는 전달하지 않는다.

<br/>

### 참고링크

[Flux: An Application Architecture for React - React Blog](https://reactjs.org/blog/2014/05/06/flux.html)

[In-Depth Overview | Flux](https://facebook.github.io/flux/docs/in-depth-overview/)

<br/>

```toc

```

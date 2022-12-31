---
emoji: 🌃
title: 가변 그리드(Fluid Grid)란?
date: '2022-12-31 14:53:00'
author: JungSany
tags: blog gatsby JungLog log jung responsive wep 반응형 웹 미디어 쿼리 media query fluid grid 가변 그리드
categories: 개발지식 ResponsiveWep
---

# Fluid Grid 란?

## 우선 그리드 시스템 (grid system)이란?

**화면을 `몇 개의 칼럼(column)으로 나누어` 요소를 배치하도록 하는 시스템으로 `그리드 시스템은` 화면을 단순하게 만들면서 동시에 `배열을 규칙적`으로 할 수 있다는 장점이 있다.**

<br/>

## 그리고 고정 그리드 레이아웃 (fixed grid layout)

![고정 그리드 레이아웃 이미지](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FzmjS5%2FbtqS1U0NGcj%2FoCRGVY07pHBuoYKq3yshd0%2Fimg.png)

말 그대로 **`그리드의 너비`를 `픽셀(px)`로 고정하는 것을 의미한다.**

예를 들어 그리드의 너비를 360px로 입력하였다면 화면의 크기와 상관없이 해당 그리드는 너비 360px을 유지한다.

위의 그림처럼 `고정 그리드 레이아웃을 이용하는 경우`, 다양한 기기를 사용하는 현대 사회에서 `사용자의 사용감`을 떨어틀일 수 있다.

<br/>

## 그래서 가변 그리드 레이아웃 (fluid grid layout)이란?

![가변 그리드 레이아웃 이미지](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FyXiEn%2FbtqSWajiPG2%2Fsl2zY4HFzvIy7YFE80Nzo0%2Fimg.png)

**`백분율(%)`을 이용하여 화면 너비에 대해 각 그리드의 너비 비율을 정하고, 화면의 크기 변화에 따라 그리드의 크기를 같이 변하게 할 수 있다.**

때문에 고정 그리드 레이아웃에서 사용자의 사용감을 떨어트리는 요소를 가변 그리드 레이아웃을 사용한다면 해결할 수 있다.

<br/>

## 그리드의 구성요소

### 열(Columns)

![반응형 그리드의 열 이미지](https://miro.medium.com/max/720/1*hw8EKWA-DNytrtbzgZ_dEw.webp)

`열`은 가상의 세로 블록이며 내용을 정렬하는 데 사용되며, `열 너비`는 백분율(%) 또는 고정 값으로 정의한다.

<br/>

### 홈통(Gutters)

![반응형 그리드의 여백 이미지](https://miro.medium.com/max/720/1*g6wW06_XWFP66TAMgNj_2Q.webp)

`홈통`은 기둥 사이의 공간을 말하며, `여백`은 콘텐츠를 분리하는데 도움이 된다.

거터 너비를 고정 값으로 정의한다.

<br/>

### 여백(Margins)

![반응형 그리드의 측면 및 유연한 여백](https://miro.medium.com/max/720/1*dED87P84Mwaj9bXzV7-AZQ.webp)

`여백(Margin)`은 콘텐츠와 화면 가장자리 사이의 공간으로 `측면 여백 너비`는 모든 화면 크기에서 최소 호흡 공간을 결정하는 고정 값으로 정의한다.

`유연한 여백`은 기둥, 거터, 측면 여백으로 그리드를 `구성한 후 남은 공간을 차지`한다.(다양한 화면 크기에 따라 변경)

<br/>

## 열구조(Column Structure)

![8/12/16/20 기둥 그리드 구조](https://miro.medium.com/max/720/1*1nOZBG-lZSgQ84Mv5vlV7A.webp)

**그리드를 구성하는 데 사용되는 열의 수**를 `열 구조`라고 하는데, `8, 12, 16 및 20은 반응형 레이아웃을 위한 가장 일반적인 열 구조` 중 일부이다.

**보통 그리드의 열의 수는 프로젝트의 설계 요구 사항에 따라 정해진다.**

보통은 `12열 구조`가 가장 민첩한데 그 이유는? **4–4–4 또는 3–3–3–3 크기의 상위 컨테이너에 콘텐츠를 정렬하기 위해 더 세분화할 수 있기 때문이다.**

<br/>

## 중단점(Breakpoint)

![그리드 스케일링 및 스태킹](https://miro.medium.com/max/720/1*hxYymw2qjJkftPjKOdqSjw.webp)

가능한 최상의 레이아웃 보기여 주기 위해 조정되는 화면 크기의 `특정 범위`를 말한다.

열 구조, 열 너비, 거터 너비 및 여백은 중단점에 따라 다르다.

상위 컨테이너는 서로 다른 중단점에 따라 쌓이거나 확장되어 최상의 보기를 위해 재조정된다.

작은 화면에 내용에 맞게 사용 가능한 공간이 충분하면 열 크기가 조정되어 축소된다. 콘텐츠가 작은 화면의 사용 가능한 공간에 맞지 않으면 열이 세로로 쌓인다.

<br/>

## 참고링크

[Responsive Grid Design: Ultimate Guide](https://medium.muz.li/responsive-grid-design-ultimate-guide-7aa41ca7892)

[반응형 시스템 정리 - 중단점 (미디어 쿼리)](https://inpa.tistory.com/entry/BOOTSTRAP-%F0%9F%93%9A-%EB%B0%98%EC%9D%91%ED%98%95-%EC%8B%9C%EC%8A%A4%ED%85%9C-%EC%A0%95%EB%A6%AC-%EC%A4%91%EB%8B%A8%EC%A0%90)

[W3.CSS Responsive Fluid Grid](https://www.w3schools.com/w3css/w3css_grid.asp)

[반응형 웹 만들기 1 - 고정 그리드 레이아웃 VS 가변 그리드 레이아웃](https://language-money.tistory.com/47)

<br/>

```toc

```

---
emoji: 🏗️
title: Semantic Markup 이란?
date: '2022-12-23 21:11:00'
author: JungSany
tags: blog gatsby JungLog log jung semantic markup 시멘틱 마크업
categories: 개발지식
---

**시맨틱(Semantic)이란 ‘의미론적인'의 뜻을 가지며 마크업(Markup)이란 HTML 태그로 문서를 작성하는 것을 말함**

<br/>

## 시멘틱 마크업이란?

**의미를 잘 전달하도록 문서를 작성하는 것을 말함**

![시멘틱 마크업 예시 - 1](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbI9UPv%2Fbtrc8hXFHt1%2FVBEgspsee8UWIQMqJTZEJ1%2Fimg.png)

![시멘틱 마크업 예시 - 2](https://blog.kakaocdn.net/dn/qpLEl/btrdffRp9SN/E9Z5l2D9U0IaI6uMxTlJ9k/img.png)

<br/>

## 잘 구성하기 위해서는?

**각 태그가 그 용도에 맞게 사용되어야 한다.**

- 헤더/푸터에 `<header>`와 `<footer>` 사용
- 메인 컨텐츠에 `<main>`과 `<section>` 사용
- 독립적인 컨텐츠에 `<article>` 사용
- 최상위 제목으로 `<h1>` 사용
- 순서가 없는 목록으로 `<ul>`과 `<li>` 사용
- 내비게이션에 `<nav>`사용
  - 예를 들어, 동일한 효과를 부여하는 `<strong>`과 `<b>` 태그가 있다.
  - 둘은 동일하게 글자색을 진하게 하지만 `<b>` 태그의 경우는 그 자체가 "bold"의 약어이기 때문에 태그 자체가 스타일을 가진다고 할 수 있다.
  - 하지만 `<strong>`의 경우에는 "그 안의 내용이 다른 내용보다 더 강조되어야 한다"라는 의미를 가지기 때문에 시맨틱 마크업에 더 적합하다.

<br/>

## 시맨틱 마크업이 잘 이루어 진다면?

- 검색엔진이 시맨틱 태그를 중요한 키워드로 간주하기 때문에 **검색엔진 최적화(SEO)에 유리하다.**
- **웹 접근성** 측면에서, 시각장애가 있는 사용자로 하여금 그 의미를 훨씬 잘 파악할 수 있다.
- 단순한 div, span으로 둘러싸인 요소들보다 코드를 볼 때 **가독성이 좋다.**

<br/>

```toc


```

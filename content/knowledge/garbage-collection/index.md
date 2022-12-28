---
emoji: 🗑️
title: 가비지 컬렉터(garbage collector)에 대해서
date: '2022-12-28 16:48:00'
author: JungSany
tags: blog gatsby JungLog log jung javascript V8 engine google web chrome garbage collector
categories: JavaScript 개발지식
---

# 가비지 컬렉터란?

- `자바스크립트 엔진이 내부적으로 사용하는 메모리 관리 시스템아다.`
- 자바스크립트는 우리가 사용하지 않는 값들에 대한 메모리 영역을 주기적으로 정리하고 불필요한 메모리 사용이 없도록 **`Garbage Collection`이라는 자동 메모리 관리방법을 통하여 관리한다.**
- 성능에 예민한 상황에서 작업하는 경우를 제외하고, 일상반적인 상황에서는 `Garbage Collection`에 대해 크게 신경 쓰는 경우는 없다.
- 하지만 이런 자동 메모리 관리는 잠재적 혼란의 원인을 일으키는 경우도 있다.

<br/>

## 특징

- **`클로저는 성능 관련 이슈나 메모리 누수의 가장 흔한 원인`이다.**
- 생성된 함수가 주변 환경에 대한 값을 지속적으로 사용하고 있을 수 있으므로, `Garbage Collection에 의해 정리되지 않습니다.`

<br/>

## 참고링크

[트리 쉐이킹(Tree Shaking)](https://rnfltpgus.github.io/knowledge/treeshaing/)

[MDN - 자바스크립트의 메모리 관리](https://developer.mozilla.org/ko/docs/Web/JavaScript/Memory_Management)

[가비지 컬렉션 - 모던 JavaScript 튜토리얼](https://ko.javascript.info/garbage-collection)

<br/>

```toc

```

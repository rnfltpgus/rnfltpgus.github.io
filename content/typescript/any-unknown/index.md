---
emoji: 🐒
title: any와 unknown 차이
date: '2022-12-18 13:58:00'
author: JungSany
tags: blog gatsby JungLog log jung typescript any unknown
categories: TypeScript
---

### any

- any의 사전적인 의미는 `어떤 것이든지, 누구든지` 입니다.
- TypeScript에서는 `어떤 타입이든`으로 해석할 수 있습니다.
- 어떤 것이든지 허용하는 `any`는 엄격하게 타입을 검사하고 처리하는 TypeScript에서 치명적 입니다.
- **개발 당시에는 문제가 없으나 개발 후 예기치 못한 문제가 발생할 가능성이 매우 높다.**

<br/>

### unknown

- unknown의 사전적인 의미는 `알 수 없다, 모른다` 입니다.
- unknown도 any와 `동일하게 모든 값을 허용`하지만, `할당된 값이 어떤 타입인지 모르기 때문에` 함부로 `프로퍼티나 연산을 할 수 없습`니다.
- unknown 타입으로 변수를 정의하면 컴파일러에게 변수의 타입이 unknown이라 어떤 값이든 올 수 있다.
- 그래서 `엄격하게 검사해라 라고 요청하는 것과 동일`하다.
- 체크를 해야 되는 코드는 많아지겠지만, `사전에 문제가 되는 부분을 방지할 수 있으므로 any 타입에 비해 안정적인 애플리케이션을 개발할 수 있습니다.`
- **any와 다르게 프로퍼티 또는 연산을 하는 경우 컴파일러가 체크하기 때문에 문제가 되는 코드를 미리 예방할 수 있다.**

<br/>

```toc

```
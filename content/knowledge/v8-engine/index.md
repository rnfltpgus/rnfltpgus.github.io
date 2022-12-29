---
emoji: 🌐
title: V8 JavaScript engine에 대해서
date: '2022-12-28 16:06:00'
author: JungSany
tags: blog gatsby JungLog log jung javascript V8 engine google web chrome
categories: JavaScript 개발지식
---

# V8 JavaScript engine이란?

**C++로 작성된 Google의 오픈 소스 고성능 JavaScript 및 WebAssembly 엔진이다.**

**Chrome 및 Node.js 등에서 사용된다.**

**V8과 다른 엔진의 가장 큰 차이점은 V8 엔진의 `JIT(Just In Time)` 컴파일러다.**

<br/>

## JIT-C(Just In Time Compiler)

![JIT 이미지](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb2Jzmc%2Fbtq56j9e47D%2FNPkxYsJWSRNgS7OrsGc9mK%2Fimg.png)

**일반적인 Compiler 방식에는 `동적 컴파일(interpreter)`과 `정적 컴파일(Compiler)`이 있다.**

**`JIT(Just In Time)은`** 이 두개의 컴파일 방식을 합친 것으로 실행시점에서 인터프리터 방식으로 바이트 코드를 생성한다.

그 후 **`V8 Engine은`** 바이트 코드를 기계어 코드로 만들고, 그 코드를 캐싱하여, 같은 함수가 여러 번 불릴 때 매번 기계어 코드를 생성하는 것을 방지한다.

<br/>

## V8의 컴파일 과정

![V8의 컴파일 과정 이미지](https://miro.medium.com/max/700/1*F0lz3L4l9n6W-O2ivkvjtg.jpeg)

1. Blink에서 `script 태그`를 만나면, Javascript 스트리밍을 시작한다.
2. 스트리밍으로 전달 받은 UTF-16 문자열은 Scanner를 이용해 Token(let, for)을 생성한다.
3. 생성된 Token을 가지고, Parser가 추상 구문 트리 (AST)를 만든다.
4. 만들어진 AST는 Ignition(Compiler)에서 Byte Code로 컴파일한다.
5. 컴파일된 Byte Code를 실행함으로써 원하는 Javascript 동작이 실행된다.

<br/>

## 용어사전

**인터프리터(interpreter)** : 한줄읽고 실행하는 방식으로, 동일한 동작을 하는 함수가 여러번 나오더라도 이를 컴파일 하는 과정을 거치게 한다. 따라서 이는 `매우 비효율적`이다. 하지만 `디버깅에 유리`할 수 있다. `V8`은 `JIT Compiler`을 지원하는데 인터프리터 방식의 비효율적인 방법을 방지하게 만든다.

**컴파일러(compiler)** : 특정 프로그래밍 언어로 쓰여 있는 문서를 다른 프로그래밍 언어로 옮기는 언어 번역 프로그램으로 코드를 실행하기 전에 소스코드 전체를 컴파일 한다. 이는 개발 편의성은 떨어지지만, 실행 속도는 높을 수 있다.

**JIT 컴파일(just in time compilation) 또는 동적 번역(dynamic translation)** : 프로그램을 실제 실행하는 시점에 기계어로 번역하는 컴파일 기법이며, V8 엔진에서 기용하는 기법

**AST(Abstract Syntax Tree)** : 프로그래밍 언어로 작성된 소스 코드의 추상 구문 구조의 트리로, 각 노드는 소스 코드에서 발생되는 구조를 나타낸다.

**TurboFan JIT Compiler** : 바이트 코드를 실행하면서 Profiler는 최적화(Optimizes)가 가능한 부분을 찾아서 기록해둔다. (**자주 쓰이는 변수나 함수, 최적화 방법으로는** `히든 클래스`, `인라인 캐싱`이 있다.)

<br/>

## 참고링크

[V8](https://v8.dev/)

[Firing up the Ignition interpreter](https://v8.dev/blog/ignition-interpreter)

[V8 Engine에 대해서....(메모리구조, 컴파일방식)](https://hwan-shell.tistory.com/343)

[자바스크립트 성능의 비밀 (V8과 히든 클래스)](https://ui.toast.com/posts/ko_20210909)

[BlinkOn 6 Day 1 Talk 2: Ignition - an interpreter for V8](https://youtu.be/r5OWCtuKiAk)

[V8 에서 Javascript 코드를 실행하는 방법 정리해보기](https://pks2974.medium.com/v8-%EC%97%90%EC%84%9C-javascript-%EC%BD%94%EB%93%9C%EB%A5%BC-%EC%8B%A4%ED%96%89%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-%EC%A0%95%EB%A6%AC%ED%95%B4%EB%B3%B4%EA%B8%B0-25837f61f551)

[🚀 Visualizing memory management in V8 Engine (JavaScript, NodeJS, Deno, WebAssembly)](https://deepu.tech/memory-management-in-v8/)

[가비지 컬렉션 - 모던 JavaScript 튜토리얼](https://ko.javascript.info/garbage-collection)

<br/>

```toc

```

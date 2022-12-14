---
emoji: ๐
title: V8 JavaScript engine์ ๋ํด์
date: '2022-12-28 16:06:00'
author: JungSany
tags: blog gatsby JungLog log jung javascript V8 engine google web chrome
categories: JavaScript ๊ฐ๋ฐ์ง์
---

# V8 JavaScript engine์ด๋?

**C++๋ก ์์ฑ๋ Google์ ์คํ ์์ค ๊ณ ์ฑ๋ฅ JavaScript ๋ฐ WebAssembly ์์ง์ด๋ค.**

**Chrome ๋ฐ Node.js ๋ฑ์์ ์ฌ์ฉ๋๋ค.**

**V8๊ณผ ๋ค๋ฅธ ์์ง์ ๊ฐ์ฅ ํฐ ์ฐจ์ด์ ์ V8 ์์ง์ `JIT(Just In Time)` ์ปดํ์ผ๋ฌ๋ค.**

<br/>

## JIT-C(Just In Time Compiler)

![JIT ์ด๋ฏธ์ง](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb2Jzmc%2Fbtq56j9e47D%2FNPkxYsJWSRNgS7OrsGc9mK%2Fimg.png)

**์ผ๋ฐ์ ์ธ Compiler ๋ฐฉ์์๋ `๋์  ์ปดํ์ผ(interpreter)`๊ณผ `์ ์  ์ปดํ์ผ(Compiler)`์ด ์๋ค.**

**`JIT(Just In Time)์`** ์ด ๋๊ฐ์ ์ปดํ์ผ ๋ฐฉ์์ ํฉ์น ๊ฒ์ผ๋ก ์คํ์์ ์์ ์ธํฐํ๋ฆฌํฐ ๋ฐฉ์์ผ๋ก ๋ฐ์ดํธ ์ฝ๋๋ฅผ ์์ฑํ๋ค.

๊ทธ ํ **`V8 Engine์`** ๋ฐ์ดํธ ์ฝ๋๋ฅผ ๊ธฐ๊ณ์ด ์ฝ๋๋ก ๋ง๋ค๊ณ , ๊ทธ ์ฝ๋๋ฅผ ์บ์ฑํ์ฌ, ๊ฐ์ ํจ์๊ฐ ์ฌ๋ฌ ๋ฒ ๋ถ๋ฆด ๋ ๋งค๋ฒ ๊ธฐ๊ณ์ด ์ฝ๋๋ฅผ ์์ฑํ๋ ๊ฒ์ ๋ฐฉ์งํ๋ค.

<br/>

## V8์ ์ปดํ์ผ ๊ณผ์ 

![V8์ ์ปดํ์ผ ๊ณผ์  ์ด๋ฏธ์ง](https://miro.medium.com/max/700/1*F0lz3L4l9n6W-O2ivkvjtg.jpeg)

1. Blink์์ `script ํ๊ทธ`๋ฅผ ๋ง๋๋ฉด, Javascript ์คํธ๋ฆฌ๋ฐ์ ์์ํ๋ค.
2. ์คํธ๋ฆฌ๋ฐ์ผ๋ก ์ ๋ฌ ๋ฐ์ UTF-16 ๋ฌธ์์ด์ Scanner๋ฅผ ์ด์ฉํด Token(let, for)์ ์์ฑํ๋ค.
3. ์์ฑ๋ Token์ ๊ฐ์ง๊ณ , Parser๊ฐ ์ถ์ ๊ตฌ๋ฌธ ํธ๋ฆฌ (AST)๋ฅผ ๋ง๋ ๋ค.
4. ๋ง๋ค์ด์ง AST๋ Ignition(Compiler)์์ Byte Code๋ก ์ปดํ์ผํ๋ค.
5. ์ปดํ์ผ๋ Byte Code๋ฅผ ์คํํจ์ผ๋ก์จ ์ํ๋ Javascript ๋์์ด ์คํ๋๋ค.

<br/>

## ์ฉ์ด์ฌ์ 

**์ธํฐํ๋ฆฌํฐ(interpreter)** : ํ์ค์ฝ๊ณ  ์คํํ๋ ๋ฐฉ์์ผ๋ก, ๋์ผํ ๋์์ ํ๋ ํจ์๊ฐ ์ฌ๋ฌ๋ฒ ๋์ค๋๋ผ๋ ์ด๋ฅผ ์ปดํ์ผ ํ๋ ๊ณผ์ ์ ๊ฑฐ์น๊ฒ ํ๋ค. ๋ฐ๋ผ์ ์ด๋ `๋งค์ฐ ๋นํจ์จ์ `์ด๋ค. ํ์ง๋ง `๋๋ฒ๊น์ ์ ๋ฆฌ`ํ  ์ ์๋ค. `V8`์ `JIT Compiler`์ ์ง์ํ๋๋ฐ ์ธํฐํ๋ฆฌํฐ ๋ฐฉ์์ ๋นํจ์จ์ ์ธ ๋ฐฉ๋ฒ์ ๋ฐฉ์งํ๊ฒ ๋ง๋ ๋ค.

**์ปดํ์ผ๋ฌ(compiler)** : ํน์  ํ๋ก๊ทธ๋๋ฐ ์ธ์ด๋ก ์ฐ์ฌ ์๋ ๋ฌธ์๋ฅผ ๋ค๋ฅธ ํ๋ก๊ทธ๋๋ฐ ์ธ์ด๋ก ์ฎ๊ธฐ๋ ์ธ์ด ๋ฒ์ญ ํ๋ก๊ทธ๋จ์ผ๋ก ์ฝ๋๋ฅผ ์คํํ๊ธฐ ์ ์ ์์ค์ฝ๋ ์ ์ฒด๋ฅผ ์ปดํ์ผ ํ๋ค. ์ด๋ ๊ฐ๋ฐ ํธ์์ฑ์ ๋จ์ด์ง์ง๋ง, ์คํ ์๋๋ ๋์ ์ ์๋ค.

**JIT ์ปดํ์ผ(just in time compilation) ๋๋ ๋์  ๋ฒ์ญ(dynamic translation)** : ํ๋ก๊ทธ๋จ์ ์ค์  ์คํํ๋ ์์ ์ ๊ธฐ๊ณ์ด๋ก ๋ฒ์ญํ๋ ์ปดํ์ผ ๊ธฐ๋ฒ์ด๋ฉฐ, V8 ์์ง์์ ๊ธฐ์ฉํ๋ ๊ธฐ๋ฒ

**AST(Abstract Syntax Tree)** : ํ๋ก๊ทธ๋๋ฐ ์ธ์ด๋ก ์์ฑ๋ ์์ค ์ฝ๋์ ์ถ์ ๊ตฌ๋ฌธ ๊ตฌ์กฐ์ ํธ๋ฆฌ๋ก, ๊ฐ ๋ธ๋๋ ์์ค ์ฝ๋์์ ๋ฐ์๋๋ ๊ตฌ์กฐ๋ฅผ ๋ํ๋ธ๋ค.

**TurboFan JIT Compiler** : ๋ฐ์ดํธ ์ฝ๋๋ฅผ ์คํํ๋ฉด์ Profiler๋ ์ต์ ํ(Optimizes)๊ฐ ๊ฐ๋ฅํ ๋ถ๋ถ์ ์ฐพ์์ ๊ธฐ๋กํด๋๋ค. (**์์ฃผ ์ฐ์ด๋ ๋ณ์๋ ํจ์, ์ต์ ํ ๋ฐฉ๋ฒ์ผ๋ก๋** `ํ๋  ํด๋์ค`, `์ธ๋ผ์ธ ์บ์ฑ`์ด ์๋ค.)

<br/>

## ์ฐธ๊ณ ๋งํฌ

[V8](https://v8.dev/)

[Firing up the Ignition interpreter](https://v8.dev/blog/ignition-interpreter)

[V8 Engine์ ๋ํด์....(๋ฉ๋ชจ๋ฆฌ๊ตฌ์กฐ, ์ปดํ์ผ๋ฐฉ์)](https://hwan-shell.tistory.com/343)

[์๋ฐ์คํฌ๋ฆฝํธ ์ฑ๋ฅ์ ๋น๋ฐ (V8๊ณผ ํ๋  ํด๋์ค)](https://ui.toast.com/posts/ko_20210909)

[BlinkOn 6 Day 1 Talk 2: Ignition - an interpreter for V8](https://youtu.be/r5OWCtuKiAk)

[V8 ์์ Javascript ์ฝ๋๋ฅผ ์คํํ๋ ๋ฐฉ๋ฒ ์ ๋ฆฌํด๋ณด๊ธฐ](https://pks2974.medium.com/v8-%EC%97%90%EC%84%9C-javascript-%EC%BD%94%EB%93%9C%EB%A5%BC-%EC%8B%A4%ED%96%89%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-%EC%A0%95%EB%A6%AC%ED%95%B4%EB%B3%B4%EA%B8%B0-25837f61f551)

[๐ Visualizing memory management in V8 Engine (JavaScript, NodeJS, Deno, WebAssembly)](https://deepu.tech/memory-management-in-v8/)

[๊ฐ๋น์ง ์ปฌ๋ ์ - ๋ชจ๋ JavaScript ํํ ๋ฆฌ์ผ](https://ko.javascript.info/garbage-collection)

<br/>

```toc

```

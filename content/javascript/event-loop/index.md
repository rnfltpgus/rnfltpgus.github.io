---
emoji: ๐ญ
title: Event Loop์ ๋ํด์
date: '2022-12-25 20:41:00'
author: JungSany
tags: blog gatsby JungLog log jung javascript event loop
categories: ๊ฐ๋ฐ์ง์ JavaScript
---

![EventLoop ์ด๋ฏธ์ง](https://miro.medium.com/max/2048/1*4lHHyfEhVB0LnQ3HlhSs8g.png)

**`JS ์์ง`์ Memory Heap / Call Stack๋ก ๊ตฌ์ฑ๋์ด ์์ผ๋ฉฐ, JS๋ก ์์ฑ๋ ์ฝ๋๋ฅผ ํด์ํ๊ณ  ์คํํ๋ ์ธํฐํ๋ฆฌํฐ(ํ๋ก๊ทธ๋๋ฐ ์ธ์ด์ ์์ค ์ฝ๋๋ฅผ ๋ฐ๋ก ์ํํ๋ ์ปดํจํฐ ํ๋ก๊ทธ๋จ ๋๋ ํ๊ฒฝ)๋ค.**

**JS๋ ๋จ์ผ ์ค๋ ๋(single thread)์ธ๋ฐ ์ฆ, Call Stack์ด ํ ๊ฐ(single)๋ผ๋ ๋ป์ด๋ค.**

**(๊ฐ์ฅ ์ ๋ชํ `JS ์์ง`์ผ๋ก๋ ๊ตฌ๊ธ์ V8 Engine์ด ์๋ค)**

<br/>

### Memory Heap

- ๋ฉ๋ชจ๋ฆฌ ํ ๋น์ด ์ผ์ด๋๋ ๊ณณ (๋ณ์, ํจ์ ๋ฑ)

<br/>

### Call Stack

- ์ฝ๋๊ฐ ์คํ๋  ๋ ์์ด๋ ๊ณณ. **(stack : ์๋ฃ๊ตฌ์กฐ ์ค ํ๋, ์ ์ํ์ถ)**

<br/>

### Web API

- ๋ธ๋ผ์ฐ์ ์์ ์ ๊ณตํ๋ API (DOM, Ajax, Timeout ๋ฑ)
- Call Stack์์ ์คํ๋ ๋น๋๊ธฐ ํจ์๋ Web API๋ฅผ ํธ์ถํ๊ณ , Web API๋ ์ฝ๋ฐฑํจ์๋ฅผ Callback Queue ์์ ๋ฃ๋๋ค.

<br/>

### Callback Queue

- ๋น๋๊ธฐ์ ์ผ๋ก ์คํ๋ ์ฝ๋ฐฑํจ์๊ฐ ๋ณด๊ด๋๋ ๊ณณ (setTimeout, addEventListener ๋ฑ) **(Queue : ์๋ฃ๊ตฌ์กฐ ์ค ํ๋, ์ ์์ ์ถ)**

<br/>

### Event Loop

- Call Stack๊ณผ Callback Queue ์ํ๋ฅผ ์ฒดํฌํ์ฌ, Callback์ด ๋น ์ํ๊ฐ ๋๋ฉด, Callback Queue์ ์ฒซ๋ฒ์งธ ์ฝ๋ฐฑ์ Call Stack์ผ๋ก ๋ฃ๋๋ค.
  (์ด๋ฐ ๋ฐ๋ณต์ ์ธ ์์์ ํฑ(tick)์ด๋ผ ํ๋ค)

<br/>

### Event Loop ๋์์๋ฆฌ

1. **V8 ์์ง์์ ์ฝ๋๊ฐ ์คํ๋๋ฉด, Call Stack์ด ์์ธ๋ค.**
2. **Stack์ ์ ์ํ์ถ์ ๋ฃฐ์ ๋ฐ๋ผ ์ ์ผ ๋ง์ง๋ง์ ๋ค์ด์จ ํจ์๊ฐ ๋จผ์  ์คํ๋๋ฉฐ, Stack์ ์์ฌ์ง ํจ์๊ฐ ๋ชจ๋ ์คํ๋๋ค.**
   - ๋น๋๊ธฐ ํจ์๊ฐ ์คํ๋๋ฉด Web API ํธ์ถ๋๊ณ 
   - Web API๋ ๋น๋๊ธฐ ํจ์์ ์ฝ๋ฐฑํจ์๋ฅผ Callback Queue์ ๋ฃ๋๋ค.
   - Event Loop๋ Call Stack์ด ๋น ์ํ๊ฐ ๋๋ฉด, Callback Queue์ ์๋ ์ฒซ๋ฒ์งธ ์ฝ๋ฐฑ์ Call Stack์ผ๋ก ์ด๋์ํจ๋ค. (์ด๋ฌํ ๋ฐ๋ณต ์์์ `ํฑ`์ด๋ผ ํ๋ค.)

### โญ๏ธ JS๊ฐ ์ฝ๊ธ(๋จ์ผ) ์ค๋ ๋์ง๋ง ๋ฉํฐ ์ค๋ ๋์ฒ๋ผ ๋ณด์ฌ์ง๋ ์ด์ ๋, Web APIโCallback QueueโEvent Loop์ ์๋์๋ฆฌ ๋๋ฌธ์ด๋ค.

<br/>

### ์ฐธ๊ณ ๋งํฌ

[The event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)

[JavaScript ๋น๋๊ธฐ ํต์ฌ Event Loop ์ ๋ฆฌ](https://medium.com/sjk5766/javascript-%EB%B9%84%EB%8F%99%EA%B8%B0-%ED%95%B5%EC%8B%AC-event-loop-%EC%A0%95%EB%A6%AC-422eb29231a8)

[Event Loop (์ด๋ฒคํธ ๋ฃจํ)](https://velog.io/@thms200/Event-Loop-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%A3%A8%ED%94%84)

<br/>

```toc

```

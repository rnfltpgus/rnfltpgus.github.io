---
emoji: ๐
title: any์ unknown ์ฐจ์ด
date: '2022-12-18 13:58:00'
author: JungSany
tags: blog gatsby JungLog log jung typescript any unknown
categories: TypeScript
---

## any

- any์ ์ฌ์ ์ ์ธ ์๋ฏธ๋ `์ด๋ค ๊ฒ์ด๋ ์ง, ๋๊ตฌ๋ ์ง` ์ด๊ณ ,
- TypeScript์์๋ `์ด๋ค ํ์์ด๋ `์ผ๋ก ํด์ํ  ์ ์๋ค.
- ์ด๋ค ๊ฒ์ด๋ ์ง ํ์ฉํ๋ `any`๋ ์๊ฒฉํ๊ฒ ํ์์ ๊ฒ์ฌํ๊ณ  ์ฒ๋ฆฌํ๋ TypeScript์์ ์น๋ช์ ์ด๋ค.
- **๊ฐ๋ฐ ๋น์์๋ ๋ฌธ์ ๊ฐ ์์ผ๋ ๊ฐ๋ฐ ํ ์๊ธฐ์น ๋ชปํ ๋ฌธ์ ๊ฐ ๋ฐ์ํ  ๊ฐ๋ฅ์ฑ์ด ๋งค์ฐ ๋๋ค.**

<br/>

## unknown

- unknown์ ์ฌ์ ์ ์ธ ์๋ฏธ๋ `์ ์ ์๋ค, ๋ชจ๋ฅธ๋ค` ์ด๋ค.
- unknown๋ any์ `๋์ผํ๊ฒ ๋ชจ๋  ๊ฐ์ ํ์ฉ`ํ์ง๋ง, `ํ ๋น๋ ๊ฐ์ด ์ด๋ค ํ์์ธ์ง ๋ชจ๋ฅด๊ธฐ ๋๋ฌธ์` ํจ๋ถ๋ก `ํ๋กํผํฐ๋ ์ฐ์ฐ์ ํ  ์ ์๋ค`.
- unknown ํ์์ผ๋ก ๋ณ์๋ฅผ ์ ์ํ๋ฉด ์ปดํ์ผ๋ฌ์๊ฒ ๋ณ์์ ํ์์ด unknown์ด๋ผ ์ด๋ค ๊ฐ์ด๋  ์ฌ ์ ์๋ค.
- ๊ทธ๋์ `์๊ฒฉํ๊ฒ ๊ฒ์ฌํด๋ผ ๋ผ๊ณ  ์์ฒญํ๋ ๊ฒ๊ณผ ๋์ผ`ํ๋ค.
- ์ฒดํฌ๋ฅผ ํด์ผ ๋๋ ์ฝ๋๋ ๋ง์์ง๊ฒ ์ง๋ง, `์ฌ์ ์ ๋ฌธ์ ๊ฐ ๋๋ ๋ถ๋ถ์ ๋ฐฉ์งํ  ์ ์์ผ๋ฏ๋ก any ํ์์ ๋นํด ์์ ์ ์ธ ์ ํ๋ฆฌ์ผ์ด์์ ๊ฐ๋ฐํ  ์ ์๋ค.`
- **any์ ๋ค๋ฅด๊ฒ ํ๋กํผํฐ ๋๋ ์ฐ์ฐ์ ํ๋ ๊ฒฝ์ฐ ์ปดํ์ผ๋ฌ๊ฐ ์ฒดํฌํ๊ธฐ ๋๋ฌธ์ ๋ฌธ์ ๊ฐ ๋๋ ์ฝ๋๋ฅผ ๋ฏธ๋ฆฌ ์๋ฐฉํ  ์ ์๋ค.**

<br/>

## ํ์ค ์ ๋ฆฌ

- ์ฐ์  `any`์ `unknown`์ **๋ชจ๋  ํ์์ ํ์ฉ**ํ๋ค๋ ์ ์์ ๊ฐ๋ค.
- ํ์ง๋ง ์ปดํ์ผ ํ์์ ํ๋กํผํฐ ๋๋ ์ฐ์ฐ์ ํ๋ ๊ฒฝ์ฐ, `any` ํ์์ ์๋ฌ๊ฐ ์ถ๋ ฅ๋์ง ์์ง๋ง `unknown`์ ๊ฒฝ์ฐ ํ์์ ์ฒดํฌํ๊ธฐ ๋๋ฌธ์ ๋ฌธ์ ๋๋ ์ฝ๋๋ฅผ ๋ฏธ๋ฆฌ ์๋ฐฉํ  ์ ์๋ค.

```toc

```

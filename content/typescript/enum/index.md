---
emoji: ๐
title: enum์ด๋?
date: '2022-12-17 20:27:00'
author: JungSany
tags: blog gatsby JungLog log jung typescript enum
categories: TypeScript
---

### enum์ด๋?

- ์ด๊ฑฐํ ๋ณ์๋ก ์ ์๋ฅผ ํ๋๋ก ํฉ์น  ๋ ํธ๋ฆฌํ ๊ธฐ๋ฅ
- ์์์ ์ซ์๋ ๋ฌธ์์ด์ ํ ๋นํ  ์ ์์ผ๋ฉฐ, ํ๋์ ์ ํ์ผ๋ก ์ฌ์ฉํด์ ๋ฒ๊ทธ๋ฅผ ์ค์ผ ์ ์์
- TypeScript๊ฐ ์์ฒด์ ์ผ๋ก ๊ตฌํํ๋ ๊ธฐ๋ฅ

```tsx
// ์๋ฌด๊ฒ๋ ์ง์ ํ์ง ์์ ๊ฒฝ์ฐ์๋ 0๋ถํฐ ์ซ์๋ฅผ ๋งค๊ธด๋ค.
enum MOBILE_OS {
  IOS, // 0
  ANDROID, // 1
}

// ์์์ ์ซ์๋ ๋ฌธ์์ด์ ํ ๋นํ  ์๋ ์๋ค.
enum MOBILE_OS {
  IOS = 'iOS',
  ANDROID = 'Android',
}

// ์๋์ ๊ฐ์ด ์ ํ์ผ๋ก ์ฌ์ฉํ  ์๋ ์๋ค.
const os: MOBILE_OS = MOBILE_OS.IOS;
function detectOSType(userAgent: string): MOBILE_OS {
  // ...
}
```

- JavaScript์์๋ ์ฌ์ฉํ  ์ ์๊ธฐ ๋๋ฌธ์ ์๋์ ๊ฐ์ด ๊ฐ์ฒด๋ฅผ ์ฌ์ฉํ๋ ์ฝ๋๋ฅผ ์์ฑํ๊ฒ ๋จ

```tsx
const MOBILE_OS = {
  IOS: 'iOS',
  ANDROID: 'Android',
};

console.log(MOBILE_OS.IOS); // iOS
```

- enum์ ํธ๋ฆฌํ ๊ธฐ๋ฅ์ด์ง๋ง TypeScript๊ฐ ์์ฒด์ ์ผ๋ก ๊ตฌํํ๊ธฐ ๋๋ฌธ์ Tree-shaking์ด ๋์ง ์๋๋ค.

<br/>

### ์ฐธ๊ณ ๋งํฌ

[TypeScript enum์ ์ฌ์ฉํ์ง ์๋ ๊ฒ ์ข์ ์ด์ ๋ฅผ Tree-shaking ๊ด์ ์์ ์๊ฐํฉ๋๋ค.](https://engineering.linecorp.com/ko/blog/typescript-enum-tree-shaking/)

<br/>

```toc

```

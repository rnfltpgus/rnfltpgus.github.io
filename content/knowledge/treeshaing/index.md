---
emoji: ๐งน
title: ํธ๋ฆฌ ์์ดํน(Tree Shaking)
date: '2022-12-09 18:30:00'
author: JungSany
tags: blog gatsby ํธ๋ฆฌ์์ดํน TreeShaking JungLog
categories: ๊ฐ๋ฐ์ง์ ์ต์ ํ
---

### ์ ์

- ์ ํ๋ฆฌ์ผ์ด์์ ํธ๋ฆฌ์ ๊ฐ ๋ธ๋๋ค ์ฆ, ์ผ์ข์ ๋๋ฌด์ ๊ฐ์ด ๋ณด๊ณ  ๋๋ฌด๋ฅผ ํ๋ค๋ฉด ์ฃฝ์ ์์ฌ๊ท๋ค์ด ๋จ์ด์ง๋ ๋ชจ์ต์ ์ฐฉ์ํด `Tree-shaking`์ด๋ผ๊ณ  ๋ช๋ชํ์๋ค๊ณ  ํ๋ค.
- ์ฌ์ฉํ์ง ์๋ ์ฝ๋๋ฅผ ์ ๊ฑฐํ๋ ๊ธฐ๋ฒ

<br/>

### ๋ฐฉ๋ฒ

1. **import์, ํ์ํ ๊ฒ๋ง ์์ฑํ์ฌ ์ฌ์ฉ**

- ์ฌ์ฉํ๋ ๋ชจ๋๋ก๋ถํฐ `์ ์ฒด๋ฅผ import ํ์ง์๊ณ  ์ฌ์ฉํ๋ ๊ธฐ๋ฅ๋ง {} ๋ถ๋ถ์ `์ผ๋ก `import` ํ๋ค.

```jsx
// ๋ชจ๋ค ์ ํธ์ ๊ฐ์ ธ์จ๋ค.
// import utils from '../tensorflow/utils';

// ์์ ๋ฐฉ๋ฒ์ฒ๋ผ ๋ชจ๋  ์ ํธ์ด ์๋ ์ ํธ์ ์ผ๋ถ๋ง ๊ฐ์ ธ์จ๋ค.
import { drawKeyPoints, drawSkeleton } from '../tensorflow/utils';

const drawCanvas = (pose, video, videoWidth, videoHeight, canvas, flag) => {
  const minPartConfidence = 0.7;
  const context = canvas.current.getContext('2d');

  canvas.current.width = videoWidth;
  canvas.current.height = videoHeight;

  drawSkeleton(pose.keypoints, minPartConfidence, context, flag);
  drawKeyPoints(pose.keypoints, minPartConfidence, context, flag);
};

export default drawCanvas;
```

<br/>

2. **Babel์ด ES6 ๋ชจ๋์ commonjs module๋ก ๋ณํํ์ง ์๋๋ก ์กฐ์น(.babelrc ์ค์ )**

- Babel์ ๋๋ถ๋ถ์ ์น ์ ํ๋ฆฌ์ผ์ด์์์ ํ์๋ก ์ฌ์ฉํ๋ ๋๊ตฌ ์ค ํ๋ ์ด์ง๋ง `babel-preset-env`๋ฅผ ์ฌ์ฉ์ค์ ์๋ค๋ฉด `ES6`๋ฅผ ์๋์ผ๋ก `commonjs`๋ก `๋ณํ`ํ๋ค.
- ์ข์ ๊ธฐ๋ฅ์ด์ง๋ง ํธ๋ฆฌ ์์ดํน ๊ด์ ์์๋ ๊ทธ๋ ์ง ๋ชปํ๋ค๊ณ  ํ๋ค.
- `.babelrc`์์ `commonjs`๋ก ๋ณํํ์ง ๋ชปํ๋๋ก ์ค์ ์ ์ถ๊ฐํด ์ค์ผํ๋ค.

```jsx
// โmodulesโ: false๋ฅผ ์ง์ ํ๋ฉด, Babel์ด ๋ํ๋์๋ฅผ ๋ถ์ํ๊ณ  ์ฌ์ฉ๋์ง ์๋ ๋ํ๋์๋ฅผ ์ ๊ฑฐํ  ์ ์๋ค.
{
  "presets": [
    ["env", {
      "modules": false
    }]
  ]
}
```

- ๋ํ ์์ ๊ฐ์ด ์ค์ ์ ํ๋ฉด ์นํฉ์ ์ฝ๋๋ฅผ ๊ด๋ฒ์ํ๊ฒ ํธํ๋๋ ํ์์ผ๋ก ๋ณํํ๋ฏ๋ก, ์ด ํ๋ก์ธ์ค๋ ํธํ์ฑ ๋ฌธ์ ๋ฅผ ์ผ์ผํค์ง ์๋๋ค๊ณ  ํ๋ค.

<br/>

3. **ํ๋ก์ ํธ์ ๋ชจ๋๋ค์ด Tree Shaking์, `Side Effect๋ฅผ ๋ฐ์์ํค๋์ง ์ฌ๋ถ๋ฅผ ํ์ธ`ํด์ผ ํ๋ค.(package.json ์ค์ )**

- ์์ธก ๊ฐ๋ฅํ ์๋ ฅ์ ๊ฐ์ง๊ณ  ๋์ผํ๊ฒ ํจ์์ ์ค์ฝํ ๋ฐ์ ์ด๋ค ๊ฒ๋ ๋ณ๊ฒฝํ์ง ์์ผ๋ฉด์ ์์ธก ๊ฐ๋ฅํ ๊ฒฐ๊ณผ๋ฅผ ๋ฐํํ๋ ๋ชจ๋์ด ์์ ํ๊ฒ ํธ๋ฆฌ์์ดํน ํ  ์ ์๋ Dependency์ด๋ค.
- ์ด๋ ๋งํ๋ `**Side Effect**`์ ์์๋ ์๋์ ๊ฐ์ด ์ค๋ชํ  ์ ์์ ๊ฒ ๊ฐ์ต๋๋ค.

```jsx
// ํจ์๊ฐ ํจ์๋ฐ์ ์ ์ธ๋ ๋ฌด์ธ๊ฐ๋ฅผ ๋ณ๊ฒฝํ  ๋, ์คํ์ ๋ํ Side Effect๊ฐ ์ผ์ด๋๋ค๊ณ ํ  ์ ์๋ค.
let sheriffs = ['jung', 'gim', 'gong'];

// ์ด๋ console์ ์ฐ์ผ๋ฉด ์์ ๋ฐฐ์ด์์ ์์๋ง ์ถ๋ ฅ๋๋ค. ["jung", "gim", "gong"]
console.log(sheriffs);

const addSheriff = (sheriff) => {
  sheriffs.push(sheriff);
};

// ์๋์ ํจ์๋ sheriffs์ ๋ฐฐ์ด์ ๋ณ๊ฒฝํ  ๋ Side Effect๋ฅผ ๋ฐ์์ํจ๋ค.
addSheriff('pack');

console.log(sheriffs); // ["jung", "gim", "gong", "pack"]
```

- ์ด๋ ์นํฉ์ ์ค์ ํ์ฌ `Side Effect ์ต์ ์ฒดํน`์ด ๊ฐ๋ฅํ๋ค.

```json
// "sideEffects": false๋ฅผ ์ค์ ํ๋ฉด ํจํค์ง์ Dependency๋ค์ด Side Effect๋ฅผ ๋ฐ์ํ์ง ์๊ฒ ๋ง๋๋ค.
// Side Effect๊ฐ ์ผ์ด๋๋ ๊ฒ์ ๋ํด์ ์นํฉ์์ ํ๋จํ์ง์๊ณ  ๊ฐ๋ฐ์๊ฐ ์์๋ฐ์ ๊ฐ๋ฐ์๊ฐ ์์์ ์ฒ๋ฆฌํ๋ ๋ฐฉ์
{
    "name": "poke_poke_coaching",
    "version": "1.0.0",
    "sideEffects": false
}

// ํน์  ํ์ผ์ ์ง์ ํ์ฌ ์ ํ์ ์ผ๋ก ์ฌ์ด๋ ์ดํํธ์ ์ํฅ์ ๋ฐ์ง ์๋๋ก ์ค์ 
{
    "name": "poke_poke_coaching",
    "version": "1.0.0",
    "sideEffects": [
        ".src/util/helpers/drawCanvas.js"
    ]
}
```

<br/>

### ์๊ฐ

- ์ด๋ฌํ ์์๋ค์ด ์๋น์ค ๊ฐ๋ฐ ๋จ๊ณ์ ์์ด์ ํฐ ์ํฅ์ ๋ฏธ์น์ง ์๊ฒ ์ง๋ง, ์ด๋ฐ ๋ํ์ผํ ์์๋ค์ด ์ต๊ดํ ๋๋ค๋ฉด ๊ฒฐ๊ตญ ์๋น์ค์ ํ๋ฆฌํฐ๋ฅผ ๊ฒฐ์ ํ๋ ์์๋ผ๊ณ  ์๊ฐํ๋ค.
- ํ์ง๋ง ์์ ๋ฐฉ๋ฒ์ผ๋ก ์ธํด ๋ฌธ์ ๊ฐ ์๊ธฐ๋ ๊ฒฝ์ฐ๊ฐ ์๋๊ฐ์ ๋ํด์๋ ๋ ์ฐพ์๋ด์ผ ํ  ๊ฒ ๊ฐ๋ค.
- ๊ทธ๋ฆฌ๊ณ  ๋ก๋ฐ์ฌ ํจ์๋ก๋ ํธ๋ฆฌ์์ดํน ๋ฐฉ๋ฒ์ด ์๋ค๊ณ  ํ๋ ์ถ๊ฐ์ ์ผ๋ก ์์๋ด์ผ ๋  ๊ฒ์ด ์๋ ๊ฒ ๊ฐ๋ค.

<br/>

### ์ฉ์ด์ ๋ฆฌ

Side Effect: `์๋์น์์ ๊ฒฐ๊ณผ, ๋ ๋๋ง ์ค์ ๋ฐ์ํ๋ ๊ฒ์ด ์๋๋ผ "์ธก๋ฉด"์์ ๋ฐ์ํ๋ ๊ฒ` ๋๋ ํจ์๊ฐ ์คํ๋๋ฉด ํจ์ ์ธ๋ถ์ ์กด์ฌํ๋ ๊ฐ์ด๋ ์ํ๋ฅผ ๋ณ๊ฒฝ์ํค๋ ๋ฑ์ ํ์

- `์ ์ฐจํ ํ๋ก๊ทธ๋๋ฐ`์์๋ Side Effect๊ฐ ํํ ์กด์ฌํ์๊ณ , ์ด๋ ํ๋ก๊ทธ๋จ์ ์ฝ๊ธฐ ์ด๋ ต๊ฒํ๊ณ  ์คํ์ํ๋ฅผ ์์ธกํ๊ธฐ ์ด๋ ต๊ฒ ํ๋ฉฐ ๊ฐ๋ฐ๋น์ฉ์ ์ฆ๊ฐ ์์ผฐ๋ค.
- ์ด์ ๋ฐ๋ผ `์ ์ธํ ํ๋ก๊ทธ๋๋ฐ` ๋ฐฉ์์ผ๋ก ์งํฅํ๊ฒ ๋๋ฉด์ Side Effect๋ฅผ ์ต์ํ ํ๋ ๋ฐฉํฅ์ผ๋ก ๋ฐ๋๊ณ  ์๋ค.
  - ์ ์ธํ ํ๋ก๊ทธ๋๋ฐ ๋ฐฉ์์ ์ฌ์ฉํ๊ฒ ๋๋ฉด ํจ์๊ฐ ๋งค๊ฐ๋ณ์๋ฅผ ํตํด ์ฐ์ฐ์ ์ํํ๊ฒ ๋๋ฉด ํจ์์ ์์ฑ๋ ๋ก์ง๋๋ก `์ผ๊ด๋๊ณ  ์์ธก ๊ฐ๋ฅํ ๊ฒฐ๊ณผ๊ณผ ๋ฐํ`๋๊ธฐ ๋๋ฌธ์ด๋ค.

<br/>

### ์ฐธ๊ณ ๋งํฌ

[์นํฉ Tree Shaking](https://webpack.kr/guides/tree-shaking/)

[TypeScript enum์ ์ฌ์ฉํ์ง ์๋ ๊ฒ ์ข์ ์ด์ ๋ฅผ Tree-shaking ๊ด์ ์์ ์๊ฐํฉ๋๋ค.](https://engineering.linecorp.com/ko/blog/typescript-enum-tree-shaking/)

[ํธ๋ฆฌ ์์ดํน์ผ๋ก ์๋ฐ์คํฌ๋ฆฝํธ ํ์ด๋ก๋ ์ค์ด๊ธฐ](https://ui.toast.com/weekly-pick/ko_20180716)

[ํธ๋ฆฌ์์ดํน์ผ๋ก ์๋ฐ์คํฌ๋ฆฝํธ ์ฌ์ด์ฆ ์ค์ด๊ธฐ](https://yceffort.kr/2021/08/javascript-tree-shaking)

[Dependency Infection](https://medium.com/@jang.wangsu/di-dependency-injection-%EC%9D%B4%EB%9E%80-1b12fdefec4f)

[๋ฒ๋ค๋ง๋ ๋ฏธ๋๋ฉ๋ฆฌ์ฆ์ด ํ์ํ๋ค.](https://brunch.co.kr/@swimjiy/24)

<br/>

```toc

```

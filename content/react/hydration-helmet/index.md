---
emoji: ๐ฃ๏ธ
title: React - Hydration์ Helmet์ด๋?
date: '2023-01-05 16:21:00'
author: JungSany
tags: blog gatsby JungLog log jung react hydration ssr next js helmet seo
categories: React
---

# React Hydration

**Hydration**๋ `React๊ฐ SSR์ ํ  ์ ์๋๋ก`, HTML ์ฝ๋์ JS ์ฝ๋๋ฅผ ์๋ก ๋งค์นญ์์ผ ๋์ ์ธ ์น์ฌ์ดํธ๋ฅผ ๋ธ๋ผ์ฐ์ ์ ๋ ๋๋งํ๋ ๊ธฐ์ ์ด๋ค.

**Next.js**๋ React์์ v16๋ถํฐ ์ ๊ณตํ๋ hydrate ๊ธฐ๋ฅ์ ์ฌ์ฉํด์ ์ด๋ฌํ ์๋ฃจ์์ ์ฑ๊ณต์ ์ผ๋ก ์ ๊ณตํ๋ค.

๋ค๋ฅธ ๋ง๋ก๋ ์๋ฒ ์ธก์์ ์ ๊ณต๋ HTML์ ์ฌ์ฌ์ฉํ๊ณ  ํด๋น DOM ์์์ ์ด๋ฒคํธ ๋ฆฌ์ค๋๋ฅผ ์ฐ๊ฒฐํ๋ ์์์ด๋ผ๊ณ  ํ  ์ ์๋ค.

**`hydrate`๋ ReactDOM์ ํจ์์ธ๋ฐ ๋ฆฌ์กํธ ํ๋ก์ ํธ ๊ตฌ์ถ ์, ์ด๋ฐ์ ๊ผญ ์์ฑํด์ฃผ๋ render ํจ์์ ์ ๊น ๋น๊ตํด๋ณด๋ฉด**

`ReactDOM.render`๋ `hydration`์ ์ํํ์ง ์์ง๋ง `ReactDOM.hydrate`๋ฅผ ์ฌ์ฉํ์ฌ `hydration`์ ์ํํ  ์ ์๋ค.

```jsx
import { App } from './src/app';

ReactDOM.hydrate(<App />, document.getElementById('app'));
```

`ReactDOM.hydrate`๋ `ReactDOM.render`์ ๋์ผํ๊ฒ ๋์ํ์ง๋ง ์๋ฒ ์ธก์์ ์ ๋ฌ๋ฐ์ HTML์ ์ฌ์ฉํ๋ค.

<br/>

# React Helmet

**React๋ ์ฑ๊ธ ํ์ด์ง ์ ํ๋ฆฌ์ผ์ด์(Single Page Application, SPA)์ด๋ผ, React๋ก ๊ตฌ์ถ๋ ์น ์ฌ์ดํธ์ ๊ฒฝ์ฐ ํฌ๋กค๋ฌ๋ค์ด ๋จ ํ๋์ ํ์ผ `public/index.html` ๋ง์ ์ฝ๊ฒ ๋๋ค.**

**์ด์ฒ๋ผ ์ฑ๊ธ ํ์ด์ง ์ ํ๋ฆฌ์ผ์ด์์ ๊ฒฝ์ฐ `๊ฐ๊ฐ์ ํ์ด์ง์ ๋ํ ์ ๋ณด๋ฅผ ์ฝ์ง ๋ชปํ๋ค`๋ ๋จ์ ์ด ์๋ค.**

์ด๋ฌํ ๋จ์ ์ ๊ทน๋ณตํ๊ธฐ ์ํด์๋ `react-helmet ๋ผ์ด๋ธ๋ฌ๋ฆฌ`๋ฅผ ์ด์ฉํ์ฌ ์ฌ์ดํธ์ ๋ํ ๋ฉํ ํ๊ทธ๋ค์ ์ฝ์ ์ ์๊ฒ ๋ง๋ค ์ ์๋ค.

<br/>

## ํจ๊ป๋ณด๋ฉด ์ข์ ๊ธ

[Semantic Markup ์ด๋?](https://rnfltpgus.github.io/knowledge/semantic-markup/)

[๊ฒ์์์ง์ต์ ํ(Search Engine Optimization, SEO)](https://rnfltpgus.github.io/knowledge/search-engine-optimization/)

<br/>

## ์ฐธ๊ณ ๋งํฌ

[React Docs- - hydrate](https://beta.reactjs.org/reference/react-dom/hydrate)

[React Helmet - npm](https://www.npmjs.com/package/react-helmet)

[React์ Hydration์ ๋ํ์ฌ](https://velog.io/@huurray/React-Hydration-%EC%97%90-%EB%8C%80%ED%95%98%EC%97%AC)

[Next.js์ Hydrate๋?](https://helloinyong.tistory.com/315)

[react-helmet์ผ๋ก ํ์ด์ง๋ณ SEO ๋ฉํํ๊ทธ ์ค์ ํ๊ธฐ](https://velog.io/@miyoni/noSSRyesSEO)

<br/>

```toc

```

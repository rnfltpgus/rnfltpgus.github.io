---
emoji: ๐
title: ๋ฏธ๋์ด ์ฟผ๋ฆฌ(Media Query)๋?
date: '2022-12-30 17:14:00'
author: JungSany
tags: blog gatsby JungLog log jung responsive wep ๋ฐ์ํ ์น ๋ฏธ๋์ด ์ฟผ๋ฆฌ media query
categories: ๊ฐ๋ฐ์ง์ ResponsiveWep
---

# Media Query ๋?

- ๊ตฌ์ฒด์ ์ธ ์กฐ๊ฑด์ ํ์ํ ์คํ์ผ ์ ์ฉํ  ์ ์๋๋ก ํ์ฅํ์๋ค.
- ๊ฐ๋จํ ์ด์ผ๊ธฐ๋ก ๋งํ๋ฉด ๊ฐ ํ๋ฉด์ ๋น์จ๋ง๋ค ๊ฐ๊ฐ ๋ค๋ฅธ ํ๋ฉด์ ๋ณด์ฌ์ฃผ์ ๋ผ๋ ๊ฐ๋์ ๊ฐ๊ณ  ์๋ค.
- ๋ค์ํ ๊ธฐ๊ธฐ๋ค์ด ๋ง์ ์น ํ์ด์ง๋ฅผ ์ ์ํ  ๋, ๊ฐ๊ธฐ ๋ค๋ฅธ ํ์ด์ง๋ฅผ ๋ณด์ฌ์ค์ผ ๋๋๋ฐ, ๋ฐ์ํ์ ์ฌ์ฉํ์ง ์๋๋ค๋ฉด ๊ฐ ํ์ด์ง๋ง๋ค ์๋ก์ด ํ์ผ์ ๋ง๋ค์ด์ ๊ฐ๊ธฐ ๋ค๋ฅธ ๋ฒ์ ์ผ๋ก ๊ด๋ฆฌํด์ผ ํ๋ค.
- ์ด ๋ ๊ทธ๋ฐ ๋ฒ๊ฑฐ๋ก์์ ์์ ๊ธฐ ์ํ์ฌ ํ ํ์ผ์์ pc, ๋ชจ๋ฐ์ผ, ํ๋ธ๋ฆฟ ๋ฑ์ ๊ณ ๋ คํ ์น ์ฌ์ดํธ๋ฅผ ๋ง๋ค ์ ์๊ฒ ๋ฐ์ํ ์น ํ์ด์ง๋ฅผ ๋ง๋๋ ๊ฒ์ด๋ค.

```css
/* ์ด๋ฐ์์ผ๋ก ๋ฏธ๋์ด ์ฟผ๋ฆฌ๋ฅผ ์์ฑํ์ฌ, ๋ธ๋ผ์ฐ์  ์ฐฝ์ width๊ฐ 600px ์ดํ์ธ ๊ฒฝ์ฐ, body์ ๋ฐฐ๊ฒฝ์์ lightblue๋ก ์ ์ฉํ๊ฒ ๋ค๋ ์๋ฏธ์ ์ฝ๋๋ฅผ ์์ฑํ  ์ ์๋ค. */

@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

<br/>

## Fluid Grid

![Fluid Grid ์ด๋ฏธ์ง](https://velog.velcdn.com/images%2Fpyo-sh%2Fpost%2F011a8a93-d1ee-4021-a95a-6e5d19021aff%2Fjsseo-140329-CSS-05-1024x213.png)

- ๊ทธ๋ฆฌ๋์ ํญ์ ๊ณ ์  ๊ฐ์ด ์๋ em ๋๋ %์ ๊ฐ์ผ๋ก ์ค์ ํ๋ ๊ฒ์ ๋ปํจ
- ๊ฐ๋ก ํญ์ ๊ธธ์ด์ ๋ณํ์ ๋ฐ๋ผ ์ปฌ๋ผ์ ํฌ๊ธฐ๊ฐ ์๋์ ์ผ๋ก ๋ณํ๊ฒ ํ๋ ๋ฐฉ๋ฒ
- ๋ ์ด์์์๋ ๋ณํ๊ฐ ์์ ์ ์์ผ๋ฏ๋ก ํญ์ด ๋ง์ด ์ข์ ๋ชจ๋ฐ์ผ์์ ํฐ ํจ๊ณผ๋ฅผ ๋ณผ ์ ์์ ์ ์์

<br/>

## Liquid Layouts

![Liquid Layouts ์ด๋ฏธ์ง](https://velog.velcdn.com/images%2Fpyo-sh%2Fpost%2Fb46705f8-6d95-446c-8525-d8fbced9c7ff%2Fjsseo-140329-CSS-06-1024x495.png)

- ์ ๋ํ ๊ทธ๋ฆฌ๋์ ๊ฐ์ด ๋ฐ์ํ ์น ๊ธฐ๋ฒ ์ค ํ๋
- ๋ ์ด์์ ํฌ๊ธฐ๋ฅผ ์ ๋ํ ๊ทธ๋ฆฌ๋์ ๊ฐ์ด ์๋์  ๋จ์๋ก ์ง์ ํ์ฌ ์น์ ํฌ๊ธฐ์ ๋ฐ๋ผ ์ ๋์ ์ผ๋ก ๋ณํ๋ฅผ ์ค
- ๋ฐ์ํ ๊ทธ๋ฆฌ๋์ ๊ฐ์ด ๋ฏธ๋์ด ์ฟผ๋ฆฌ๋ฅผ ์ฌ์ฉํ์ฌ ์ผ์  ํฌ๊ธฐ๊ฐ ๋๋ฉด ๋ ์ด์์ ๊ตฌ์กฐ๋ฅผ ๋ฐ๊พธ์ด ์ค

<br/>

## in React

- React์์๋ `react-responsive`์ ํ์ ์ด์ฉํด ๊ตฌํํ๋ ๋ฐฉ๋ฒ์ด ์๋ค.

```jsx
// react-responsive ๋ชจ๋ ์ค์น
npm install react-responsive

// typescript ๋ฅผ ์ฌ์ฉํ๋ ๊ฒฝ์ฐ ์ถ๊ฐ ์ค์น
npm install @types/react-responsive
```

- useMediaQuery ํ ์ฌ์ฉ๋ฐฉ๋ฒ

```jsx
import { useMediaQuery } from 'react-responsive';

const Example = () => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  const isPortrait = useMediaQuery({ orientation: 'portrait' });
  const isRetina = useMediaQuery({ minResolution: '2dppx' });

  return <div>...</div>;
};
```

- ํด๋น ๋ณ์๋ ์กฐ๊ฑด์ ๋ง๋์ง ์๋์ง์ ๋ํ true / false ๊ฐ ๋ค์ด๊ฐ๊ฒ ๋๋ค.
- ํน์  ์ํฉ์์๋ง ์ถ๋ ฅ์ ํ๋๋ก ํ๊ณ  ์ถ๋ค๋ฉด ์๋์ ๊ฐ์ ์์ ๋ฅผ ๋ง๋ค ์ ์๋ค.

```jsx
import { useMediaQuery } from 'react-responsive';

const Example = () => {
  const isDesktopOrLaptop = useMediaQuery(
    { minDeviceWidth: 1224 },
    { deviceWidth: 1600 }, // `device` prop
  );

  return (
    <div>
      {isDesktopOrLaptop && (
        <p>
          this will always get rendered even if device is shorter than 1224px, that's because we
          overrode device settings with 'deviceWidth: 1600'.
        </p>
      )}
    </div>
  );
};
```

<br/>

## ์ฐธ๊ณ ์ฉ CSS

### display ์์ฑ

1. inline(default)height, width ์์ฑ์ ์ง์ ํ  ์ ์๋ค.(=Inline element) ํ ์ค์ ์ด์ด์ ์ด๋ค.ex) span, a
2. block์๋์ผ๋ก ์ค๋ฐ๊ฟ์ ํ์ฌ ํ๋์ ํ์ ์ฐจ์งํ๊ณ , width ๋ฑ์ ์์ฑ์ ์ง์ ํ  ์ ์๋ค.ex) div, p, h1
3. inline-block๊ธฐ๋ณธ์ ์ผ๋ก inline ์์ฑ์ ๊ฐ์ง๋ width ๋ฑ์ ์์ฑ์ ์ง์ ํ  ์ ์๋ค,ex) input, button, select
4. flex๋ ์ด์์ ๋ฐฐ์น ํด์ด๋ค. ๋ด์ฉ์ด ๋ฐฉ๋ํ๋ฏ๋กย [์ด ์ฌ์ดํธ](https://studiomeal.com/archives/197)๋ฅผ ์ฐธ์กฐํ์.justify๋ ๊ฐ๋ก ์ ๋ ฌ, align์ ์ธ๋ก ์ ๋ ฌ์ด๋ผ๋ ๊ฒ์ ๋ช์ฌํ์. flex-direction์ ์ด์ฉํ์ฌ ๋ฐ์ํ ์น์ ๊ตฌํํ  ๊ฒ์ด๋ค.
5. grid๋ง์ฐฌ๊ฐ์ง๋ก ๋ ์ด์์ ๋ฐฐ์น ํด์ด๋ฉฐ,ย [์ด ์ฌ์ดํธ](https://studiomeal.com/archives/533)์ ์ ์ ๋ฆฌ๋์ด ์๋ค.

<br/>

### position ์์ฑ

1. static(default)์์๋ฅผ ์ผ๋ฐ์ ์ธ ํ๋ฆ์ ๋ง๊ฒ ๋ฐฐ์นํ๊ณ , top/left/z-index ๋ฑ์ ์์ฑ์ ์ฌ์ฉํ  ์ ์๋ค. ์ผ๋ฐ์ ์ธ ํ๋ฆ์ด๋ ์์๋ค์ ๊ธฐ๋ณธ์ ์ธ display ์์ฑ์ ๊ณ ๋ คํ์ฌ ๋ฐฐ์นํ๋ค๋ ๋ป์ด๋ค.
2. relative์์๋ฅผ ์ผ๋ฐ์ ์ธ ํ๋ฆ์ ๋ง๊ฒ ๋ฐฐ์นํ๊ณ ,ย **๋ฐฐ์น๋ ์์น๋ฅผ ๊ธฐ์ค์ผ๋ก ์๋์ ์ผ๋ก**ย top, left ๋ฑ์ ์์ฑ์ ์ ์ฉํ  ์ ์๋ค.
3. absolute์ผ๋ฐ์ ์ธ ํ๋ฆ์ด ์๋ย **๊ฐ์ฅ ๊ฐ๊น์ด ๋ถ๋ชจ ์ปดํฌ๋ํธ๋ฅผ ๊ธฐ์ค์ผ๋ก**ย ๋ฐฐ์นํ๋ฉฐ top, left ๋ฑ์ ์์ฑ์ ์ ์ฉํ  ์ ์๋ค.
4. fixed์ผ๋ฐ์ ์ธ ํ๋ฆ์ด ์๋ย **Viewport๋ฅผ ๊ธฐ์ค์ผ๋ก**ย ๋ฐฐ์นํ๋ฉฐ, ์ด๋ ๊ณง ์ฌ์ฉ์๊ฐ ๋ณด๋ ํ๋ฉด ์์๊ณ ์ ๋์ด ์์์ ์๋ฏธํ๋ค.

<br/>

## ์ฐธ๊ณ ๋งํฌ

[[CSS] ๋ฏธ๋์ด์ฟผ๋ฆฌ(Media Query)์ ๊ธฐ๋ณธ์ฌ์ฉ๋ฒ](https://log.designichthus.com/11)

[๋ฐ์ํ ์นํ์ด์ง๋? (with ๊ฐ๋จํ ๋ฐ์ํ ์ ํ์ฌ์ดํธ navBar๋ง๋ค๊ธฐ!)](https://hong-jh.tistory.com/entry/%EB%B0%98%EC%9D%91%ED%98%95-%EC%9B%B9%ED%8E%98%EC%9D%B4%EC%A7%80%EB%9E%80-with-%EA%B0%84%EB%8B%A8%ED%95%9C-%EB%B0%98%EC%9D%91%ED%98%95-%EC%95%A0%ED%94%8C%EC%82%AC%EC%9D%B4%ED%8A%B8-navBar%EB%A7%8C%EB%93%A4%EA%B8%B0)

[[React] React-Responsive / ๋ฐ์ํ ์น ๋ง๋ค๊ธฐ](https://velog.io/@pyo-sh/React-Responsive)

[์๋ธ๋ฆฌ ์ ์ฅ์](https://eblee-repo.tistory.com/49)

[react-responsive](https://www.npmjs.com/package/react-responsive)

<br/>

```toc

```

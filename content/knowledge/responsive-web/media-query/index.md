---
emoji: 🌅
title: 미디어 쿼리(Media Query)란?
date: '2022-12-30 17:14:00'
author: JungSany
tags: blog gatsby JungLog log jung responsive wep 반응형 웹 미디어 쿼리 media query
categories: 개발지식 ResponsiveWep
---

# Media Query 란?

- 구체적인 조건을 필요한 스타일 적용할 수 있도록 확장하였다.
- 간단한 이야기로 말하면 각 화면의 비율마다 각각 다른 화면을 보여주자 라는 개념을 가고 있다.
- 다양한 기기들이 많아 웹 페이지를 접속할 때, 각기 다른 페이지를 보여줘야 되는데, 반응형을 사용하지 않는다면 각 페이지마다 새로운 파일을 만들어서 각기 다른 버전으로 관리해야 한다.
- 이 때 그런 번거로움을 없애기 위하여 한 파일에서 pc, 모바일, 태블릿 등을 고려한 웹 사이트를 만들 수 있게 반응형 웹 페이지를 만드는 것이다.

```css
/* 이런식으로 미디어 쿼리를 작성하여, 브라우저 창의 width가 600px 이하인 경우, body의 배경색을 lightblue로 적용하겠다는 의미의 코드를 작성할 수 있다. */

@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

<br/>

## Fluid Grid

![Fluid Grid 이미지](https://velog.velcdn.com/images%2Fpyo-sh%2Fpost%2F011a8a93-d1ee-4021-a95a-6e5d19021aff%2Fjsseo-140329-CSS-05-1024x213.png)

- 그리드의 폭을 고정 값이 아닌 em 또는 %의 값으로 설정하는 것을 뜻함
- 가로 폭의 길이의 변화에 따라 컬럼의 크기가 상대적으로 변하게 하는 방법
- 레이아웃에는 변화가 없을 수 있으므로 폭이 많이 좁은 모바일에서 큰 효과를 볼 수 없을 수 있음

<br/>

## Liquid Layouts

![Liquid Layouts 이미지](https://velog.velcdn.com/images%2Fpyo-sh%2Fpost%2Fb46705f8-6d95-446c-8525-d8fbced9c7ff%2Fjsseo-140329-CSS-06-1024x495.png)

- 유동형 그리드와 같이 반응형 웹 기법 중 하나
- 레이아웃 크기를 유동형 그리드와 같이 상대적 단위로 지정하여 웹의 크기에 따라 유동적으로 변화를 줌
- 반응형 그리드와 같이 미디어 쿼리를 사용하여 일정 크기가 되면 레이아웃 구조를 바꾸어 줌

<br/>

## in React

- React에서는 `react-responsive`의 훅을 이용해 구현하는 방법이 있다.

```jsx
// react-responsive 모듈 설치
npm install react-responsive

// typescript 를 사용하는 경우 추가 설치
npm install @types/react-responsive
```

- useMediaQuery 훅 사용방법

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

- 해당 변수는 조건에 맞는지 아닌지에 대한 true / false 가 들어가게 된다.
- 특정 상황에서만 출력을 하도록 하고 싶다면 아래와 같은 예제를 만들 수 있다.

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

## 참고용 CSS

- **display 속성**

1. inline(default)height, width 속성을 지정할 수 없다.(=Inline element) 한 줄에 이어서 쓴다.ex) span, a
2. block자동으로 줄바꿈을 하여 하나의 행을 차지하고, width 등의 속성을 지정할 수 있다.ex) div, p, h1
3. inline-block기본적으로 inline 속성을 가지나 width 등의 속성을 지정할 수 있다,ex) input, button, select
4. flex레이아웃 배치 툴이다. 내용이 방대하므로 [이 사이트](https://studiomeal.com/archives/197)를 참조하자.justify는 가로 정렬, align은 세로 정렬이라는 것을 명심하자. flex-direction을 이용하여 반응형 웹을 구현할 것이다.
5. grid마찬가지로 레이아웃 배치 툴이며, [이 사이트](https://studiomeal.com/archives/533)에 잘 정리되어 있다.

- **position 속성**

1. static(default)요소를 일반적인 흐름에 맞게 배치하고, top/left/z-index 등의 속성을 사용할 수 없다. 일반적인 흐름이란 요소들의 기본적인 display 속성을 고려하여 배치한다는 뜻이다.
2. relative요소를 일반적인 흐름에 맞게 배치하고, **배치된 위치를 기준으로 상대적으로** top, left 등의 속성을 적용할 수 있다.
3. absolute일반적인 흐름이 아닌 **가장 가까운 부모 컴포넌트를 기준으로** 배치하며 top, left 등의 속성을 적용할 수 있다.
4. fixed일반적인 흐름이 아닌 **Viewport를 기준으로** 배치하며, 이는 곧 사용자가 보는 화면 상에고정되어 있음을 의미한다.

<br/>

## 참고링크

[[CSS] 미디어쿼리(Media Query)의 기본사용법](https://log.designichthus.com/11)

[반응형 웹페이지란? (with 간단한 반응형 애플사이트 navBar만들기!)](https://hong-jh.tistory.com/entry/%EB%B0%98%EC%9D%91%ED%98%95-%EC%9B%B9%ED%8E%98%EC%9D%B4%EC%A7%80%EB%9E%80-with-%EA%B0%84%EB%8B%A8%ED%95%9C-%EB%B0%98%EC%9D%91%ED%98%95-%EC%95%A0%ED%94%8C%EC%82%AC%EC%9D%B4%ED%8A%B8-navBar%EB%A7%8C%EB%93%A4%EA%B8%B0)

[[React] React-Responsive / 반응형 웹 만들기](https://velog.io/@pyo-sh/React-Responsive)

[에브리 저장소](https://eblee-repo.tistory.com/49)

[react-responsive](https://www.npmjs.com/package/react-responsive)

<br/>

```toc

```

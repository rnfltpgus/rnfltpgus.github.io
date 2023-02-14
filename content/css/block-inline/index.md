---
emoji: 🚧
title: Block과 Inline에 대해서
date: '2023-02-13 12:40:00'
author: JungSany
tags: blog gatsby JungLog log jung css inline block element style
categories: css
---

![인라인과 블록요소 이미지](https://velog.velcdn.com/cloudflare/mooongs/d4a44b64-a03b-46d9-a185-79bbb4281c71/Untitled.png)

## 블럭요소(Block element)와 인라인요소(Inline element)란?

### 블럭요소(Block element)

하나의 태그가 브라우저에서 좌우공간을 다 차지하면서 독립적인 공간을 가지는 요소

기본적으로 가로폭 전체의 넓이를 가지는 `직사각형 형태`이며, `width`, `height`, `margin`, `padding` 등을 사용하여 형태를 변경하여 레이아웃을 수정할 수 있다.

**블록 요소 다음에는 줄바꿈이 이루어 진다.**

<br/>

### 인라인요소(Inline element)

하나의 태그가 브라우저에서 실제로 코딩된 그 영역만 차지하여 좌우로 다른 태그가 나란히 위치할 수 있는 요소

기본적으로 컨텐츠가 끝나는 지점까지를 넓이로 가지게 되어, **임의로 `width`, `height`로 크기를 변형할 수 없다.**

`line-height`로 줄의 높낮이를 조정할 수 있고, `text-align`으로 텍스트의 위치를 정렬할 수 있다.

**인라인요소 특성상 줄 바꿈이 없고 우측으로 바로 이어저서 화면에 표시된다.**

<br/>

### 블럭요소와 인라인요소의 종류

- **블럭요소 : `div`, `table`, `h1` ~ `h6`, `p`, `form`, `ul`, `ol`, `li`, `dl`, `dt`, `dd`, `pre`, `blockquote` 등**
- **인라인요소 : `span`, `a`, `br`, `em`, `strong`, `input`, `label`, `img`**

<br/>

### 특징 및 주의점

1. `블럭요소`는 내부에 블럭요소와 인라인요소를 포함할 수 있고, `인라인요소`는 내부에 블럭요소를 포함할 수 없다.
2. 블럭요소들 중에서도 인라인요소만 포함할 수 있는 것들이 있습니다.(`h1` ~ `h6`, `p`)
3. css 속성의 `display`를 이용하여 인라인 요소를 블럭화하여 블럭요소 내부에 포함시킬 수 있지만(브라우저에서 보여지는데는 아무런 문제가 없음), 유효성에 어긋난다.

- 태그의 요소를 변경할 수 있다.

```css
div {
  display: inline;
}
div {
  display: block;
}
div {
  display: inline-block;
}
```

<br/>

### 참고링크

[HTML5 태그의 블록 요소와 인라인 요소](https://ux.stories.pe.kr/44)

<br/>

```toc

```

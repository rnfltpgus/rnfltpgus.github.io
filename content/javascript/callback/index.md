---
emoji: 🥥
title: 콜백(CallBack)이란?
date: '2022-12-21 15:10:00'
author: JungSany
tags: blog gatsby JungLog log jung callback 비동기
categories: JavaScript
---

### 콜백이란?

- 비동기처리방식에 속하며, 함수가 끝나고 난 뒤에 실행되는 함수
- 자바스크립트에서 함수는 객체이다. 따라서 **함수는 함수를 인자로 받고 다른 함수를 통해 반환될 수 있는데, 인자로 대입되는 함수**를 `콜백함수`라고 부름
- 아래의 예시처럼 다른 코드가 특정 코드가 마무리되기 전에 실행되지 않도록, 즉 비동기 처리를 위한 방법

```javascript
function first() {
  setTimeout(function () {
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}

first();
second();
```

<details>
<summary>정답</summary>
<div markdown="1">

출력 순서는 2 → 1

</div>
</details>

<br/>

### 콜백의 불편사항

- 비동기 처리에 콜백 함수를 이용하게 되면 코드를 중첩시켜 작성하게 되기 때문에 에러, 예외처리가 어렵고 복잡도가 증가하게 되어 콜백지옥을 맛볼 수 있다.
- 콜백함수의 중첩은 에러처리가 힘듬다.

  ![callback 지옥 이미지](https://velog.velcdn.com/images/yj05037/post/9c47656d-edd0-4318-81b3-52f2244172cb/image.png)

<br/>

```toc

```

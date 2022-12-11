---
emoji: ⚖️
title: Object와 instance의 차이점?
date: '2022-12-10 15:27:00'
author: JungSany
tags: blog gatsby JungLog log jung object instance 차이점
categories: 개발지식
---

## 정의

- Object를 사용하여 Object를 생성하면 Object가 반환된다.
- 이때 `할당, 반환된 Object를 인스턴스(instance)`라고 부른다.
- new 연산자를 사용하여 Object를 생성하여 변수에 할당할 수 있으며, 변수에 할당된 Object가 instance인 것이다.

```javascript
// new 연산자 또는 객체 리터럴 방식를 사용하여 Object를 생성하여,
// 변수에 할당 or 반환된 Object가 instance이다.
const obj1 = new Object();
const obj2 = {};

// 콘솔에 찍히는 값은 Instance인 {}가 찍힌다.
console.log(obj1);
console.log(obj2);
```

<br/>

~~## instance를 사용하는 이유는?~~

- ~~instance마다 다른 값을 유지/제어하기 위해서 instance를 생성하는 것이다.~~
- ~~다시말해, 원본의 값을 그대로 사용하면 원본의 데이터가 변경되기 떄문에 instance를 생성하여 원본의 값을 건들지않고 사용하기 위해 instance를 생성하여 사용하는 것이다.~~

<br/>

### 참고링크

[object MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object)

[오브젝트(Object)와 인스턴스(instance),instanceof](https://webclub.tistory.com/37)

<br/>

```toc

```

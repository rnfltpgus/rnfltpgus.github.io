---
emoji: 🍊
title: 얕은 복사와 깊은 복사
date: '2022-12-20 22:40:00'
author: JungSany
tags: blog gatsby JungLog log jung shallow deep copy
categories: JavaScript
---

![깊은복사와 얕은 복사](https://t1.daumcdn.net/cfile/tistory/993F09445A6DA15516)

## Shaloow Copy - 얕은 복사란?

**복사할 때 원래값과 복사된 값이 같은 참조를 가리키고 있는 것을 말한다.**

객체안에 객체가 있을 경우 한개의 객체라도 원본 객체를 참고 하고 있다면 이를 얕은 복사라고 한다.

객체를 가르키는 변수(원본)을 다른 변수(사본)에 할당하면 원본 의 참조 값이 복사되어 전달된다. 이를 참조에 의한 전달이라하며, 얕은 복사이다.

또 얕은 복사는 `한단계 뎁스만 복사`한다.

<br/>

### 결국 얕은 복사란?

`두개의 식별자가 하나의 객체를 바라보게 되어`, 원본 또는 사본 중 어느 한쪽에서 객체를 변경(변수에 새로운 객체를 재할당하는 것이 아니라 객체의 프로퍼티 값을 변경하거나 프로퍼티를 추가, 삭제)하면 `서로 영향을 주고 받는다.`

```javascript
var per1 = {
  name: 'lee',
};

var per2 = {
  name: 'lee',
};

// 객체를 생성할떄는 새로운 평가를 받기때문에 펄스가 뜨는데
console.log(per1 === per2);

// 아래 콘솔은 프로퍼티 값을 참조하는 값으로 평가될 수 있는 표현식이다. 그래서 두 표현식 모두 원시값으로 평가되어 트루다.
console.log(per1.name === per2.name);
```

<br/>

### 얕은 복사를 하는 방법에는

1. Object.assign()
2. Array.Slice()
3. Spread 연산자 (전개연산자)

<br/>

## Deep Copy - 깊은 복사란?

깊은 복사된 객체는 객체안에 객체가 있을 경우에도 원본과의 참조가 완전히 끈헝진 객체를 말한다.

깊은 복사는 `중첩된 부분까지 모두 복사`하는 경우를 말한다.

<br/>

### 깊은 복사를 하는 방법에는

1. JSON.parse && JSON.stringify
2. 재귀함수를 구현한 복사
3. lodash의 cloneDeep를 사용한 복사(라이브러리 사용)

<br/>

### 참조링크

[[Javascript] 얕은 복사, 깊은 복사](https://velog.io/@th0566/Javascript-%EC%96%95%EC%9D%80-%EB%B3%B5%EC%82%AC-%EA%B9%8A%EC%9D%80-%EB%B3%B5%EC%82%AC)

[[JavaScript] 깊은 복사, 얕은 복사](https://bbangson.tistory.com/78)

<br/>

```toc


```

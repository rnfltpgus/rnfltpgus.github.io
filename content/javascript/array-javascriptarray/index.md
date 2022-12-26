---
emoji: 🍈
title: Array와 JavaScript의 Array
date: '2022-12-26 17:37:00'
author: JungSany
tags: blog gatsby JungLog log jung javascript array 비교
categories: JavaScript
---

**오늘 면접을 보았는데, `Array와 JavaScript의 Array`에 관한 기술질문이 있었고, 이에 대해서 잘 알고있지 않아 글을 정리해보고자 한다.**

<br/>

## 일반적인 Array (밀집 배열)

**일반적으로 배열이라는 자료 구조의 개념은**

1. `동일한 크기의 메모리 공간이 빈틈없이 연속적`으로 `나열된 자료 구조`를 말한다.

2. 배열의 요소는 `동일한 크기를 갖으며 빈틈없이 연속적으로 이어져 있`으므로 **인덱스를 통해 단 한번의 연산으로 임의의 요소에 접근(임의 접근(random access), 시간 복잡도 O(1))할 수 있다. 이는 매우 효율적이며 고속으로 동작한다.**

   **(하지만 정렬되지 않은 배열에서 특정한 값을 탐색하는 경우, 모든 배열 요소를 처음부터 값을 발견할 때까지 차례대로 탐색(선형 탐색(linear search)을하기 때문에 시간 복잡도는 O(n))이다.)**

3. 또한 배열에 요소를 `삽입하거나 삭제하는 경우`, 배열 요소를 `연속적으로 유지하기 위해 요소를 이동시켜야 하는 단점`도 있다.

4. **즉, 일반적인 Array는 하나의 타입으로 통일되어 있으며 서로 연속적으로 인접해 있기 때문에 이러한 배열을 `밀집 배열(dense array)`이라 한다.**

![일반적인 Array 이미지](https://poiemaweb.com/assets/fs-images/27-1.png)

<br/>

## JavaScript의 Array (희소 배열)

**JavaScript의 Array은 일반적인 Array와는 다른데, 그 이유는**

1. **자바스크립트에서 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체(Array 객체)이다.**

   **`(인덱스를 프로퍼티 키로 갖으며 length 프로퍼티를 갖는 특수한 객체)`**

2. **자바스크립트에서는 `모든 값이 객체의 프로퍼티 값이 될 수 있`으므로 `어떠한 타입의 값이라도 배열의 요소가 될 수 있다.`**

3. **배열의 요소가 연속적으로 이어져 있지 않는 배열을 `희소 배열(sparse array)`이라 한다.**

<br/>

### length 프로퍼티와 희소배열

length 프로퍼티는 배열의 길이를 나타내는 0이상의 정수를 값으로 갖는다.

```javascript
const arr = [1, 2, 3];

console.log(arr.length); // 3

arr.push(4);

console.log(arr.length); // 4

arr.pop();

console.log(arr.length); // 3
```

length 프로퍼티에 임의의 값을 할당할 수도 있다.

```javascript
const arr = [1, 2, 3, 4, 5];

arr.length = 3;

console.log(arr); // [1, 2, 3]
```

```javascript
const arr = [1, 2, 3];

arr.length = 6;

console.log(arr.length); // 6
console.log(arr); // [ 1, 2, 3, <3 empty items> ]
```

위 코드에서 출력 결과를 확인해 보았을 때, `arr 변수`에 선언된 length 프로퍼티의 값보다 큰 숫자의 length를 할당하게 되면 length의 길이는 변경되지만, 실제 `arr 변수`에는 아무런 변화가 없기 때문에 `3 empty items`는 console.log에 찍히게 되는 것을 확인 할 수 있다.

```javascript
console.log(Object.getOwnPropertyDescriptors(arr));

/*
  {
    '0': { value: 1, writable: true, enumerable: true, configurable: true },
    '1': { value: 2, writable: true, enumerable: true, configurable: true },
    '2': { value: 3, writable: true, enumerable: true, configurable: true },
    length: { value: 6, writable: true, enumerable: false, configurable: false }
  }
/*
```

`getOwnPropertyDescriptors()`를 통해서 확인 사살을 해보면 값이 없는 요소를 위해 메모리 공간을 확보하지 않은 것을 확인할 수 있다.

이처럼 배열의 요소가 연속적으로 위치하지 않고 일부가 비어 있는 배열을 `희소 배열`이라고 한다.

<br/>

## 장단점

**`일반적인 Array은` 인덱스로 배열 요소에 빠르게 접근할 수 있다. 하지만 특정 요소를 탐색하거나 요소를 삽입 또는 삭제하는 경우에는 효율적이지 않다.**

**`자바스크립트 Array은` 해시 테이블로 구현된 객체이므로 인덱스로 배열 요소에 접근하는 경우, 일반적인 배열보다 성능적인 면에서 느릴 수 밖에 없는 구조적인 단점을 갖는다. 하지만 특정 요소를 탐색하거나 요소를 삽입 또는 삭제하는 경우에는 일반적인 배열보다 빠른 성능을 기대할 수 있다.**

**즉, 자바스크립트 배열은 인덱스로 배열 요소에 접근하는 경우에는 일반적인 배열보다 느리지만 특정 요소를 탐색하거나 요소를 삽입 또는 삭제하는 경우에는 일반적인 배열보다 빠르다.**

<br/>

### 자바스크립트의 배열과 객체 비교

`자바스크리브의 배열은` 인덱스로 배열 요소에 접근할 때 일반적인 배열보다 느릴 수 밖에 없는 구조적인 단점을 보완하기 위해 `배열을 일반 객체와 구별하여 보다 배열처럼 동작하도록 최적화하여 구현`하였다.

```javascript
const arr = [];

console.time('Array Performance Test');

for (let i = 0; i < 10000000; i++) {
  arr[i] = i;
}
console.timeEnd('Array Performance Test');
// 약 340ms

const obj = {};

console.time('Object Performance Test');

for (let i = 0; i < 10000000; i++) {
  obj[i] = i;
}

console.timeEnd('Object Performance Test');
// 약 600ms
```

<br/>

### 참고링크

[MDN - Array](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)

[MDN - Array.isArray()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)

[모던자바스크립트 - 자바스크립트 배열은 배열이 아니다](https://poiemaweb.com/js-array-is-not-arrray)

[TCP - 배열의 기초](http://tcpschool.com/javascript/js_array_basic)

[[JavaScript] 배열이 배열이 아니라고?](https://velog.io/@yongjin9660/JavaScript-%EB%B0%B0%EC%97%B4%EC%9D%B4-%EB%B0%B0%EC%97%B4%EC%9D%B4-%EC%95%84%EB%8B%88%EB%9D%BC%EA%B3%A0)

<br/>

```toc

```

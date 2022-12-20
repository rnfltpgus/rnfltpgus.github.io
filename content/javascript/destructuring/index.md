---
emoji: 🍉
title: 구조 분해 할당
date: '2022-12-20 22:30:00'
author: JungSany
tags: blog gatsby JungLog log jung destructuring
categories: JavaScript
---

### Destructuring(구조 분해 할당)이란?

`객체`와 `배열`은 자바스크립트에서 가장 많이 쓰이는 자료 구조이다.

- 키를 가진 데이터 여러 개를 하나의 엔티티에 저장할 땐 객체
- 컬렉션에 데이터를 순서대로 저장할 땐 배열

개발을 하다 보면 함수에 객체나 배열을 전달해야 하는 경우가 생기곤 하는데, 객체나 배열에 저장된 데이터 전체가 아닌 일부만 필요한 경우가 생긴다.

이때 객체나 배열을 변수로 ‘분해'할 수 있게 해주는 특별한 문법인 `구조 분해 할당(destructuring assignment)`을 사용할 수 있다. 그 외에도 함수의 매개변수가 많거나 매개변수 기본값이 필요한 경우 등에서 `구조 분해(destructuring)`는 그 진가를 발휘한다.

```jsx
// 이름과 성을 요소로 가진 배열
let arr = ['Jung', 'Youn'];

// 구조 분해 할당을 이용해
// firstName엔 arr[0]을
// surname엔 arr[1]을 할당하였습니다.
let [firstName, surname] = arr;

alert(firstName); // Jung
alert(surname); // Youn

// 두 번째 요소는 필요하지 않으면 쉼표를 사용하여 배열 요소를 버릴 수 있다.
let [firstName, , title] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic'];

alert(title); // Consul

let user = {
  name: 'JungSeaHyun',
  age: 33,
};

// for ...of 문과 Object.entries(obj)를 이용하면 객체의 키와 값을 순회해 변수로 분해 할당할 수 있다.
for (let [key, value] of Object.entries(user)) {
  alert(`${key}:${value}`); // name:JungSeaHyun, age:33이 차례대로 출력
}
```

이와 같이 구조 분해를 하게 되면 인덱스를 이용해 배열에 접근하지 않고도 변수로 이름과 성을 사용할 수 있게된다.

<br/>

### ‘`...`'로 나머지 요소 가져오기

배열 앞쪽에 위치한 값 몇 개만 필요하고 그 이후 이어지는 나머지 값들은 한데 모아서 저장하고 싶을 때가 있습니다. 이럴 때는 점 세 개 `...`를 붙인 매개변수 하나를 추가하면 ‘나머지(rest)’ 요소를 가져올 수 있다.

```jsx
let [name1, name2, ...rest] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic'];

alert(name1); // Julius
alert(name2); // Caesar

// `rest`는 배열입니다.
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2
```

<br/>

### 기본값(Default value)

할당하고자 하는 변수의 개수가 분해하고자 하는 배열의 길이보다 크더라도 에러가 발생하지 않습니다. 할당할 값이 없으면 undefined로 취급되기 때문입니다.

```jsx
// = 을 이용하면 할당할 값이 없을 때 기본으로 할당해 줄 값인 기본값을 설정할 수 있다.
let [firstName, surname] = [];

alert(firstName); // undefined
alert(surname); // undefined

// 구조 분행 할당으로 객체를 분해할 수 있다.
let options = {
  title: 'Menu',
  width: 100,
  height: 200,
};

let { title, width, height } = options;

alert(title); // Menu
alert(width); // 100
alert(height); // 200
```

<br/>

### 중첨 구조 분해(nested destructuring)

객체나 배열이 다른 객체나 배열을 포함하는 경우, 좀 더 복잡한 패턴을 사용하면 중첩 배열이나 객체의 정보를 추출할 수 있다.

```jsx
// 중첩 객체와 콜론을 조합하면 좀 더 복잡한 구조 분해도 가능하다.
let options = {
  title: 'My menu',
  items: ['Item1', 'Item2'],
};

function showMenu({
  title = 'Untitled',
  width: w = 100, // width는 w에,
  height: h = 200, // height는 h에,
  items: [item1, item2], // items의 첫 번째 요소는 item1에, 두 번째 요소는 item2에 할당함
}) {
  alert(`${title} ${w} ${h}`); // My Menu 100 200
  alert(item1); // Item1
  alert(item2); // Item2
}

showMenu(options);
```

<br/>

### 참고링크

[구조 분해 할당](https://ko.javascript.info/destructuring-assignment#ref-410)

[구조 분해 할당 - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%EB%B0%B0%EC%97%B4_%EA%B5%AC%EC%A1%B0_%EB%B6%84%ED%95%B4)

<br/>

```toc


```

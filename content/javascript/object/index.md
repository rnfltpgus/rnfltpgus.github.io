---
emoji: 🍇
title: 객체(Object)란?
date: '2022-12-20 22:24:00'
author: JungSany
tags: blog gatsby JungLog log jung object
categories: JavaScript
---

### 개요

자바스크립트에는 여덟 가지 자료형이 있다.

이 중 일곱 개는 오직 하나의 데이터(문자열, 숫자 등)만 담을 수 있어 ‘원시형(primitive type)’라고 부른다.

그런데 객체형은

1. 원시형과 달리 다양한 데이터를 담을 수 있다.
2. 키로 구분된 데이터 집합이나 복잡한 개체(entity)를 저장할 수 있다.

`즉 객체는 자바스크립트의 거의 모든 면에 녹아있는 개념이므로 자바스크립트를 잘 다루려면 객체를 잘 이해하고 있어야 한다.`

객체를 만들기 위해서는 중괄호 {}를 이용해 만들 수 있는데, 중괄호 안에는 ‘키(key): 값(value)’ 쌍으로 구성된 프로퍼티(property)를 여러 개 넣을 수 있는데, 아래와 같이 허용할 수 있으며, 프로퍼티 키는 ‘프로퍼티 이름' 이라고도 부른다.

그리고 프로퍼티 값엔 모든 자료형이 올 수 있다.

- 키에는 문자형
- 값에는 자료형

```jsx
let user = {
  // 객체 user라는 obj를 생성하는데, 안에 프로퍼티로 name과 age를 생성한 샘이다.
  name: 'JungSeaHyun', // 키: "name",  값: "JungSeHyun"
  age: 33, // 키: "age", 값: 33
};
```

<br/>

### 그래서 객체란?

1. 객체는 몇 가지 특수한 기능을 가진 연관 배열(associative array)이다.
2. 객체는 프로퍼티(키-값 쌍)를 저장한다.

- 프로퍼티 키는 문자열이나 심볼이여야 한다. (보통은 문자열)
- 값은 어떤 자료형도 가능하다.

1. 프로퍼티 접근 방식은 점, 대괄호 표기법이 있다.
2. 자바스크립트는 일반 객체 이외에도 다양한 종류의 객체가 있다. (추가로, ‘Array타입’이나 ‘Date 타입’은 독립적인 자료형이 아니라 ‘**객체**'형에 속한다.)

- Array : 정렬된 데이터 컬렉션을 저장할 때 쓰임
- Date : 날짜와 시간 정보를 저장할 때 쓰임
- Error : 에러 정보를 저장할 때 쓰임
- 기타 등등

<br/>

### 객체를 생성하는 방법으로는?

1. **객체 생성자:**

   빈 객체를 만드는 가장 간단한 방법은 Object 생성자를 사용하는 것인데, 현재 이 접근 방식은 권장되지 않는다.

   ```jsx
   const object = new Object();
   ```

<br/>

2. **객체의 생성 방법:**

   Object의 create 메소드는 프로토타입 객체를 매개변수로 전달하여 새 객체를 생성한다.

   ```jsx
   const object = Object.create(null);
   ```

<br/>

3. **객체 리터럴 구문: 개체를 만드는 방법 중 가장 쉬운 방법**

   개체 리터럴 구문(또는 개체 이니셜라이저)은 중괄호로 묶인 쉼표로 구분된 이름-값 쌍 집합이다.

   ```jsx
   const object = {
     name: 'Sudheer',
     age: 34,
   };
   ```

   - Object literal property values can be of any data type, including array, function, and nested object.
   - 개체 리터럴 속성 값은 배열, 함수 및 중첩된 개체를 포함한 모든 데이터 유형일 수 있다.

<br/>

4. **함수 생성자:**

   함수를 생성하고 new 연산자를 적용하여 객체 인스턴스를 생성한다.

   ```jsx
   function Person(name) {
     this.name = name;
     this.age = 21;
   }

   const object = new Person('Sudheer');
   ```

<br/>

5. **프로토타입이 있는 함수 생성자:**

   이것은 함수 생성자와 유사하지만 속성 및 메서드에 대해 프로토타입을 사용한다.

   ```jsx
   function Person() {}
   Person.prototype.name = 'Sudheer';

   const object = new Person();
   ```

   이것은 함수 프로토타입이 있는 객체 생성 메소드로 생성된 인스턴스와 인스턴스 및 매개변수를 인수로 사용하여 해당 함수를 호출하는 것과 같다.

   ```jsx
   function func() {};

   new func(x, y, z);`

   **(또는)**

   // Create a new instance using function prototype.
   const newInstance = Object.create(func.prototype)

   // Call the function
   const result = func.call(newInstance, x, y, z),

   // If the result is a non-null object then use it otherwise just use the new instance.
   console.log(result && typeof result === 'object' ? result : newInstance);
   ```

<br/>

6. **ES6 클래스 구문:**

   ES6에는 객체를 생성하는 클래스 기능이 도입되었다.

   ```jsx
   class Person {
     constructor(name) {
       this.name = name;
     }
   }

   const object = new Person('Sudheer');
   ```

<br/>

7. **싱글톤 패턴:**

   Singleton은 한 번만 인스턴스화할 수 있는 개체인데, 생성자에 대한 반복된 호출은 동일한 인스턴스를 반환하고 이러한 방식으로 여러 인스턴스를 실수로 생성하지 않도록 할 수 있다.

<br/>

### 참고링크

[객체](https://ko.javascript.info/object)

<br/>

```toc


```

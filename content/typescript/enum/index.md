---
emoji: 🙉
title: enum이란?
date: '2022-12-17 20:27:00'
author: JungSany
tags: blog gatsby JungLog log jung typescript enum
categories: TypeScript
---

### enum이란?

- 열거형 변수로 정수를 하나로 합칠 때 편리한 기능
- 임의의 숫자나 문자열을 할당할 수 있으며, 하나의 유형으로 사용해서 버그를 줄일 수 있음
- TypeScript가 자체적으로 구현하는 기능

```tsx
// 아무것도 지정하지 않은 경우에는 0부터 숫자를 매긴다.
enum MOBILE_OS {
  IOS, // 0
  ANDROID, // 1
}

// 임의의 숫자나 문자열을 할당할 수도 있다.
enum MOBILE_OS {
  IOS = 'iOS',
  ANDROID = 'Android',
}

// 아래와 같이 유형으로 사용할 수도 있다.
const os: MOBILE_OS = MOBILE_OS.IOS;
function detectOSType(userAgent: string): MOBILE_OS {
  // ...
}
```

- JavaScript에서는 사용할 수 없기 때문에 아래와 같이 객체를 사용하는 코드를 작성하게 됨

```tsx
const MOBILE_OS = {
  IOS: 'iOS',
  ANDROID: 'Android',
};

console.log(MOBILE_OS.IOS); // iOS
```

- enum은 편리한 기능이지만 TypeScript가 자체적으로 구현했기 때문에 Tree-shaking이 되지 않는다.

<br/>

### 참고링크

[TypeScript enum을 사용하지 않는 게 좋은 이유를 Tree-shaking 관점에서 소개합니다.](https://engineering.linecorp.com/ko/blog/typescript-enum-tree-shaking/)

<br/>

```toc

```

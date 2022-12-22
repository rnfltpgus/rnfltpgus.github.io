---
emoji: ⚖️
title: require VS import 문법 비교
date: '2022-12-22 16:15:00'
author: JungSany
tags: blog gatsby JungLog log jung require import
categories: 개발지식
---

## 둘다 외부의 파일이나 라이브러리의 코드를 불러온다는 목적을 가지고 있다.

<br/>

### require / exports

- `NodeJS`에서 사용되고 있는 `CommonJS` 키워드이고 Ruby 언어 스타일과 비슷하다고 볼수 있다.
- 모듈을 내보낼때는 ES6처럼 명시적으로 선언하는 것이 아니라 특정 변수나 그 변수의 속성으로 `내보낼 객체를 세팅`해 줘야 한다.
- 특히, 유사해 보이는 export 변수와 module.exports 변수를 상황에 맞게 잘 사용해야 한다.
- 기본적으로 2가지 규칙만 기억하면 된다.
  - 여러개의 객체를 내보낼 경우 → `export.변수` 의 개별 속성으로 할당
  - 딱 하나의 객체를 내보낼 경우 → `module.exports = 객체` 자체에 할당
- 노드 프로젝트에서 import를 사용하기 위해서는 `JSON 속성에 "type": "module"`
   을 추가해주면 된다.

```jsx
const name = require('./module.js');
```

<br/>

### import / export

- `ES6(ES2015)`에서 새롭게 도입된 키워드로서 Java나 Python 언어 방식과 비슷하다.

```jsx
import name from './module.js';
```

<br/>

### **ES6 와 CommonJS 의 export(내보내기) 차이점**

- CommonJS와 ES6라는 모듈 시스템에서는 `exports` 객체라는 개념이 존재한다.
- `exports`는 모듈로부터 내보내지는 데이터들을 담고 있는 하나의 객체이다.
- `NodeJS`프로젝트를 진행할때 `module.exports =`라는 모듈 내보내기 구문을 사용했을 것이다.
- `ES6의 export default` 구문이 CommonJS의 module.exports 구문 동작을 대체하기 위한 문법이라고 보면 된다.

<br/>

### require와 import의 주요 차이점

- `require()`는 CommonJS를 사용하는 node.js문이지만 `import()`는 ES6에서만 사용한다.
- `require()`는 파일 (어휘가 아님)에 들어있는 곳에 남아 있으며 `import()`는 항상 맨 위로 이동한다.
- `require()`는 프로그램의 어느 지점에서나 호출 할 수 있지만 `import()`는 `파일의 시작 부분에서만` 실행할 수 있다. (그렇지만 import 전용 비동기 문법으로 파일 중간에 모듈 불러오기를 할 수 있다.)
- 하나의 프로그램에서 두 키워드를 동시에 사용할 수 없다.
- 일반적으로 `import()`는 사용자가 `필요한 모듈 부분 만 선택`하고 로드 할 수 있기 때문에 더 선호된다. 또한 `require()`보다 성능이 우수하며 메모리를 절약한다.

<br/>

### 참고링크

[[NODE] 📚 require vs import 문법 비교 (CommonJS vs ES6)](https://inpa.tistory.com/entry/NODE-%F0%9F%93%9A-require-%E2%9A%94%EF%B8%8F-import-CommonJs%EC%99%80-ES6-%EC%B0%A8%EC%9D%B4-1)

[[JS] 📚 모듈 사용하기 import / export 완벽 💯 정리](<https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EB%AA%A8%EB%93%88-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-import-export-%EC%A0%95%EB%A6%AC?category=889099#%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80(HTML)%EC%97%90%EC%84%9C_%EB%AA%A8%EB%93%88_%EC%82%AC%EC%9A%A9_%ED%95%98%EA%B8%B0>)

<br/>

```toc

```

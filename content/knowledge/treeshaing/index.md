---
emoji: 🧹
title: 트리 쉐이킹(Tree Shaking)
date: '2022-12-09 18:30:00'
author: JungSany
tags: blog gatsby 트리쉐이킹 TreeShaking JungLog
categories: 개발지식 최적화
---

### 정의

- 애플리케이션을 트리의 각 노드들 즉, 일종의 나무와 같이 보고 나무를 흔들면 죽은 잎사귀들이 떨어지는 모습에 착안해 `Tree-shaking`이라고 명명하였다고 한다.
- 사용하지 않는 코드를 제거하는 기법

<br/>

### 방법

1. **import시, 필요한 것만 작성하여 사용**

- 사용하는 모듈로부터 `전체를 import 하지않고 사용하는 기능만 {} 부분적`으로 `import` 한다.

```jsx
// 모들 유틸을 가져온다.
// import utils from '../tensorflow/utils';

// 위의 방법처럼 모든 유틸이 아닌 유틸의 일부만 가져온다.
import { drawKeyPoints, drawSkeleton } from '../tensorflow/utils';

const drawCanvas = (pose, video, videoWidth, videoHeight, canvas, flag) => {
  const minPartConfidence = 0.7;
  const context = canvas.current.getContext('2d');

  canvas.current.width = videoWidth;
  canvas.current.height = videoHeight;

  drawSkeleton(pose.keypoints, minPartConfidence, context, flag);
  drawKeyPoints(pose.keypoints, minPartConfidence, context, flag);
};

export default drawCanvas;
```

<br/>

2. **Babel이 ES6 모듈을 commonjs module로 변환하지 않도록 조치(.babelrc 설정)**

- Babel은 대부분의 웹 애플리케이션에서 필수로 사용하는 도구 중 하나 이지만 `babel-preset-env`를 사용중에 있다면 `ES6`를 자동으로 `commonjs`로 `변환`한다.
- 좋은 기능이지만 트리 쉐이킹 관점에서는 그렇지 못하다고 한다.
- `.babelrc`에서 `commonjs`로 변환하지 못하도록 설정을 추가해 줘야한다.

```jsx
// “modules”: false를 지정하면, Babel이 디펜던시를 분석하고 사용되지 않는 디펜던시를 제거할 수 있다.
{
  "presets": [
    ["env", {
      "modules": false
    }]
  ]
}
```

- 또한 위와 같이 설정을 하면 웹팩은 코드를 광범위하게 호환되는 형식으로 변환하므로, 이 프로세스는 호환성 문제를 일으키지 않는다고 한다.

<br/>

3. **프로젝트의 모듈들이 Tree Shaking시, `Side Effect를 발생시키는지 여부를 확인`해야 한다.(package.json 설정)**

- 예측 가능한 입력을 가지고 동일하게 함수의 스코프 밖에 어떤 것도 변경하지 않으면서 예측 가능한 결과를 반환하는 모듈이 안전하게 트리쉐이킹 할 수 있는 Dependency이다.
- 이때 말하는 `**Side Effect**`의 예시는 아래와 같이 설명할 수 있을 것 같습니다.

```jsx
// 함수가 함수밖에 선언된 무언가를 변경할 때, 실행에 대한 Side Effect가 일어난다고할 수 있다.
let sheriffs = ['jung', 'gim', 'gong'];

// 이때 console을 찍으면 위에 배열안의 요소만 출력된다. ["jung", "gim", "gong"]
console.log(sheriffs);

const addSheriff = (sheriff) => {
  sheriffs.push(sheriff);
};

// 아래의 함수는 sheriffs의 배열을 변경할 때 Side Effect를 발생시킨다.
addSheriff('pack');

console.log(sheriffs); // ["jung", "gim", "gong", "pack"]
```

- 이때 웹팩을 설정하여 `Side Effect 옵션 체킹`이 가능하다.

```json
// "sideEffects": false를 설정하면 패키지와 Dependency들이 Side Effect를 발생하지 않게 막는다.
// Side Effect가 일어나는 것에 대해서 웹팩에서 판단하지않고 개발자가 위임받아 개발자가 알아서 처리하는 방식
{
    "name": "poke_poke_coaching",
    "version": "1.0.0",
    "sideEffects": false
}

// 특정 파일을 지정하여 선택적으로 사이드 이펙트의 영향을 받지 않도록 설정
{
    "name": "poke_poke_coaching",
    "version": "1.0.0",
    "sideEffects": [
        ".src/util/helpers/drawCanvas.js"
    ]
}
```

<br/>

### 생각

- 이러한 작업들이 서비스 개발 단계에 있어서 큰 영향을 미치진 않겠지만, 이런 디테일한 작업들이 습관화 된다면 결국 서비스의 퀄리티를 결정하는 요소라고 생각한다.
- 하지만 위의 방법으로 인해 문제가 생기는 경우가 있는가에 대해서는 더 찾아봐야 할 것 같다.
- 그리고 로데쉬 함수로도 트리쉐이킹 방법이 있다고 하니 추가적으로 알아봐야 될 것이 있는 것 같다.

<br/>

### 용어정리

Side Effect: `의도치않은 결과, 렌더링 중에 발생하는 것이 아니라 "측면"에서 발생하는 것` 또는 함수가 실행되면 함수 외부에 존재하는 값이나 상태를 변경시키는 등의 행위

- `절차형 프로그래밍`에서는 Side Effect가 흔히 존재하였고, 이는 프로그램을 읽기 어렵게하고 실행상태를 예측하기 어렵게 하며 개발비용을 증가 시켰다.
- 이에 따라 `선언형 프로그래밍` 방식으로 지향하게 되면서 Side Effect를 최소화 하는 방향으로 바뀌고 있다.
  - 선언형 프로그래밍 방식을 사용하게 되면 함수가 매개변수를 통해 연산을 수행하게 되면 함수에 작성된 로직대로 `일관되고 예측 가능한 결과과 반환`되기 때문이다.

<br/>

### 참고링크

[웹팩 Tree Shaking](https://webpack.kr/guides/tree-shaking/)

[TypeScript enum을 사용하지 않는 게 좋은 이유를 Tree-shaking 관점에서 소개합니다.](https://engineering.linecorp.com/ko/blog/typescript-enum-tree-shaking/)

[트리 쉐이킹으로 자바스크립트 페이로드 줄이기](https://ui.toast.com/weekly-pick/ko_20180716)

[트리쉐이킹으로 자바스크립트 사이즈 줄이기](https://yceffort.kr/2021/08/javascript-tree-shaking)

[Dependency Infection](https://medium.com/@jang.wangsu/di-dependency-injection-%EC%9D%B4%EB%9E%80-1b12fdefec4f)

[번들링도 미니멀리즘이 필요하다.](https://brunch.co.kr/@swimjiy/24)

<br/>

```toc

```

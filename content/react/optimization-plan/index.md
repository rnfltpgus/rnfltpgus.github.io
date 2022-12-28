---
emoji: 🪦
title: React 대규모의 서비스 최적화 방안
date: '2022-12-10 14:10:00'
author: JungSany
tags: blog gatsby 트리쉐이킹 TreeShaking react 대규모 서비스 최적화 방안 최적화방안 import webpack code splitting lazy suspense dynamic 동적 분할 JungLog
categories: React 개발지식 최적화
---

면접에서 기술질문으로 아래와 같은 질문을 받게되었다.

```
💡 React에서 component, page 마다 import가 많고 대규모의 서비스를 진행하는 경우 최적화하는 방법을 아는가?
```

나는 위와 같은 질문을 받고 `import`와 관련된 최적화 방안에 대해 질문한 것이라고 생각은 들었지만, 알지못하여서 답변으로는 아래와 같이 말을 하게 되었다.

아직까지는 대규모 프로젝트를 진행해본 경험이 없다. 하지만 2차례의 프로젝트를 진행하면서 최적화 방안으로 사용하거나 학습한 바로는 관심사의 분리나 단일 책임원칙을 적용하여, 컴포넌트가 최대한 한개의 기능을 수행하게 작성하거나 분리를 하고 공통으로 사용되는 코드는 분리하여, 코드의 양을 줄이고 최소화는 방법을 이야기하였다.

그 후 추가적으로 `React.memo`와 `useMemo`, `useCallback`에 대해 말을 하였지만 면접관의 질문에 대한 답변을 말한 것이 아니여서 이 글을 작성하게 되었다.

<br/>

### 지금 드는 생각

단순하게 최적화를 하기위해서는 코드를 적재적소에 사용한다. 라는 생각이 들게 되었는데 이유는 작성한 코드들이 항상 사용되는 것이 아니여서 필요할 경우에만 사용하면 된다 라는 생각이 들었다. 그래서 다음 면접시, 모르는 답안이 나올 경우 큰 맥락을 생각하여 큰 맥락이라도 이야기를 한다면 좀 더 좋은 인상을 주었을 것 같다고 생각하였다.

<br/>

### 그래서 대규모 서비스 최적화 방안에는 어떤 것이 있는가?

기본적으로 **웹 사이트의 속도를 올리기 위해서는 큰 파일의 용량을 줄여야하는데, 크게 코드의 크기를 줄이는 방법(트리쉐이킹 등)과 코드를 분할하는 방법이 있다.**

<br/>

1. **웹팩 설정을 이용한 코드 스플리팅(Code Splitting)**

- Webpack에서는 코드를 분할 하기위해, 목적 별로 여러 `Entry`로 분할이 가능하다.
  - 이것은 `하나의 큰 번들을 여러개의 작은 번들로 분할`해준다.
  - 풀어서 설명하면 페이지 별로 분할 할 수 있고, 특정 렌더링을 위한 코드로 분할하여 각페이지에서 사용할 수 있게 된다.
  - 하지만 `Entry`로 분할된 파일에는 모듈들이 모두 포함되어 파일의 크기가 커지게 되는데, `Webpack`의 `SplitChunksPlugin`을 이용하여 파일의 크기를 개선할 수 있다.

```jsx
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    another: './src/another-module.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        // commons에 설정한 값은 각각의 entry가 공통적으로 사용하여, 중복되는 module들을 chunk 파일로 추출하게 된다.
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
```

<br/>

2. **동적 코드 분할 Dynamic Import (Lazy, Suspense)**

- 대부분의 코드들은 사용자가 보는 첫 페이지에서는 필요하지 않다.
- 그렇기 때문에 첫 페이지 진입시 필요한 최소한의 코드만 다운 받고, 사용자가 특정 페이지나 위치에 도달할 때마다 코드로 로드 한다면, 성능을 올릴 수 있다.
- 정적 Module Import를 필요한 시점에 로드 할 수 있도록 도와준다.
- React에서는 `Lazy`를 이용하여, Component를 **사용되는 시점에 사용할 수 있도록 구현하는 방식**이 가능하다.
  <details>
  <summary>Lazy, Suspense 사용방법</summary>
  <div markdown="1">

  - `Lazy`는 `컴포넌트`를 렌더링할 때 `비동기적으로 로딩`하게 해주는 함수
  - `Suspense`는 코드 스플리팅되어 `로딩되지 않은 컴포넌트를 로딩하게 만들`어주거나 옵션으로 로딩이 끝나지 않았을 때 보여줄 `UI를 구성`할 수 있다.
    - `fallback`은 로딩중 일 때 보여줄 UI의 코드 또는 컴포넌트를 넣는 공간

  ```jsx
  import React, { lazy, Suspense } from 'react';

  // lazy
  const 변수명 = lazy(() => import(./컴포넌트경로));

  // Suspense
  <Suspense fallback={fallback 코드 또는 컴포넌트}>
    <컴포넌트>
  </Suspense>
  ```

  </div>
  </details>

```jsx
// src/Hello.js
const Hello = () => {
  return <div>Hello!!!</div>;
};

export default Hello;

// src/App.js
import { useState, lazy, Suspense } from 'react';

const Hello = lazy(() => import('./Hello'));

const App = () => {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };

  return (
    <div>
      <button onClick={onClick}>Code Splitting</button>
      <Suspense fallback={<div>Loding...</div>}>{visible && <Hello />}</Suspense>
    </div>
  );
};

export default App;
```

- 위의 코드로 테스트 진행 시, 네트워크 탭의 설정을 느린 3g로 바꾸어 확인한다면 Suspense fallback에 작성한 코드를 확인할 수 있다.

<br/>

3. **트리 쉐이킹 적용**

- [트리 쉐이킹(Tree Shaking)](https://rnfltpgus.github.io/knowledge/treeshaing/)

<br/>

### 용어정리

**Entry(입력 파일 경로)** : 명시된 파일을 기준으로 의존성 트리를 만들어 하나의 번들 파일을 만들어 낸다.

**Output (출력 디렉터리와 파일 이름)**: 다른 디렉터리와 파일로 변경할 수 있다. (설정은 항상 프로젝트 디렉터리 내부라는 보장이 없기 때문에 절대 결로로 한다는 점 주의해야 한다.)

**Loader (로더 등록)**: Css나 이미지, 웹폰트, JSX, VUE 등 다양한 종류의 파일을 함께 번들링할 수 있다.

**Plugin (플러그인 등록)**: 로더로 설정이 애매한 부분들을 커버할 수 있음

**chunk**: 애플리케이션 코드를 각각 다른 파일로 나눈 것

**SplitChunksPlugin:** 초기 청크를 변경하면 HTML 파일이 프로젝트를 실행하기 위해 포함해야 하는 스크립트 태크에 영향을 미치기 때문에 기본적으로 on-demand 청크에만 영향을 미침

- 원래 청크(및 그 안에 가저온 모듈)는 webpack 내부 그래프에서 부모-자식 관계로 연결되어있는데, `commonsChunkPlugin`은 중복되는 의존성을 피하고자 사용되었지만, 추가 최적화는 불가능하여 webpack v4부터 `optimization.splitChunks`를 위해 `CommonsChounkPlugin`은 사용하지 않음
- 다음 조건에 따라 자동으로 청크를 분할
  - 새 청크를 공유할 수 있거나 모듈이 `node_modules` 폴더에 있는 경우
  - 새 청크가 20kb보다 클 경우(min + gz 이전에)
  - 요청 시 청크로 로드할 때 최대 병렬 요청 수가 30개 이하일 경우
  - 초기 페이지 로드 시 최대 병렬 요청 수가 30개 이하일 경우
    마지막 두가지 조건을 충족하려고 할 때 더 큰 청크가 선호 됨

**Third-Party**: [써드 파티(3rd party)란?](https://rnfltpgus.github.io/3rd-party/)

**Tree Shaking:** [트리 쉐이킹(Tree Shaking)](https://rnfltpgus.github.io/treeshaing/)

**[코로케이션(colocation)](https://ko.reactjs.org/docs/faq-structure.html):** 자주 함께 변경되는 파일들을 같이 보관하는 것

**아토믹 디자인:** 원자 설계는 설계 시스템을 만드는 방법론이다. ( [원자](https://bradfrost.com/blog/post/atomic-web-design/#atoms) → [분자](https://bradfrost.com/blog/post/atomic-web-design/#molecules) → [유기체](https://bradfrost.com/blog/post/atomic-web-design/#organisms) → [템플릿](https://bradfrost.com/blog/post/atomic-web-design/#templates) → [페이지](https://bradfrost.com/blog/post/atomic-web-design/#pages))

- 클라이언트와 팀 구성원이 아토믹 디자인에서 배치된 단계를 단계별로 보면서 시스템의 개념을 더 잘 이해할 수 있다.

<br/>

### 참고링크

[SplitChunksPlugin | 웹팩](https://webpack.kr/plugins/split-chunks-plugin/)

[웹팩(Webpack) 기본 설정법 (Entry/Output/Loader/Plugins)](https://www.daleseo.com/webpack-config/)

[Webpack을 이용한 코드 스플리팅](https://godsenal.com/posts/Webpack-%EC%BD%94%EB%93%9C-%EC%8A%A4%ED%94%8C%EB%A6%AC%ED%8C%85/)

[React.lazy 및 Suspense를 사용한 코드 분할](https://web.dev/i18n/ko/code-splitting-suspense/)

[리액트 프로젝트 코드 스플리팅 정복하기](https://velog.io/@velopert/react-code-splitting)

[트리 쉐이킹으로 자바스크립트 페이로드 줄이기](https://ui.toast.com/weekly-pick/ko_20180716)

[[React] 코드 스플리팅(Code Splitting)](https://devowen.com/342)

[Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)

<br />

```toc

```

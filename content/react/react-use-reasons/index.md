---
emoji: 🚨
title: React란? 그리고 사용하는 이유와 단점
date: '2022-12-23 21:30:00'
author: JungSany
tags: blog gatsby JungLog log jung react use Reasons and Disadvantages
categories: React
---

# 리액트란?

Facebook에서 주도하여 개발한 `웹 어플리케이션의 UI를 효과적`으로 구축하기 위해 사용하는 `Javascript 기반` 라이브러리이다.

`React` 자체는 framework라 부를 수 있는 기준인 라우팅, 상태관리 기본 제공을 충족하지 못하기 때문에 `라이브러리이지만, React의 생태계는 framework`다.

<br/>

## React가 등장하게 된 이유는

이전에는 어프리케이션의 UI를 제어하기 위해서는 DOM을 변경시키기 위해 설정을 DOM을 선택하고 어떤 이벤트가 발생하면 변화를 주도록 설정을 해야했다.

유저와 상호작용이 많이 없는 웹 서비스에서는 상관이 크게 없었지만, 인터렉션이 자주 발생하고 변화가 많은 어플리케이션의 경우 힘들었고 코드 또한 난잡해지는 경우가 많이 생기게 되었다.

<br/>

## React의 특징은

**1. 선언적(Declarative)**

- 대화형 UI를 작성하기에 유리하다. 데이터가 변경되었을 때 효율적으로 렌더링을 수행할 수 있도록 한다.

**2. 컴포넌트 기반(Component-based)**

- 캡슐화된 컴포넌트가 스스로 상태를 관리하고 복잡한 UI도 효과적으로 구성할 수 있다.

**3. 한 번 배워서 어디에서나 사용 가능(Learn Once, Write Anywhere)**

- 기존 소스를 불필요하게 다시 작성하지 않고 새 기능을 개발할 수 있다.
- 컴포넌트를 재사용할 수 있다.

**4. Virtual DOM을 사용한다.**

- 실제 DOM과 같은 내용을 담고 있는 복사본의 DOM을 사용한다.(복사본은 자바스크립트 객체 형태로 메모리상에 저장되어 있음)
- 리엑트는 항상 두 개의 가상돔을 가지고 있다.(하나는 변경 이전의 내용을 담고 있고, 하나는 변경 이후에 보여질 내용을 담고 있음)

<br/>

## 장단점

- 장점

  - Component 하나로 관리가 가능하다.
  - 재사용성이 좋으며, 유지보수의 용이함, 그리고 코드 가독성을 높일 수 있다.
  - 성능이 뛰어난 가비지 컬랙터, 메모리 관리 기능을 지원한다.
  - Component 단위로 UI 수정이 수월하다.
  - 다른 framework나 라이브러리와 병행하여 사용이 가능하다. (이미 개발이 완료된 프로젝트에도 적절히 녹여내어 사용할 수 있는 확장성을 가지고 있다.)
  - Virtual DOM의 존재

    - React 컴포넌트가 리턴하는 값에 의해 만들어져 실제 보이고 있는 DOM과 비교해서 달라진 부위만 찾아내 바꾸게 된다.

      (컴포넌트 단위의 개발이 가능함)

  - React Native의 앱 개발 가능
    - 웹과 앱이 엄청난 연관성이 있어, React의 하나의 프로젝트만 잘끝나도 React Native로 App을 만드는 리소스가 덜 든다.
  - 수 많은 커뮤니티 정보
    - 막히는 부분과 오류에 대한 내용을 많은 커뮤니티를 통해서 극복이 가능함(다른 웹 프레임워크보다 커뮤니티가 활성화 되어 있음)

- 단점
  - 로딩시간이 길다.
  - 보여지는 부분에만 관여하기때문에 데이터 모델링, Routing, Ajax 등등의 기능을 제공하지 않는다.
  - view 외 기능들은 직접 구현하거나 라이브러리를 사용하여 구현해야 하기 때문에 JavaScript 배경지식이 부족할 경우에는 사용이 힘들다.
  - IE8 이하 버전들을 지원하지 않는다.
  - SPA특성상 초기에 모든걸 렌더링 후에 웹페이지가 뜬다. 그 과정이 느리다.

<br/>

## 작동원리, 재조정(Reconciliation) 일어나는 원리

![리액트 재조정 이미지](https://miro.medium.com/max/1400/1*JCrDk-N-wpPnE9j0GObItg.webp)

**React는 컴포넌트에서 prop이나 state가 변경될 때, 직전에 렌더링된 요소(원본 가상DOM)와 새로 반환된 요소(변경된 가상 DOM)를 비교하여 실제 DOM을 업데이트 할지 말지 결정해야 한다. 이 때 두 요소가 일치하지 않으면, React는 새로운 요소로 DOM을 업데이트 하는데, 이러한 `프로세스를 재조정(Reconciliation)`이라고 한다.**

**React는 `Virtual DOM을 사용`하여 효과적인 방법으로 UI를 빠르게 랜더링한다. 또 [단반향 데이터 흐름(Flux)](https://rnfltpgus.github.io/react/flux-architecture/)를 갖는다.**

**상태가 변경된 부분은 Diffing 알고리즘을 통해 파악하고, `Batch Update를 수행한다.` (16버전 이후로 부터는 Fiber 알고리즘을 통해 상태의 변경을 파악한다.)**

1. Virtual Dom이 리렌더링 된다.
2. 이전 Virtual Dom과 현재의 Virtual Dom을 비교를 한다.
3. Diffing 알고리즘(Fibar)을 이용하여 DOM 트리를 순회하며, 변화한 곳을 체크하는데 체크가 될 경우 아래 자식요소는 `휴리스틱 알고리즘`에 의해 판단을 하지않고 전부 변화되었다고 간주한다.
4. 변화된 곳이 모두 파악되면, 리액트는 효율적인 업데이트 방법인 `Batch Update`를 수행하여 변화된 데이터를 실제 DOM에 `한번에 적용`시킨다.

<br/>

### 효과적인 `재조정`이 이루어지기 위해서는?

- **부모 노드의 타입이 `다르면` 자식 노드는 `비교하지 않는게 설정`하거나 노드에 `key를 부여`하면 일일이 탐색하지 않고도 접근할 수 있다.**

<br/>

## 더 알면 좋을 것

- 우리가 자주 보는 instagram, facebook 같은 사이트의 `새로고침이 없이 변경`되는 모습, 마치 앱처럼 보이는 `동적인 웹 페이지` `SPA(Single Page Application)`, `CSR(Client Side Rendering)`을 사용한 페이지라고 할 수 있음
- `정적인 페이지란`? 웹 서버에 이미 저장되어 있는 HTML 문서를 클라이언트에게 전달하여 받은 페이지
- `동적인 페이지란`? 유저의 행동과 흐름에 따라 웹페이지의 구성을 달리해주어야 하는 페이지
- `정적인 페이지`를 만드는 것이 목적이라면 `프레임워크의 도움은 필요하지 않을`텐데, `요즘 트렌드`는 웹이 정적이고 단순한 페이지에서 벗어나 `복잡하고 동적으로 이루어져 있음`

<br/>

### DOM 이란?

![DOM 이미지](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/1200px-DOM-model.svg.png)

- 웹 페이지에 들어가있는 모든 엘리먼트를 트리형태로 작성한 것을 말함

<br/>

### Virtual Dom(이하 가상 DOM)이란?

![Virtual Dom 설멍 이미지](https://elmprogramming.com/images/chapter-5/5.3-virtual-dom/elm-runtime-virtual-dom.svg)

- 실제 DOM에 접근하여 조작하는 대신에 HTML DOM을 추상화시켜, 자바스크립트 객체로 표현된 복사본
- `수정사항이 여러 가지 있더라도`, `한 번만 렌더링을 일으킴`
- 객체를 `작은 단위로 쪼개어 작업`한다면, `렌더링 시` 발생하는 계산의 `연산비용을 줄일 수 있음`
- 하지만 `무조건 Virtual Dom이 빠른 것은 아니다.` `정보 제공만 하는 웹페이지라면` 인터랙션이 발생하지 않기 때문에 `일반 DOM의 성능이 더 좋을 수도 있음`

<br/>

## 용어사전

[Interaction(인터렉션)](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=kosoodream&logNo=220822811776): 둘 이상의 물체나 대상이 서로 영향을 주고 받는 일종의 행동, 즉 인터렉션은 단방향 서비스가 아니라 서로 교류가 있는 양방향 통신이나 서비스를 의미

Batch Update: `변경된 모든 엘리먼트들`을 `집단으로 한번에 적용` 시키는 것을 말한다.

Diffing 알고리즘: `변경된 내용이 화면에 새롭게 그려지기 이전`(실제 DOM이 변경되기 이전)에 리액트는 두 개의 가상돔을 `비교해서 정확히 어떤 부분이 바뀌었는지` 효율적으로 비교하여 `파악`하는 알고리즘

<br/>

## 참고링크

[리엑트 재조정](https://ko.reactjs.org/docs/reconciliation.html)

[Incremental DOM과 Virtual DOM 비교](https://ui.toast.com/weekly-pick/ko_20210819)

[React란? 특징과 장단점 파헤치기](https://velog.io/@jeromecheon/React%EB%9E%80-%ED%8A%B9%EC%A7%95%EA%B3%BC-%EC%9E%A5%EB%8B%A8%EC%A0%90-%ED%8C%8C%ED%97%A4%EC%B9%98%EA%B8%B0)

[[React] 리액트를 사용하는 이유](https://gurtn.tistory.com/96)

[리액트의 장점과 단점](https://velog.io/@dbfudgudals/%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%9D%98-%EC%9E%A5%EC%A0%90%EA%B3%BC-%EB%8B%A8%EC%A0%90)

[DOM과 Virtual Dom이란?](https://www.howdy-mj.me/dom/what-is-dom)

[별코딩 - 버츄얼돔](https://www.youtube.com/watch?v=gc-kXt0tjTM&list=PLZ5oZ2KmQEYjVH2ie-sZJnbEE6B-uCVIh&index=4&t=7s)

<br/>

```toc

```

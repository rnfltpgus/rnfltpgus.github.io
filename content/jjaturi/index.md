---
emoji: 🍄
title: 짜투리 한줄두줄
date: '2023-02-06 10:25:00'
author: JungSany
tags: blog gatsby JungLog log jung jjaturi
categories: 짜투리
---

## ⏰ 시간이 생길 때, 긴글로 작성 예정

### `REST API`는 동사로 작성하는 것보다 명사로 작성하는 것이 좋다.

<br/>

### `딥페이크`로 딥러닝을 통하여 시각화를 구현해야 되는 분야에서 도움이될 것 같다.

<br/>

### `HTML` 페이지 `소스 코드에 언어를 설정해주는 이유는` 검색엔진이 좀 더 구성된 소스코드의 언어를 잘 읽게 해주기 위함이다.

<br/>

### `절대경로`는 어떠한 웹페이지나 파일이 가지고 있는 고유한 경로, `상대경로`는 현재 위치한 곳을 기준으로 작성된 경로이다.

<br/>

### `__filename`은 file 명을 포함한 절대경로, `__dirname`은 file명을 제외한 절대 경로이다.

<br/>

### `시퀄라이즈`는 DB작업을 쉽게 할 수 있도록 도와주는 ORM 라이브러리이며, `ORM이란` 자바스크립트 객체와 관계형 데이터베이스를 서로 연결해주는 도구이다.

<br/>

### document와 window 사용법

- $(document).scroll() 스크롤이 변경될때마다 이벤트를 발생시킴
- $(document).height() 현재 페이지(문서)의 높이(전체 높이)
- $(window).height() 윈도우의 크기(화면의 높이)
- $(window).scrollTop() 브라우저의 스크롤 위치값(스크롤의 top이 위치하고 있는 높이를 의미)

<br/>

### Jquery

- $(function()) 대신 $(document).ready() 를 권장하는 이유는 같은 의미를 지니고 기능을 하나 $(window).load()함수와 구분을 짓기위해 $(document).ready() 를 사용하는 것이 좋다.

<br/>

### [Ajax란?](https://scoring.tistory.com/entry/AJAX란-JQuery를-이용한-AJAX사용법) 자바스크립트를 이용해 서버와 브라우저가 비동기 방식으로 데이터를 교환할 수 있는 통신기능으로 클라이언트와 서버간에 XML 데이터를 주고받는 기술이다.

<br/>

### 클라이언트(브라우저)와 웹서버간의 통신시, 클라이언트는 웹서버에 `request(요청)` 메시지를 보내고 웹서버는 `response(응답)` 메시지를 보낸다.

<br/>

### Github

- 협업 작업시, 충돌 여부를 줄이기 위해서 아래의 명령어를 기억하자. (습관화가 중요 피알전이나 커밋전에)
    - git merge
    - git pull
    - git fetch
    - git push
- 패치까지 적용

<br/>

### CSS

#### 크기에 대해서

- px는 절대값 em, %은 상대값
- 화면의 크기를 동적으로 대응하기 위해 % 단위로 자주 사요하게 되는데, Viewport 단위는 상대적인 단위로 현재 브라우저의 가로와 세로 값이라고 볼 수 있다.

<br/>

### 프리티어 설정 되게 하는 방법

1. VSCode 기본 formatter prettier로 설정하기

- extension 에서 prettier를 설치 후 setting tab을 연다.
- 검색 창에 "Default Formatter" 을 검색한 뒤 옵션에서 "Prettier - Code formatter" 를 선택한다.
- 이후 VSCode의 기본 formatter는 prettier로 설정 된다.

2. Format on save 사용 체크하기

- 검색 창에 "Format on save" 를 검색한 뒤 체크 박스를 체크한다.
- 이후 파일을 저장 할 때마다 prettier가 자동으로 적용된다 :)

<br/>

### datagrip
- 명령문 실행: Cmd/Ctrl+Enter
- 인텐션 액션 표시: Opt+Enter/Alt+Enter
- 전체 검색: Shift 두 번 누르기
- 최근 파일: Cmd/Ctrl+E
- 새 콘솔 열기: Cmd+Shift+L/Ctrl+Shift+Q
- 코드 서식 다시 지정: Cmd+Opt+L/Ctrl+Alt+L
- 모든 도구 창 숨김/복원: Cmd/Ctrl+Shift+F12
- 기록에서 붙여넣기: Cmd/Ctrl+Shift+V
- 리팩터링 | 이름 변경: Shift+F6
- 코드 생성: Cmd+N/Alt+Insert

<br/>

### sql
- ON - JOIN이 실행되기 전
- WHERE - JOIN이 실행된 후
- LEFT JOIN 합집합
- INNER JOIN 교집합
- 결과가 같다면 LEFT JOIN 대신 INNER JOIN을 사용
#### 쿼리문을 작성할때
- sql문법을 작성시, 띄어쓰기나 개행을 안할 경우 예약어랑 일반문자랑 섞여서 sql 문 즉 문법이 깨질수 있다.

<br/>

### 일반함수와 화살표함수의 차이
- 나중에 정리
https://velog.io/@yjh8806/화살표-함수와-일반-함수의-차이

<br/>

```toc

```

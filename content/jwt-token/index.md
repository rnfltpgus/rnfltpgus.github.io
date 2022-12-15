---
emoji: ⚓️
title: JWT는 무엇이고? 어디에 저장해야할까? - localStorage vs cookie
date: '2022-12-15 21:10:00'
author: JungSany
tags: blog gatsby JungLog log jung jwt token local storage cookie
categories: 개발지식
---

JWT는 웹표준으로서 두 개체에서 JSON 객체를 사용하여 가볍고 자가수용적인 방식으로 정보를 안전성 있게 전달함

<br/>

### 구성요소

- JWT는 `.`을 구분자로 3가지 문자열로 구성되어 있음
  - 헤더(Header)
    - typ와 alg 두가지의 정보를 가지고 있는데, `typ`는 `토큰의 타입`을 지정하고 `alg`는 `해싱 알고리즘`을 지정함
    - typ에는 JWT이기 때문에 JWT의 값이 들어가며, alg에는 기본적으로 HMAC, SHA256, RSA가 사용되며, 토큰을 검증 할 때 사용되는 signature부분에서 사용
    ```jsx
    {
    	"typ" : "JWT",
    	"alg" : "HS256"
    }
    ```
  - 정보(Payload)
    - Payload 부분에는 `토큰을 담을 정보가 들어있음`
    - 정보의 한 `조각`을 `클레임(Claim)`이라고 부르고, `name / value의 한 쌍`으로 이루어짐
    - 클레임의 종류는 총 3가지로 등록된 클레임 / 공개 클레임 / 비공개 클레임이 있음
  - 서명(Signature)
    - 헤더의 인코딩값과 정보의 인코딩값을 합친 후 주어진 비밀키로 해쉬를 하여 생성’

<br/>

### 로그인 인증시 JWT 사용

- JWT 토큰 사용시, 유효기간이 짧거나 길면 작업이 번거롭거나 보안에 취약함
  - 이를 보안하기 위해 `Refresh Token`이 나오게 되었고, `Access Token`의 유효기간이 만료되었을 때, `Refresh Token`이 새로 발급해주는 형식
  - 이러한 방식이 `완벽하지는 않지만`, `탈취` 당할 가능성이 `적음`
    ![jwt 토큰 동작 원리](https://camo.githubusercontent.com/0fcc5fdd7d589d975360d4efca148bc26587b912/68747470733a2f2f7374617469632e7061636b742d63646e2e636f6d2f70726f64756374732f393738313738343339353430372f67726170686963732f4230333635335f30385f30322e6a7067)

<br/>

### JWT 토큰은 어디에 저장을 해야 할까?

- 정답은 없지만, 일단 저장은 `LocalStorage`와 `Cookie`에 저장할 수 있음
- LocalStorage
  - CSRF 공격에 안전
    - 자동으로 request에 담기는 쿠키와는 다르게 Js코드에 의해 헤더에 담기므로 xss를 뚤지 않는 이상 공격자가 정상적인 사용자인 척 request를 보내기가 어렵움
  - XSS에 취약
    - 공격자가 LocalStorage에 접근하는 Js코드 한줄만 주입하면, 내 집처럼 드나들 수 있음
- Cookie
  - XSS 공격으로부터 LocalStorage에 비해 안전
    - 쿠키의 httpOnly 옵션을 사용하면 Js에서 쿠키에 접근 자체가 불가능함(httpOnly 옵션은 서버에서 설정할 수 있음)
    - 하지만 XSS 공격으로부터 완전히 안전한 것은 아니다. Js로 request를 보낼 수 있으므로 자동으로 request에 실리는 쿠키의 특성 상 사용자의 컴퓨터에서 요청을 위조할 수 있음
    - 공격자가 귀찮을 뿐이지 XSS가 뚤린다면 httpOnly cookie도 안전하지 않음
  - CSRF 공격에 취약
    - 자동으로 http request에 담아서 보내기 때문에 공격자가 request url만 안다면 사용자가 관련 link를 클릭하도록 유도하여 request를 위조하기 쉬움

<br/>

### 알아야할 지식

- XSS(Cross Site Scription)
  - XSS라고 부리는 이유는 CSS가 이미 약자가 있기 때문이고 code injection attack이라고 함
  - XSS도 다양한 공격 방법이 있는데, 간단하게 `공격자가 의도하는 악의적인 Js코드를 피해자 웹 브라우저에서 실행시키는 것`으로 알면 됨
  - 이 방법으로 피해자 브라우저에 저장된 중요 정보들을 탈취 가능하게 할 수 있음
- CSRF(Cross Site Request Forgery)
  - 정상적인 request를 가로채 피해자인 척 하고 백엔드 서버에 변조된 request를 보내 악의적인 동작을 수행하는 공격을 의미(피해자 정보 수정, 정보열람 등)

<br/>

### 참고링크

[JWT는 어디에 저장해야할까? - localStorage vs cookie](https://velog.io/@0307kwon/JWT%EB%8A%94-%EC%96%B4%EB%94%94%EC%97%90-%EC%A0%80%EC%9E%A5%ED%95%B4%EC%95%BC%ED%95%A0%EA%B9%8C-localStorage-vs-cookie)

[JWT (JSON Web Token) | 👨🏻‍💻 Tech Interview](https://gyoogle.dev/blog/web-knowledge/JWT.html)

<br/>

```toc

```

---
emoji: 📱
title: PWA에 대하여
date: '2022-12-23 20:42:00'
author: JungSany
tags: blog gatsby JungLog log jung pwa web app 웹앱
categories: 개발지식
---

![PWA 이미지](https://www.weblineindia.com/assets/img/og-img/progressive-web-app-development_og.jpg)

## PWA란?

- **네이티브 앱을 개발하고 유지보수하는 것은 상당히 길고 복잡한 과정을 거치며, 상당한 비용이 발생한다. 그래서 접근성이 높은 웹에서 사용하는 기술과 플랫폼 API를 사용할 수 있는 네이티브 앱의 장점을 결합한 것이 `프로그레시브 웹 앱(Progressive Web App)`이다.**
- PWA는 HTML, CSS, Javascript와 같은 웹 기술로 만들어지며, 대표적인 예시 케이스로는 트위터, 스타벅스, 우버 등이 있다.

<br/>

## 웹 앱을 PWA로 식별되기 위한 주요 구성요소

1. Responsive Web Design(반응형) : web page 속도 및 기능, 사용자 편의성 증대를 위해 다양한 Devices에서 반응형 Layout을 제공하도록 반응형 디자인을 제공할 수 있어야 한다.

2. **Manifest File(설치파일)** : 기기의 홈화면에서 icon을 생성하는 기능을 제공함으로써 App store를 통하지 않고도 Web App을 install 가능하게 해야한다. 제이슨(JSON, 용량이 적은 데이터를 교환하기 위한 형식) 파일이며, **PWA가 표시되고 기능하는 방식에 대한 정보들이 포함되어 있다.**

3. Background Sync : Background Sync를 통해 인터넷이 끊긴 상태에서 발생하는 request를 저장했다가 인터넷이 활성화되면 해당 요청을 전송하는 기능을 제공해야한다.

4. Push Notifications : App이 닫힌 상태에서도 Push Notification을 수신할 수 있고 재 참여 가능(Re-engageable), 새 컨텐츠가 사용 가능할 때마다 알림을 보낼 수 있어야 한다

5. Service Worker : Background Process에서 작동하므로 App이 종료된 상태에서도 작동해야 한다. 그럼으로 서비스 작업자는 네트워크와 관련된 요청의 처리를 도와주기 때문에, 복잡한 작업을 수행할 수 있음

6. Media API : Device Camera와 Device Microphone에 접근 가능하게 해야한다.

7. Geolocation API : User Location 정보에 접근 가능하게 해야한다.

8. 발견 가능, 따라서 컨텐츠를 검색 엔진을 통해 찾을 수 있어야 한다.

9. 연결 가능, 따라서 간단하게 URL을 전송해 공유할 수 있어야 한다.

10. 점진적, 따라서 최신 브라우저의 모든 기능은 사용할 수 없지만 이전 브라우저의 기본 기능은 여전히 사용할 수 있어야 한다.

11. 보안 연결(HTTPS): PWA는 신뢰할 수 있는 연결 상태에서만 동작하기 때문에, 보안 연결을 통해서 서비스를 제공해야 한다. 따라서 사용자와 앱 사이의 연결이 사용자와의 민감한 데이터에 접근하려는 모든 제3자로부터 안전해야 한다.

<br/>

## 장/단점

### 장점

- 별도의 SDK가 필요하지 않다.
- 앱스토어에 출시하기 위해 별도의 프로세스를 거치지 않아도 된다.
- 웹으로 만들어진 것에 대해 적은 리소스를 투입하여, 앱으로 띄우며 비용이 저렴하고 유지관리해야하는 코드베이스가 적다.
- 오프라인에서도 동작한다.
- **PWA는 시멘틱 마크업을 사용할 수 있어, 검색엔진 최적화(SEO)가 좋아 사용자들의 높은 참여를 이끌어 낼 수 있음(RN의 경우 앱스토어 최적화(ASO))**
- 배포시, 번거로운 절차들을 비켜갈 수 있다.
- 앱스토어가 필요하지 않고, 설치 또한 필요하지 않다.

<br/>

### 단점

- **네이티브 앱과 비슷하다고 하지만 네이티브의 성능을 따라갈 수 없다.**
- 네이티브의 기능을 모두 사용할 수 없고, OS에서 지원하지 않는 기능이라면 PWA에서도 사용할 수 없다.
- 서비스 작업자의 API(응용프로그램 인터페이스)를 지원하는 환경이 플랫폼마다 상이하여, 푸시 알림을 사용하는 부분에서 불편하다.

<br/>

## 결론

**네이티브 앱이나 PWA는 모두 매끄러운 사용자 경험(UX)를 제공하기 위한 방식으로 각자 나름의 장단점이 있지만 진행해야되는 프로젝트의 목표와 현재 가진 자원을 고려하여 선택해야될 것 같다.**

**그리고 `PWA를 적용하기 위해서는 필수`로 아래의 사항이 있어야 한다.**

- 웹코드로 만든 웹 사이트나 웹 어플리케이션이 있어야 한다.
- HTTPS를 이용하여 서비스를 제공해야 한다.
- 어플리케이션 메니페이스트가 있어야 한다.(JSON으로 되어있고, 어플리케이션에 대한 정보가 있는 파일)
- 서비스 워커가 있어야 한다.

<br/>

## 용어사전

**SDK(소프트웨어 개발 키트)** : 개발자에게 다른 프로그램에 추가하거나 연결할 수있는 커스텀 앱을 제작할 수 있는 기능을 제공하는 도구 모음

**Service Worker** :Client의 Browser에 설치되며 Background Process로 동작하는 Script Code, 서버로 가는 Request를 가로채는 Proxy로 작동하기 때문에 Web App에 다양하고 유용한 기능을 제공

<br/>

## 참고링크

[MDN - 프로그레시브 웹 앱 소개](https://developer.mozilla.org/ko/docs/Web/Progressive_web_apps/Introduction)

[Tecoble - PWA에 대해 알아보자](https://tecoble.techcourse.co.kr/post/2021-08-11-progressive-web-app/)

[드림코딩엘리 - PWA](https://www.youtube.com/watch?v=FEBkne7Nyu4)

[[PWA] 1. Progressive Web Apps 이란?](https://www.happykoo.net/@happykoo/posts/173)

[프로그레시브 웹 앱(PWA)이란 무엇이며, 왜 필요한가? - wishket](https://blog.wishket.com/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%A0%88%EC%8B%9C%EB%B8%8C-%EC%9B%B9-%EC%95%B1pwa%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B4%EB%A9%B0-%EC%99%9C-%ED%95%84%EC%9A%94%ED%95%9C%EA%B0%80/)

[PWA vs 네이티브 앱, 어떤 것을 선택해야 할까?](https://blog.wishket.com/pwa-vs-%EB%84%A4%EC%9D%B4%ED%8B%B0%EB%B8%8C-%EC%95%B1-%EC%96%B4%EB%96%A4-%EA%B2%83%EC%9D%84-%EC%84%A0%ED%83%9D%ED%95%B4%EC%95%BC-%ED%95%A0%EA%B9%8C/)

<br/>

```toc

```

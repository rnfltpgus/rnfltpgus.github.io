---
emoji: 📱
title: PWA에 대하여
date: '2022-12-23 20:42:00'
author: JungSany
tags: blog gatsby JungLog log jung pwa web app 웹앱
categories: 개발지식
---

## PWA란?

- 네이티브 앱을 개발하고 유지보수하는 것은 상당히 길고 복잡한 과정을 거치며, 상당한 비용이 발생한다. 그래서 웹에서 사용하는 기술과 네이티브 앱의 장점을 결합한 것이 `프로그레시브 웹 앱(Progressive Web App)`이다.
- PWA는 HTML, CSS, Javascript와 같은 웹 기술로 만들어지며, 대표적인 예시 케이스로는 트위터, 스타벅스, 우버 등이 있다.

<br/>

## 주요 구성요소

PWA의 주요 구성요소 3가지는 보안 연결, 서비스 작업자, 매니페스트 파일이 있다.

- **보안 연결(HTTPS): PWA는 신뢰할 수 있는 연결 상태에서만 동작하기 때문에, 보안 연결을 통해서 서비스를 제공해야 한다.**
  - 이건 단지 보안상의 이유 때문만은 아니고, 사용자들의 신뢰를 얻기 위해서도 아주 중요한 부분
- **서비스 작업자(service worker): 서비스 작업자는 백그라운드에서 실행되는 스크립트**
  - 서비스 작업자는 네트워크와 관련된 요청의 처리를 도와주기 때문에, 복잡한 작업을 수행할 수 있음
- **매니페스트 파일(manifest file, 설정 파일)**: 제이슨(JSON, 용량이 적은 데이터를 교환하기 위한 형식) 파일이며, **PWA가 표시되고 기능하는 방식에 대한 정보들이 포함되어 있다.**
  - 여기에서는 PWA의 이름, 설명, 아이콘, 색상 등을 지정할 수 있음

<br/>

## 장/단점

### 장점

- 앱스토어에 출시하기 위해 별도의 프로세스를 거치지 않아도 된다.
- 웹으로 만들어진 것에 대해 적은 리소스를 투입하여, 앱으로 띄우며 비용이 저렴하고 유지관리해야하는 코드베이스가 적다.
- 오프라인에서도 동작한다.
- **PWA는 시멘틱 마크업을 사용할 수 있어, 검색엔진 최적화(SCO)가 좋아 사용자들의 높은 참여를 이끌어 낼 수 있음(RN의 경우 앱스토어 최적화(ASO))**
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

<br/>

## 참고링크

[프로그레시브 웹 앱(PWA)이란 무엇이며, 왜 필요한가? - wishket](https://blog.wishket.com/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%A0%88%EC%8B%9C%EB%B8%8C-%EC%9B%B9-%EC%95%B1pwa%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B4%EB%A9%B0-%EC%99%9C-%ED%95%84%EC%9A%94%ED%95%9C%EA%B0%80/)

[PWA vs 네이티브 앱, 어떤 것을 선택해야 할까?](https://blog.wishket.com/pwa-vs-%EB%84%A4%EC%9D%B4%ED%8B%B0%EB%B8%8C-%EC%95%B1-%EC%96%B4%EB%96%A4-%EA%B2%83%EC%9D%84-%EC%84%A0%ED%83%9D%ED%95%B4%EC%95%BC-%ED%95%A0%EA%B9%8C/)

<br/>

```toc

```
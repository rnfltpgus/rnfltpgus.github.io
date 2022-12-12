---
emoji: 🎰
title: CDN 서버를 이용한 이미지 최적화
date: '2022-12-11 15:40:00'
author: JungSany
tags: blog gatsby JungLog log jung png svg cdn aws 이미지 최적화 server
categories: 개발지식
---

### CDN이란?

- **콘텐츠 전송 네트워크(CDN)는** 데이터 사용량이 많은 애플리케이션의 웹 페이지 로드 속도를 높이는 상호 연결된 서버 네트워크
- 동영상 또는 웹 사이트 이미지와 같은 대용량 파일을 로드하는 경우 시간이 오래 걸릴 수 있는데, 클라이언트와 웹 사이트 서버 간에 `CDN이라는 중간 서버`를 두어 효율성을 높일 수 있다.
- CDN 서버를 통해서 `웹 서버에 대한 웹 트래픽을 줄이고(콘텐츠 가용성 제고), 대역폭 소비를 줄이며(비용절감), 애플리케이션의 사용자 환경을 개선(페이지 로드 시간 단축), 웹 사이트 보안 강화` 를 할 수 있음

<br/>

### 이미지 CDN의 URL을 이용하여 최적화 옵션을 나타내는 방법

이미지 CDN에서의 URL에는 이미지에 대한 변환 및 최적화에 대한 중요한 정보를 전달하게 되는데, URL의 형식은 보통 아래와 같다.

![url 예시](https://velog.velcdn.com/images%2Fhustle-dev%2Fpost%2Fafd1871e-e114-452b-a99b-6633331ce783%2Fimage.png)

- Origin: 도메인(자체 도메인 또는 이미지 CDN의 도메인이 있을 수 있다.)
- Image: 이미지(일반적으로 필요할 때 기존 위치에서 이미지를 자동으로 검색하도록 구성할 수 있다.)
- Security key: 이미지의 새 버전마다 고유한 보안 키를 필요로 하게하여, 다른 사람이 이미지의 새 버전을 만드는 것을 방지
- Transformations: 다양한 이미지 변환 제공(아래와 같이 매개변수를 기반으로 이미지 변화가 가능하다는 말로 생각할 수 있을 것 같다.)

![dns서버 이미지 스타일링 예시](https://web-dev.imgix.net/image/admin/OIF2VcXp8P6O7tQvw53B.jpg?auto=format&w=1600)

<br/>

### 위 방법 외에 이미지 최적화 방법으로는 아래의 방법들이 있다.

- 이미지 `폭`을 조절
- 최적화된 이미지 `포맷`을 사용
- `<img>`에 `width, height` 값을 선언해 `Reflow`를 방지
- `여러 버전의 이미지`를 제공
- 이미지 크기 조절 `툴`을 사용
- `CSS Sprite` 기법을 사용
- `lazy loading`을 활용

<br/>

### 용어정리

[**PNG와 SVG**](https://rnfltpgus.github.io/proxy/png-svg)

<br/>

### 참고링크

[CDN이란 무엇인가요? - CDN 설명 - AWS](https://aws.amazon.com/ko/what-is/cdn/)

[이미지 CDN을 사용하여 이미지 최적화](https://web.dev/i18n/ko/image-cdns/)

[웹 성능을 위한 이미지 최적화](https://velog.io/@hustle-dev/%EC%9B%B9-%EC%84%B1%EB%8A%A5%EC%9D%84-%EC%9C%84%ED%95%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%B5%9C%EC%A0%81%ED%99%94)

<br/>

```toc

```

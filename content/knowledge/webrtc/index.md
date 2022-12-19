---
emoji: 🗞️
title: WebRTC에 대해서
date: '2022-12-19 16:40:00'
author: JungSany
tags: blog gatsby JungLog log jung web rtc real-time
categories: 개발지식
---

## WebRTC(Web Real-Time Communications)란?

- webRTC는 서버를 최대한 거치지 않고 p2p로 브라우저나 단말 간에 데이터를 주고받는 기술의 웹 표준이다.
- 웹에서 실시간 미디어 스트림을 송수신할 수 있는 유일한 표준이고 또 유일한 p2p 표준이기도 하다.
- **쉽게 말하자면** 웹 어플리케이션(최근에는 Android 및 IOS도 지원) 및 사이트들이 별도의 소프트웨어 없이 음성, 영상 미디어 혹은 텍스트, 파일 같은 데이터를 브라우져끼리 주고 받을 수 있게 만든 기술이다.

![WebRTC 통신 원리](https://cdn.ttgtmedia.com/rms/onlineimages/how_webrtc_works-f.png)

<br/>

## 위의 그림을 통한 설명

보통 두 기기가 실시간으로 소통하기 위해서는 WebRTC API에서 제공하는 `MediaStream, RTPeerConnection, RTCDataChannel`과 API들이 적절하게 데이터를 교환할 수 있도록 처리해 주는 과정인 `Signaling`이라는 과정을 따로 설정해야 한다.

- **WebRTC**를 사용해 연결을 맺고, peer의 기기에서 미디어를 가져와 교환한다.
- **Signaling**을 통해 통신할 peer간 정보를 교환할 수 있다.(네트워크 정보, capability 정보, 세션 수립 등)
  - **Signaling의 구성하는 방법**은 `XHR와 Channel API`를 이용하거나 `Socket.io`를 이용하는 방법 등이 있다.
  - Session control messages: 통신의 초기화, 종료, 그리고 에러 리포트
  - Network configuration : 외부에서 보는 내 컴퓨터의 IP 주소와 포트는 뭐지?(ICE 프레임워크를 사용해서 서로의 IP 와 포트를 찾는 과정)
  - Media capabilites : 내 브라우저와 상대 브라우저가 사용 가능한 코덱, 해상도 등'

<br/>

### 용어사전

- p2p(동등 계층간 통신망): peer-to-peer network의 줄임말로 소수의 서버에 집중하기보다는 망구성에 참여하는 기계들의 계산과 대역폭 성능에 의존하여 구성되는 통신망
- MediaStream: 카메라와 마이크 등의 데이터 스트림 접근
- RTCPeerConnection: 암호화 및 대역폭 관리 및 오디오, 비디오의 연결
- RTCDataChannel: 일반적인 데이터의 P2P 통신
- Signaling:통신을 조율할 메시지를 주고 받는 일련의 과정 or RTCPeerConnection들이 적절하게 데이터를 교환할 수 있게 처리해 주는 과정
- Caller: 요청을 받거나 주는 대상? (기기의 앱, 브라우저 간에)

<br/>

### 참고링크

[WebRTC 공홈](https://webrtc.org/)

[WebRTC mdn](https://developer.mozilla.org/ko/docs/Web/API/WebRTC_API/Protocols)

[WebRTC 응용 서비스를 개발하는 2가지 방법](https://tech.kakaoenterprise.com/121)

[WebRTC란?](https://medium.com/@hyun.sang/webrtc-webrtc%EB%9E%80-43df68cbe511)

[Build the backend services needed for a WebRTC app](https://web.dev/webrtc-infrastructure/)

[실시간 통화 어떻게 하는 거지 : WebRTC 기초](https://juneyr.dev/webrtc-basics)

[WebRTC (Web Real-Time Communications)](https://www.techtarget.com/searchunifiedcommunications/definition/WebRTC-Web-Real-Time-Communications)

[p2p](https://ko.wikipedia.org/wiki/P2P)

[NAT, ICE, STUN, TURN 이란?](https://gh402.tistory.com/45)

<br/>

```toc


```

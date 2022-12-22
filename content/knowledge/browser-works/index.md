---
emoji: 🌎
title: 브라우저 동작 원리 및 요청 흐름
date: '2022-12-22 15:35:00'
author: JungSany
tags: blog gatsby JungLog log jung web browser movement principle blur
categories: 개발지식
---

![각각의 브라우저 이미지](https://t1.daumcdn.net/cfile/tistory/2633363B52F0AAA917)

## 브라우저란 무엇인가?

- **브라우저의 주요 기능은 사용자가 선택한 자원을 서버에 요청하고 브라우저에 표시하는 것이다.**
- **`자원`은 보통 HTMl 문서지만 PDF나 이미지 또는 다른 형태일 수 있다.**
- **`브라우저`는 HTMl과 CSS 명세에 따라 HTML 파일을 해석해서 표시한다. → 명세는 웹 표준화 기구인 W3C에서 정한다.**

<br/>

## 브라우저의 기본 구조

![브라우저의 기본 구조](https://blog.kakaocdn.net/dn/99dKj/btqIl9g441B/2zBd7Ya63bkgHiSdM8Vm4k/img.png)

<br/>

## 브라우저에 URL 입력 후 일어나는 전체적인 과정(네트워크 상에서의 전체적인 흐름)

![url 입력 후 일어나는 네트워크 상에서의 전체적인 흐름 이미지](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F993D344D5C2347F62E)

1. 브라우저에서 URL을 해석 후, DNS 서버를 통하여 URL(www.google.com)을 호스팅하는 서버의 IP 주소를 찾는다.
2. 찾은 ip 주소와 url 내부의 port 정보를 바탕으로 **HTTP 요청 메세지**를 생성한다.

   `HTTP Method` + `path부터 url 정보` + `HTTP 버전 정보` + `Host 정보` (HTTP 요청 메시지 구성)

   ![HTTP GET 요청 메시지 이미지](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a0b0e375-1b42-4034-a525-583fb1498d73/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-10-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_4.29.44.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221222T065622Z&X-Amz-Expires=86400&X-Amz-Signature=b9e2a185ce9a482d790e9282827082109ba6ce049fa73b002a31564ea8b1e0ce&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA%25202022-10-23%2520%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE%25204.29.44.png%22&x-id=GetObject)

3. 생성된 HTTP 요청 메시지는 소켓 라이브러리를 통해 TCP / IP로 전달되는데, 데이터를 전달하기 이전에 3-way-handshake 방식으로 TCP / IP를 연결한 뒤에 메시지를 전달한다.

   ![3-way-handshake 방식 이미지](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4220179e-94b5-4b3f-b555-7dc1663b3e23/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-10-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_4.33.11.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221222T065640Z&X-Amz-Expires=86400&X-Amz-Signature=05704c68dd449d6599f4de43a97102785274271845afcda0b3c65f365a67f25f&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA%25202022-10-23%2520%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE%25204.33.11.png%22&x-id=GetObject)

4. TCP / IP 에서 HTTP 요청 메시지를 포함하는 TCP / IP 패킷을 생성한다.
5. 네트워크 라우팅을 통해 목적지 서버로 요청 패킷이 도달한다.
6. TCP / IP 패킷 내부의 HTTP 요청 메시지를 해석한 뒤, 이에 맞는 HTTP 응답 메시지를 만들어 낸다.

   ![HTTP POST 응답 메시지 이미지](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/602b6b33-9c71-4d04-804a-85caffe036bc/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-10-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_4.35.26.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221222T065722Z&X-Amz-Expires=86400&X-Amz-Signature=875bd1267d4fb530b32752f4398d0ea3ed8cb26fd8fd949cdec393e0704a2a9e&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA%25202022-10-23%2520%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE%25204.35.26.png%22&x-id=GetObject)

   `HTTP 버전` + `상태코드` + `Content-Type(응답 데이터 형식)` + `Content-Length(응답 데이터의 길이)` + `데이터`

7. 서버가 클라이언트로 동일한 방식으로 응답 메시지를 전송하면, 클라이언트가 응답 데이터 HTML을 `렌더링`하여 사용자에게 보여준다.

<br/>

## 렌더링 엔진이란?

![렌더링 동작 과정](https://velog.velcdn.com/images/soopy368/post/485f811b-3601-4248-aff3-d773d54af9a1/image.png)

- `렌더링 엔진`은 **요청 받은 내용을 브라우저 화면에 표시하는 역할**을 한다.
- 브라우저마다 사용하는 렌더링 엔진이 다르므로 크로스 브라우징 이슈가 종종 발생하곤 한다.
- 보통 통신으로부터 요청한 문서의 내용을 얻는 것부터 시작한다.

  - 이때 브라우저는 HTML과 CSS를 나누어서 읽는다.
  - 렌더링 엔진은 HTM과 CSS 파싱이 끝나기 전에 이후의 과정을 수행하여 미리 사용자에게 보여줄 수 있는 내용들을 출력하기 위해 계속 통신을 하면서 전송된 내용에 대한 배치와 그리기 과정을 진행한다.
  - 자세한 내용은 아래를 통해 설명하겠다.

<br/>

### 렌더링 동작 과정

![렌더링 동작 과정 약식](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FLCnaB%2FbtqIwDAOpap%2FsFlMNr2w37fPe5hd6gfEXk%2Fimg.png)

1. **DOM 트리 구축을 위한 HTML 파싱**

   → `브라우저는 서버로부터 HTML 문서를 모두 전달받는다.` 이후 `렌더링 엔진`은 전달받은 `HTML 문서`와 `외부 CSS 파일과 스타일 요소`를 파싱해서 `DOM 트리와 CSSOM 트리`를 구축한다.

2. **`렌더 트리 구축`** : DOM(Document Object Model) 트리와 CSSOM 트리의 `정보를 조합`
3. **렌더 트리 배치** : `렌더 트리의 각 노드에 대해서 화면 상에서 어디에 배치할지 위치와 크기를 결정`
4. **렌더 트리 그리기** : UI 백엔드에서 `렌더 트리를 그리고, 화면에 출력(프린트)됨`

<br/>

### Replow와 Repaint

![렌더링 동작 과정 약식](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FFzaAd%2FbtqIrukrwy2%2F6ewnSTctH6z1XI5F7L2Qy0%2Fimg.png)

**Replow**: 노드의 크기 또는 위치가 변경되어 현재 레이아웃에 영향을 미쳐서 배치를 다시 해야하는 경우 Replow가 발생한다.

**Repaint**: Reflow가 발생한 뒤나 단순한 스타일 변경 후에 발생한다.

<br/>

### 알아두면 좋은 사항

- `렌더링 성능 향상을 위해서`는 **Reflow를 최대한 줄여야한다.**
- 클래서 변화에 따른 스타일 변경 시, 최대한 DOM 주고 상 끝단에 위치한 노드에 준다.
- 인라인 스타일(sytle 속성으로 직접 Tag에 스타일 하는 것)을 배제한다.
- 애니메이션이 들어간 노드는 position을 fixed 또는 absolute로 지정한다. (fixed 또는 absolute는 전체 노드에서 분리되어 전체 노드에 Reflow 비용을 줄일 수 있음)
- 테이블 레이아웃은 점진적으로 그려지지 않고 레아이웃이 계산된 후에 화면에 그려진다. (하지만 성능상으로 table-layout:fixed이 디폴트인 auto보다 좋음)
- CSS 하위 선택자는 적은게 좋다. (parsing 시 비용이 절감됨)
- position: relative 사용 시 주의가 필요 (margin, border, padding, width, height 등 Box model을 계산 후 레이아웃을 배치한다.)
- cssText 적극 활용 및 그룹화 처리

<br/>

### DOM 조작의 비효율성

- **위와 같이 Replow 즉, `DOM에 관련된 조작들이 새로 변경`되게 되면 변경된 사항으로 안해 `모든 값들이 새로 Refow되어 Repaint되는 현상`으로 인해 `Virtual DOM(가상돔)이 생기게 되었다.`**

<br/>

## 용어사전

1. 사용자 인터페이스 - 주소 표시줄, 이전/다음 버튼, 북마크 메뉴 등 페이지 뷰 이외의 다른 모든 부분
2. 브라우저 엔진 - 사용자 인터페이스와 렌더링 엔진 사이의 동작을 제어
3. 렌더링 엔진 - HTML, CSS를 파싱해 요청한 콘텐츠를 표시
4. 통신 - HTTP 요청과 같은 네트워크 호출에 사용됨
5. UI 백엔드 - 기본적인 위젯(콤보 박스 등)을 그림
6. 자바스크립트 엔진 - 자바스크립트 코드를 해석하고 실행.
7. 자료 저장소 - 자료를 저장하는 계층으로 쿠키 등을 저장하는 웹 데이터베이스
8. **파서** - 파싱을 수행하는 프로그램
9. **파싱** - 코드를 브라우저가 이해하고 사용할 수 있는 구조로 변환
10. 어태치먼트 - 렌더 트리를 생성하기 위해 DOM 노드와 시각 정보를 연결하는 과정 ( 렌더러를 만드는 과정)
11. 렌더러 - 자신과 자식요소를 어떻게 배치하고 그려내야하는지 알고 있다
12. 렌더트리 - CSS파일과 스타일요소를 함께 파싱해 스타일 정보와 HTML표시 규칙을 포함한 트리
13. 배치 - 각각의 노드가 화면 안에서 정확한 위치에 표시되는 것을 의미
14. 그리기 -  UI 백엔드에서 랜더 트리의 각 노드를 가로지르며 형상을 만들어내는것
15. [DNS 서버](https://aws.amazon.com/ko/route53/what-is-dns/) - 이름을 IP 주소로 변환(사람이 읽을 수 있는 도메인 이름(예: www.amazon.com)을 머신이 읽을 수 있는 IP 주소(예: 192.0.2.44)로 변환 한다.)**하여 도메인 이름을 웹 브라우저에 입력할 때 최종 사용자는 어떤 서버에 연결할 것인지를 제어**(웹 사이트의 IP 주소와 도메인 주소를 이어주는 환경 또는 시스템,)
16. TCP (전송 제어 프로토콜) : 두개의 호스트를 연결하고 데이터 스트림을 교환하게 해주는 중요한 네트워크 프로토콜 이다.
17. [3-way-handshake](https://mindnet.tistory.com/entry/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-%EC%89%BD%EA%B2%8C-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-22%ED%8E%B8-TCP-3-WayHandshake-4-WayHandshake) - TCP / IP 프로토콜을 이용해서 통신을 하는 응용프로그램이 데이터를 전송하기 전에 먼저 정확한 전송을 보장하기 위해 상대방 컴퓨터와 사전에 세션을 수립하는 과정을 의미

<br/>

## 참고링크

[브라우저 렌더링 과정과 최적화 방법](https://velog.io/@wiostz98kr/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EB%A0%8C%EB%8D%94%EB%A7%81-%EA%B3%BC%EC%A0%95%EA%B3%BC-%EC%B5%9C%EC%A0%81%ED%99%94-%EB%B0%A9%EB%B2%95)

[브라우저 렌더링 원리](https://velog.io/@soopy368/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%9B%90%EB%A6%AC)

[[React.js] Virtual DOM 가상 돔](https://velog.io/@minbr0ther/React.js-Virtual-DOM-%EA%B0%80%EC%83%81-%EB%8F%94)

[브라우저에 URL을 입력했을 때 발생하는 일들](https://deveric.tistory.com/97)

[[웹] 웹 브라우저에 url을 쳤을 때 어떤 일이 일어날까? (웹 브라우저 요청 흐름)](https://velog.io/@sewonkim/%EC%9B%B9-%EC%9B%B9-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%97%90-url%EC%9D%84-%EC%B3%A4%EC%9D%84-%EB%95%8C-%EC%96%B4%EB%96%A4-%EC%9D%BC%EC%9D%B4-%EC%9D%BC%EC%96%B4%EB%82%A0%EA%B9%8C-%EC%9B%B9-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EC%9A%94%EC%B2%AD-%ED%9D%90%EB%A6%84)

[브라우저의 렌더링 과정](https://velog.io/@younoah/browser-rendering-path#%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%84%B1%EB%8A%A5-%EA%B0%9C%EC%84%A0%ED%95%98%EA%B8%B0)

[Browser의 기본 구조 및 동작 과정](https://minemanemo.tistory.com/121)

<br/>

```toc

```

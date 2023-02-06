---
emoji: 🪄
title: RESTful API란?
date: '2022-12-24 15:48:00'
author: JungSany
tags: blog gatsby JungLog log jung server rest restful api http https method
categories: 개발지식
---

![restful 이미지](https://velog.velcdn.com/images/gomuzom/post/4d78ca3b-d4ee-4723-b55b-6a12d5566e30/image.png)

# **RESTful이란?**

**두 컴퓨터 시스템이 인터넷을 통해 `정보를 안전하게 교환`하기 위해 사용하는 인터페이스이다.**

**대부분의 비즈니스 애플리케이션은 다양한 태스크를 수행하기 위해 다른 내부 애플리케이션 및 [서드 파티](https://rnfltpgus.github.io/knowledge/3rd-party/) 애플리케이션과 통신해야 하는데, `RESTful API`는 `안전하고 신뢰`할 수 있으며 `효율적인 소프트웨어 통신 표준`을 따르므로 이러한 `정보 교환을 지원`합니다.**

<br/>

## RESTful을 알아가기 전 알아두어야 할 **REST**란?

**`HTTP URI`를 통해 자원을 명시하고, [HTTP Method(POST, GET, PUT, DELETE)](https://rnfltpgus.github.io/knowledge/http-method/)를 통해 해당 자원에 대한 CRUD OPERATION을 적용하는 것을 의미한다.**

**즉, `REST`는 `자원 기반의 구조(ROA: Resource Oriented Architecture) 설계의 중심`에 Resource가 있고 `HTTP Method`를 통해
Resource를 처리하도록 설계된 `아키텍쳐`를 의미한다.**

**웹의 모든 자원에 고유한 ID인 `HTTP URI`를 부여한다.**

<br/>

### REST의 구성

**1. 자원(Resource) - URI**

- 모든 자원에 고유한 ID가 존재하고, 이 자원은 Server에 존재한다.
- 자원을 구별하는 ID는 `/Developer/id/sany`와 같은 `HTTP URI`이다.

**2. 행위 (Verb) - Http Method**

- HTTP 프로토콜의 `Method`를 사용한다.
- HTTP 프로토콜은 GET, POST, PUT, DELETE와 같은 메서드를 제공한다.

**3. 표현 (Representation of Resource)**

- `Client`가 자원의 상태(정보)에 대한 조작을 `요청(Request)`하면 `Server`는 이에 적절한 `응답(Representation)`을 보낸다.
- REST에서 하나의 자원은 JSON, XML, TEXT, RSS 등 여러 형태의 Representation으로 나타낼 수 있다.
- 현재는 `JSON으로 주고 받는 것이 대부분`이다.

<br/>

### REST의 특징

**1. Server-Client(서버-클라이언트 구조)**

**2. Stateless(무상태)**

**3. Cacheable(캐시 처리 가능)**

**4. Layered System(계층화)**

**5. Uniform Interface(인터페이스 일관성)**

<br/>

### REST의 장단점

#### 장점

- `HTTP 프로토콜의 인프라를 그대로 사용`하므로 REST API 사용을 위한 별도의 인프라를 구축할 필요가 없다.
- HTTP 프로토콜의 표준을 최대한 활용하여 여러 추가적인 장점을 함께 가져갈 수 있게 해 준다.
- `HTTP 표준 프로토콜에 따르는` 모든 플랫폼에서 `사용이 가능`하다.
- Hypermedia API의 기본을 충실히 지키면서 `범용성을 보장`한다.
- REST API 메시지가 의도하는 바를 명확하게 나타내므로 `쉽게 파악`할 수 있다.
- 여러 가지 서비스 디자인에서 생길 수 있는 `문제를 최소화`한다.
- 서버와 클라이언트의 `역할을 명확하게 분리`한다.

<br/>

#### 단점

- 표준이 자체가 존재하지 않아 `정의가 필요`하다.
- HTTP Method `형태가 제한적`이다.
- 브라우저를 통해 테스트할 일이 많은 서비스라면 쉽게 고칠 수 있는 URL보다 Header 정보의 값을 처리해야 하므로 `전문성이 요구`된다.
- `구형 브라우저`에서 `호환이 되지 않아` 지원해주지 못하는 동작이 많다.(익스폴로어)

<br/>

## RESTful의 목적

- **이해하기 쉽고 사용하기 쉬운 REST API를 만드는 것이다.**

- **RESTful한 API를 구현하는 근본적인 목적은 `일관적인 컨벤션을 통한 API의 이해도 및 호환성을 높이는 것`이니, 성능이 중요한 상황에서는 굳이 RESTful한 API를 구현할 필요는 없다.**

<br/>

## RESTful 하지 못한 경우

- Ex1) CRUD 기능을 모두 POST로만 처리하는 API
- Ex2) route에 resource, id 외의 정보가 들어가는 경우(/students/updateName)

<br/>

## RESTful API를 사용하면 어떤 이점이 있나?

### 확장성

REST API를 구현하는 시스템은 REST가 클라이언트-서버 `상호 작용`을 `최적화`하기 때문에 `효율적으로 크기 조정할 수 있다.`

`무상태`는 서버가 과거 클라이언트 요청 정보를 유지할 필요가 없기 때문에 서버 로드를 제거한다.

잘 관리된 `캐싱`은 일부 클라이언트-서버 상호 작용을 부분적으로 또는 완전히 제거한다. 이러한 모든 기능은 성능을 저하시키는 `통신 병목 현상을 일으키지 않`으면서 `확장성을 지원`한다.

<br/>

### 유연성

RESTful 웹 서비스는 완전한 클라이언트-서버 분리를 지원한다.

각 부분이 독립적으로 발전할 수 있도록 다양한 서버 `구성 요소`를 `단순화`하고 `분리`한다.

서버 애플리케이션의 플랫폼 또는 기술 변경은 클라이언트 애플리케이션에 영향을 주지 않는다.

애플리케이션 함수를 `계층화`하는 기능은 `유연성을 더욱 향상`시킨다.(Ex1 개발자는 애플리케이션 로직을 다시 작성하지 않고도 데이터베이스 계층을 변경할 수 있다.)

<br/>

### 독립성

REST API는 사용되는 기술과 독립적이다.

API 설계에 영향을 주지 않고 다양한 프로그래밍 언어로 클라이언트 및 서버 애플리케이션을 모두 작성할 수 있다.

또한 통신에 영향을 주지 않고 양쪽의 기본 기술을 변경할 수 있다.

<br/>

## REST API 설계규칙

1. URI는 동사보다는 명사를, 대문자보다는 소문자를 사용하여야 한다.
2. 슬래시( / )로 계층 관계를 표현한다.
3. URI의 마지막에는 슬래시( / )를 붙이지 않는다.
4. 언더바( \_ ) 대신 하이폰( - )을 사용한다.
5. 가독성이 떨어지는 경우 하이픈( - )을 사용한다.
6. 대문자와 소문자로 URI를 정의하면 기억하기 어려우며 잘못 적을 가능성이 높아진다.
7. 파일확장자는 URI에 포함하지 않는다

<br/>

## 끝말

**REST API 설계규칙을 따라 RESTful한 API를 만들수 있도록 추가적으로 실습을 진행해 보는 글을 작성해 보아야 겠다.**

**REST API는 동사로 작성하는 것보다는 명사로 작성해 주는 것이 좋다.**

<br/>

## 용어정리

**API**: 다른 소프트웨어 시스템과 통신하기 위해 따라야 하는 규칙

**REST(Representational State Transfer)**: API 작동 방식에 대한 조건을 부과하는 소프트웨어 아키텍처 -> `REST API`와 `RESTful API`는 같은 의미로 사용할 수 있다.

**CRUD Operation**: CRUD는 대부분의 컴퓨터 소프트웨어가 가지는 기본적인 데이터 처리 기능인 Create(생성), Read(읽기), Update(갱신), Delete(삭제)를 묶어서 일컫는 말로 REST에서의 CRUD Operation 동작 예시는 다음과 같다. [Http Method에 대해서](https://rnfltpgus.github.io/knowledge/http-method/)

- Create : 데이터 생성(POST)
- Read : 데이터 조회(GET)
- Update : 데이터 수정(PUT, PATCH)
- Delete : 데이터 삭제(DELETE)
- HEAD : header 정보 조회(HEAD)

**로드밸런싱**: 서버가 처리해야 할 업무 혹은 요청(Load)을 여러 대의 서버로 나누어(Balancing) 처리하는 것을 의미

[**PROXY 서버**](https://rnfltpgus.github.io/knowledge/proxy/): 보안상의 문제로 직접 통신 할 수 없을때 중계 해주는 서버

**게이트웨이**: 한 네트워크(segment)에서 다른 네트워크로 이동하기 위하여 거쳐야 하는 지점, 서로 다른 네트워크(기종이 다른 네트워크)를 연결

<br/>

## 참고링크

[RESTful API란 무엇입니까?](https://aws.amazon.com/ko/what-is/restful-api/)

[Day1, 2-2. 그런 REST API로 괜찮은가](https://www.youtube.com/watch?v=RP_f5dMoHFc)

[[Network] REST란? REST API란? RESTful이란?](https://gmlwjd9405.github.io/2018/09/21/rest-and-restful.html)

[RESTful Api란](https://velog.io/@gomuzom/RESTful-Api)

<br/>

```toc

```

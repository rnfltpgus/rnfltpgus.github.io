---
emoji: ⛓️
title: ORM이란?
date: '2023-01-24 12:30:00'
author: JungSany
tags: blog gatsby JungLog log jung orm node
categories: 개발지식
---

![ORM (Object Relational Mapping) 이미지](https://i0.wp.com/hanamon.kr/wp-content/uploads/2021/09/ORM.png?w=1847&ssl=1)

**`객체 관계 매핑(Object Relational Mapping : ORM)`은 데이터베이스와 객체 지향 프로그래밍 언어 간의 호환되지 않는 데이터를 변환하는 프로그래밍 기법이다.**

객체 관계 매핑을 가능하게 하는 상용 또는 무료 소프트웨어 패키지들이 있고, 경우에 따라서는 독자적으로 개발하기도 한다.

<br/>

# 그래서 ORM(Object Relational Mapping) 이란?

- ORM은 Object Relational Mapping(객체∙관계∙매핑)의 약자이다.
- ORM은 객체 지향 언어에서 사용할 수 있는 **`가상객체 데이터베이스를 구축하는 방법`**이다.
- ORM은 객체와 데이터베이스의 **`관계를 매핑`해주는 도구**이다.
- ORM은 프로그래밍 언어의 객체와 관계형 데이터베이스의 데이터를 **`자동으로` 매핑해주는 도구**이다.
- ORM은 프로그래밍 언어의 객체와 관계형 데이터베이스 사이의 **`중계자`역할**을 한다.
- ORM은 **`MVC 패턴에서 모델(Model)을 기술`하는 도구**이다.
- **ORM은 객체와 모델 사이의 관계를 기술하는 도구이다.**
- Persistant API라고도 할 수 있다.

<br/>

## ORM 사용 이유 (OOP vs Relational Database)

**`객체 지향 프로그래밍은` 클래스를 이용하고 `관계형 데이터베이스는` 테이블을 이용하는데, 객체 모델과 관계형 모델 간의 `불일치가 존재`한다.**

ORM을 이용해서 데이터베이스 접근을 프로그래밍 언어의 관점에서 맞출 수 있고, 이용해서 객체 간의 관계를 바탕으로 SQL을 자동으로 생성하여 `불일치를 해결`한다.

ORM을 이용해서 SQL 문을 직접 작성하지 않고 엔티티를 `객체로 표현할 수 있고, 객체를 통해 간접적으로 데이터베이스를 다룬다.`

이를 통해 데이터베이스 세계와 프로그래밍 언어 사이의 개념의 간극을 줄이고, 느슨하게 연결된 테스트에 용이한 애플리케이션을 만들 수 있다.

<br/>

## ORM 장점

### 1. 직관적인 코드 (가독성) + 비지니스 로직 집중 가능 (생산성)

- 선언문, 할당, 종료 같은 부수적인 코드가 없거나 급격히 줄어든다.
- 각종 객체에 대한 코드를 별도로 작성하기 때문에 `코드 가독성을 높여준다.`
- SQL의 절차적이고 순차적인 접근이 아닌 객체 지향적인 접근으로 `생산성이 증가한다.`

<br/>

### 2. 재사용 및 유지보수 편리성 증가

- 매핑정보가 명확하여, ERD를 보는 것에 대한 `의존도를 낮출 수 있다.`
- ORM은 독립적으로 작성되어있고, 해당 객체들을 `재활용`할 수 있다.
- 때문에 모델에서 가공된 데이터를 컨트롤러에 의해 뷰와 합쳐지는 형태로 `디자인 패턴을 견고하게 다지는데 유리`하다.

<br/>

### 3. DBMS에 대한 종속성 저하

- 객체 간 관계를 바탕으로 SQL을 자동으로 생성하기 때문에 `RDBMS의 데이터 구조와 프로그래밍 언어의 객체 모델 사이의 간격을 좁힌다.`
- 대부분의 ORM 솔루션은 DB에 종속적이지 않다.

<br/>

## ORM 단점

### 1. 완벽한 ORM 으로만 서비스를 구현하기 어려움

- 사용하기는 편리하지만 `설계는 신중`하게 해야한다.
- 프로젝트의 `복잡성`이 커질 경우 난이도 또한 올라간다.
- 잘못 구현된 경우 `일관성이 무너지는 문제점`이 생길 수 있다.

<br/>

## 용어사전

**영속성(Persistence)** : 데이터를 생성한 프로그램이 종료되더라도 사라지지 않는 데이터의 특성

<br/>

## 참고링크

[[DB] ORM이란](https://gmlwjd9405.github.io/2019/02/01/orm.html)

[[JDBC] JDBC, JPA/Hibernate, Mybatis의 차이](https://gmlwjd9405.github.io/2018/12/25/difference-jdbc-jpa-mybatis.html)

[하나몬 - [데이터베이스] ORM이란? (Node.js ORM Lib Sequelize 소개)](https://hanamon.kr/mvc%eb%9e%80-mvc-design-pattern/)

[하나몬 - MVC란?](https://hanamon.kr/mvc%eb%9e%80-mvc-design-pattern/)

[위키백과 - ORM](https://ko.wikipedia.org/wiki/%EA%B0%9D%EC%B2%B4_%EA%B4%80%EA%B3%84_%EB%A7%A4%ED%95%91)

<br/>

```toc

```

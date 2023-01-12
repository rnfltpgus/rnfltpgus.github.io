---
emoji: 💾
title: 트랜잭션(Transaction)이란?
date: '2023-01-12 22:04:00'
author: JungSany
tags: blog gatsby JungLog log jung transaction data basic
categories: 개발지식 데이터
---

# 트랜잭션(Transaction)이란?

**은행 ATM이나 데이터베이스 등**의 시스템에서 사용되는 `더 이상 쪼갤 수 없는 업무 처리의 최소 단위`이다.

트랜잭션 처리가 정상적으로 완료된 경우 커밋(commit)을 하고, 오류가 발생할 경우 원래 상태대로 롤백(rollback)을 한다.

영어로 `간략히 Tx라고 표기하기도 한다.`

**1초당 처리할 수 있는 트랜잭션의 개수를 TPS라고 한다.**

<br/>

## 사용목적

트랜잭션은 데이터베이스 서버에 여러 개의 클라이언트가 동시에 액세스 하거나 응용프로그램이 갱신을 처리하는 과정에서 중단될 수 있는 경우 등 데이터 부정합을 방지하고자 할 때 사용한다.

<br/>

## 참고링크

[해시넷](http://wiki.hash.kr/index.php/%ED%8A%B8%EB%9E%9C%EC%9E%AD%EC%85%98)

[위키백과](https://ko.wikipedia.org/wiki/%ED%8A%B8%EB%9E%9C%EC%9E%AD%EC%85%98)

[트랜잭션 데이터베이스란 무엇인가요?](https://cloud.google.com/learn/what-are-transactional-databases?hl=ko)

<br/>

```toc

```

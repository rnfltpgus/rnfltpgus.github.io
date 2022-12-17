---
emoji: 📂
title: SQL - LEFT JOIN, INNER JOIN 차이
date: '2022-12-13 16:20:00'
author: JungSany
tags: blog gatsby JungLog log jung sql nosql 관계형 db 정적 동적 join left inner 차이
categories: 개발지식 데이터
---

- 각 주제에 따라 테이블을 나누어 작성한 후, 정보를 가져오는 경우 `테이블을 합치는 경우`가 있다.
- 이때 `JOIN`을 사용하게 되는데, 그 중 많이 사용하는 것이 `LEFT JOIN`과 `INNER JOIN`이다.

<br/>

### 차이점

- 두 테이블에서 `JOIN`을 위한 **기준 열이 서로 값을 가지고 있는 경우** 조회에서 **누락되는 행은 존재하지 않는다.**
- 그렇다면 `LEFT JOIN`과 `INNER JOIN`은 같은 조회 결과를 보인다. 이때, **`INNER JOIN`이 상대적으로 성능이 좋다**고 한다.

<br/>

### 결론

- `LEFT JOIN`은 **합집합**, `INNER JOIN`은 **교집합**이다.
- 결과가 같다면 `LEFT JOIN`대신 `INNER JOIN` 을 사용하는게 좋다.

<br/>

```toc

```

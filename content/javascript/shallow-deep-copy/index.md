---
emoji: π
title: μμ λ³΅μ¬μ κΉμ λ³΅μ¬
date: '2022-12-20 22:40:00'
author: JungSany
tags: blog gatsby JungLog log jung shallow deep copy
categories: JavaScript
---

![κΉμλ³΅μ¬μ μμ λ³΅μ¬](https://t1.daumcdn.net/cfile/tistory/993F09445A6DA15516)

## Shaloow Copy - μμ λ³΅μ¬λ?

**λ³΅μ¬ν  λ μλκ°κ³Ό λ³΅μ¬λ κ°μ΄ κ°μ μ°Έμ‘°λ₯Ό κ°λ¦¬ν€κ³  μλ κ²μ λ§νλ€.**

κ°μ²΄μμ κ°μ²΄κ° μμ κ²½μ° νκ°μ κ°μ²΄λΌλ μλ³Έ κ°μ²΄λ₯Ό μ°Έκ³  νκ³  μλ€λ©΄ μ΄λ₯Ό μμ λ³΅μ¬λΌκ³  νλ€.

κ°μ²΄λ₯Ό κ°λ₯΄ν€λ λ³μ(μλ³Έ)μ λ€λ₯Έ λ³μ(μ¬λ³Έ)μ ν λΉνλ©΄ μλ³Έ μ μ°Έμ‘° κ°μ΄ λ³΅μ¬λμ΄ μ λ¬λλ€. μ΄λ₯Ό μ°Έμ‘°μ μν μ λ¬μ΄λΌνλ©°, μμ λ³΅μ¬μ΄λ€.

λ μμ λ³΅μ¬λ `νλ¨κ³ λμ€λ§ λ³΅μ¬`νλ€.

<br/>

### κ²°κ΅­ μμ λ³΅μ¬λ?

`λκ°μ μλ³μκ° νλμ κ°μ²΄λ₯Ό λ°λΌλ³΄κ² λμ΄`, μλ³Έ λλ μ¬λ³Έ μ€ μ΄λ νμͺ½μμ κ°μ²΄λ₯Ό λ³κ²½(λ³μμ μλ‘μ΄ κ°μ²΄λ₯Ό μ¬ν λΉνλ κ²μ΄ μλλΌ κ°μ²΄μ νλ‘νΌν° κ°μ λ³κ²½νκ±°λ νλ‘νΌν°λ₯Ό μΆκ°, μ­μ )νλ©΄ `μλ‘ μν₯μ μ£Όκ³  λ°λλ€.`

```javascript
var per1 = {
  name: 'lee',
};

var per2 = {
  name: 'lee',
};

// κ°μ²΄λ₯Ό μμ±ν λλ μλ‘μ΄ νκ°λ₯Ό λ°κΈ°λλ¬Έμ νμ€κ° λ¨λλ°
console.log(per1 === per2);

// μλ μ½μμ νλ‘νΌν° κ°μ μ°Έμ‘°νλ κ°μΌλ‘ νκ°λ  μ μλ ννμμ΄λ€. κ·Έλμ λ ννμ λͺ¨λ μμκ°μΌλ‘ νκ°λμ΄ νΈλ£¨λ€.
console.log(per1.name === per2.name);
```

<br/>

### μμ λ³΅μ¬λ₯Ό νλ λ°©λ²μλ

1. Object.assign()
2. Array.Slice()
3. Spread μ°μ°μ (μ κ°μ°μ°μ)

<br/>

## Deep Copy - κΉμ λ³΅μ¬λ?

κΉμ λ³΅μ¬λ κ°μ²΄λ κ°μ²΄μμ κ°μ²΄κ° μμ κ²½μ°μλ μλ³Έκ³Όμ μ°Έμ‘°κ° μμ ν λνμ§ κ°μ²΄λ₯Ό λ§νλ€.

κΉμ λ³΅μ¬λ `μ€μ²©λ λΆλΆκΉμ§ λͺ¨λ λ³΅μ¬`νλ κ²½μ°λ₯Ό λ§νλ€.

<br/>

### κΉμ λ³΅μ¬λ₯Ό νλ λ°©λ²μλ

1. JSON.parse && JSON.stringify
2. μ¬κ·ν¨μλ₯Ό κ΅¬νν λ³΅μ¬
3. lodashμ cloneDeepλ₯Ό μ¬μ©ν λ³΅μ¬(λΌμ΄λΈλ¬λ¦¬ μ¬μ©)

<br/>

### μ°Έμ‘°λ§ν¬

[[Javascript] μμ λ³΅μ¬, κΉμ λ³΅μ¬](https://velog.io/@th0566/Javascript-%EC%96%95%EC%9D%80-%EB%B3%B5%EC%82%AC-%EA%B9%8A%EC%9D%80-%EB%B3%B5%EC%82%AC)

[[JavaScript] κΉμ λ³΅μ¬, μμ λ³΅μ¬](https://bbangson.tistory.com/78)

<br/>

```toc


```

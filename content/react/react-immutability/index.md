---
emoji: π₯
title: Reactλ μ λΆλ³μ±μ μ μ§ν΄μΌλλ?
date: '2022-12-22 21:55:00'
author: JungSany
tags: blog gatsby JungLog log jung react immutability shallow copy deep λΆλ³μ± λ¦¬μνΈ
categories: κ°λ°μ§μ React JavaScript
---

## λ¦¬μ‘νΈμ μν μλ°μ΄νΈλ ν­μ `λΆλ³μ `μΌλ‘ μνλμ΄μΌ νλ€.

- **mutate(λμ°λ³μ΄ν)ν κ°μ λμκ³Ό μμΉμ λ°λΌ μ»΄ν¬λνΈκ° λ λλ§ λμ§ μμ μ μλ€.**
- **λ°μ΄ν°κ° μ€μ λ‘ μλ°μ΄νΈ λ μκΈ°μ μ΄μ μ λν΄ νΌλμ κ²ͺμ μ μλ€.**

<br/>

## λΆλ³μ±μ΄λ?

- **Immutability(λΆλ³μ±)λ μνλ κ°μ λ³κ²½νμ§ μλ κ²μ΄λ€.**
- JavaScriptμμ μλ₯Ό λ€μλ©΄,
  - JavaScriptμ μμ νμμ κ°λ€μ `λΆλ³μ±`μ κ°κ³  μλ€.
    - **λ°μ΄ν° νμ**
      - **μμ νμ(string, number, bigint, boolean, undefined, ES6 λΆν° μΆκ°λ symbol)**
        - λ³κ²½μ΄ λΆκ°λ₯ν κ°(μ½κΈ°μ μ©)
        - μμ κ°μ λ³μμ ν λΉνλ©΄ νλ³΄λ λ©λͺ¨λ¦¬ κ³΅κ°(μ£Όμ)μλ μ€μ  κ°μ΄ μ μ₯λ¨
        - μμ κ°μ κ°λ λ³μλ₯Ό λ€λ₯Έ λ³μμ ν λΉνλ©΄ μλ³Έμ μμκ°μ΄ λ³΅μ¬λμ΄ μ λ¬λλ€.
      - **μ°Έμ‘° νμ(Object, Array, Function)**
        - λ³κ²½μ΄ κ°λ₯ν κ°
        - κ°μ²΄λ₯Ό λ³μμ ν λΉνλ©΄ νλ³΄λ λ©λͺ¨λ¦¬ κ³΅κ°μ μ°Έμ‘°κ°μ΄ μ μ₯λ¨
        - κ°μ²΄λ₯Ό κ°λ₯΄ν€λ λ³μλ₯Ό λ€λ₯Έ λ³μμ ν λΉνλ©΄ μλ³Έμ μ°Έμ‘°κ°μ΄ λ³΅μ¬λμ΄ μ λ¬λλ€.
    - **μ¦, μμνμμ μ¬ν λΉμ ν΅ν΄μλ§ λ³μμ μ μ₯ν κ°μ λ³κ²½ν  μ μμ§λ§, κ°μ²΄νμμ μ¬ν λΉ μμ΄ κ°μ²΄λ₯Ό μ§μ  λμ μΌλ‘ μΆκ°, μ­μ  κ°±μ  λ±μ΄ κ°λ₯νλ€λ κ²μ΄ ν° μ°¨μ΄μ μ΄λ€.**

<br/>

### μΆκ°λ‘ JavaScriptμμ μμ λ³΅μ¬μ κΉμ λ³΅μ¬

- μμ λ³΅μ¬(Shallow copy)
  - κ°μ²΄λ₯Ό νλ‘νΌν° κ°μΌλ‘ κ°λ κ°μ²΄μ κ²½μ°μ ν λ¨κ³ κΉμ§λ§ λ³΅μ¬νλ κ²μ λ§νλ€.
  - μ¦, μ²« κ°μ²΄λ μλ‘μ΄ λ©λͺ¨λ¦¬ μ£Όμλ₯Ό κ°μ§μ§λ§ λ΄λΆμ μλ μ€μ²©λ κ°μ²΄λ μμ λ³΅μ¬λ₯Ό ν κ²½μ°μ κ°μ λ©λͺ¨λ¦¬ μ£Όμλ₯Ό κ°μ§λ€λ μλ―Έκ° λλ€.
  - **μμ λ³΅μ¬ λ°©λ²μΌλ‘λ `Object.assign()`, `μ κ°μ°μ°μ(spread)`**
  - **μμ λ³΅μ¬λ νμ μ€μ²©λμ΄ μλ κ°μ²΄κΉμ§ λ³΅μ¬νμ§ μμΌλ―λ‘ κ³΅μ μ μν μκΈ°μΉ λͺ»ν κ²°κ³Όλ₯Ό μ»μ μ μλ€.**
- κΉμ λ³΅μ¬(Deep copy)
  - **νμμ μ€μ²©λμ΄ μλ κ°μ²΄(λ°°μ΄ λ±)κΉμ§ λͺ¨λ λ³΅μ¬νλ κ²μ λ§ν¨**
  - μ¦, μμ κ°μ²λΌ μμ ν μλ‘μ΄ λ©λͺ¨λ¦¬ κ³΅κ°μ μ°¨μ§νλ μμκ°μ²λΌ λ³΅μ¬λ³Έμ λ§λ λ€.
  - **κΉμ λ³΅μ¬ λ°©λ²μΌλ‘λ `JSON.stringify()`, `μ¬κ·ν¨μ`, `lodashμ cloneDeep`**
- **κ²°λ‘ μΌλ‘ κ°μ²΄μ μ°Έμ‘° νΉμ±μΌλ‘ μΈν΄ λ³΅μ¬νκ³ μ νλ κ°μ²΄μ μ€μ²©λ κ°μ²΄νμμ΄ μλμ§λ₯Ό νμΈνκ³  κ·Έμ λ§λ λ³΅μ¬ λ°©λ²μ μ¬μ©ν΄μΌ νλ€.**

<br/>

## κ·Έλμ λ¦¬μ‘νΈ μνλ₯Ό λ³κ²½ν  λ λΆλ³μ±μ μ§μΌμ£Όμ΄μΌ λλ μ΄μ ?

- λ¦¬μ‘νΈμμ `λΆλ³μ±μ μ§μΌμ£Όμ΄μΌ λλ μ΄μ `λ λ¦¬μ‘νΈκ° μν μλ°μ΄νΈλ₯Ό νλ μλ¦¬ λλ¬Έμ΄λ€.
- λ¦¬μ‘νΈλ μν κ°μ μλ°μ΄νΈ ν  λ `μμ λΉκ΅`λ‘ **μν λ³κ²½ μ¬λΆ**λ₯Ό μ²΄ν¬νλ©°, μννλ€.
- μ¦, `λ¦¬μ‘νΈλ` κ°μ²΄μ μμ± **νλνλλ₯Ό λΉκ΅**νλκ² μλλΌ `μ°Έμ‘° κ°λ§ λΉκ΅νμ¬ μν λ³νλ₯Ό κ°μ§`νλ€.
- μ΄λ° μ΄μ λ‘ λ¦¬μνΈλ state(λ°°μ΄μ΄λ κ°μ²΄)λ₯Ό `μλ°μ΄νΈ ν  λ setState()λ₯Ό μ¬μ©`νμ¬ `λ°°μ΄`μ΄λ `κ°μ²΄λ₯Ό μλ‘ μμ±`ν΄ μλ‘μ΄ μ°Έμ‘° κ°μ λ§λ€μ΄ `μνλ₯Ό μλ°μ΄νΈ` νλ€.
- κ·Έλ¦¬κ³  λ¦¬μνΈμμ λΆλ³μ±μ μ§μΌμ£Όλ©΄ λ€λ₯Έ μ΄μ μΌλ‘ `μ¬μ΄λ μ΄ννΈλ₯Ό λ°©μ§`ν  μ μλ€.

<br/>

### μ λ¦¬νμλ©΄

**λ¦¬μ‘νΈλ λΆλ³μ±μ μ§μΌμ£Όλ©΄ `ν¨κ³Όμ μΈ μν μλ°μ΄νΈ(μμ λΉκ΅ μν: κ³μ° λ¦¬μμ€λ₯Ό μ€μ¬μ€)`μ `μ¬μ΄λ μ΄ννΈλ₯Ό λ°©μ§νλ μ΄μ (μλ³Έ λ°μ΄ν°λ₯Ό κ±΄λ€κ² λ  κ²½μ°, μλ³Έ λ°μ΄ν°λ₯Ό μ°Έμ‘°νκ³  μλ λ€λ₯Έ κ°μ²΄μμ μμμΉ λͺ»ν μ€λ₯κ° λ°μν  μ μμΌλ©°, νλ‘κ·Έλλ°μ λ³΅μ‘λκ° μ¬λΌκ°λ€.)`μ κ°μ§ μ μκ² λλ€.**

<br/>

## λΆλ³μ±μ μ§ν€λ©° μνλ₯Ό μλ°μ΄νΈ νλ λ°©λ²μ?

- spread operator, map, filter, slice, reduce λ±λ± `μλ‘μ΄ λ°°μ΄μ λ°ννλ λ©μλλ€μ νμ©`νκ±°λ
  - spliceλ μλ³Έλ°μ΄ν°λ₯Ό λ³κ²½νκΈ° λλ¬Έμ μ¬μ©νλ©΄ μλλ€.
- `setStateλ₯Ό μ΄μ©`ν  κ²½μ°

  - **μμνμμΈ** κ²½μ°μλ κ°μ λ°λ‘ λ£μ΄μ μ¬μ©ν΄λ λμ§λ§
  - **μ°Έμ‘°νμμΈ** κ²½μ°μλ μλ‘μ΄ κ°μ²΄λ λ°°μ΄μ μμ±ν ν κ°μ λ£μ΄μ£Όμ΄μΌ νλ€.

  ```jsx
  // μμνμ
  const [number, setNumber] = useState(0);
  setState(7);

  // μ°Έμ‘°νμ
  const [person, setPerson] = useState({ name: '', age: 33 });
  setState({ ...person, name: 'seahyun' });
  ```

<br/>

## μ λ¦¬

- **λΆλ³μ±μ΄λ** λ©λͺ¨λ¦¬ μμ­μ κ°μ λ³κ²½νμ§ μλ κ²μ΄λ€.
- λ¦¬μ‘νΈλ λΆλ³μ±μ μ§μΌμ€μΌλ‘μ¨ `ν¨μ¨μ μΈ μνμλ°μ΄νΈ`λ₯Ό νλ€.
- λ¦¬μ‘νΈλ λΆλ³μ±μ μ§μΌμ€μΌλ‘μ¨ `μ¬μ΄λ μ΄ννΈλ₯Ό μ¬μ  λ°©μ§νκ³  νλ‘κ·Έλλ°μ κ΅¬μ‘°λ₯Ό λ¨μνκ² μ μ§`νλ€.
- **λΆλ³μ±μ κ°μ§ μμνμκ³Ό λ¬λ¦¬ `μ°Έμ‘°νμμ κ²½μ°μλ μλμ μΌλ‘ λΆλ³μ±μ μ§μΌμ£Όμ΄μΌ` νλ€.**
  - `λ°©λ²μΌλ‘λ` **μλ‘μ΄ μ£Όμ κ°μ κ°μ§ κ°μ²΄(λ°°μ΄)λ₯Ό μμ±νμ¬ μνλ₯Ό μλ°μ΄νΈ ν΄μ£Όμ΄μΌ νλ€.** λλ **spread operator, map, filter, slice, reduce λ©μλλ€μ μ΄μ©νμ¬ μλ‘μ΄ λ°°μ΄μ κ°μ λ°ννμ¬ μ¬μ©**νλ€.

<br/>

### μ°Έκ³ λ§ν¬

[μμ΅μ: React μμνκΈ° - React](https://ko.reactjs.org/tutorial/tutorial.html)

[λ¦¬μ‘νΈμ λ λλ§μ μ΄λ»κ² μΌμ΄λλκ°?](https://yceffort.kr/2022/04/deep-dive-in-react-rendering)

[[Java Script] μμνμκ³Ό μ°Έμ‘°νμ π](https://velog.io/@nomadhash/Java-Script-%EA%B9%8A%EC%9D%80-%EB%B3%B5%EC%82%AC%EC%99%80-%EC%96%95%EC%9D%80-%EB%B3%B5%EC%82%AC)

[λ¦¬μ‘νΈ λΆλ³μ±μ΄λ λ¬΄μμ΄κ³ , μ μ§μΌμΌ ν κΉ?](https://hsp0418.tistory.com/171)

[λ¦¬μ‘νΈμμ λΆλ³μ±μ΄λ](https://velog.io/@jma1020/%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%97%90%EC%84%9C-%EB%B6%88%EB%B3%80%EC%84%B1%EC%9D%B4%EB%9E%80)

<br/>

```toc

```

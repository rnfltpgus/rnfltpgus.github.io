---
emoji: π½οΈ
title: Next.jsμ λ λλ§ λ°©μ
date: '2022-12-16 17:10:00'
author: JungSany
tags: blog gatsby JungLog log jung next js build μ μ μμ± ssr μλ²μΈ‘λ λλ§ getStaticProps getStaticPaths getServerSideProps
categories: Next
---

κΈ°λ³Έμ μΌλ‘ Next.jsλ λͺ¨λ  νμ΄μ§λ₯Ό μ¬μ λ λλ§ νλ€κ³  κ³΅μλ¬Έμμ μ νμλ€.

μ¬μ λ λλ§μ΄λΌ νλ©΄, ν΄λΌμ΄μΈνΈ μΈ‘ JavaScriptμμ λͺ¨λ  μμμ μννλ λμ  λ―Έλ¦¬ κ° νμ΄μ§μ λν HTMLμ μμ±ν΄ μ±λ₯ν¨κ³Όμ SEOλ₯Ό μ»μ μ μλ€.

<br/>

## Nextμμ μ‘΄μ¬νλ λ κ°μ§μ λ λλ§ λ°©μ

λ κ°μ μ°¨μ΄μ μ νμ΄μ§μ λν HTMLμ μμ±ν  λ μ΄λ£¨μ΄ μ§λ€.

- **μ μ  μμ±(κΆμ₯): HTMLμ λΉλ μ μμ±λλ©°, κ° μμ²­μμ μ¬μ¬μ©λλ€.**
- **μλ²μΈ‘ λ λλ§: HTMLμ κ° μμ²­μμ μμ±λλ€. (`SSR`λλ `λμ  λ λλ§` μ΄λΌκ³ λ νλ€.)**

<br/>

### **κ³΅μλ¬Έμμμλ**

`μ±λ₯μμ μ΄μ λ‘ μλ² μΈ‘ λ λλ§ λ³΄λ€ μ μ  μμ±μ μ¬μ©νλ κ²μ΄ μ’λ€κ³  νλ€.` μ€λͺμ νμλ©΄ μ μ μΌλ‘ μμ±λ νμ΄μ§λ μ±λ₯ ν₯μμ μν μΆκ° κ΅¬μ± μμ΄ CDNμ μν΄ μΊμλ₯Ό ν  μ μμ΄μλΌκ³  νλ€. νμ§λ§ κ²½μ°μ λ°λΌ μλ²μΈ‘ λ λλ§μ΄ μ μΌν κ²½μ°κ° μλ€κ³  νλ€.

<br/>

## μ μ  μμ±

- νμ΄μ§κ° μ μ  μμ±μ μ¬μ©νλ κ²½μ°, `next build`μ HTMLμ΄ μμ±λκ² λλλ°, μ΄ HTMLμ κ° μμ²­μμ μ¬μ¬μ©λλ€.(CDNμμ μΊμν  μ μμ)
- λ°μ΄ν°κ° μκ±°λ μλ κ²½μ°λ₯Ό μ μ μΌλ‘ μμ±ν  μ μλ€.

<br/>

### **λ°μ΄ν° μλ μ μ  μμ±μ κ²½μ°**

```jsx
// μλμ μ½λλ μΈλΆ λ°μ΄ν°λ₯Ό κ°μ Έμ€λ μ½λκ° μλ€.
// λλ¬Έμ Next.jsμμλ λΉλ μκ° λμ νμ΄μ§λΉ λ¨μΌ HTML νμΌμ μμ±νλ€.
const About = () => {
  return <div>About</div>;
};

export default About;
```

<br/>

### **λ°μ΄ν°λ₯Ό μ¬μ©ν μ μ  μμ±μΈ κ²½μ°**

μΈλΆ λ°μ΄ν°λ₯Ό κ°μ Έμ μ¬μ©ν΄μΌνλ κ²½μ°μλ λκ°μ λ°©λ²μ΄ μ‘΄μ¬νλ€.

<br/>

1. νμ΄μ§Β **μ½νμΈ **κ° μΈλΆ λ°μ΄ν°μ λ°λΌ λ€λ₯Έ κ²½μ° `getStaticProps`μ¬μ©

```jsx
import axios from 'axios';

export default const Blog = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  )
}

export async const getStaticProps = () => {
  const posts = await axios.get('https://.../posts');

  return {
    props: {
      posts,
    },
  }
}
```

<br/>

2. νμ΄μ§Β **κ²½λ‘**κ° μΈλΆ λ°μ΄ν°μ λ°λΌ λ€λ₯Έ κ²½μ° `getStaticPaths`μ¬μ© (μΌλ°μ μΌλ‘ `getStaticProps`μ μΆκ° μμ±λ¨)

```jsx
import axios from 'axios';

export default const Blog = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  )
}

export async const getStaticPaths = () => {
  const posts = await axios.get('https://.../posts');

  const paths = posts.map((post) => ({
    params: { id: post.id },
  }))

  return { paths, fallback: false }
}

export async const getStaticProps = ({ params }) => {
  const post = await axios.get(`https://.../posts/${params.id}`);

  return { props: { post } }
}
```

## μλ²μΈ‘ λ λλ§(SSR)

- νμ΄μ§κ° μλ² μΈ‘ λ λλ§μ μ¬μ©νλ κ²½μ° `κ° μμ²­μμ νμ΄μ§ HTMLμ΄ μμ±`λλ€.
- **Server-side Rendering**λ₯Ό μ¬μ©νκΈ° μν΄μλ `exportμ async ν¨μ`κ° νμνλ€.(λͺ¨λ  μμ²­μ΄ μλ²μ μν΄ νΈμΆλκΈ° λλ¬Έ)
- μμ£Ό μλ°μ΄νΈκ° λλ λ°μ΄ν°(μΈλΆ APIμμ κ°μ Έμ€λ κ²½μ°)λ₯Ό λ―Έλ¦¬ λ λλ§ν΄μΌ νλ κ²½μ° μ¬μ©νλ€.

```jsx
import axios from 'axios';

import LineChart from '../components/chart/LineChart';
import StackedBarChart from '../components/chart/StackedBarChart';
import DoughnutChart from '../components/chart/DoughnutChart';
import { covidStateUrl, covidAgeCaseUrl } from '../api'

import styled from '@emotion/styled';

interface CovidState {
  confCase: number;
  stateDt: string;
  stateTime: string;
}

interface CovidAgeCaseInfo {
  confCase: string;
  stateDt: string;
  gubun: string;
}

interface DashboardProps {
  covidStateList: CovidState[];
  covidAgeCaseList: CovidAgeCaseInfo[];
}

const Dashboard = ({ covidStateList, covidAgeCaseList }: DashboardProps) => {
  return (
    <DashboardContainer>
      <TopContainer>
        <LineChart covidStateList={covidStateList} />
      </TopContainer>
      <RowContainer>
        <RowLeftContainer>
          <StackedBarChart covidAgeCaseList={covidAgeCaseList} />
        </RowLeftContainer>
        <RowRightContainer>
          <DoughnutChart covidAgeCaseList={covidAgeCaseList} />
        </RowRightContainer>
      </RowContainer>
    </DashboardContainer>
  );
};

export default Dashboard;

export const getServerSideProps = async () => {
  const covidState = await axios.get(covidStateUrl as string);
  const covidAgeCase = await axios.get(covidAgeCaseUrl as string);

  if (!covidState && !covidAgeCase) return;

  return {
    props: {
      covidStateList: covidState.data.items.item,
      covidAgeCaseList: covidAgeCase.data.items.item,
    },
  };
};
```

<br/>

## κ²°λ‘ 

- **Next.js**λ₯Ό μ¬μ©νλ©΄ κ° νμ΄μ§μ μ¬μ©ν  `μ¬μ λ λλ§ λ°©μμ μ ν`νμ¬ `νμ΄μ§λ₯Ό κ΅¬μ±`ν  μ μκΈ° λλ¬Έμ **μ±λ₯μ μΈ νΌν¬λ¨Όμ€**λ μ μ μμ±κ³Ό, μλ²μΈ‘ λ λλ§μ ν΅ν **νμ΄λΈλ¦¬λ μ±μ λ§λ€ μ μλ€**λ **κ°μ **μ΄ μλ κ² κ°λ€.
- νμ΄μ§λ₯Ό ν λ² λΉλνκ³  CDNμμ μ κ³΅ν  μ μμΌλ―λ‘ κ°λ₯ν νΒ **μ μ  μμ±**Β (λ°μ΄ν° ν¬ν¨ λ° μ μΈ)μ μ¬μ©νλ κ²μ΄ μ’λ€. (**μμ²­μ΄ μμ λλ§λ€ μλ²μμ νμ΄μ§λ₯Ό λ λλ§νλ κ²λ³΄λ€ ν¨μ¬ λΉ λ₯΄κΈ° λλ¬Έ**)
- **μ μ μμ±κ³Ό μλ²μ¬μ΄λ λ λλ§ λ°©μ μ€ μ΄λ€ λ°©λ²μ΄ μ’μ κΉλ₯Ό μκ°μ λ,** `μ¬μ©μ μμ²­μ μμ νμ΄μ§λ₯Ό λ―Έλ¦¬ λ λλ§ν  κ²μΈκ°?` λ₯Ό μκ°νκ³  μ νν΄μΌ ν  κ² κ°λ€.
  - **ν΄λΌμ΄μΈνΈμΈ‘ λ°μ΄ν° κ°μ Έμ€κΈ°**μ ν¨κ» μ μ  μμ± μ¬μ© :Β νμ΄μ§μ μΌλΆλ₯Ό μ¬μ  λ λλ§νμ§ μκ³  ν΄λΌμ΄μΈνΈμΈ‘ JavaScriptλ₯Ό μ¬μ©νμ¬ μ±μΈ μ μλ€.
  - **μλ²μΈ‘ λ λλ§**Β μ¬μ© :Β νμ΄μ§λ₯Ό CDNμμ μΊμν  μ μκΈ° λλ¬Έμ μλκ° λλ €μ§μ§λ§ λ―Έλ¦¬ λ λλ§λ νμ΄μ§λ ν­μ μ΅μ  μνμ΄λ€.
- μ μ  μμ±μ λ§μΌν νμ΄μ§, λΈλ‘κ·Έ κ²μλ¬Ό λ° ν¬νΈν΄λ¦¬μ€, μ μμκ±°λ μ ν λͺ©λ‘, λμλ§ λ° μ€λͺμλ₯Ό κ΅¬μΆν  λ μ¬μ©νλ κ²μ΄ μ’λ€κ³  νλ€.

<br/>

### μ©μ΄μ λ¦¬

[CDN(μ½νμΈ  μ μ‘ λ€νΈμν¬)](https://aws.amazon.com/ko/what-is/cdn/): λ°μ΄ν° μ¬μ©λμ΄ λ§μ μ νλ¦¬μΌμ΄μμ μΉ νμ΄μ§ λ‘λ μλλ₯Ό λμ΄λ μνΈ μ°κ²°λ μλ² λ€νΈμν¬

<br/>

### μ°Έκ³ λ§ν¬

[Basic Features: Pages | Next.js](https://nextjs.org/docs/basic-features/pages)

[CDNμ΄λ λ¬΄μμΈκ°μ? - CDN μ€λͺ - AWS](https://aws.amazon.com/ko/what-is/cdn/)

[Data Fetching: getStaticProps | Next.js](https://nextjs.org/docs/basic-features/data-fetching/get-static-props)

[Data Fetching: getStaticPaths | Next.js](https://nextjs.org/docs/basic-features/data-fetching/get-static-paths)

[Data Fetching: getServerSideProps | Next.js](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props)

<br/>

```toc

```

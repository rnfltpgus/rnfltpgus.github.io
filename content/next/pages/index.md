---
emoji: 📽️
title: Next.js의 렌더링 방식
date: '2022-12-16 17:10:00'
author: JungSany
tags: blog gatsby JungLog log jung next js build 정적생성 ssr 서버측렌더링 getStaticProps getStaticPaths getServerSideProps
categories: Next
---

기본적으로 Next.js는 모든 페이지를 사전렌더링 한다고 공식문서에 적혀있다.

사전렌더링이라 하면, 클라이언트 측 JavaScript에서 모든 작업을 수행하는 대신 미리 각 페이지에 대한 HTML을 생성해 성능효과와 SEO를 얻을 수 있다.

<br/>

## Next에서 존재하는 두 가지의 렌더링 방식

두 개의 차이점은 페이지에 대한 HTML을 생성할 때 이루어 진다.

- **정적 생성(권장): HTML은 빌드 시 생성되며, 각 요청에서 재사용된다.**
- **서버측 렌더링: HTML은 각 요청에서 생성된다. (`SSR`또는 `동적 렌더링` 이라고도 한다.)**

<br/>

### **공식문서에서는**

`성능상의 이유로 서버 측 렌더링 보다 정적 생성을 사용하는 것이 좋다고 한다.` 설명을 하자면 정적으로 생성된 페이지는 성능 향상을 위한 추가 구성 없이 CDN에 의해 캐시를 할 수 있어서라고 한다. 하지만 경우에 따라 서버측 렌더링이 유일한 경우가 있다고 한다.

<br/>

## 정적 생성

- 페이지가 정적 생성을 사용하는 경우, `next build`시 HTML이 생성되게 되는데, 이 HTML은 각 요청에서 재사용된다.(CDN에서 캐시할 수 있음)
- 데이터가 없거나 있는 경우를 정적으로 생성할 수 있다.

<br/>

### **데이터 없는 정적 생성의 경우**

```jsx
// 아래의 코드는 외부 데이터를 가져오는 코드가 없다.
// 때문에 Next.js에서는 빌드 시간 동안 페이지당 단일 HTML 파일을 생성한다.
const About = () => {
  return <div>About</div>;
};

export default About;
```

<br/>

### **데이터를 사용한 정적 생성인 경우**

외부 데이터를 가져와 사용해야하는 경우에는 두개의 방법이 존재한다.

<br/>

1. 페이지 **콘텐츠**가 외부 데이터에 따라 다른 경우 `getStaticProps`사용

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

2. 페이지 **경로**가 외부 데이터에 따라 다른 경우 `getStaticPaths`사용 (일반적으로 `getStaticProps`에 추가 작성됨)

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

## 서버측 렌더링(SSR)

- 페이지가 서버 측 렌더링을 사용하는 경우 `각 요청에서 페이지 HTML이 생성`된다.
- **Server-side Rendering**를 사용하기 위해서는 `export와 async 함수`가 필요하다.(모든 요청이 서버에 의해 호출되기 때문)
- 자주 업데이트가 되는 데이터(외부 API에서 가져오는 경우)를 미리 렌더링해야 하는 경우 사용한다.

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

## 결론

- **Next.js**를 사용하면 각 페이지에 사용할 `사전렌더링 방식을 선택`하여 `페이지를 구성`할 수 있기 때문에 **성능적인 퍼포먼스**나 정적생성과, 서버측 렌더링을 통한 **하이브리드 앱을 만들 수 있다**는 **강점**이 있는 것 같다.
- 페이지를 한 번 빌드하고 CDN에서 제공할 수 있으므로 가능한 한 **정적 생성** (데이터 포함 및 제외)을 사용하는 것이 좋다. (**요청이 있을 때마다 서버에서 페이지를 렌더링하는 것보다 훨씬 빠르기 때문**)
- **정적생성과 서버사이드 렌더링 방식 중 어떤 방법이 좋을 까를 생각을 때,** `사용자 요청에 앞서 페이지를 미리 렌더링할 것인가?` 를 생각하고 선택해야 할 것 같다.
  - **클라이언트측 데이터 가져오기**와 함께 정적 생성 사용 : 페이지의 일부를 사전 렌더링하지 않고 클라이언트측 JavaScript를 사용하여 채울 수 있다.
  - **서버측 렌더링** 사용 : 페이지를 CDN에서 캐시할 수 없기 때문에 속도가 느려지지만 미리 렌더링된 페이지는 항상 최신 상태이다.
- 정적 생성은 마케팅 페이지, 블로그 게시물 및 포트폴리오, 전자상거래 제품 목록, 도움말 및 설명서를 구축할 때 사용하는 것이 좋다고 한다.

<br/>

### 용어정리

[CDN(콘텐츠 전송 네트워크)](https://aws.amazon.com/ko/what-is/cdn/): 데이터 사용량이 많은 애플리케이션의 웹 페이지 로드 속도를 높이는 상호 연결된 서버 네트워크

<br/>

### 참고링크

[Basic Features: Pages | Next.js](https://nextjs.org/docs/basic-features/pages)

[CDN이란 무엇인가요? - CDN 설명 - AWS](https://aws.amazon.com/ko/what-is/cdn/)

[Data Fetching: getStaticProps | Next.js](https://nextjs.org/docs/basic-features/data-fetching/get-static-props)

[Data Fetching: getStaticPaths | Next.js](https://nextjs.org/docs/basic-features/data-fetching/get-static-paths)

[Data Fetching: getServerSideProps | Next.js](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props)

<br/>

```toc

```

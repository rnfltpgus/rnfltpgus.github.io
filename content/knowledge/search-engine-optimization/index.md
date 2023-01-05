---
emoji: ⚙️
title: 검색엔진최적화(Search Engine Optimization, SEO)에 대해서 잠깐
date: '2023-01-05 17:40:00'
author: JungSany
tags: blog gatsby JungLog log jung seo search engine optimization
categories: 개발지식
---

# SEO란?

웹사이트가 검색 엔진에서 검색 시에 상위에 노출을 시키고 싶다면 `SEO`를 고려해야한다.

**`SEO란?` 사용자의 검색의도를 명확히 이해하여, 고객니즈 기반으로 웹사이트의 기능을 개선∙콘텐츠를 제작하는 방법이다.**

**단순히 검색엔진의 로직에만 맞추는 것이 아니라 웹사이트의 품질, 콘텐츠의 질이 함께 개선되어야 페이지 퀄리티가 높아져서 실질적인 효과를 거둘 수 있다.**

<br/>

## 검색엔진의 일련의 과정

`웹사이트의 품질을 결정하는 일련의 과정`은 **수집 → 정제 → 색인 → 랭킹의 과정**을 거치게 되며, 상세하게는

1. **수집(크롤링, Crawling)**: 검색 엔진의 크롤러를 통하여 각 사이트를 크롤링하여 홈페이지의 콘텐츠 정보를 가져온다.

2. **정제(정제, Refinedness)** : 크롤링하여 가져온 콘텐츠 정보를 유사∙중복문서, 가비지 데이터, 화이트 폰트 등 여러가지의 판단요소를 구별하여 판별을 한다.

3. **색인(인덱싱, Indexing)** : 판별 후 주제별로 색인하여 보관한다.

4. **랭킹(순위,Ranking)** : 검색의도에 맞춰 색인된 콘텐츠에 미리 검색 랭킹 순위를 부여한 후 사용자의 검색어에 따라 결과를 순위별로 검색결과를 제공한다.

<br/>

## 각 검색 엔진의 도움 받기 (웹사이트 등록 및 SEO 최적화)

- 각 검색 엔진에 내 웹사이트 등록하기

  - [Google Search Console](https://search.google.com/search-console/about)과 [Naver Search Advisor](https://searchadvisor.naver.com/)를 통해 구글과 네이버에서 내 사이트를 등록할 수 있다.
  - 순서 (네이버 서치 어드바이저 기준):

    1.  검색 엔진에 내 사이트 등록하기
    2.  본인 사이트임을 인증하기
    3.  관련 문서 제출하기

    - robots.txt - 루트 디렉토리에 이 파일을 작성하는 것에 따라 크롤링을 허가하거나 막을 수 있다.
    - sitemap.xml: 루트 디렉토리에 이 파일을 작성하여 크롤러가 사이트 접근 시 웹사이트의 구조/지도를 제공해줘 정확하고 효율적으로 탐색할 수 있게 도움 준다.

    4.  SEO 최적화하기

<br/>

- SEO 작업하기
  - [https://searchadvisor.naver.com/guide/diagnose-site](https://searchadvisor.naver.com/guide/diagnose-site) ← 네이버의 경우 여기서 SEO에 유리해지기 위한 점검을 받아볼 수 있다.

<br/>

## 중요 태그

### 1. <meta> 태그

<head> 태그 안에 위치되는 <meta> 태그를 사용하여 크롤러가 내 웹사이트를 좀 더 빨리 알아볼 수 있게 할 수 있다.

```html
<head>
  <meta name="keyword" content="HTML, meta, tag, element, reference" />
  <meta name="description" content="HTML meta tag page" />
  <meta name="author name" content="" />
</head>
```

<br/>

### 2. Open Graph

![Open Graph 이미지](https://assets-global.website-files.com/5f1008192dda2baf6f4e16c3/5f34b22f72cfa9400642fc7d_Open-Graph------------.png)

컨텐츠 미리보기, 즉 링크를 공유할 때 잘 만들어진 형식으로 공유되게 하는 것을 말한다.

즉, `Open Graph를 이용`한다면 웹 사이트의 링크를 카톡이나 메신저 창에 공유 시, 위와 같은 이미지의 방식으로 뜨게 할 수 있다.

```jsx
<meta property="og:url" content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" />
<meta property="og:type" content="article" />
<meta property="og:title" content="When Great Minds Don’t Think Alike" />
<meta property="og:description" content="How much does culture influence creative thinking?" />
<meta property="og:image" content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg" />
```

<br/>

## 참고링크

[검색엔진최적화는 무엇인가?](https://www.ascentkorea.com/what-is-seo/)

[검색엔진최적화(seo) 란? A~Z까지 알아보자!!](https://www.next-t.co.kr/seo/%EA%B2%80%EC%83%89%EC%97%94%EC%A7%84%EC%B5%9C%EC%A0%81%ED%99%94seo%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80/)

<br/>

```toc

```

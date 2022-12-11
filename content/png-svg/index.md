---
emoji: 🎨
title: PNG와 SVG
date: '2022-12-11 15:40:00'
author: JungSany
tags: blog gatsby JungLog log jung png svg 차이점 장점 정의
categories: 개발지식
---

**차이점은 `PNG` 파일은 `Bitmap`으로 되어 있고, `SVG` 파일은 `Vector`로 되어있어 이미지 확대시, `PNG`는 `aliasing현상`이 일어나고 `SVG`는 `매끄럽고 선명한 형태`가 유지된 채 표현된다.**

<br/>

### PNG(Portable Network Graphics, PNG)

- 비손실 그래픽 파일 포맷(픽셀형식)
- 특허 문제가 얽힌 GIF 포맷의 문제를 해결하고 개선하기위에 고안됨
- 컬러 팔레트 화상과 그레이스케일 화상, 풀 컬러 화상 방식을 지원함
- 고해상도를 지원하므로 파일 크기가 큼(이미지를 처리/공유/저장/실행하는데 시간이 걸려 페이지 로딩 시간이 길어짐)

<br/>

### SVG(Scalable Vector Graphics, **SVG**)

- 2차원 벡터 그래픽을 표현하기 위함 XML 기반의 파일 형식(벡터 그래픽 파일 형식)
- SVG 형식의 이미지와 그 자동은 XML 텍스트 파일들로 정의 되어 있어 검색화/목록화/스크립트화가 가능하며, 필요하다면 압축도 가능함(**검색 엔진이 텍스트를 분석할 수 있어서, 접근성과 SEO(검색 엔진 최적화)측면에서 좋음**)
- 기본적으로 파일 사이즈는 작은 편에 속하지만, 수학을 기반으로한 형태(점/직선/곡선)로 구성되어 있기 떄문에 수학적인 계산 능력도 필요하며, 복잡해질수록 파일 크기가 커짐
- 로고, 아이콘, 단순화된 이미지에 많이 활용
- IE8 이하에서는 지원되지 않음

<br/>

### 각각 언제 사용하는게 좋을까?

- 반응형이 아닌 디지털 디자인 또는 인쇄 디자인을 디자인하는 경우 - PNG
- 색상 및 레이어 측면에서 편집을 할 수 없게 하는 경우 - PNG, 반대인 경우 SVG
- 앱 또는 반응형 웹 사이트의 UI/UX 디자인 아이콘을 사용하는 경우 - SVG
- 사진 - PNG
- 헤더의 로고 - PNG 또는 SVG

**개인적인 생각으로는 상황에 따라 적용하는게 맞아보이지만, 검색엔진 최적화 관점에서는 태크 요소를 읽히게 하는 SVG를 선호하여 사용할 것 같고, 화면 크기에 맞게 조정해야 되는 경우나 움직이는 이미지를 고려할 경우에는 PNG를 고려할 것 같다.**

<br/>

### 용어사전

[aliasing 현상](https://ko.wikipedia.org/wiki/%EC%97%90%EC%9D%BC%EB%A6%AC%EC%96%B4%EC%8B%B1): 신호 처리에서 표본화를 하는 가운데 각기 다른 신호를 구별해내지 못하게 하는 효과를 가르킴(간단하게는 이미지가 일그러짐을 뜻함 or 계단현상)

<br/>

### 참고링크

[PNG vs. SVG | Adobe](https://www.adobe.com/kr/creativecloud/file-types/image/comparison/png-vs-svg.html)

[svg와 png 이미지 파일의 차이](https://velog.io/@codns1223/svg%EC%99%80-png-%EC%9D%B4%EB%AF%B8%EC%A7%80-%ED%8C%8C%EC%9D%BC%EC%9D%98-%EC%B0%A8%EC%9D%B4)

<br/>

```toc

```

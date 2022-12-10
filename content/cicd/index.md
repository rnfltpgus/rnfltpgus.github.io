---
emoji: 🚠
title: CI/CD에 대해서
date: '2022-12-09 19:00:00'
author: JungSany
tags: blog gatsby CI CD 지속배포 지속적인통합 CI/CD
categories: 개발지식
---

### CI란?

- `빌드/테스트` 자동화 과정
- 자동화 프로세스인 `지속적인 통합(Continuous Integration)`을 의미하는데, CI를 성공적으로 구현할 경우 애플리케이션에 대한 새로운 코드 변경 사항이 정기적으로 빌드 및 테스트되어 공유 리포지토리에 통합되므로 여러 명의 개발자가 동시에 애플리케이션 개발과 관련된 코드 작업을 할 경우 서로 충돌할 수 있는 문제를 해결할 수 있음
- `커밋할 때마다 빌드와 일련의 자동 테스트가 이루어져` 동작을 확인하고 변경으로 인해 문제가 생기는 부분이 없도록 보장

### CD란?

- `배포` 자동화 과정
- 지속적인 서비스 제공(Continuous Delivery) 또는 지속적인 배포(Continuous Deployment)를 의미하며 `상호 교환적`으로 사용됨
- `지속적 배포`는 테스트 및 배포 단계를 자동화하는 DevOps 방식을 논리적 극한까지 끌어 올림
  - 코드 변경이 파이프라인의 이전 단계를 모두 성공적으로 통과하면 수동 개입 없이 해당 변경 사항이 프로덕션에 자동으로 배포 됨
- `지속적 배포`는 또한 성숙하고 입증된 지속적 통합 및 지속적인 전달 단계를 기반으로 함
  - 간단한 코드 변경이 정기적으로 마스터에 커밋되고, 자동화된 빌드 및 테스트 프로세스를 거치며 다양한 사전 프로덕션 환경으로 승격되며, 문제가 발생되지 않으면 최종적으로 배포됨

![CI/CD 프로세스](https://www.redhat.com/cms/managed-files/styles/wysiwyg_full_width/s3/ci-cd-flow-desktop.png?itok=2EX0MpQZ)

### CI / CD 종류

- Jenkins
- CircleCI
- TravisCI
- Github Actions
- etc

<br/>

### 참고링크

[RedHat Ci/CD](https://www.redhat.com/ko/topics/devops/what-is-ci-cd)

[드림코딩 Ci/CD](https://www.youtube.com/watch?v=0Emq5FypiMM)

[seosh817님 글](https://seosh817.tistory.com/104)

<br/>

```toc

```

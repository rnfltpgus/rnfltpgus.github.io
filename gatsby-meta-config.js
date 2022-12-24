module.exports = {
  title: `JungLog`,
  description: `A neat developers`,
  language: `en`,
  siteUrl: `https://rnfltpgus.github.io/`,
  ogImage: `/og-image.png`,
  comments: {
    utterances: {
      repo: `rnfltpgus/rnfltpgus.github.io`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `정세현`,
    bio: {
      role: `Developer`,
      description: ['말로 끝이 아닌', 'A neat developers'],
      thumbnail: 'sany.png',
    },
    social: {
      github: `https://github.com/rnfltpgus`,
      linkedIn: `https://www.linkedin.com/in/sanny1220/`,
      email: `jpp901220@gmail.com`,
    },
  },

  about: {
    timestamps: [
      // 템플릿 및 기본값
      // ========================================================
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2021.11 ~',
        activity: 'Hello world!, 개발자 입문',
        links: {},
      },
      {
        date: '2022.01 ~ 03',
        activity: '바닐라코딩 Prep',
        links: {},
      },
      {
        date: '2022.03 ~ 07',
        activity: '바닐라코딩 BootCamp',
        links: {},
      },
      {
        date: '2022.08 ~ ',
        activity: '취준',
        links: {},
      },
    ],

    projects: [
      // 템플릿 및 기본값
      // ========================================================
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: 'Poke Poke Coching',
        description:
          '현재 저의 상황처럼 앉아서 공부하는 시간이 많은 또는 업무를 하는 사람들을 위한 서비스입니다. 앉아서 자세의 흐트러짐, 시간체크, 스트레칭 모드를 이용할 수 있습니다. (크롬 브러우저 전체화면 툴바 없이 동작 시켜야 최적의 환경에서 사용할 수 있습니다.)',
        techStack: ['Tensorflow', 'postNet', 'React', 'RearTime'],
        thumbnailUrl: 'pokepokecoching.png',
        links: {
          github: 'https://github.com/rnfltpgus/Poke_Poke_Coching_Front',
          demo: 'https://spontaneous-duckanoo-b4cd63.netlify.app/',
        },
      },
      {
        title: 'Auxios',
        description:
          '서울 내의 법원경매 정보를 검색, 확인할 수 있는 웹뷰 기반 앱입니다. 사용자는 검색을 통해서 해당 지역의 본인이 원하는 종류의 매물을 지도 위 마커로 확인할 수 있고, 관심 지역과 관심 매물을 등록 확인할 수 있습니다.',
        techStack: ['React', ' React Native Webview', 'Firebase', 'Kakao Map API', 'Selenium'],
        links: {
          github: 'https://github.com/VanillaAuxious',
          demo: 'https://teamproject-auxios.netlify.app/login',
        },
      },
    ],
  },
};

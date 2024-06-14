// src/profiles.js
const profiles = [
    {
      id: 1,
      name: '쿼카',
      images: [
        `${process.env.PUBLIC_URL}/images/quaker1.jpg`,
        `${process.env.PUBLIC_URL}/images/quaker2.jpg`,
        `${process.env.PUBLIC_URL}/images/quaker3.jpg`,
      ],
      intro: 
        '안녕! 나는 쿼카야. 나는 사람들을 구경하는 걸 좋아해...! 근데 사람들이 이상하게 날 멀리하더라고... 나를 건드리면 엄청난 벌금을 문다고 했던 것 같아...! 그만큼 희귀한 동물이라고!!',
      hobbies: ['사람 구경', '웃기', '견과류 먹기'],
    },
    {
      id: 2,
      name: '래서 판다',
      images: [
        `${process.env.PUBLIC_URL}/images/rathorPanda1.jpg`,
        `${process.env.PUBLIC_URL}/images/rathorPanda2.jpg`,
        `${process.env.PUBLIC_URL}/images/rathorPanda3.jpg`,
      ],
      intro: 
        '나는야 래서판다! 그 유명한 에버랜드 래서판다야~ 작고 귀여운 몸집이지만 위협을 느끼면 내 몸집으로 경계하지...! 과일 먹는 걸 좋아해!',
      hobbies: ['위협하기', '과일 먹기', ''],
    },
    {
        id: 3,
        name: '카피바라',
        images: [
          `${process.env.PUBLIC_URL}/images/capibara1.jpg`,
          `${process.env.PUBLIC_URL}/images/capibara2.jpg`,
          `${process.env.PUBLIC_URL}/images/capibara3.jpg`,
        ],
        intro: 
          '카피바라~ 카피바라카피바라카피바라 나는 쥐와 비슷한 종의 동물이야! 몸집은 크지만 성격은 아주 착하다고?!',
        hobbies: ['멈 때리기', '풀 먹기', '무리 지어 다니기'],
      },
      {
        id: 4,
        name: '백호',
        images: [
          `${process.env.PUBLIC_URL}/images/whiteTiger1.jpg`,
          `${process.env.PUBLIC_URL}/images/whiteTiger2.jpg`,
          `${process.env.PUBLIC_URL}/images/whiteTiger3.jpg`,
        ],
        intro: 
          '어흥! 나는 백호야~ 흰 털로 아주 큰 몸집을 자랑하는 근육질 몸매의 호랑이지! 나는 주로 싸우는 걸 좋아해! 사냥도 즐기지! 주로 육식을 해',
        hobbies: ['사냥', '싸우기', '고기류 먹기'],
      },
    // 더 많은 프로필 추가 가능
  ];
  
  export default profiles;
  
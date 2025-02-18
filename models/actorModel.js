const careers = [
  {
    id: 1,
    userName: "김덕배",
    age: 25,
    careers: [
      {
        category: "movie",
        title: "남산의 부장들",
        role: "부장",
        gender: "남자",
      },
      {
        category: "drama",
        title: "사랑의 불시착",
        role: "군인1",
        gender: "남자",
      },
      {
        category: "musical",
        title: "룰라",
        role: "룰라",
        gender: "남자",
      },
    ],
  },
  {
    id: 2,
    userName: "김춘자",
    age: 55,
    careers: [
      {
        category: "musical",
        title: "카지노",
        role: "회장님",
        gender: "여자",
      },
      {
        category: "drama",
        title: "사랑의 불시착",
        role: "아주머니",
        gender: "여자",
      },
      {
        category: "musical",
        title: "룰라",
        role: "술집주인",
        gender: "여자",
      },
    ],
  },
  {
    id: 3,
    userName: "김잔치",
    age: 42,
    careers: [
      {
        category: "movie",
        title: "잔치집",
        role: "잔치집 주인",
        gender: "남자",
      },
      {
        category: "movie",
        title: "춘수네 잔치",
        role: "잔치집 주인",
        gender: "남자",
      },
      {
        category: "movie",
        title: "덕배네 잔치",
        role: "잔치집 주인",
        gender: "남자",
      },
    ],
  },
  {
    id: 4,
    userName: "이민호",
    age: 30,
    careers: [
      {
        category: "drama",
        title: "꽃보다 남자",
        role: "구준표",
        gender: "남자",
      },
      {
        category: "movie",
        title: "전지적 독자 시점",
        role: "주연",
        gender: "남자",
      },
    ],
  },
];

// 참고 사항 아래의 데이터는 다 다른 페이지에서 나와야함 (js 수정으로 때려박기 금지!);
//  1. 배우 리스트 (이름,나이,커리어) 테이블 형식으로
const actorList = () => careers;

//  2. 남자 배우 리스트 (이름,나이,커리어) 테이블 형식으로
const manActorList = () => {
  // some이 true를 반환하면 filter에 의해 해당 배우 객체는 남음
  return careers.filter((x) => x.careers.some((x) => x.gender === "남자"));
};

//  3. 여자 배우 리스트 (이름,나이,커리어) 테이블 형식으로
const womanActorList = () => {
  return careers.filter((x) => x.careers.some((x) => x.gender === "여자"));
};

//  4. 같은 드라마 || 같은 영화 || 같은 뮤지컬 나온 배우들 (카테고리, 제목, 배우 이름, 역할 ) 테이블
const sameCategory = () => {
  let list = {};
  // 출연 배우 저장 객체
  // key: 카테고리, 제목 / value: 해당 작품의 배우
  let count = {};
  // 작품별 출연 획수 저장 객체
  // key: 카테고리, 제폼 / value: 등장 횟수

  // 모든 배우를 순회하며 각 작품(title)의 출연 횟수를 세기
  careers.forEach((actor) => {
    actor.careers.forEach((x) => {
      const key = `${x.category}, ${x.title}`;
      count[key] = (count[key] || 0) + 1;
      // count[key] 값이 존재하면 +1, 존재하지 않으면 초기값 0으로 설정 후 +1
    });
  });

  // 2번 이상 등장하는 작품만 리스트에 추가
  careers.forEach((actor) => {
    actor.careers.forEach((x) => {
      const key = `${x.category}, ${x.title}`;
      // 2명 이상 출연한 작품만 가져옴
      // 해당 작품이 처음 등장하면 빈 배열로 초기화
      if (count[key] >= 2) {
        if (!list[key]) {
          list[key] = [];
        }

        list[key].push({
          category: x.category,
          title: x.title,
          name: actor.userName,
          role: x.role,
        });
      }
    });
  });

  return list;
};

//  5. 카테고리 영화만 따로 만들어서 (카테고리 이름, 제목, 배우 이름, 역할) 테이블
const movieActorList = () => {
  return careers
    .filter((actor) =>
      actor.careers.some((career) => career.category === "movie")
    )
    .map((actor) => ({
      userName: actor.userName,
      careers: actor.careers.filter((career) => career.category === "movie"),
    }));
};

//  6. 카테고리 드라마만 따로 만들어서 (카테고리 이름, 제목, 배우 이름, 역할) 테이블
const dramaActorList = () => {
  // 드라마가 포함되어있는 배우 다 찾음
  return (
    careers
      .filter((actor) =>
        actor.careers.some((career) => career.category === "drama")
      )
      // 그 배우들의 여러 정보 중에 drama 인 것만 뽑아냄
      .map((actor) => ({
        userName: actor.userName,
        careers: actor.careers.filter((career) => career.category === "drama"),
      }))
  );
};

module.exports = {
  actorList,
  manActorList,
  womanActorList,
  sameCategory,
  movieActorList,
  dramaActorList,
};

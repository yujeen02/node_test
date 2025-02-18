const items = [
  {
    id: 1,
    name: "휴지",
    price: 45000,
  },
  {
    id: 2,
    name: "주방기구",
    price: 66000,
  },
  {
    id: 3,
    name: "세척기",
    price: 665000,
  },
  {
    id: 4,
    name: "자전거",
    price: 124000,
  },
  {
    id: 5,
    name: "세탁기",
    price: 66000,
  },
];

// 전체 리스트 가져오기
const getAllItems = () => {
  return items;
};

// 특정 아이디 가져오기
const getItemsById = (id) => {
  return items.find((x) => x.id === parseInt(id));
};

// 가장 비싼 물건 가져오기
const expensiveItem = () => {
  const exItemPri = Math.max(...items.map((x) => x.price));
  const mostExItem = items.find((x) => x.price === exItemPri);
  return mostExItem;
};

module.exports = { getAllItems, getItemsById, expensiveItem };

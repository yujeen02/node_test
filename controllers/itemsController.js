// 모듈 가져오기
const itemsModel = require("../models/itemsModel");

// models에서 만든 유저 전부 가져오는 컨트롤러
const getItems = (req, res) => {
  const items = itemsModel.getAllItems();
  res.render("items/index", { items });
};

// 해당하는 유저 가져오기, get 요청
const getItem = (req, res) => {
  const item = itemsModel.getItemsById(req.params.id);
  if (item) {
    res.render("items/show", { item });
  }
};

// 가장 비싼 물건 가져오기
const getExItem = (req, res) => {
  const exItems = itemsModel.expensiveItem();
  if (exItems) {
    res.render("items/exItem", { exItems });
  }
};

module.exports = { getItems, getItem, getExItem };

const express = require("express");
const router = express.Router();
const itemsController = require("../controllers/itemsController");

// 아이템 전부 가져오기를 하는 라우터
router.get("/", itemsController.getItems);

// 해당하는 아이템 가져오기를 하는 라우터
router.get("/detail/:id", itemsController.getItem);

// 가장 비싼 아이템 가져오기를 하는 라우터
router.get("/exItem", itemsController.getExItem);

module.exports = router;

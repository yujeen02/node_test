const express = require("express");
const router = express.Router();
const actorsController = require("../controllers/actorController");

// 아이템 전부 가져오기를 하는 라우터
router.get("/", actorsController.getActors);

// 남자 배우들 확인하는 라우터
router.get("/manActor", actorsController.getManActors);

// 여자 배우들 확인하는 라우터
router.get("/womanActor", actorsController.getWomanActors);

// 같은 카테고리 배우들 확인 라우터
router.get("/sameCategory", actorsController.getSameCaActors);

// 영화 배우들 확인하는 라우터
router.get("/movie", actorsController.getMovieActors);

// 드라마 배우들 확인하는 라우터
router.get("/drama", actorsController.getDramaActors);

module.exports = router;

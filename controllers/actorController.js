// 모듈 가져오기
const actorsModel = require("../models/actorModel");

// models에서 만든 배우 전부 가져오는 컨트롤러
const getActors = (req, res) => {
  const actors = actorsModel.actorList();
  res.render("actors/index", { actors });
};

// 남자 배우 가져오기, get 요청
const getManActors = (req, res) => {
  const manActors = actorsModel.manActorList();
  res.render("actors/manActor", { manActors });
};

// 여자 배우 가져오기, get 요청
const getWomanActors = (req, res) => {
  const womanActors = actorsModel.womanActorList();
  res.render("actors/womanActor", { womanActors });
};

// 같은 카테고리, 같은 영화
const getSameCaActors = (req, res) => {
  const sameCaActors = actorsModel.sameCategory();
  res.render("actors/sameCategory", { sameCaActors });
};

// 영화 배우 가져오기, get 요청
const getMovieActors = (req, res) => {
  const movieActors = actorsModel.movieActorList();
  res.render("actors/movie", { movieActors });
};

// 드라마 배우 가져오기, get 요청
const getDramaActors = (req, res) => {
  const dramaActors = actorsModel.dramaActorList();
  res.render("actors/drama", { dramaActors });
};

module.exports = {
  getActors,
  getManActors,
  getWomanActors,
  getSameCaActors,
  getMovieActors,
  getDramaActors,
};

// 모듈 가져오기
const userModel = require("../models/userModel");

// models에서 만든 유저 전부 가져오는 컨트롤러
const getUsers = (req, res) => {
  const users = userModel.getAllUsers();
  res.render("users/index", { users });
};

// 해당하는 유저 가져오기, get 요청
const getUser = (req, res) => {
  const user = userModel.getUserById(req.params.id);
  if (user) {
    res.render("users/show", { user });
  } else {
    res.status(404).send("해당하는 유저가 없습니다");
  }
};

module.exports = { getUsers, getUser };

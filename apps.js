const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
// 순서: set -> get

// body-parser

//x-www-form-urlencoded 방식, 객체 형태{}로 결과가 나옴
app.use(express.urlencoded({ extended: true }));
// json 형식으로 받음
app.use(express.json());

// app.use(express.static("static"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "static")));

//req: 프론트에서 요청하는 것들
// app.get("/", (req, res) => {
//   //req.body
//   res.send("Hello world!"); //보내는것
//   //render: 페이지로 이동
// });

// 메인 페이지 렌더링
app.get("/", (req, res) => {
  res.render("main");
});

let name = {};

// 회원 검색
app.get("/getForm", (req, res) => {
  // get 요청: req.query
  console.log(req.query, "요청 왔니?");
  name = req.query;
  res.render("search", { title: "회원 검색 결과", username: req.query });
});

let data = [];

// 회원 등록
app.post("/postForm", (req, res) => {
  // post 요청: req.body
  data = req.body;
  res.render("userlist", { title: "회원 리스트", userinfo: req.body });
});

// 회원 정보 반환
app.get("/userinfo", (req, res) => {
  const responseData = [].concat(data);
  res.json(responseData);
});

// 검색된 회원 이름 반환
app.get("/username", (req, res) => {
  res.json(name);
});

app.listen(port, () => {
  console.log(`서버 실행 ${port}`);
});

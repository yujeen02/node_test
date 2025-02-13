const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
// 순서: use -> set -> get
app.use(express.urlencoded({ extended: true }));
// json 형식으로 받음
app.use(express.json());
app.use(express.static(path.join(__dirname, "static")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 메인 페이지 렌더링
app.get("/", (req, res) => {
  res.render("join");
});

// get
app.get("/axiosget", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// post
// app.post("/axiospost", (req, res) => {
//   const userData = { id: "123", pw: "123" };
//   const postData = { id: req.body.id, pw: req.body.pw };
//   if (userData.id === postData.id && userData.pw === postData.pw) {
//     res.send("성공");
//   } else res.send("실패");
//   res.end();
// });

app.listen(port, () => {
  console.log(`서버 실행 ${port}`);
});

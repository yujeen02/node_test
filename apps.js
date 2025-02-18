const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

// 라우팅 파일 불러오기
const userRouters = require("./routes/userRoutes");
const itemsRouters = require("./routes/itemsRoutes");
const actorsRouters = require("./routes/actorRoutes");

// const actorsRouters = require("./routes/actorRoutes");

app.use(express.urlencoded({ extended: true }));
// json 형식으로 받음
app.use(express.json());

app.use("/static", express.static(path.join(__dirname, "static")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// /users 경로에 대한 라우팅 처리
app.use("/users", userRouters); // '/users'에 대한 요청은 userRoutes로 처리
app.use("/items", itemsRouters);
app.use("/actors", actorsRouters);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 기본 홈 라우트
app.get("/", (req, res) => {
  res.render("index", { title: "MVC 패턴" });
});

app.listen(port, () => {
  console.log(`서버 실행 ${port}`);
});

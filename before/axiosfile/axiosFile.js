const express = require("express");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    const ext = path.extname(file.originalname);

    cb(null, Date.now() + ext);
  },
});

const uploads = multer({ storage });

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
// json 형식으로 받음
app.use(express.json());

app.use(express.static(path.join(__dirname, "static")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 메인 페이지 렌더링
app.get("/", (req, res) => {
  res.render("axiosFile");
});

// post 1개
app.post("/upload", uploads.single("files"), (req, res) => {
  const data = {
    src: req.file.filename,
    title: req.body.title,
  };

  console.log(data);
  res.send(data);
});

// post 2개
app.post("/upload2", uploads.array("files", 10), (req, res) => {
  console.log(req.files); // 배열로 반환된 파일 정보 확인
  console.log(req.body); // 폼 데이터 확인

  const data = {
    src1: req.files[0].filename,
    src2: req.files[1].filename,
    title: req.body.title,
  };

  res.send(data);
});

app.listen(port, () => {
  console.log(`서버 실행 ${port}`);
});

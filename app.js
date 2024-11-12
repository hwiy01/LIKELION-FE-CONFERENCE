import express from "express";
import mongoose from "mongoose";
import guestBookRouter from "./routes/guestbook.route.js";
import dotenv from "dotenv";
import path from "path";

// env 파일 것을 쓰겠다 의미
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB 연결 성공"))
  .catch((err) => console.error("MongoDB 연결 오류:", err));

// 미들웨어
// next로 다음 넘겨주지 않으면 뒤의 라우트 작업들이 실행되지 않음
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(express.static(path.join(process.cwd(), "public")));

// 이 경로일 때 guestBookRouter를 사용한다는 미들웨어
app.use('/guestbook', guestBookRouter);

// 라우터
app.get('/',(req,res)=>{
    res.send('루트 경로입니당');
});

// 서버 실행
// 서버 실행 시 콜백 함수 실행됨
app.listen(PORT, ()=>{
    console.log(`${PORT}번 포트 서버 실행`);
});
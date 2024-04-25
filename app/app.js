"use strict"

//모듈
const express = require('express');
const bodyParser = require("body-parser");
const dotenv = require("dotenv");  // 모든 개발환경에서 사용가능함
dotenv.config();

const app = express();

//라우팅
const home = require("./src/routes/home") //home에 있는 js 를 가져옴

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs")
app.use(express.static(`${__dirname}/src/public`))
app.use(bodyParser.json());
//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true}));

app.use("/", home); //미들 웨어를 등록해주는 메서드

module.exports = app;
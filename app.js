const express = require('express')
const app = express()

//라우팅
const home = require("./routes/home") //home에 있는 js 를 가져옴

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs")

app.use("/", home); //미들 웨어를 등록해주는 메서드

module.exports = app;
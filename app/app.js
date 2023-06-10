// 서버를 가동시키는 곳
'use strict'

// 모듈
const express = require('express');
const app = express();



// 라우팅
const home = require("./src/routes/home")
// 만든 자바스크립트 파일을 불러오는 거기 때문에 폴더를 상대적으로 명시를 해줘야함

// 앱 세팅 -> 화면 뷰(HTML)를 처리해줄수 있는 뷰 엔진을 세팅해줌
app.set("views", "./src/views") // 두번째 파라미터로 화면 뷰를 관리해줄 파일이 저장된 폴더이름을 넘겨줌
app.set("view engine", "ejs");
// html 코드들을 어떤 엔진으로 해석 할지를 정해줄수있음 -> ejs사용(굉장히 많이 사용하는 뷰 엔진중 하나(html이라생각))

app.use("/", home);
// use는 미들웨어를 등록해주는 메서드

module.exports = app;


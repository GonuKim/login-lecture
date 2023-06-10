'use strict'

const express = require("express");
const router = express.Router(); // express의 라우터를 불러와줘야함

const ctrl = require("./home.ctrl") // home.ctrl 모듈 불러오기 -> hello와 login을 써야하니까

router.get("/", ctrl.hello);

router.get("/login", ctrl.login);

module.exports = router;
// 라우터를 사용할 수 있도록 외부로 내보내는 명령
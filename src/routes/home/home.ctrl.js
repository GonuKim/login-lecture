'use strict'

const hello = (req, res) => {
    res.render("home/index"); // render()함수로 index.ejs파일의 경로로 연결해줌
}

const login = (req, res) => {
    res.render("home/login")
}

// index.js에서 사용할수 있도록 모듈을 바깥으로 빼 준다.
module.exports = {
    hello,
    login, 
};
// 오브젝트는 원래 키와 값으로 이루어져있는데, 위에 처럼 넣으면 사실상
// {
//     hello: hello,
//     login: login, 
// };
// 이렇게 넣어진거라고 생각하면 된다


'use strict'

// 밑에 주석 처리한 코드를 더 명확하게 표현하기 위해서 output으로 합쳐줌
const output = {
    home: (req, res) => {
        res.render("home/index"); // render()함수로 index.ejs파일의 경로로 연결해줌
    },
    login: (req, res) => {
        res.render("home/login")
    },
};
// const home = (req, res) => {
//     res.render("home/index"); // render()함수로 index.ejs파일의 경로로 연결해줌
// }

// const login = (req, res) => {
//     res.render("home/login")
// }

const process = {
    login: (req, res) => {
        console.log(req.body);
    },
};

// index.js에서 사용할수 있도록 모듈을 바깥으로 빼 준다.
module.exports = {
    output,
    process,
};
// 오브젝트는 원래 키와 값으로 이루어져있는데, 위에 처럼 넣으면 사실상
// {
//     home: home,
//     login: login, 
// };
// 이렇게 넣어진거라고 생각하면 된다


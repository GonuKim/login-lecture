'use strict'

const id = document.querySelector('#id');
const passwd = document.querySelector('#passwd');
const loginBtn = document.querySelector('button');

loginBtn.addEventListener(
    'click',
    () => {
        const req = {
            id: id.value,
            passwd: passwd.value,
        };
         
        // 서버랑 프론트랑 해당 데이터를 어떤 경로에서 주고 받을지를 정해줘야함
        // 프론트가 해당 경로를 요청하기 전에 API라는게 이미 만들어져 있어야 함
        // 일단 /login이라는 경로가 이미 있다고 가정하고 함
        // 두번째 파라미터로 전달할 데이터를 오브젝트의 형태로 보내야 함
        // json 이라는 데이터 타입을 이용해서 데이터를 전달할거니까 req를 json 형태로 감싸주어야 함
        // stringify() 단순히 오브젝트를 문자형으로 바꿔주는 메서드
        // body를 통해서 데이터를 전달할 때는, http메서드 중에서 POST메서드로 데이터를 전달해주어야 함
        // 또한 header를 통해 내가 전달하는 데이터가 JSON 데이터라고 알려주어야 함(오브젝트로 전달)
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(req)
        });
        console.log(JSON.stringify(req));
        // 이러한 데이터를 서버에서 받을려면,  login이라는 경로와, POST라는 메서드로 데이터를 받을수있는
        // API가 마련되어있어야함
    }   
);



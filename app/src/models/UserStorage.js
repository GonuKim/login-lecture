'use strict'

class UserStorage {
    // 클래스 안에 변수를 선언할 때는 const가 필요없다
    static #users = { // #을 앞에 붙히는 것은 public에서 private로 바꿔주는것 -> 은닉화
        id: ["qwe", "asd", "zxc"],
        passwd: ["123", "456", "789"],
        name: ["가나다", "라마바", "사아자"],
    };

    static getUsers(...fields) { // ...arg 이렇게 하면 파라미터로 넘긴 변수들이 배열 형태로 들어오게 됨
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
        if (users.hasOwnProperty(field)) {
            newUsers[field] = users[field];
        }
        return newUsers;
    }, {});
    return newUsers;
    }
}

module.exports = UserStorage;
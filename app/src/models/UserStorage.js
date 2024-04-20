"use strict";

class UserStorage {
    static #users = {
        id: ["worimIT", "나개발", "김팀장"],
        psword: ["1234", "1234", "123456"],
        name: ["우리밋", "나개발", "김팅장"],
    };


    static getUsers(...fields) {      //외부에서 #users 에 접근하는 방법
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
        if (users.hasOwnProperty(field)) {
            newUsers[field] = users[field];
        }
        return newUsers
        },{});
        console.log(newUsers)
        return newUsers;
}
}

module.exports = UserStorage;

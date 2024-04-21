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
        return newUsers;
    }
    
    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        console.log("usersKeys : ", usersKeys)
        const userInfo = Object.keys(users).reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser
        }, {});
        return userInfo;
    }

}

module.exports = UserStorage;

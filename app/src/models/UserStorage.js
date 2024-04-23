"use strict";

const fs = require("fs").promises; //promises 동작이 완료된 상태를 알려줌

class UserStorage {
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        console.log("usersKeys : ", usersKeys)
        const userInfo = Object.keys(users).reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser
        }, {});
        return userInfo;
    };

    static getUsers(...fields) {      //외부에서 #users 에 접근하는 방법
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
        if (users.hasOwnProperty(field)) {
            newUsers[field] = users[field];
        }
        return newUsers
        },{});
        return newUsers;
    };
    
    static getUserInfo(id) {
        return fs
        .readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUserInfo(data, id);
        })
        .catch(console.error);
    }




    static save(userInfo) {
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);

        return { success : true};
    }

}

module.exports = UserStorage;

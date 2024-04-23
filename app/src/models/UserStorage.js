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

    static #getUsers(data, isAll, fields) {
        const users = JSON.parse(data);
        if (isAll) return users;
        
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers
            },{});
            return newUsers;
    }

    static getUsers(isAll, ...fields) {      //외부에서 #users 에 접근하는 방법
        return fs
        .readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUsers(data, isAll, fields);
        })
        .catch(console.error);
    };
    
    static getUserInfo(id) {
        return fs
        .readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUserInfo(data, id);
        })
        .catch(console.error);
    }




    static async save(userInfo) {
        const users = await this.getUsers(true)
        console.log(users);

        fs.writeFile ("./src/databases/users.json", JSON.stringify(users));
    }

}

module.exports = UserStorage;

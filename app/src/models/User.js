"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }
    async login() {
      const client = this.body;
      try {
        const user = await UserStorage.getUserInfo(client.id);

        if (user) {
            if (user.id === client.id && user.psword === client.psword) {
                return {success: true};
            }
            return {success: false, msg: "비밀번호가 틀렸습니다."}
        }
        return { success: false, msg: "존재하지 않은 아이디입니다."};
      } catch (err) {
        return {success: false, err};  // err: err 키와 value 같으면 key 만 입력
      }
    }

    async register() {
        const client = this.body;
        try {
          const response = await UserStorage.save(client)
          return response
        } catch (err) {
          return { success: false, err}; // err: err 키와 value 같으면 key 만 입력
        }

    }
}

module.exports = User;
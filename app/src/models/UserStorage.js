"use strict";

const db = require("../config/db");
class UserStorage {

    static getUserInfo(id) {
      const query = "SELECT * FROM users WHERE id = ?;";
      return new Promise((resolve, reject) => {  //Promise 구문이 성공하면 resolve 반환 실패 reject 반환
        db.query(query, [id], (err, data) => {
          if(err) reject(`${err}`); //실패시 err
          resolve(data[0]);       //성공시 resolve 반환
         });
      });
   
    }

    static async save(userInfo) {
      const query = "INSERT INTO users(id, name, psword) VALUES(?, ?, ?);";
      return new Promise((resolve, reject) => {  //Promise 구문이 성공하면 resolve 반환 실패 reject 반환
        db.query(
          query,
           [userInfo.id, userInfo.name, userInfo.psword],
           (err) => {
          if(err) reject(`${err}`); //실패시 err
          resolve({ success: true });       //성공시 resolve 반환
         });
      });
    }
}

module.exports = UserStorage;

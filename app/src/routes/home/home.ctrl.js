"use strict";

const UserStorage = require("../../models/UserStorage")
const output = {
    home: (req,res) => {
        res.render("home/index")
    },
    
    login: (req,res) => {
        res.render("home/login")
    },
};


const process = {
    login: (req,res) => {
        const id = req.body.id,
          psword = req.body.psword;

        const users = UserStorage.getUsers("id", "psword");  //클레스에서 객책 가져오기

        const response = {};
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                response.success = true;
                return res.json (response);
            }
        }
        response.success = false;
        response.msg = "로그인에 실패하셨습니다"
        return res.json(response);

    },
};


// 밖에서 사용하려면 export 해줘야 함
module.exports = {
    output,
    process,
};
"use strict";

const User = require("../../models/User")

const output = {
    home: (req, res) => {
        res.render("home/index")
    },
    
    login: (req, res) => {
        res.render("home/login")
    },
    register: (req, res) => {
        res.render("home/register")
    }
};

const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
    register: (req, res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);        
    }
};


// 밖에서 사용하려면 export 해줘야 함
module.exports = {
    output,
    process,
};
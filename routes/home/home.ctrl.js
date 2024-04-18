const hello = (req,res) => {
    res.render("home/index")
};

const login = (req,res) => {
    res.render("home/login")
};

// 밖에서 사용하려면 export 해줘야 함
module.exports = {
    hello,   //key 값만 있는경우 key : key, 키 값이 생김
    login,
};
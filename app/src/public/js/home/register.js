"use strict";

const id = document.querySelector("#id"),
      name = document.querySelector("#name"),
      psword = document.querySelector("#psword"),
      confirmPsword = document.querySelector("#confirm-psword"),
      registerBtn = document.querySelector("#button");


    registerBtn.addEventListener("click", register);

function register() {
    const req = {
        id : id.value,
        name : name.value,
        psword : psword.value,
        confirmPsword : confirmPsword.value,
    };
    // console.log('register click event : ',req);

    //서버로 메세지 전달 방법
    fetch("/register",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())  //서버응답
    .then((res) => {            //응답완로 promis
        if (res.success) {
            location.href = "/login";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        // console.error(new Error("로그인 중 에러 발생"))
        console.error("회원가입 중 에러 발생")
    }); 

}

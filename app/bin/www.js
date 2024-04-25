"use strict";

const app = require("../app")
const logger = require("../src/config/logger");
const PORT = process.env.PORT || 3000;  // || or 연산자 앞에값이 있으면 true 반환해서 앞값을 가져오고 값이 없으면 false 를 반환해서 뒤에오는 3000 값을 사용함

app.listen(PORT, ()=>{
    logger.info(`${PORT} 포트에서 서버가 가동되었습니다`)
})
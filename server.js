const express = require("express");
const app = express();
const port = // 포트(3000)

// 교수님꺼 깃허브에서 받아오기. 전에 한거 못 받았음 이번에 확실히 깃허브에서 받아야 함

app.use(express.static("public"));
app.use(express.json());

app.post("/login", (req, res)=>{
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;

    // DB 없는 상태에서 (실제 개발할 때 이러면 안됨)

    if(email === 'aaa@aaa.com' && password  === '1234'){ // 정보가 일치하면
        res.json({result: 'success'});
    } else {
        res.json({result: 'fail'});
    }
});
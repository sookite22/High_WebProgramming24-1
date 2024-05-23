const express = require("express");
const qs = require("qs");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set();

app.set("view engine", "ejs"); // 탬플릿 엔진(엔진마다 문법 다름)
app.use(express.static("public")); // 아래 코드들을 하나로 묶어 관리하는 방법(static files) // 서버가 항상 켜져있어야 함. 도메인 변경되면 안됨.

app.get("/data", function (req, res) {
  // 인증된 사용자인지 체크
  // 요청에 대한 유효성 확인
  // 요청 확인
  // DB에서 데이터를 찾고 가져온다 -> 가져온 데이터를 json으로 변환한다
  res.json({ name: "아무개", age: 20, address: "경기도 부천시" });
});

app.get("/chapions", function (req, res) {
  // 목록 지정하기 // 로그인 -> 목록
  // var champions = [
  //     "가렌",
  //     "나서스",
  //     "마스터이"
  // ];
  res.json({ champions: champions });
});
app.get("/chapions/:championIndex", (req, res) => {
  // 상세정보 지정(Index값 or ID값)
  res.json({ champions: champions[req.params.championIndex] }); // champion에 대한 정보를 주겠다.
});
var champions = [
  // 밖으로 빼기 가능 -> 전역 변수
  "가렌", // championIndex값: 0
  "나서스", // 1
  "마스터이", // 2
];

app.get("/flowers", (req, res) => {
  // 목록 지정하기
  console.log(req.query);
  // query에서 color값이 있을 경우, 가져와서 flowers 목적에서 일치하는 color를 가진 항목만 반환
  if (req.query.color !== undefined) {
    const filteredFlowers = flowers.filter(
      (flower) => flower.color === req.query.color
    );
    res.json({ flowers: filteredFlowers });
  } else {
    // var list = [];
    // for(var i = 0; i > flowers.length; i++){
    //     list.push(flowers[i].name); // name들만 따로 모아서 주겠다.
    // }

    var list = flowers.map((flower) => {
      flower.name;
    }); // map()

    res.json({ flowers: flowers });
  }
});
app.get("/flowers/:flowerIndex", (req, res) => {
  // 상세정보 지정
  res.json({ flowers: flowers[req.params.flowerIndex] });
});

// 상세 정보 입력
var flowers = [
  {
    name: "개나리",
    thumnail: "", // 이미지 등 추가
    color: "노란색",
    season: "봄",
    lifeCycle: 100,
    country: ["대한민국", "일본", "중국"],
  },
  {
    name: "진달래",
    thumnail: "",
    color: "보라색",
    season: "봄",
    lifeCycle: 100,
    country: ["대한민국", "일본", "중국"],
  },
  {
    name: "장미",
    thumbnail: "",
    color: ["빨강", "노랑", "파랑"],
    season: "봄",
    lifeCycle: 100,
    country: ["대한민국", "일본", "중국"],
  },
];

app.get("/example1", (req, res) => {
  // 주소창 뒤에 '/example1' 경로 덧붙이기 // url 매핑
  res.render("index", { name: "김수연" }); // 서버 코드가 바뀔 땐 서버 재시작해야 함.
});

app.get("/example2", (req, res) => {
  // 화살표 함수 // 파라미터로 req, res 가져옴
  res.render("index", { name: "아무개" });
});

app.get("/example3", (req, res) => {
  res.render("index", { name: "홍길동" });
});

// app.get('/', (req, res) => { // GET 메소드
//     res.send('Hello World!')
// })

// app.get('/2', (req, res) => { // 뒤에 /2 추가하면 출력 // 경로 추가
//     res.send('안녕!')
// })

app.listen(port, () => {
  console.log("Example app listening on port ${port}");
});

// 위 코드들은 정적 코드임. 이들을 하나로 묶어 관리하는 방법 존재.

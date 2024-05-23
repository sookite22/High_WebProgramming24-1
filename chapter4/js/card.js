const flowers = [
    {
        name: "개나리",
        thumnail: "", // 이미지 등 추가
        color: "노란색",
        season: "봄",
        lifeCycle: 100,
        country: [
            "대한민국", "일본", "중국"
        ]
    }, {
        name: "진달래",
        thumnail: "",
        color: "보라색",
        season: "봄",
        lifeCycle: 100,
        country: [
            "대한민국", "일본", "중국"
        ]
    }, {
        name: "장미",
        thumbnail: "",
        color: ["빨강", "노랑", "파랑"],
        season: "봄",
        lifeCycle: 100,
        country: [
            "대한민국", "일본", "중국"
        ]
    }
];
// 서버로부터 데이터를 가져와 HTML을 그에 맞게 편집
// TODO: 데이터 가져오기

fetch('flowers 파일 url 만들고 넣기'{ method: 'GET'}) // request 날림 // 대부분 GET 방식으로 함 
    .then(response => response.json())
    .then(json => {
        for(var i = 0; i<json.flowers.length; i++){
            const pElement = document.querySelector('#card' + (i+1)+ '-text');
            pElement.innerHTML = flowers[0],name;
        }

        console.log(json);
    });

console.log(1); // 동기/비동기
console.log(2);
console.log(3);
console.log(4);

// pElement.innerHTML = '편집된 내용'; // 내용 바꾸기 가능
// 지금까지 서버에 대한 내용 거의 다 함
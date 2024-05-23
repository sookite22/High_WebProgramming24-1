// chapter2
// 배열(Array)

var numbers = [1,2,3,4,5,6,7,8,9,10];
var chars = ["a", "b", "c", "d", "e"];

// 반복문
// 1~100 까지 더한 결과 출력 함수
function sum(){
    var sum = 0;
    for(var i = 1; i <= 100; i++){ // i++, i = i + 1, i += 1
            sum += i;
            console.log(sum);
    }
    console.log("1부터 100까지 더한 결과: ", sum);
}

// 배열과 반복문
function example(){
    for(var i = 0; i < chars.length; i++){
        console.log(chars[i]);
    }
}

/*
var a = 1;
var f = 1.11;
var b = "안녕";
var umbers = [1,2,3,4,5,6,7,8,9,10]; // 배열

var person = { // 객체 생성(object)
    age: 20,
    gender: "male", 
    address: "경기도 군포시",
    tall: "175cm",
    name: "가렌",

    sayHello: function(){ // 함수
        return "hello";
    }
    qSkill: function(){
        return setSilent();
    }
}
*/

// chpter1
function nameChange(){
    var nameSelectElement = document.querySelector("#nameSelect");
    var nameElement = document.querySelector("#name"); // 편집 대상 id 선택(쿼리 기반)
    nameElement.innerHTML = nameSelectElement.value; // innerHTML 안쪽 내용을 바꾸고 싶을 때 사용
}
console.log(nameElement) // 브라우저는 위에서 아래로 해석 -> id="name"이 앞에 있어야 함
        
// 2번
const updateNameButton = document.querySelector("#updateName");
updateNameButton.addEventListener("click", nameChange); // click할 때 nameChange() 호출(두번째 방법)
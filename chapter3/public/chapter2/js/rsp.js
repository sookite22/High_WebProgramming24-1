// 가위바위보 게임

// function getRSP(){
//     return '가위';
// }

// 브라우저 새로고침 -> 가위/바위/보 중 하나 랜덤으로 표시
// 프로그래밍에서의 랜덤 - Math.random()
// Math.ceil(): 올림 / Math.floor(): 내림 / Math.round(): 반올림

var getRSP = () => { // 화살표 함수(람다식)
    var randomValue = getRandomInt(1,1001);
    if(randomValue % 3 === 0){
        return '가위';
    } else if(randomValue % 3 === 1){
        return '바위';
    } else if(randomValue === 3){ // 기본 방법
        return '보';
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
  }  

console.log(getRSP()); // 1~3
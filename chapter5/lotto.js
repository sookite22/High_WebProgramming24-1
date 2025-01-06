// 로또 번호 생성기
// 1부터 45까지 수 중 겹치지 않는 랜덤으로 6개 수 생성
// 생성된 번호를 화면에 표현
// 번호 생성 버튼을 클릭했을 때 생성, 버튼을 다시 누르면 재생성
// 로또 번호 생성 API 서버가 번호 생성
// random, Array, 반복문 등 사용-->

// 1부터 45까지 적힌 공이 담긴 바구니
var numbersArray = [];
for (var i = 0; i < 45; i++) {
    numbersArray[i] = i + 1;
}

var pickArray = [];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

// Random하게 숫자 6개 뽑아서 pickArray에 담기
// type1: Random하게 뽑은 숫자가 이미 뽑혔는지 비교
// type2: numbersArray의 바구니에서 뽑힌건 제거하고 나머지 중에 뽑기
for (var i = 0; i < 6; i++) {
    var pickIndex = getRandomInt(0, numbersArray.length);
    var pickNumber = numbersArray.splice(pickIndex, 1)[0];
    pickArray.push(pickNumber);
}

pickArray = pickArray.sort(function (a, b) {
    if (a - b > 0) {
        return 1;
    } 

    if (a - b < 0) {
        return -1;
    }

    return 0;
});
console.log(pickArray);

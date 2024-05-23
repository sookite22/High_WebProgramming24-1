console.log("javascript로 element 편집"); // console에 log를 찍어라 // -> 브라우저 콘솔창에 띄움

    // 1번 - 사용자가 버튼을 클릭했을 때 namechange() 실행
    function nameChange(){
        var nameSelectElement = document.querySelector("#nameSelect");
        var nameElement = document.querySelector("#name"); // 편집 대상 id 선택(쿼리 기반)
        nameElement.innerHTML = nameSelectElement.value; // innerHTML 안쪽 내용을 바꾸고 싶을 때 사용
    }
    console.log(nameElement) // 브라우저는 위에서 아래로 해석 -> id="name"이 앞에 있어야 함
            
// 2번
const updateNameButton = document.querySelector("#updateName");
updateNameButton.addEventListener("click", nameChange); // click할 때 nameChange() 호출(두번째 방법)
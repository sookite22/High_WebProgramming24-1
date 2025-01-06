const btnSubmit = document.querySelector("#btnSubmit");
const inputEmail = document.querySelector("#inputEmail");
const inputPassword = document.querySelector("#inputPassword");

inputPassword.addEventListener('input', function(e){
    // if(e.keyCode === ){
    //     // 에러
    // }
});

btnSubmit.addEventListener('click', function(){
    // 입력된 Email Password 가져오기

    console.log(inputEmail.value, inputPassword.value);
    // 예외 처리 조건으로 길이 제한 등 걸 수 있음

    // fetch를 통해 입력된 정보를 서버로 전달
    fetch('http://localhost:3000/login'){
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringfy {
            email: inputEmail.value,
            password: inputPassword.value
        }),
    })
    .then(res => res.json())
    .then((json) =>{
        const result = json.result;
        if(result === 'success'){
            alert('로그인 성공');
        } else {
            alert('로그인 실패')
        }
    });
});
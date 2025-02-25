// 회원가입 버튼 이벤트 처리
const regbtn = document.querySelector('#regbtn');
const paymentfrm = document.paymentfrm;

// 비동기 처리 구현 - async, await
regbtn.addEventListener('click', async () => {
    const formData = new FormData(paymentfrm);
    console.log(formData);

    let jsondata = {};
    formData.forEach((val, key) => {
        jsondata[key] = val;
    });
    console.log(jsondata);

    const res = await fetch('http://127.0.0.1:8000/payment',
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsondata)
        })

    // 서버로의 응답 처리
        .then(res => {
            alert('회원가입 성공!!');
        }).catch((error) => {
            alert('회원가입 실패!!');
            console.log(data.detail);
        });
});


regbtn.addEventListener('click', () => {
})
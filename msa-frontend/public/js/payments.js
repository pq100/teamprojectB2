// 페이지 로드시 자동으로 실행
window.addEventListener('load', async () => {
    try {
        const payments = await getPaymentList();
        displayPaymentList(payments);
    } catch (e) {
        console.log(e);
        alert('회원 목록 조회 실패!');
    }
});

// 회원 데이터 가져오기
const getPaymentList = async () => {
    let url = 'http://127.0.0.1:8000/payments'
    const res = await fetch(url);
    if (res.ok) {
        const data = await res.json()
        return data;
    } else {
        throw new Error('회원 목록 조회 실패!!')
    }
};



// 가져온 회원 데이터 표시하기
const displayPaymentList = (payments) => {
    const paymentlist = document.querySelector('#payment-list');
    console.log(payments);

    let html = '<ul>';
    for (const payment of payments) {
        html += `<li>
            결제 순번 : ${payment.mno}, 
            결제 차량 번호 : ${payment.carnum} ,
            결제 ID : ${payment.payid} ,
            결제 일 : ${payment.paydate}
        </li>`;
    }
    html += '</ul>';

    paymentlist.innerHTML = html;
};



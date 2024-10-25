// 페이지 완전하게 로드시 자동으로 실행
document.addEventListener('DOMContentLoaded', async () => {

    // http://127.0.0.1:3000/user/1 ~ 3
    let idx = location.href.lastIndexOf('/');
    let mno = location.href.substring(idx + 1);

    try {
        const payment = await getPaymentOne(mno);
        displayPaymentOne(payment);
    } catch (e) {
        console.log(e);
        alert('회원 상세 정보 조회 실패!');
    }
});

//
const getPaymentOne = async (mno) => {
    let url = `http://127.0.0.1:8000/payment/${mno}`;
    const res = await fetch(url);
    if (res.ok) {
        data = await res.json();
        return data;
    } else {
        throw new Error('회원 상세 정보 fetch 오류 발생!!');
    }
}


const displayPaymentOne = (payment) => {
    const paymentone = document.querySelector('#paymentone');
    console.log(payment);

    let html = '<ul>';
        html += `<li>
            회원 번호 :${payment.mno},
            회원 아이디 :${payment.carnum},
            회원 이름 : ${payment.payid},
            회원 이메일 : ${payment.payment},
            회원 가입일 : ${payment.paydate}
        </li>`;

    html += '</ul>';

    paymentone.innerHTML = html;
};
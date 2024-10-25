from sqlalchemy.orm import Session

from schema.payment import PaymentBase
from models.payment import Payment


# 회원 가입 처리
# 기본 회원 정보 + 번호, 가입일
def register(db: Session, payment: PaymentBase):
    # 비밀번호 암호화


    payment = Payment(**payment.model_dump())
    db.add(payment)
    db.commit()
    db.refresh(payment)
    print(payment)

    return payment


# 회원 목록 조회
def paymentlist(db: Session):
    return db.query(Payment.mno, Payment.carnum, Payment.payid, Payment.paydate).all()



# 회원 상세 조회
def paymentone(db: Session, mno: int):
    return db.query(Payment).filter(Payment.mno == mno).first()

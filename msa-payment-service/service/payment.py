from sqlalchemy.orm import Session

from schema.payment import PaymentBase
from models.payment import Payment



def register(db: Session, payment: PaymentBase):


    payment = Payment(**payment.model_dump())
    db.add(payment)
    db.commit()
    db.refresh(payment)
    print(payment)

    return payment


# 목록 조회
def paymentlist(db: Session):
    return db.query(Payment.mno, Payment.carnum, Payment.payid, Payment.paydate).all()



# 상세 조회
def paymentone(db: Session, mno: int):
    return db.query(Payment).filter(Payment.mno == mno).first()

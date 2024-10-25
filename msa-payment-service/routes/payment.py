from schema.payment import Payment, PaymentList, PaymentBase
from fastapi import APIRouter
from fastapi.params import Depends
from sqlalchemy.orm import Session

from service.database import get_db
from service.payment import register, paymentlist, paymentone

router = APIRouter()

@router.post('/payment', response_model=Payment)
async def new_payment(payment: PaymentBase, db: Session=Depends(get_db)):
    print(payment)

    return register(db, payment)


@router.get('/payments', response_model=list[PaymentList])
async def list_payments(db: Session=Depends(get_db)):
    payments = paymentlist(db)

    return [PaymentList.model_validate(u) for u in payments]


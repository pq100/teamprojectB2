from pydantic import BaseModel


class PaymentBase(BaseModel):
    carnum: str
    payid: str
    payment: str
    paydate: str

class Payment(PaymentBase):
    mno: int

    # ORM 맵핑을 위한 설정
    # 데이터베이스 테이블 각 행 <-> pydantic
    class Config:
        from_attributes=True

class PaymentList(BaseModel):
    mno: int
    carnum: str
    payid: str
    paydate: str

    class Config:
        from_attributes=True

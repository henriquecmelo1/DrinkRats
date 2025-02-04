from pydantic import BaseModel
from datetime import datetime

class LogBase(BaseModel):
    user_id: int
    drink_id: int
    data: datetime


class LogCreate(LogBase):
    pass

class Log(LogBase):
    class Config:
        from_attributes = True

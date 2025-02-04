from pydantic import BaseModel
from datetime import date, time

class LogBase(BaseModel):
    user_id: int
    drink_id: int
    date: date
    time: time


class LogCreate(LogBase):
    pass

class Log(LogBase):
    id: int
    class Config:
        from_attributes = True

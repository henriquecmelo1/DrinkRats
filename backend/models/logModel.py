from db.database import Base
from sqlalchemy import Column, Integer, Date, ForeignKey, Time, cast, func
from sqlalchemy.orm import relationship
from models.userModel import UserModel
from models.drinkModel import DrinkModel
from datetime import date, time


class LogModel(Base):
    __tablename__ = 'logs'
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.id')) 
    drink_id = Column(Integer, ForeignKey('drinks.id'))
    date = Column(Date, default=date.today())
    time = Column(Time, default=cast(func.now(), Time))



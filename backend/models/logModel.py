from db.database import Base
from sqlalchemy import Column, Integer, String, DateTime, func, ForeignKey
from sqlalchemy.orm import relationship
from models.userModel import UserModel
from models.drinkModel import DrinkModel


class LogModel(Base):
    __tablename__ = 'logs'
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.id')) 
    drink_id = Column(Integer, ForeignKey('drinks.id'))
    data = Column(DateTime, default=func.now())



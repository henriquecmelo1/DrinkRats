from db.database import Base
from sqlalchemy import Column, Integer, String, DateTime, func, ForeignKey
from sqlalchemy.orm import relationship

class Log(Base):
    tablename = 'logs'
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.id')) 
    drink_id = Column(Integer, ForeignKey('drinks.id'))
    data = Column(DateTime, default=func.now())

    user = relationship("User", back_populates="logs")
    drink = relationship("Drink", back_populates="logs")


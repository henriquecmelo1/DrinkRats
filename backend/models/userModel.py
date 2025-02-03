from db.database import Base
from sqlalchemy.orm import relationship
from sqlalchemy import Column, Integer, String

class UserModel(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    points = Column(Integer)

    logs = relationship("Log", back_populates="user")


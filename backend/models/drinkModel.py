from db.database import Base
from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

class Drink(Base):
    tablename = 'drinks'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    description = Column(String)
    points = Column(Integer)

    logs = relationship("Log", back_populates="drink")

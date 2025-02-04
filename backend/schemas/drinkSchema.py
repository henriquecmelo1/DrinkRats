from pydantic import BaseModel

class DrinkBase(BaseModel):
    name: str
    description: str
    points: int

class DrinkCreate(DrinkBase):
    pass

class Drink(DrinkBase):
    id: int
    class Config:
        from_attributes = True
        populate_by_name = True


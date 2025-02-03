from pydantic import BaseModel

class DrinkSchema(BaseModel):
    name: str
    description: str
    points: int


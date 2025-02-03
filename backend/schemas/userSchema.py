from pydantic import BaseModel

class UserBase(BaseModel):
    id: int
    name: str
    points: int

class UserCreate(UserBase):
    pass

class User(UserBase):
    class Config:
        from_attributes = True

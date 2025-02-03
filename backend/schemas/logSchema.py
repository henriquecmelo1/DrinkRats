from pydantic import BaseModel
from datetime import datetime

class LogSchema(BaseModel):
    user_id: int
    drink_id: int
    data: datetime

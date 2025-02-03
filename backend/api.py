from fastapi import FastAPI
from routers import all_routers
from db.database import Base, engine
from models import *

Base.metadata.create_all(bind=engine)

app = FastAPI()


for router in all_routers:
    app.include_router(router)


from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker
from sqlalchemy.exc import OperationalError
from dotenv import load_dotenv
import os, time

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

# engine = create_engine(DATABASE_URL)

for i in range(10):
    try:
        engine = create_engine(DATABASE_URL)
        connection = engine.connect()
        print("Banco conectado com sucesso!")
        break
    except OperationalError:
        print(f"Tentando conectar... ({i+1}/10)")
        time.sleep(2)
else:
    print("Não foi possível conectar ao banco.")
    raise Exception("Database not ready")


SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
from sqlalchemy import text
from db.database import engine

with engine.connect() as connection:
    result = connection.execute(text("SELECT name FROM sqlite_master WHERE type='table';"))
    tables = result.fetchall()
    print("Tabelas no banco de dados:", tables)

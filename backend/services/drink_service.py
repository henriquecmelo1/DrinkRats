from sqlalchemy.orm import Session
from models.drinkModel import Drink

#post
def create_drink(db: Session, drink: Drink):
    db_drink = Drink(**drink.dict())
    db.add(db_drink)
    db.commit()
    db.refresh(db_drink)
    return db_drink

#get
def get_drink(db: Session, drink_id: int):
    return db.query(Drink).filter(Drink.id == drink_id).first()

def get_drinks(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Drink).offset(skip).limit(limit).all()

def get_drink_by_name(db: Session, name: str):
    return db.query(Drink).filter(Drink.name == name).first()

#put
def update_drink(db: Session, drink_id: int, drink: Drink):
    db.query(Drink).filter(Drink.id == drink_id).update(drink)
    db.commit()
    return db.query(Drink).filter(Drink.id == drink_id).first()

#delete
def delete_drink(db: Session, drink_id: int):
    db.query(Drink).filter(Drink.id == drink_id).delete()
    db.commit()
    return drink_id

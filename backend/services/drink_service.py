from sqlalchemy.orm import Session
from models.drinkModel import DrinkModel

#post
def create_drink(db: Session, drink: DrinkModel):
    db_drink = DrinkModel(**drink.dict())
    db.add(db_drink)
    db.commit()
    db.refresh(db_drink)
    return db_drink

#get
def get_drink(db: Session, drink_id: int):
    return db.query(DrinkModel).filter(DrinkModel.id == drink_id).first()

def get_drinks(db: Session, skip: int = 0, limit: int = 100):
    return db.query(DrinkModel).offset(skip).limit(limit).all()

def get_drink_by_id(db: Session, id: int):
    return db.query(DrinkModel).filter(DrinkModel.id == id).first()

#put
def update_drink(db: Session, drink_id: int, drink: DrinkModel):
    db.query(DrinkModel).filter(DrinkModel.id == drink_id).update(drink.dict())
    db.commit()
    return db.query(DrinkModel).filter(DrinkModel.id == drink_id).first()

#delete
def delete_drink(db: Session, drink_id: int):
    drink = db.query(DrinkModel).filter(DrinkModel.id == drink_id).first().name
    db.query(DrinkModel).filter(DrinkModel.id == drink_id).delete()
    db.commit()
    return "O drink " + drink + " foi deletado com sucesso!"

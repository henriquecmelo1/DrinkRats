from fastapi import APIRouter, Depends
from schemas.drinkSchema import DrinkBase, Drink
from services.drink_service import create_drink, get_drink, get_drinks, update_drink, delete_drink
from sqlalchemy.orm import Session
from db.database import get_db

router = APIRouter(prefix="/drinks", tags=["Drinks"])

@router.post("/", response_model=Drink)
async def create_new_drink(drink: DrinkBase, db: Session = Depends(get_db)):
    return create_drink(db=db, drink=drink)

@router.get("/{drink_id}", response_model=Drink)
async def get_single_drink(drink_id: int, db: Session = Depends(get_db)):
    return get_drink(db=db, drink_id=drink_id)

@router.get("/", response_model=list[Drink])
async def get_all_drinks(db: Session = Depends(get_db)):
    return get_drinks(db=db)

@router.put("/{drink_id}", response_model=Drink)
async def update_single_drink(drink_id: int, drink: DrinkBase, db: Session = Depends(get_db)):
    return update_drink(db=db, drink_id=drink_id, drink=drink)

@router.delete("/{drink_id}", response_model=str)
async def delete_single_drink(drink_id: int, db: Session = Depends(get_db)):
    return delete_drink(db=db, drink_id=drink_id)


from fastapi import APIRouter, Depends
from schemas.logSchema import LogBase, Log
from services.log_service import create_log, get_log, get_logs, update_log, delete_log, delete_last_drink
from sqlalchemy.orm import Session
from db.database import get_db

router = APIRouter(prefix="/logs", tags=["Logs"])

@router.post("/", response_model=Log)
async def create_new_log(log: LogBase, db: Session = Depends(get_db)):
    return create_log(db=db, log=log)

@router.get("/{log_id}", response_model=Log)
async def get_single_log(log_id: int, db: Session = Depends(get_db)):
    return get_log(db=db, log_id=log_id)

@router.get("/", response_model=list[Log])
async def get_all_logs(db: Session = Depends(get_db)):
    return get_logs(db=db)

@router.put("/{log_id}", response_model=Log)
async def update_single_log(log_id: int, log: LogBase, db: Session = Depends(get_db)):
    return update_log(db=db, log_id=log_id, log=log)

@router.delete("/{log_id}", response_model=str)
async def delete_single_log(log_id: int, db: Session = Depends(get_db)):
    return delete_log(db=db, log_id=log_id)


@router.delete("/{user_id}/{drink_id}", response_model=str)
async def delete_last_drink_log(user_id: int, drink_id: int, db: Session = Depends(get_db)):
    return delete_last_drink(db=db, user_id=user_id, drink_id=drink_id)

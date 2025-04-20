import { addLog, deleteLastDrink } from "../services/logService";
import { useState } from "react";


interface DrinkAmountProps {
    drink_id: number;
    player_id: number;

    
    drink_name: string;
    amount: number;
}


function DrinkAmount(props: DrinkAmountProps) {
    const [amount, setAmount] = useState(props.amount);

    return (
        <div className="card mb-2">

            <div className="card-body d-flex justify-content-between align-items-center">
                <h5 className="card-title">{props.drink_name}</h5>

                <div>
                    <button className="btn btn-outline-success" onClick={()=>{addLog(props.player_id, props.drink_id); setAmount(amount+1)}}><i className="bi bi-plus"></i></button>
                    <span className="mx-3">{amount}</span>
                    <button className="btn btn-outline-danger" onClick={()=>{deleteLastDrink(props.player_id, props.drink_id); setAmount(amount-1)}}><i className="bi bi-dash"></i></button>
                </div>

            </div>
        </div>

    )
}

export default DrinkAmount;
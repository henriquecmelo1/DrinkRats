import { addLog, deleteLastDrink } from "../services/logService";


interface DrinkAmountProps {
    drink_id: number;
    player_id: number;

    
    drink_name: string;
    amount: number;
}


function DrinkAmount(props: DrinkAmountProps) {
    return (
        <div className="card mb-2">

            <div className="card-body d-flex justify-content-between align-items-center">
                <h5 className="card-title">{props.drink_name}</h5>

                <div>
                    <button className="btn btn-outline-success" onClick={()=>{addLog(props.player_id, props.drink_id)}}><i className="bi bi-plus"></i></button>
                    <span className="mx-3">{props.amount}</span>
                    <button className="btn btn-outline-danger" onClick={()=>{deleteLastDrink(props.player_id, props.drink_id)}}><i className="bi bi-dash"></i></button>
                </div>

            </div>
        </div>

    )
}

export default DrinkAmount;
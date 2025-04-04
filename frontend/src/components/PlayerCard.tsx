import DrinkAmount from "./DrinkAmount";
import { useEffect, useState } from "react";
import { getDrinkAmount } from "../services/logService";

interface PlayerCardProps {
    name: string;
    player_id: number;
}

function PlayerCard(props: PlayerCardProps) {
    const [drinkNameAmount, setDrinkNameAmount] = useState<any>([]);

    useEffect(() => {
        getDrinkAmount(props.player_id)
            .then((data) => {
                setDrinkNameAmount(data);
            })
            .catch((error) => {
                console.error("Error fetching drink amount:", error);
            });
    }
        , [props.player_id]);






    return (
        <div className="card text-center p-0 ms-5 my-3 col-3" >
            <div className="card-header" style={{ backgroundColor: '#f0f0f0' }}>
                <h5>{props.name}</h5>
            </div>
            <div className="card-body">

                {drinkNameAmount.map((drink: any) => (
                    <DrinkAmount key={drink.drink_id} drink_id={drink.drink_id} player_id={props.player_id} drink_name={drink.drink_name} amount={drink.drink_count} />
                ))}


            </div>
        </div>
    )
}

export default PlayerCard;
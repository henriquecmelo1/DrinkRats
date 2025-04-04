import { useEffect, useState } from "react";
import { getPlayers } from "../services/playerService";
import PlayerCard from "../components/PlayerCard";

interface PlayerType {
    id: number;
    name: string;
    points: number;
}


function Loggings() {
    const [Players, setPlayers] = useState<PlayerType[]>([]);

    useEffect(() => {
        getPlayers()
            .then((data) => setPlayers(data))
            .catch((error) => console.error("Error fetching players:", error));
    }, []);


    return (
        <div className="row d-flex justify-content-center align-items-center">
           
                {Players.map((SinglePlayer) => (
                    <PlayerCard key={SinglePlayer.id} player_id={SinglePlayer.id} name={SinglePlayer.name} />
                ))}
            
        </div>
    )


}


export default Loggings;
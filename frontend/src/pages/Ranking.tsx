import { useEffect, useState } from "react";
import PlayerRank from "../components/PlayerRank";

interface PlayerType {
    id: number;
    name: string;
    points: number;
}



function Ranking() {
    const [Players, setPlayers] = useState<PlayerType[]>([]);
    const baseUrl = "https://drinkrats.onrender.com"


    useEffect(() => {
        fetch(`${baseUrl}/users/`)
            .then((response) => response.json())
            .then((data) => {
                // ordenando por pontos
                const sortedPlayers = data.sort((a: PlayerType, b: PlayerType) => b.points - a.points);
                setPlayers(sortedPlayers);
            })
            .catch ((error) => console.error("Error fetching players:", error));

}, []);


return (<>
    <div className="card my-3 mx-3 col-10 align-items-center">
        {Players.map((SinglePlayer, index) => (
            <PlayerRank index={index+1} id={SinglePlayer.id} name={SinglePlayer.name} points={SinglePlayer.points} />
        ))}
    </div>
</>
);
}

export default Ranking;
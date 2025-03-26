import { useEffect, useState } from "react";
import Player from "../components/Player";

interface PlayerType {
    id: number;
    name: string;
    points: number;
}

function PlayerList() {
    const [Players, setPlayers] = useState<PlayerType[]>([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/users/")
            .then((response) => response.json())
            .then((data) => setPlayers(data))
            .catch((error) => console.error("Error fetching players:", error));
            
        }, []);


    return (<>
        <div className="card my-3 mx-3 col-10 align-items-center"> 
            {Players.map((SinglePlayer) => (
                <Player key={SinglePlayer.id} name={SinglePlayer.name} />
            ))}
        </div>
        <button className="btn btn-primary col-2">Adicionar Novo Jogador</button>
        </>
    );
}

export default PlayerList;
import { useEffect, useState } from "react";
import Player from "../components/Player";
import PlayerModal from "../components/PlayerModal";

interface PlayerType {
    id: number;
    name: string;
    points: number;
}

function PlayerList() {
    const [Players, setPlayers] = useState<PlayerType[]>([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/users/")
            .then((response) => response.json())
            .then((data) => setPlayers(data))
            .catch((error) => console.error("Error fetching players:", error));
            
        }, []);

    function closeModal() {
        setShowModal(false);
    }


    return (<>
        <div className="card my-3 mx-3 col-10 align-items-center"> 
            {Players.map((SinglePlayer) => (
                <Player key={SinglePlayer.id} name={SinglePlayer.name} />
            ))}
        </div>
        <button className="btn btn-primary col-2" onClick={() => setShowModal(!showModal) }>Adicionar Novo Jogador</button>
        <div></div>
        <PlayerModal isOpen={showModal}  close={closeModal}/>


        
        </>
    );
}

export default PlayerList;
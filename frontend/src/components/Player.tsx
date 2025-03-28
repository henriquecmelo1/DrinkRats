import { deletePlayer } from "../services/playerService";
import { useState } from "react";
import PlayerModal from "./PlayerModal";


interface Props {
    Player: {
        id: number;
        name: string;
        points: number;
    };
}


function Player(player: Props) {
    const [showModal, setShowModal] = useState(false);

    function closeModal() {
        setShowModal(false);
    }

    return (<>
        <div className="card mb-2 mt-2 col-10">

            <div className="card-body d-flex justify-content-between align-items-center">
                <h5 className="card-title">{player.Player.name}</h5>

                <div >
                    <button className="btn btn-warning me-3" onClick={() => setShowModal(!showModal)}>Editar</button>
                    <button className="btn btn-danger" onClick={() => deletePlayer(player.Player.id)}>Excluir</button>
                </div>

            </div>
        </div>
        <PlayerModal isOpen={showModal} close={closeModal} Player={player.Player}/>

    </>
    );
}

export default Player;
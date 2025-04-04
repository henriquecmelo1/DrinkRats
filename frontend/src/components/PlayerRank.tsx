import { useState } from "react";
import LogModal from "./LogModal";

interface PlayerRankProps {
    name: string;
    points: number;
    index: number;
    id: number;
}


function PlayerRank(props: PlayerRankProps) {
    const [showModal, setShowModal] = useState(false);

    function closeModal() {
        setShowModal(false);
    }

    return (<>
        <div className="card mb-2 mt-2 col-10">

            <div className="card-body d-flex justify-content-between align-items-center">
                <h5 className="card-title">#{props.index}  {props.name}</h5>

                <div className="d-flex mx-3 justify-content-between gap-2 align-items-baseline">
                    <button className="text-dark text-decoration-none" onClick={()=>{setShowModal(!showModal)}}><i className="bi bi-search fs-6 "></i></button>
                    <h6>{props.points} Pontos</h6>
                </div>

            </div>
        </div>
        <LogModal isOpen={showModal} close={closeModal} playerName={props.name} player_id={props.id} />
        </>
    )
}

export default PlayerRank;
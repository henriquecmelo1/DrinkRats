import { useState } from "react";
import { addPlayer, updatePlayer } from "../services/playerService";



interface PlayerModalProps {
    isOpen: boolean;
    close: () => void;

    Player ?: {
        id: number;
        name: string;
        points: number;
    };

}


function PlayerModal(props: PlayerModalProps) {
    const [name, setName] = useState(props.Player?.name || ""); // State to store player name


    // Function to handle form submission
    const handleAddPlayer = async () => {
        if (!name.trim()) {
            alert("Por favor, insira um nome para o jogador.");
            return;
        }

        try {
            await addPlayer(name); // Call addPlayer function from PlayerService
            alert("Jogador adicionado com sucesso!");
            setName("");
            props.close();
        } catch (error) {
            alert("Erro ao adicionar o jogador.");
        }
    };


    if (props.isOpen) {
        return (

            <div className="modal show d-block" tabIndex={-1} role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header justify-content-between">
                            <h5 className="modal-title">
                                {props.Player?.id ? 'Editar Jogador' : 'Adicionar Jogador'}
                            </h5>
                            <button type="button" className="close" onClick={props.close}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">


                            <div className="mb-3">
                                <label className="form-label">Nome do jogador</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} // Update state
                                />
                            </div>


                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={props.close}>
                                Fechar
                            </button>

                           
                            {props.Player ? (
                                <button className="btn btn-warning" onClick={() => props.Player && updatePlayer(props.Player, name)}>
                                    Editar
                                </button>
                            ) : (
                                <button className="btn btn-primary" onClick={handleAddPlayer}>
                                    Adicionar
                                </button>
                            )
                                
                            }

                            

                        </div>
                    </div>
                </div>
            </div>





        );
    } else {
        return null;
    }
}

export default PlayerModal
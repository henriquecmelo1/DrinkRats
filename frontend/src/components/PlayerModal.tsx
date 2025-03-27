import { useState } from "react";


interface PlayerModalProps {
    isOpen: boolean;
    close: () => void;

}


function PlayerModal(props: PlayerModalProps) {
    const [name, setName] = useState("");


    // Function to handle form submission
    const handleAddPlayer = async () => {
        if (!name.trim()) {
            alert("Por favor, insira um nome para o jogador.");
            return;
        }

        try {
            const response = await fetch("http://127.0.0.1:8000/users/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: name, points: 0 }),
            });

            if (!response.ok) {
                throw new Error("Erro ao adicionar o jogador.");
            }
            setName(""); // Clear input field
            props.close(); // Close modal
            window.location.reload(); // Refresh page
        } catch (error) {
            alert("Erro ao enviar dados. Tente novamente.");
            console.error("Erro:", error);
        }
    };


    if (props.isOpen) {
        return (

            <div className="modal show d-block" tabIndex={-1} role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header justify-content-between">
                            <h5 className="modal-title">Adicionar Jogador</h5>
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
                            <button type="button" className="btn btn-primary" onClick={handleAddPlayer}>
                                Adicionar
                            </button>

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
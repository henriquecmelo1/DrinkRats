import { useState } from "react";
import { addDrink, updateDrink } from "../services/drinkService";

interface DrinkModalProps {
    isOpen: boolean;
    close: () => void;

    Drink?: {
        id: number;
        name: string;
        points: number;
        description: string;

    }

}

function DrinkModal(props: DrinkModalProps) {
    const [name, setName] = useState(props.Drink ? props.Drink.name : "");
    const [description, setDescription] = useState(props.Drink ? props.Drink.description : "");
    const [points, setPoints] = useState(props.Drink ? props.Drink.points : 0);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (props.Drink) {
            updateDrink({ name, description, points }, props.Drink.id);
        } else {
            addDrink({ name, description, points });
        }

        setName("");
        setDescription("");
        setPoints(0);
        props.close();
    }



    if (props.isOpen) {
        return (
            <div className="modal show d-block" tabIndex={-1} role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header justify-content-between">
                            <h5 className="modal-title">{props.Drink ? 'Editar Bebida' : 'Adicionar Bebida'}</h5>
                            <button type="button" className="close" onClick={props.close}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Nome da bebida</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Descrição</label>
                                    <textarea
                                        name="description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="form-control"
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">{props.Drink ? 'Editar' : 'Adicionar'}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export default DrinkModal;


import { useState } from "react";
import { deleteDrink, increaseDrinkPoints, decreaseDrinkPoints } from "../services/drinkService";
import DrinkModal from "./DrinkModal";

interface DrinkPointsProps {
    Drink: {
        id: number;
        name: string;
        points: number;
        description: string;

    }
}



function DrinkPoints(props: DrinkPointsProps) {
    const [showModal, setShowModal] = useState(false);
    const [points, setPoints] = useState(props.Drink.points);

    function closeModal() {
        setShowModal(false);
    }


    return (<>
        <div className="card mt-3 m-0 col-3 text-center" style={{ height: '18rem' }}>
            <div className="row justify-content-center">
                <div className="card-header d-flex justify-content-between align-items-center" style={{ backgroundColor: '#f0f0f0' }}>
                    <h5 className="">{props.Drink.name}</h5>
                    <div>
                        <button className="btn btn-primary" onClick={() => {
                            const newPoints = points + 1;
                            setPoints(newPoints);
                            increaseDrinkPoints(props.Drink.id, props.Drink, newPoints); 
                        }}>
                            <i className="bi bi-plus"></i>
                        </button>
                        <span className="mx-3">{points}</span>
                        <button className="btn btn-primary" onClick={() => {
                            const newPoints = points - 1;
                            setPoints(newPoints);
                            decreaseDrinkPoints(props.Drink.id, props.Drink, newPoints);
                        }}><i className="bi bi-dash"></i></button>
                    </div>
                </div>


                <div className="card-body d-flex flex-column justify-content-between" style={{ height: "100%" }}>
                    <p className="card-text">
                        {props.Drink.description}
                    </p>
                    <div className="d-flex justify-content-evenly ">
                        <button className="btn btn-warning" onClick={() => setShowModal(!showModal)}>Editar</button>
                        <button className="btn btn-danger" onClick={() => deleteDrink(props.Drink.id)} >Excluir</button>
                    </div>
                </div>
            </div>
        </div>


        <DrinkModal isOpen={showModal} close={closeModal} Drink={props.Drink} />
    </>)
}

export default DrinkPoints;







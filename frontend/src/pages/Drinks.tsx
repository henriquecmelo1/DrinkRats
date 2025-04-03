import { useEffect, useState } from "react";
import DrinkPoints from "../components/DrinkPoints";
import { getDrinks } from "../services/drinkService";
import DrinkModal from "../components/DrinkModal";

interface DrinkType {
    id: number;
    name: string;
    description: string;
    points: number;
}

function DrinksList(){
    const [Drinks, setDrinks] = useState<DrinkType[]>([]);
    const [showModal, setShowModal] = useState(false);
    
        useEffect(() => {
            getDrinks()
                .then((data) => setDrinks(data))
                .catch((error) => console.error("Error fetching players:", error));
                
            }, []);

    function closeModal() {
        setShowModal(false);
    }

        return(
            <>
            <div className="row p-0 m-0 justify-content-evenly">
                {Drinks.map((SingleDrink) => (
                    <DrinkPoints key={SingleDrink.id} Drink={SingleDrink} />
                ))}
            </div>
            <button className="btn btn-primary mt-3 mx-0 p-0 col-2" onClick={()=> setShowModal(!showModal)}>Adicionar Nova Bebida</button>
            <DrinkModal isOpen={showModal} close={closeModal}/>
            
            </>
        )
}

export default DrinksList;
import { useEffect, useState } from "react";
import DrinkPoints from "../components/DrinkPoints";

interface DrinkType {
    id: number;
    name: string;
    description: string;
    points: number;
}

function DrinksList(){
    const [Drinks, setDrinks] = useState<DrinkType[]>([]);
    
        useEffect(() => {
            fetch("http://127.0.0.1:8000/drinks/")
                .then((response) => response.json())
                .then((data) => setDrinks(data))
                .catch((error) => console.error("Error fetching players:", error));
                
            }, []);

        return(
            <>
            <div className="row p-0 m-0 justify-content-evenly">
                {Drinks.map((SingleDrink) => (
                    <DrinkPoints key={SingleDrink.id} name={SingleDrink.name} description={SingleDrink.description} points={SingleDrink.points} />
                ))}
            </div>
            <button className="btn btn-primary mt-3 mx-0 p-0 col-2">Adicionar Nova Bebida</button>
            </>
        )
}

export default DrinksList;
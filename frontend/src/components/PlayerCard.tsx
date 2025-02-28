import DrinkAmount from "./DrinkAmount";

interface Props {
    name: string;
}

function PlayerCard(props: Props) {
    return (
        <div className="card text-center p-0 ms-5 my-3 col-3" >
            <div className="card-header" style={{ backgroundColor: '#f0f0f0' }}>
                <h5>{props.name}</h5>
            </div>
            <div className="card-body">
                <DrinkAmount name="cerveja" amount={0}/>
                <DrinkAmount name="vodka" amount={3}/>
                <DrinkAmount name="moscow mule" amount={2}/>

            </div>
        </div>
    )
}

export default PlayerCard;
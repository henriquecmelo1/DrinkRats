import DrinkAmount from "./DrinkAmount";
// import DrinkPoints from "./DrinkPoints";


function PlayerCard() {
    return (
        <div className="card text-center p-0 ms-5 my-3 col-3" >
            <div className="card-header" style={{ backgroundColor: '#f0f0f0' }}>
                <h5>usuário</h5>
            </div>
            <div className="card-body">
                <DrinkAmount />
                <DrinkAmount />
                <DrinkAmount />

            </div>
        </div>
    )
}

export default PlayerCard;
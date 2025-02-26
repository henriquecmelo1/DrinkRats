function DrinkAmount() {
    return (
        <div className="card mb-2">

            <div className="card-body d-flex justify-content-between align-items-center">
                <h5 className="card-title">bebida</h5>

                <div>
                    <button className="btn btn-primary">+</button>
                    <span className="mx-3">0</span>
                    <button className="btn btn-primary">-</button>
                </div>

            </div>
        </div>

    )
}

export default DrinkAmount;
function DrinkAmount() {
    return (
        <div className="card mb-2">

            <div className="card-body d-flex justify-content-between align-items-center">
                <h5 className="card-title">bebida</h5>

                <div>
                    <button className="btn btn-outline-success"><i className="bi bi-plus"></i></button>
                    <span className="mx-3">0</span>
                    <button className="btn btn-outline-danger"><i className="bi bi-dash"></i></button>
                </div>

            </div>
        </div>

    )
}

export default DrinkAmount;
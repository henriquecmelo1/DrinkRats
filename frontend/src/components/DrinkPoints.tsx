function DrinkPoints() {
    return (
        <div className="card mt-3 ms-3 col-3 text-center" style={{ height: '18rem' }}>
            <div className="row justify-content-center">
                <div className="card-header d-flex justify-content-between align-items-center" style={{ backgroundColor: '#f0f0f0' }}>
                    <h5 className="">Bebida</h5>
                    <div>
                        <button className="btn btn-primary"><i className="bi bi-plus"></i></button>
                        <span className="mx-3">1</span>
                        <button className="btn btn-primary"><i className="bi bi-dash"></i></button>
                    </div>
                </div>


                <div className="card-body d-flex flex-column justify-content-between" style={{ height: "100%" }}>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <div className="d-flex justify-content-evenly ">
                        <button className="btn btn-warning">Editar</button>
                        <button className="btn btn-danger">Excluir</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DrinkPoints;







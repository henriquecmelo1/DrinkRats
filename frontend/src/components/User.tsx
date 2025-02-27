function User(){
    return (
        <div className="card mb-2 mt-2 col-10">

            <div className="card-body d-flex justify-content-between align-items-center">
                <h5 className="card-title">Usuário *LEMBRAR BOTAO +</h5>

                <div >
                    <button className="btn btn-warning me-3">Editar</button>
                    <button className="btn btn-danger">Excluir</button>
                </div>

            </div>
        </div>
    );
}

export default User;
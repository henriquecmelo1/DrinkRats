function Navbar() {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="">BoozeRats</a>

                <div className="d-flex gap-2">
                    <a className="btn btn-outline-primary">Alterar Pontuação</a>
                    <a className="btn btn-outline-primary">Alterar Integantes</a>
                    <a className="btn btn-outline-primary">Alterar Bebidas</a>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;
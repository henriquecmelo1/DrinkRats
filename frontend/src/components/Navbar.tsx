import { Link } from "react-router-dom";


function Navbar() {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
            
                <Link to="/" className="navbar-brand fs-4 fw-semibold">DrinkRats</Link>

                <div className="d-flex gap-2">
                    <Link to="/ranking" className="btn btn-outline-warning">Ranking</Link>
                    <span></span><span></span>                    
                    <Link to="/players" className="btn btn-outline-primary">Alterar Integrantes</Link>
                    <Link to="/drinks" className="btn btn-outline-primary">Alterar Bebidas</Link>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;
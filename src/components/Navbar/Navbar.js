import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="index.html">AT TALLER</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link" href="index.html">CERÁMICA</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="index.html">CUADROS</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="index.html">CUADERNOS</a>
                        </li>
                        <li className="nav-cart">
                            <CartWidget/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
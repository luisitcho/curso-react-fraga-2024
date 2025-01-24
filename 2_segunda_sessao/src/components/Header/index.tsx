import { Link } from 'react-router-dom'
export function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sobre" className="nav-link">Sobre</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contato" className="nav-link">Contato</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/produto" className="nav-link">Produtos</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
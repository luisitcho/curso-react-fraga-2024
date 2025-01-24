import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="footer py-3 bg-light">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item">
                    <Link to="/" className="nav-link px-2 text-body-secondary">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/sobre" className="nav-link px-2 text-body-secondary">Sobre</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contato" className="nav-link px-2 text-body-secondary">Contato</Link>
                </li>
                <li className="nav-item">
                    <Link to="/produto" className="nav-link px-2 text-body-secondary">Produtos</Link>
                </li>
            </ul>

            <p className="text-center text-body-secondary">
                <span style={{ verticalAlign: 'inherit' }}>
                    <span style={{ verticalAlign: 'inherit' }}>
                        © 2024 Empresa, Inc.
                    </span>
                </span>
            </p>

        </footer>
    )
}
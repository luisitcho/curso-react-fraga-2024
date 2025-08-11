import { Link } from "react-router-dom";
export function NotFound() {
    return (
        <>
            <div className="custom-bg text-dark">
                <div className="d-flex align-items-center justify-content-center min-vh-100 px-2">
                    <div className="text-center">
                        <h1 className="display-1 fw-bold">404</h1>
                        <p className="fs-2 fw-medium mt-4">Ops! Página não encontrada</p>
                        <p className="mt-4 mb-5">A página que você procura não existe ou foi movida.</p>
                        <Link to="/" className="btn btn-light fw-semibold rounded-pill px-4 py-2 custom-btn">Ir para Home</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
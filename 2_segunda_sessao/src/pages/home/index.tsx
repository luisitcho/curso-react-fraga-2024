import { Link } from 'react-router-dom';
export function Home() {
    return (
        <>
            <h1>Bem vindo a Home</h1>
            <Link to="/sobre">Ir para Sobre</Link>
        </>
    )
}
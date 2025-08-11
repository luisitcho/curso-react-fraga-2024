import { Link } from "react-router-dom";

export function NotFound() {
    return (
        <div className="flex flex-col w-full min-h-screen justify-center items-center text-white">
            <h1 className="font-bold text-6xl mb-2">404</h1>
            <h2 className="font-bold text-4xl mb-4">Página não encontrada</h2>
            <p className="italic text-1xl mb-3">
                Não encontramos a página que voce deseja!
            </p>
            <Link to="/" className="bg-gray-50/20 py-1 px-4 rounded-md">
                Voltar para a página inicial
            </Link>
        </div>
    );
}

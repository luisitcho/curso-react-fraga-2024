import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

export function Cart() {
    const { cart } = useContext(CartContext);

    console.log("Cart items:", cart);
    return (
        <div className="cart">
            <main className="w-full px-4 mx-auto">
                <div className="container">
                    <h1 className="font-bold text-2xl mb-4 mt-10 text-center">
                        Meu carrinho
                    </h1>

                    {cart.length === 0 && (
                        <div className="text-center">
                            <p className="font-medium">Seu carrinho está vazio.</p>
                            <Link to="/" className="underline">Acessar Produtos</Link>
                        </div>
                    )}

                    {cart.length > 0 && cart.map((item) => (

                        <section className="flex items-center justify-between border-b-2 border-gray-300 py-2" key={item.id}>
                            <img
                                className="block w-28 rounded-xl max-h-70 object-contain h-[120px] w-[120px] bg-white"
                                src={item.cover}
                                alt={item.title}
                            />
                            <strong>Preço: {item.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</strong>

                            <div className="flex items-center justify-center gap-3">
                                <button className="bg-slate-600 w-[25px] h-[25px] cursor-pointer px-2 rounded text-white font-medium flex items-center justify-center">
                                    -
                                </button>
                                {item.amount}
                                <button className="bg-slate-600 w-[25px] h-[25px] cursor-pointer px-2 rounded text-white font-medium flex items-center justify-center">
                                    +
                                </button>
                            </div>

                            <strong className="float-right">
                                SubTotal: {item.total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}
                            </strong>
                        </section>
                    ))}

                    {cart.length > 0 && (
                        <p className="font-bold mt-4">
                            Total: {cart.reduce((acc, item) => acc + item.total, 0).toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}
                        </p>
                    )}
                </div>
            </main>
        </div>
    );
}

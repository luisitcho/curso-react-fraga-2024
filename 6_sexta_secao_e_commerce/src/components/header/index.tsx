import { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";

export function Header() {
    const { cartAmount } = useContext(CartContext)

    return (
        <header className="header bg-gray-500">
            <div className="container">
                <nav className="flex items-center justify-between h-14">
                    <Link to={"/"} className="font-bold text-2xl">
                        Dev Shop
                    </Link>
                    <Link to={"/cart"} className="relative">
                        <FiShoppingCart size={24} color="#121212" />
                        {cartAmount! > 0 && (
                            <span className="absolute -top-3 -right-3 px-1.5 bg-sky-500 rounded-full w-4 h-4 flex items-center justify-center text-white text-xs">
                                {cartAmount}
                            </span>

                        )}
                    </Link>
                </nav>
            </div>
        </header>
    );
}

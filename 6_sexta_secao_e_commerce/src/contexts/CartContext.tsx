import { createContext, useState, useEffect } from "react";
import type { ProductProps } from "../pages/home";

type CartContextData = {
    cart: CartProps[];
    cartAmount?: number;
    total: string;
    addItemToCart: (item: ProductProps) => void;
    removeItemToCart: (item: ProductProps) => void;
};

type CartProps = {
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
    amount: number;
    total: number;
};

export const CartContext = createContext({} as CartContextData);

export default function CartContextProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartProps[]>([]);
    const [total, setTotal] = useState("");

    function addItemToCart(item: ProductProps) {
        const indexItem = cart.findIndex((cartItem) => cartItem.id === item.id);

        if (indexItem !== -1) {
            cart[indexItem].amount += 1;
            cart[indexItem].total = cart[indexItem].price * cart[indexItem].amount;
            setCart([...cart]);
            return;
        }

        setCart((products) => [...products, { ...item, amount: 1, total: item.price }]);
    }

    function removeItemToCart(item: ProductProps) {
        const indexItem = cart.findIndex((cartItem) => cartItem.id === item.id);

        if (indexItem !== -1) {
            if (cart[indexItem].amount > 1) {
                cart[indexItem].amount -= 1;
                cart[indexItem].total = cart[indexItem].price * cart[indexItem].amount;
                setCart([...cart]);
                return;
            }
            setCart(cart.filter((cartItem) => cartItem.id !== item.id));
        }
    }

    useEffect(() => {
        const totalValue = cart.reduce((acc, item) => acc + item.total, 0);
        setTotal(
            totalValue.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
        );
    }, [cart]);

    return (
        <CartContext.Provider
            value={{
                cart, cartAmount: cart.length, total, addItemToCart, removeItemToCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

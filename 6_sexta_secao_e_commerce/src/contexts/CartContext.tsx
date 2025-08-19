import { createContext, useState } from "react";
import type { ProductProps } from "../pages/home";

type CartContextData = {
    cart: CartProps[]
    cartAmount?: number
    adItemToCart: (item: ProductProps) => void
}

type CartProps = {
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
    amount: number;
    total: number;
}

export const CartContext = createContext({} as CartContextData);

export default function CartContextProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartProps[]>([]);

    function adItemToCart(item: ProductProps) {
        const indexItem = cart.findIndex((cartItem) => cartItem.id === item.id);

        if (indexItem !== -1) {
            cart[indexItem].amount += 1;
            cart[indexItem].total = cart[indexItem].price * cart[indexItem].amount;

            setCart([...cart]);
            return;
        }

        let data = {
            ...item,
            amount: 1,
            total: item.price,
        };

        setCart(products => [...products, data]);
    }

    return (
        <CartContext.Provider value={{ cart, cartAmount: cart.length, adItemToCart }}>
            {children}
        </CartContext.Provider>
    )
}
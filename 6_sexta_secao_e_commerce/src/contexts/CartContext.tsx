import { createContext, useState } from "react";

type CartContextData = {
    cart: CartProps[]
    cartAmount?: number
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
    const [cart] = useState<CartProps[]>([]);
    return (
        <CartContext.Provider value={{ cart, cartAmount: cart.length }}>
            {children}
        </CartContext.Provider>
    )
}
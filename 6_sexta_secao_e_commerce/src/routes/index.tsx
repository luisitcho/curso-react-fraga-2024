import { Home } from "../pages/home";
import { Cart } from "../pages/cart";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import CartContextProvider from "../contexts/CartContext";
import { Product } from "../pages/Product";

export default function AppRoutes() {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/product/:id" element={<Product />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    );
}

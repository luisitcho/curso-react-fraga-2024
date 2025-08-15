import { Home } from "../pages/home";
import { Cart } from "../pages/cart";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

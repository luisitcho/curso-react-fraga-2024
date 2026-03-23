import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import type { ProductProps } from "../home";
import toast from "react-hot-toast";
import { CartContext } from "../../contexts/CartContext";
import { BsCartPlus } from "react-icons/bs";
import "./style.css";

export function Product() {
    const { addItemToCart } = useContext(CartContext);
    const { id } = useParams();
    const [product, setProduct] = useState<ProductProps | null>(null);


    useEffect(() => {
        (async function loadProducts() {
            try {
                const data = await api();

                const found = data.find(
                    (p: ProductProps) => Number(p.id) === Number(id)
                );

                setProduct(found || null);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        })();
    }, [id]);

    function handleAddToCart(product: ProductProps) {
        toast.success(`${product.title} adicionado ao carrinho!`);
        addItemToCart(product);
    }


    return (
        <div className="product">
            <div className="container">
                <div className="product-content">

                    <div className="product-image">
                        <img src={product?.cover} alt={product?.title} />
                    </div>

                    <div className="product-info">
                        <h1>{product?.title}</h1>
                        <p>{product?.description}</p>

                        <div className="product-price flex gap-3 items-center">
                            <strong>
                                {product?.price.toLocaleString(
                                    "pt-BR",
                                    {
                                        style: "currency",
                                        currency: "BRL",
                                    }
                                )}
                            </strong>
                            <button className="cursor-pointer bg-gray-500 hover:bg-gray-600 transition-colors duration-300 text-white rounded-lg p-2"
                                onClick={() => {
                                    if (product) {
                                        handleAddToCart(product);
                                    }
                                }}>
                                <BsCartPlus
                                    size={20}
                                    color="#fff"
                                />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
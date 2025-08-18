import { useEffect, useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { api } from "../../services/api";

type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
};

export function Home() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        (async function loadProducts() {
            try {
                const data = await api();
                // console.log("Data fetched successfully:", data);
                setProducts(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        })();
    }, []);

    return (
        <div className="home">
            <main className="w-full px-4 mx-auto">
                <div className="container">
                    <h1 className="font-bold text-2xl mb-4 mt-10 text-center">
                        Produtos em alta
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {products.length > 0 &&
                            products.map((product) => (
                                <section className="w-full" key={product.id}>
                                    <img
                                        className="block w-full h-[300px] rounded-xl max-h-70 mb-2 object-contain bg-white"
                                        src={product.cover}
                                        alt={product.title}
                                    />
                                    <p className="font-medium mt-1 mb-2">
                                        {product.title}
                                    </p>

                                    <div className="flex gap-3 items-center">
                                        <strong>
                                            {product.price.toLocaleString(
                                                "pt-BR",
                                                {
                                                    style: "currency",
                                                    currency: "BRL",
                                                }
                                            )}
                                        </strong>
                                        <button>
                                            <BsCartPlus
                                                size={20}
                                                color="#fff"
                                            />
                                        </button>
                                    </div>
                                </section>
                            ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

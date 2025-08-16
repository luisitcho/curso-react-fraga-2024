import { BsCartPlus } from "react-icons/bs";

export function Home() {
    return (
        <div className="home">
            <main className="w-full px-4 mx-auto">
                <div className="container">
                    <h1 className="font-bold text-2xl mb-4 mt-10 text-center">
                        Produtos em alta
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        <section className="w-full">
                            <img
                                className="block w-full rounded-xl max-h-70 mb-2 object-cover"
                                src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=976&hei=916&fmt=jpeg&qlt=90&.v=WTk1dTl5UTBnZXdKN2tua2pFb1hvQ3hmVXd6RnorM2pzUlRIKzNkUEN0U2VDYXovZDMyN1dXU211bjZoVlVUcWJGcXNRQnFCV0w3WVRjTExvdm1ic1dyYTFZWlpPczBocnFKR3FYSlo5L1FXZEdHNUFPR0hYUU12cjI0VlFzM1A"
                                alt="nome da imagem"
                            />
                            <p className="font-medium mt-1 mb-2">Airpods Pro</p>

                            <div className="flex gap-3 items-center">
                                <strong>R$ 1000</strong>
                                <button>
                                    <BsCartPlus size={20} color="#fff" />
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}

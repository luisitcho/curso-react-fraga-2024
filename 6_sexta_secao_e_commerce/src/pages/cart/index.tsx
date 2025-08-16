export function Cart() {
    return (
        <div className="cart">
            <main className="w-full px-4 mx-auto">
                <div className="container">
                    <h1 className="font-bold text-2xl mb-4 mt-10 text-center">
                        Meu carrinho
                    </h1>

                    <section className="flex items-center justify-between border-b-2 border-gray-300">
                        <img
                            className="block w-28 rounded-xl max-h-70 mb-2 object-cover"
                            src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=976&hei=916&fmt=jpeg&qlt=90&.v=WTk1dTl5UTBnZXdKN2tua2pFb1hvQ3hmVXd6RnorM2pzUlRIKzNkUEN0U2VDYXovZDMyN1dXU211bjZoVlVUcWJGcXNRQnFCV0w3WVRjTExvdm1ic1dyYTFZWlpPczBocnFKR3FYSlo5L1FXZEdHNUFPR0hYUU12cjI0VlFzM1A"
                            alt="nome da imagem"
                        />
                        <strong>Preço: R$1.000</strong>

                        <div className="flex items-center justify-center gap-3">
                            <button className="bg-slate-600 w-[25px] h-[25px] cursor-pointer px-2 rounded text-white font-medium flex items-center justify-center">
                                -
                            </button>
                            1
                            <button className="bg-slate-600 w-[25px] h-[25px] cursor-pointer px-2 rounded text-white font-medium flex items-center justify-center">
                                +
                            </button>
                        </div>

                        <strong className="float-right">
                            SubTotal: R$1.000
                        </strong>
                    </section>
                    <p className="font-bold mt-4">Total: R$1.000</p>
                </div>
            </main>
        </div>
    );
}

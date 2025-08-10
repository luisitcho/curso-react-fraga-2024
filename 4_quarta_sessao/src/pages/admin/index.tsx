import { useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Footer } from "../../components/Footer";
import { FiTrash } from "react-icons/fi";

export function Admin() {
    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [colorText, setColorText] = useState("#f1f1f1");
    const [colorBackground, setColorBackground] = useState("#121212");

    return (
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header />

            <form className="flex flex-col my-8 w-full max-w-xl">
                <fieldset>
                    <label className="text-white font-medium my-2">
                        Nome do Link
                    </label>
                    <Input
                        placeholder="Digite o nome do link"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </fieldset>

                <fieldset>
                    <label className="text-white font-medium my-2">
                        URL do Link
                    </label>
                    <Input
                        type="url"
                        placeholder="Digite a URL"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                    />
                </fieldset>

                <fieldset className="flex my-4 gap-3">
                    <div className="flex items-center gap-2">
                        <label className="text-white font-medium my-2">
                            Cor do Link
                        </label>
                        <input
                            type="color"
                            value={colorText}
                            onChange={(e) => setColorText(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <label className="text-white font-medium my-2">
                            Fundo do Link
                        </label>
                        <input
                            type="color"
                            value={colorBackground}
                            onChange={(e) => setColorBackground(e.target.value)}
                        />
                    </div>
                </fieldset>

                {name && (
                    <fieldset className="flex items-center flex-col justify-start mb-7 p-1 border border-gray-100/25 rounded-md">
                        <label className="text-white font-medium my-2">
                            Veja como esta ficando
                        </label>
                        <article
                            className="w-11/12 max-w-lg flex flex-col items-center justify-between bg-zinc-900 rounded px-1 py-3"
                            style={{
                                marginBottom: 8,
                                marginTop: 8,
                                backgroundColor: colorBackground,
                            }}
                        >
                            <p
                                className="font-medium"
                                style={{ color: colorText }}
                            >
                                {name}
                            </p>
                        </article>
                    </fieldset>
                )}

                <button
                    type="submit"
                    className="bg-blue-900 h-9 rounded-md text-white font-medium gap-4 flex justify-center items-center cursor-pointer mb-7"
                >
                    Cadastrar
                </button>
            </form>

            <h2 className="font-bold text-white mb-4 text-2xl">Meus Links</h2>

            <article
                className="flex items-center justify-between w-11/12 max-w-xl rounded py-3 px-2 mb-2 select-none"
                style={{ backgroundColor: "#255", color: "#fff" }}
            >
                <p>Teste</p>
                <div>
                    <button className="border border-dashed p-1 rounded cursor-pointer">
                        <FiTrash size={18} color="#fff" />
                    </button>
                </div>
            </article>

            <Footer />
        </div>
    );
}

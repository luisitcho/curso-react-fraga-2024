import { FormEvent, useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";

import { db } from "../../services/firebaseConnection";
import { setDoc, doc, getDoc } from "firebase/firestore";

export function Networks() {
    const [linkedin, setLinkedin] = useState("");
    const [github, setGithub] = useState("");
    const [instagram, setInstagram] = useState("");

    function handleRegister(event: FormEvent) {
        event?.preventDefault();

        setDoc(doc(db, "social", "link"), {
            linkedin: linkedin,
            github: github,
            instagram: instagram,
        })
            .then(() => {
                console.log("cadastrado com sucesso!");
            })
            .catch((error) => {
                console.log("erro ao salvar as informações", error);
            });

        console.log("teste");
    }

    return (
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header />

            <h1 className="text-white text-2xl font-medium mt-8 mb-4">
                Minhas redes sociais
            </h1>

            <form
                className="flex flex-col max-w-xl w-full"
                onSubmit={handleRegister}
            >
                <fieldset>
                    <label className="text-white font-medium mt-2 mb-2">
                        Link do Linkedin
                    </label>
                    <Input
                        type="url"
                        placeholder="Digite a url do Linkedin..."
                        value={linkedin}
                        onChange={(e) => setLinkedin(e.target.value)}
                    />
                </fieldset>

                <fieldset>
                    <label className="text-white font-medium mt-2 mb-2">
                        Link do Github
                    </label>
                    <Input
                        type="url"
                        placeholder="Digite a url do Github..."
                        value={github}
                        onChange={(e) => setGithub(e.target.value)}
                    />
                </fieldset>

                <fieldset>
                    <label className="text-white font-medium mt-2 mb-2">
                        Link do Instagram
                    </label>
                    <Input
                        type="url"
                        placeholder="Digite a url do Instagram..."
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                    />
                </fieldset>

                <button
                    type="submit"
                    className="bg-blue-900 h-9 rounded-md text-white font-medium gap-4 flex justify-center items-center cursor-pointer mb-7"
                >
                    Salvar links
                </button>
            </form>

            <Footer />
        </div>
    );
}

import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { db } from "../../services/firebaseConnection";
import {
    getDocs,
    collection,
    orderBy,
    query,
} from "firebase/firestore";

type linkProps = {
    id: string;
    name: string;
    link: string;
    color: string;
    background: string;
};

export function Home() {
    const [links, setLinks] = useState<linkProps[]>([]);

    useEffect(() => {
        (function loadLinks() {
            const linksRef = collection(db, "links");
            const queryRef = query(linksRef, orderBy("created", "desc"));

            getDocs(queryRef)
                .then((snapshot) => {
                    const list: linkProps[] = [];
                    snapshot.forEach(function (doc) {
                        list.push({
                            id: doc.id,
                            name: doc.data().name,
                            link: doc.data().link,
                            color: doc.data().color,
                            background: doc.data().background,
                        });
                    });

                    setLinks(list);
                })
                .catch((error) => {
                    console.log("Erro ao recupertar os dados", error);
                });
        })();
    }, []);


    return (
        <div className="flex flex-col items-center justify-center h-screen w-full">
            <h1 className="xl:text-4xl text-3xl font-bold text-white mt-20">
                Luisitcho
            </h1>
            <span className="text-gray-50 mb-5 mt-3">Veja os links</span>

            <main className="main flex flex-col w-11/12 max-w-xl text-center">
                {links.map((link) => {
                    return (
                        <section
                            key={link.id}
                            className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer"
                            style={{ backgroundColor: link.background }}
                        >
                            <a href={link.link} target="_blank">
                                <p
                                    className="text-base xl:text-xl"
                                    style={{ color: link.color }}
                                >
                                    {link.name}
                                </p>
                            </a>
                        </section>
                    );
                })}

                <Footer/>
            </main>
        </div>
    );
}

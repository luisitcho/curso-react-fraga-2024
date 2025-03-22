import { Social } from "../../components/Social";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
export function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-full">
            <h1 className="xl:text-4xl text-3xl font-bold text-white mt-20">Luisitcho</h1>
            <span className="text-gray-50 mb-5 mt-3">Veja os links</span>

            <main className="main flex flex-col w-11/12 max-w-xl text-center">
                <section className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer">
                    <a>
                        <p className="text-base xl:text-xl">
                            Link 1
                        </p>
                    </a>
                </section>

                <footer className="footer flex justify-center items-center gap-3 my-4">
                    <Social url="https://www.linkedin.com/in/luishenriquesc/" icon={FaLinkedin} />
                    <Social url="https://github.com/luisitcho/" icon={FaGithub} />
                    <Social url="https://www.instagram.com/luisitcho/" icon={FaInstagram} />
                </footer>

            </main>
        </div>
    )
}
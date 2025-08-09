import { Social } from "../../components/Social";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="footer flex justify-center items-center gap-3 my-4">
            <Social url="https://www.linkedin.com/in/luishenriquesc/" icon={FaLinkedin} />
            <Social url="https://github.com/luisitcho/" icon={FaGithub} />
            <Social url="https://www.instagram.com/luisitcho/" icon={FaInstagram} />
        </footer>
    )
}
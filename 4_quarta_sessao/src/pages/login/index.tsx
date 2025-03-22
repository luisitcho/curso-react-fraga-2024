import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import logo from "/logo.png";

export function Login() {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-full">

            <Link to="/">
                <Image src={logo} alt="Logo do Luisitcho" width={100} height={100} />
            </Link>
        </div>
    )
}
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import logo from "/logo.png";
import { Input } from "../../components/Input";
import { useState, FormEvent } from "react";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        console.log(email)
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen w-full">

            <Link to="/">
                <Image src={logo} alt="Logo do Luisitcho" width={100} height={100} />
            </Link>
            <form className="w-full max-w-xl flex flex-col items-center justify-center px-2" onSubmit={handleSubmit}>
                <fieldset className="w-full">
                    <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </fieldset>
                <fieldset className="w-full">
                    <Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                </fieldset>

                <button type="submit" className="h-9 bg-blue-500 rounded-md border-0 text-xl font-medium text-white w-full cursor-pointer">Acessar</button>
            </form>
        </div>
    )
}


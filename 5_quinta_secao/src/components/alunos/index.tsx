import { useContext } from "react";
import { Nome } from "../nome";
import { UserContext } from "../../contexts/user";

export function Alunos() {
    const { aluno } = useContext(UserContext);
    return (
        <>
            <h2>Alunos: {aluno}</h2>
            <hr />
            <Nome />
        </>
    );
}

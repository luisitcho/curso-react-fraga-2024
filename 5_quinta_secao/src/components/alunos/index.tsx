import { useState } from "react";
import { Nome } from "../nome";

type AlunosProps = {
    aluno: string;
};

export function Alunos({ aluno }: AlunosProps) {
    const [nome, setNome] = useState("Peppa");

    return (
        <>
            <h2>Alunos: {aluno}</h2>
            <hr />
            <Nome nome={nome} mudarNome={(nome: string) => setNome(nome)} />
        </>
    );
}

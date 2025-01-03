interface AlunoProps {
    nome: string;
    idade: number;
}

export function Aluno({ nome, idade }: AlunoProps) {
    return (
        <>
            <h2>Aluno: {nome}</h2>
            <h3>Idade: {idade}</h3>
        </>
    )
}
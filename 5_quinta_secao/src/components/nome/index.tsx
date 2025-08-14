type NomeProps = {
    nome: string;
    mudarNome: (nome: string) => void;
};

export function Nome({ nome, mudarNome }: NomeProps) {
    return (
        <>
            <h3>Nome: {nome}</h3>
            <br />
            <button onClick={() => mudarNome("Luisitcho")}>Mudar nome</button>
        </>
    );
}

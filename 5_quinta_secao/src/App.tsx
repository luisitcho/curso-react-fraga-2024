import { useState } from "react";
import { Alunos } from "./components/alunos";

export default function App() {
    const [aluno, setNome] = useState('Testando aluno');
    return (
        <div>
            <h1>Projeto</h1>
            <hr />
            <Alunos aluno={aluno}/>
        </div>
    );
}

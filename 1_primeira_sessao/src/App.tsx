import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [input, setInput] = useState('');
  const [idade, setIdade] = useState('');
  const [aluno, setAluno] = useState('');

  function mostrarAluno() {
    console.log(`testing ${input}`);
    setAluno(input);
  }

  return (
    <>
      <div className="container">
        <h1>Conhecendo useState</h1>
        <input type="text" placeholder="Digite o nome" className="form-control" value={input} onChange={(e) => setInput(e.target.value)} />
        <input type="text" placeholder="Digite a idade" className="form-control" value={idade} onChange={(e) => setIdade(e.target.value)} />
        <button className="btn btn-primary" onClick={mostrarAluno}>Mostrar Aluno</button>

        <hr />

        {aluno && (
          <h3>Bem vindo {aluno} {idade && `| idade: ${idade}`} </h3>
        )}

      </div>
    </>
  )
}
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface InfoAlunoProps {
  nome: string;
  idade: string;
}

export default function App() {
  const [input, setInput] = useState('');
  const [idade, setIdade] = useState('');

  const [infoAluno, setAlunoInfo] = useState<InfoAlunoProps>();
  const [contador, setContador] = useState(0);

  function mostrarAluno() {
    if (!input || !idade) {

      return;
    }
    setAlunoInfo({
      nome: input,
      idade: idade,
    })
  }

  return (
    <>
      <div className="container">
        <h1>Conhecendo useState</h1>
        <input type="text" placeholder="Digite o nome" className="form-control" value={input} onChange={(e) => setInput(e.target.value)} />
        <input type="text" placeholder="Digite a idade" className="form-control" value={idade} onChange={(e) => setIdade(e.target.value)} />
        <button className="btn btn-primary" onClick={mostrarAluno}>Mostrar Aluno</button>

        <hr />

        {infoAluno && (
          <h3>Bem vindo {infoAluno.nome} {infoAluno?.idade && `| idade: ${infoAluno.idade}`} </h3>
        )}

        <hr />

        <h1>Contador com UseState</h1>

        <div className="d-flex align-items-center" style={{ gap: '10px' }}>
          <button className='btn btn-primary py-1' onClick={() => setContador(valorAtual => valorAtual + 1)}>+</button>
          <span>{contador}</span>
          <button className='btn btn-primary py-1' onClick={() => setContador(valorAtual => (valorAtual > 0 ? valorAtual - 1 : valorAtual))}>-</button>

        </div>
      </div>
    </>
  )
}
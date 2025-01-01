interface AlunoProps {
  nome: string;
  idade: number;
}

export default function App() {
  return (
    <>
      <h1>Meu Projeto</h1>
      <Aluno nome="Luis Henrique" idade={25} />
      <Aluno nome="Peppa Pig" idade={24} />
      <Aluno nome="James Bond" idade={23} />
    </>
  )
}

export function Aluno({ nome, idade }: AlunoProps) {
  return (
    <>
      <h2>Aluno: {nome}</h2>
      <h3>Idade: {idade}</h3>
    </>
  )
}
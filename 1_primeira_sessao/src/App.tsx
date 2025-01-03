import { Header } from './components/header';
import { Aluno } from './components/aluno';
import { Footer } from './components/footer';


export default function App() {
  return (
    <>
      <Header title="Reactzão fiu"/>
      <h1>Meu Projeto</h1>
      <Aluno nome="Luis Henrique" idade={25} />
      <Aluno nome="Peppa Pig" idade={24} />
      <Aluno nome="James Bond" idade={23} />
      <Footer />
    </>
  )
}


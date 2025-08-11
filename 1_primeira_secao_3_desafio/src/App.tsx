import { useState, FormEvent } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
    const [nome, setNome] = useState<string>('');
    const [ano, setAno] = useState<string>('');
    const [erro, setErro] = useState<boolean>(false);
    const [mensagem, setMensagem] = useState<string>('');
    const [idade, setIdade] = useState<number | null>(null);

    function submitForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const anoAtual = new Date().getFullYear();

        if (!nome) {
            setMensagem('Nome é obrigatório');
            setErro(true);
            return;
        }

        if (!ano) {
            setMensagem('Ano de nascimento é obrigatório');
            setErro(true);
            return;
        }

        const idadeCalculada = anoAtual - Number(ano);

        if (idadeCalculada < 0) {
            setMensagem('O ano de nascimento não pode ser maior que o ano atual.');
            setErro(true);
            return;
        }

        setMensagem(`${nome}, você tem: ${idadeCalculada} ${idadeCalculada > 2 ? 'anos' : 'ano'} de idade.`);
        setErro(false);
        setIdade(idadeCalculada);
    }


    return (
        <>
            <div className="container">
                <h1 className="text-center">Descubra a idade</h1>
                <form onSubmit={submitForm}>
                    <div className="form-group">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" className="form-control" id="nome" aria-describedby="nome" placeholder="Digite o nome" onChange={(e) => setNome(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="ano">Ano de nascimento</label>
                        <input type="number" className="form-control" id="ano" placeholder="Digite o ano de nascimento" onChange={(e) => setAno(e.target.value)} />
                    </div>

                    <br />
                    <button type="submit" className="btn btn-primary">Descobrir idade</button>
                </form>

                <br />

                {erro && <div className="alert alert-danger" role="alert">{mensagem}</div>}
                {idade && <div className="alert alert-info" role="alert">{mensagem}</div>}
            </div>
        </>
    )
}

export default App

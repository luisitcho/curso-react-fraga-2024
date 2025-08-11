import { useState } from 'react'
import './App.css'

import logoImg from './assets/logo.png'

function App() {
    const [textoFrase, setTextoFrase] = useState('');
    const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

    const allFrases = [
        {
            id: 1,
            nome: "Motivação",
            frases: [
                'Siga os bons e aprenda com eles.',
                'O bom-senso vale mais do que muito conhecimento.',
                'O riso é a menor distância entre duas pessoas.',
                'Deixe de lado as preocupações e seja feliz.',
                'Realize o óbvio, pense no improvável e conquiste o impossível.',
                'Acredite em milagres, mas não dependa deles.',
                'A maior barreira para o sucesso é o medo do fracasso.',
            ]
        },
        {
            id: 2,
            nome: "Inspiração",
            frases: [
                'Seja a mudança que você quer ver no mundo.',
                'Tudo o que você pode imaginar é real.',
                'Acredite em si mesmo e vá além.',
                'A vida é feita de escolhas, então escolha ser feliz.',
                'Você é mais forte do que imagina.',
            ]
        },
        {
            id: 3,
            nome: "Sabedoria",
            frases: [
                'Aprender é a única coisa que a mente nunca se cansa, nunca tem medo e nunca se arrepende.',
                'O conhecimento é poder.',
                'A sabedoria começa na reflexão.',
                'Quem pergunta aprende mais rápido.',
                'Erros são oportunidades disfarçadas de aprendizado.',
            ]
        },
        {
            id: 4,
            nome: "Resiliência",
            frases: [
                'Levante-se mais forte toda vez que cair.',
                'O fracasso não é o fim, é o começo de um novo caminho.',
                'Seja paciente, o tempo resolve tudo.',
                'A dor é temporária, o orgulho é para sempre.',
                'A persistência é o caminho do êxito.',
            ]
        }
    ];

    function handleSwitchCategory(index: number) {
        setCategoriaSelecionada(index)
    }

    function gerarFrases() {
        const fraseSelecionada = allFrases[categoriaSelecionada].frases[Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)];
        setTextoFrase(`"${fraseSelecionada}"`);
    }


    return (
        <div className="container">
            <img alt="Logo frases" src={logoImg} className="logo" />

            <h2 className="title">Categorias</h2>
            <section className="category-area">
                {allFrases.map((item, index) => (
                    <button className="category-button" style={{
                        borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0, borderColor: '#1fa4db'
                    }} onClick={() => handleSwitchCategory(index)} key={item.id}>
                        {item.nome}
                    </button>
                ))}
            </section>

            <button className="button-frase" onClick={gerarFrases}>Gerar frase</button>

            {textoFrase && (
                <p className="textoFrase">{textoFrase}</p>
            )}

        </div>
    )
}

export default App

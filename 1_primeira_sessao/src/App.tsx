import { useState } from "react";

export default function App() {
    const [input, setInput] = useState('');
    const [tasks, setTasks] = useState([
        'Estudar React',
        'Comprar pão',
        'Estudar de noite'
    ])

    function handleRegister() {

        if (!input) return alert('Preencha o campo com a tarefa!')

        setTasks([...tasks, input])
        setInput('')
    }

    function handleDelete(item: string) {
        const removeTasks = tasks.filter(task => task !== item);
        setTasks(removeTasks)
    }

    return (
        <>
            <h1>Lista de tarefas</h1>
            <hr />
            <input className="form-control" type="text" placeholder="Digite a tarefa" value={input} onChange={(e) => setInput(e.target.value)} />
            <button className="btn btn-primary" onClick={handleRegister}>Adicionar tarefa</button>

            {tasks && (
                <ul className="p-0 m-0">
                    {tasks.map((item, index) => (
                        <li key={index} className="d-flex align-items-center p-2 mb-1" style={{ gap: 10 }}>
                            <span>{item}</span>
                            <button className="btn btn-outline-primary" onClick={() => handleDelete(item)}>Deletar tarefa</button>
                        </li>
                    ))}
                </ul>
            )}

        </>
    )
}
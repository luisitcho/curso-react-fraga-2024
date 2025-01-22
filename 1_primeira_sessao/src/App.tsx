import { useState, useEffect, useRef, useMemo, useCallback } from "react";

export default function App() {

    const inputRef = useRef<HTMLInputElement>(null);
    const firstRender = useRef(true);
    const [input, setInput] = useState('');
    const [tasks, setTasks] = useState<string[]>([]);
    const [error, setError] = useState('');
    const [editTask, setEditTask] = useState({
        enabled: false,
        task: ''
    });

    useEffect(() => {
        const tasksSaved = localStorage.getItem('tasks');

        if (tasksSaved) {
            setTasks(JSON.parse(tasksSaved));
        }
    }, []);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return
        }

        localStorage.setItem('tasks', JSON.stringify(tasks));

    }, [tasks])

    const handleRegister = useCallback(() => {

        if (!input) return setError('Preencha o campo com a tarefa!');;
        if (editTask.enabled) return handleSaveEdit();

        setTasks([...tasks, input]);
        setInput('');
        setError('');

    }, [input, tasks])

    function handleSaveEdit() {
        const findIndexTask = tasks.findIndex(task => task === editTask.task);
        const allTasks = [...tasks];

        allTasks[findIndexTask] = input;
        setTasks(allTasks);
        setEditTask({
            enabled: false,
            task: ''
        });
        setInput('');
        setError('');
    }

    function handleDelete(item: string) {
        const removeTasks = tasks.filter(task => task !== item);
        setTasks(removeTasks)
    }

    function handleEdit(item: string) {
        inputRef.current?.focus();

        setInput(item);

        setEditTask({
            enabled: true,
            task: item
        });
    }

    const totalTasks = useMemo(() => { return tasks.length }, [tasks])
    return (
        <>
            <div className="container">
                <h1>Lista de tarefas</h1>
                <hr />
                {error && (
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                )}

                <input className="form-control" type="text" placeholder="Digite a tarefa" value={input} onChange={(e) => setInput(e.target.value)} ref={inputRef} />
                <button className="btn btn-primary" onClick={handleRegister}>
                    {editTask.enabled ? 'Editar tarefa' : 'Adicionar tarefa'}
                </button>

                <p>
                    <strong>Total de <span>{totalTasks}</span> <span>{totalTasks > 1 ? 'tarefas' : 'tarefa'}</span></strong>
                </p>

                {tasks && (
                    <ul className="p-0 m-0">
                        {tasks.map((item, index) => (
                            <li key={index} className="d-flex align-items-center p-2 mb-1" style={{ gap: 10 }}>
                                <span>{item}</span>
                                <button className="btn btn-outline-primary" onClick={() => handleEdit(item)}>Editar tarefa</button>
                                <button className="btn btn-outline-primary" onClick={() => handleDelete(item)}>Deletar tarefa</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}
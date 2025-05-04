import React, { useState } from 'react';
import './App.css';
import AddTaskComponent from './components/AddTaskComponent';

interface Task {
    title: string;
    description: string;
    priority: 'Alta' | 'Media' | 'Baja';
    deadline: string;
    category: string;
}

const App: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (task: Task) => {
        setTasks([...tasks, task]);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Gestor de Tareas Inteligente</h1>
            </header>
            <main>
                <AddTaskComponent onAddTask={addTask} />
                <h2>Lista de Tareas</h2>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <strong>{task.title}</strong> - {task.priority} - {task.deadline}
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
};

export default App;
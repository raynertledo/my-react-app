import React, { useState } from 'react';

interface Task {
    title: string;
    description: string;
    priority: 'Alta' | 'Media' | 'Baja';
    deadline: string;
    category: string;
}

const AddTaskComponent: React.FC<{ onAddTask: (task: Task) => void }> = ({ onAddTask }) => {
    const [task, setTask] = useState<Task>({
        title: '',
        description: '',
        priority: 'Media',
        deadline: '',
        category: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (task.title.trim() === '') {
            alert('El título es obligatorio');
            return;
        }
        onAddTask(task);
        setTask({ title: '', description: '', priority: 'Media', deadline: '', category: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Agregar Nueva Tarea</h2>
            <div>
                <label>Título:</label>
                <input
                    type="text"
                    name="title"
                    value={task.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Descripción:</label>
                <textarea
                    name="description"
                    value={task.description}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <label>Prioridad:</label>
                <select name="priority" value={task.priority} onChange={handleChange}>
                    <option value="Alta">Alta</option>
                    <option value="Media">Media</option>
                    <option value="Baja">Baja</option>
                </select>
            </div>
            <div>
                <label>Fecha Límite:</label>
                <input
                    type="date"
                    name="deadline"
                    value={task.deadline}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Categoría:</label>
                <input
                    type="text"
                    name="category"
                    value={task.category}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Agregar Tarea</button>
        </form>
    );
};

export default AddTaskComponent;
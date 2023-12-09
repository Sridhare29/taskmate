import React from 'react'
import { useState } from 'react';

function ListTask() {
    const [tasks, setTasks] = useState([
        { id: 1120, name: "Record React Leactures", complete: true },
        { id: 1121, name: "Edit React Leactures", complete: false },
        { id: 1122, name: "Update React Leactures", complete: false }
    ]);

    const [show, setShow] = useState(true);

    function handleDelete(id) {
        console.log(id);
        setTasks(tasks.filter(task => id !== task.id));
    }

    return (
        <div className='App'>
            <h1>Task List</h1>
            <ul>
                <button className="trigger" onClick={() => setShow(!show)}>{show?"Hide" : "Show"}</button>
                {show && tasks.map((task) => (
                    <li key={task.id} className={task.complete ? "complete" : "incomplete"}>
                        <span>{task.id} - {task.name}</span>
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default ListTask
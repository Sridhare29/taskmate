import React from 'react'
import { useState } from 'react';

function ListTask() {
    const [tasks, setTasks] = useState([
        { id: 1120, name: "Record React Leactures", complete: true },
        { id: 1121, name: "Edit React Leactures", complete: false },
        { id: 1122, name: "Update React Leactures", complete: false }
    ]);

    function handleDelete(id){
        console.log(id);
    }

    return (
        <div className='App'>
            <h1>Task List</h1>
            <ul>
                {tasks.map((task)=>(
                    <li key={task.id}>
                        <spam>{task.id} - {task.name}</spam>
                        <button onClick={()=>handleDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListTask
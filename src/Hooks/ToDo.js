import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';


const tasks = [
    'task1', 'task2', 'task3', 'task4'
];

const ToDo = () => {
    const [todo, clearTodo] = useState(tasks);

    const deleteTodoHandler = (item) => {
        // console.log(index);
        const filteredTodo = todo.filter((listItem) => {
            return item !== listItem;
        })

        // console.log(filteredTodo)
        clearTodo(filteredTodo);
    }

    const clearTodoHandler = () => {
        clearTodo([]);
    }

    return (
        <div>
            <h1>TODOs</h1>
            {
                todo.map((item) => (

                    <p key={item}>
                        {item}
                        <span className="remove-btn" key={item} onClick={() => deleteTodoHandler(item)}>
                            <DeleteIcon />
                        </span>
                    </p>

                ))
            }
            <button className="btn" onClick={clearTodoHandler}>Clear All</button>
        </div>
    )
}

export default ToDo

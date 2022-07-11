import React from 'react';
import todo from "../store/todo";
import {observer} from "mobx-react-lite";

const Todo = observer(() => {
    return (
        <div>
            <button onClick={() => todo.fetchTodo()}>Fetch</button>
            {todo.todos.map(t =>
                <div key={t.id}>
                    <input type="checkbox" checked={t.completed} onChange={() => todo.completed(t)}/>
                    {t.title}
                    <button onClick={() => todo.removeTodo(t.id)}>X</button>
                </div>
            )}
        </div>
    );
});

export default Todo;
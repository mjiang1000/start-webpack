import React, { useState, useEffect, useReducer } from "react";
import reducers, {TRIGGER_TODO} from "../redux/todoList/reducers"

const initData = [{text: 1, completed: false, id: 0}];
export default function todo() {
    const [todos, setTodos] = useState([])
    const [text, setText] = useState("")
    const [state, dispatch] = useReducer(reducers, initData) // 用做实验useReducer，错误写法

    useEffect(() => {
        setTimeout(() => setTodos(initData), 1000)
    }, initData)
    return <div>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        <button onClick={() => {
            const newTodos = todos.concat({text, completed: false, id: todos.length})
            setTodos(newTodos)
        }}>add</button>
        {
            todos.map(t => <div 
                key={t.id} 
                onClick={() => dispatch({type: TRIGGER_TODO, data: {id: t.id}})}
                style={{ textDecorationLine: t.completed ? "line-through" : "" }}
                >{t.text}</div>)
        }
        {
            JSON.stringify(state)
        }
    </div>
}
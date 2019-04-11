import React from "react"
import Todos from "../components/todoList"
import AddTodo from "./addTodo"

export default class TodoApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }
    }
    
    addTodo = (text) => {
        if (!text) return;
        const { todos } = this.state
        const todo = {text, id: todos.length, completed: false}
        this.setState({todos: [...todos, todo]})
    }

    onTodoClick = (id) => {
        const { todos } = this.state
        const todo = todos[id]
        if (!todo) {return}
        this.setState({
            todos: [
                ...todos.slice(0, id),
                {...todo, completed: !todo.completed},
                ...todos.slice(id + 1, todos.length)
            ]
        })
    }

    render() {
        return <div>
            <AddTodo addTodo={this.addTodo} />
            <Todos todos={this.state.todos} onTodoClick={this.onTodoClick} />
        </div>
    }
}

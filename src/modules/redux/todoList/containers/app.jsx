import React from "react"
import { connect } from "react-redux"
import AddTodo from "./addTodo"
import Todos from "../components/todoList"
import { initialTodos, ADD_TODO, TRIGGER_TODO } from "../reducers"

class TodoApp extends React.Component {
    render() {
        return <div>
            <AddTodo addTodo={this.props.addTodo} />
            <Todos todos={this.props.todos} onTodoClick={this.props.onTodoClick} />
        </div>
    }
}

export default connect(
    (state) => {
        return {todos: state}
    }, (dispatch) => {
        return {
            addTodo: (text) => dispatch({type: ADD_TODO,data: {text}}),
            onTodoClick: (id) => dispatch({type: TRIGGER_TODO, data: {id}})
        }
    })(TodoApp)
// export default class TodoApp extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             todos: []
//         }
//     }

//     addTodo = (text) => {
//         if (!text) return;
//         const { todos } = this.state
//         const todo = {text, id: todos.length, completed: false}
//         this.setState({todos: [...todos, todo]})
//     }

//     onTodoClick = (id) => {
//         const { todos } = this.state
//         const todo = todos[id]
//         if (!todo) {return}
//         this.setState({
//             todos: [
//                 ...todos.slice(0, id),
//                 {...todo, completed: !todo.completed},
//                 ...todos.slice(id + 1, todos.length)
//             ]
//         })
//     }

//     render() {
//         return <div>
//             <AddTodo addTodo={this.addTodo} />
//             <Todos todos={this.state.todos} onTodoClick={this.onTodoClick} />
//         </div>
//     }
// }

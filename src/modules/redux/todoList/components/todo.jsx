import React from "react"

export default class Todo extends React.Component {
    render() {
        const { text, completed, handleTodoClick } = this.props
        return <li
            onClick={handleTodoClick}
            style={{ textDecorationLine: completed ? "line-through" : "" }}
        >
            {text}
        </li>
    }
}

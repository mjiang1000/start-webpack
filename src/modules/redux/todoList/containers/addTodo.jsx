import React from "react"

export default class AddTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    addTodo = () => {
        const { addTodo } = this.props
        addTodo(this.state.text)
        this.setState({text: ""})
    }
    render() {
        return <div>
            <input 
                type="text"
                value={this.state.text}
                onChange={this.handleChange}
                placeholder="todo"
            />
            <button onClick={this.addTodo}>add</button>
        </div>
    }
}

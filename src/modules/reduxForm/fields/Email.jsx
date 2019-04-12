import React from "react"

export default class Email extends React.Component {
    render() {
        const {input, meta} = this.props
        return <div>
            <label htmlFor={input.name}>{input.name}</label>
            <input type="text" {...input}/>
        </div>
    }
}
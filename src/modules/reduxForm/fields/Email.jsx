import React from "react"
import {ThemeContext} from "../../reactContext/themeContext"

export class Email extends React.Component {
    static contextType = ThemeContext
    render() {
        const {input, meta} = this.props
        const theme = this.context
        return <div style={{background: theme === "dark" ? "#b1b0b0" : "#fff"}}>
            <label htmlFor={input.name}>{input.name}</label>
            <input type="text" {...input}/>
        </div>
    }
}

export default function Email({name, input}) {
    return <ThemeContext.Consumer>
        {(value) => {
            return <div style={{background: value === "dark" ? "#b1b0b0" : "#fff"}}>
            <label htmlFor={input.name}>{input.name}</label>
            <input type="text" {...input}/>
        </div>
        }}
    </ThemeContext.Consumer>
}
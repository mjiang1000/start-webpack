import React from "react"

export default class Hello extends React.Component<{ framework: string }> {
    private text: string
    constructor(props) {
        super(props)
        this.text = " is react form framework";
    }

    render() {
        return <div>
            {this.props.framework} {this.text}
        </div>
    }
}
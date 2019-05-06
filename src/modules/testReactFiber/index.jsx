import React from "react"
import ReactDOM from "react-dom"

const COUNT = 10000

function List({times = 0}) {
    const items = []
    for(let i = COUNT; i> 0; i--) {
        items.push(<div key={`it${i}`}>{`Clicked items: ${times}`}</div>)
    }
    return <div>{items}</div>
}

export default class Test extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            times: 0
        }
    }
    addTimes = () => {
        ReactDOM.unstable_deferredUpdates(() => {
            this.setState({times: this.state.times + 1})
        })
    }
    render() {
        return <div>
            <input />
            <button onClick={() => this.addTimes()}>Click me</button>
                {this.state.times}
            <List times={this.state.times}/>
        
        </div>
    }
}

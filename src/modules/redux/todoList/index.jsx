import React from "react"
import { createStore } from "redux"
import { Provider } from "react-redux"

import App from "./containers/app"
import reducers, { initialTodos } from "./reducers/index"
const store = createStore(reducers)

export default class extends React.Component {
    render() {
        return <Provider store={store}>
            <App />
        </Provider>
    }
}

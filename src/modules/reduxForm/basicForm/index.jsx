import React from "react"
import { combineReducers, createStore } from "redux"
import { connect, Provider } from "react-redux"
import { reducer as formReducer } from "redux-form"

import Contact from "./ContactFrom"
import Todo from "../../redux/todoList/containers/app"
import todos from "../../redux/todoList/reducers/index"

const rootReducer = combineReducers({
    todos: todos,
    form: formReducer,  // 默认key form在rootReducer下
})

const store = createStore(rootReducer)

class BasicFrom extends React.Component {
    handleSubmit = (values) => {
        console.log(values)
    }
    render() {
        return <Contact onSubmit={this.handleSubmit}/>
    }
}

const app = () => <Provider store={store}><BasicFrom /><Todo /></Provider>
export default app

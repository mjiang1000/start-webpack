import createReducer from "../../../../public/util/createReducer"

export const ADD_TODO = `todo/addTodo`
export const TRIGGER_TODO = `todo/triggerTodo`
export const initialTodos = []

// const reducer = {
//     [ADD_TODO]: 
// }

const reducer = (state, { type, data }) => {
    switch (type) {
        case ADD_TODO:
            return [...state, { id: state.length, completed: false, text: data.text }]
        case TRIGGER_TODO:
            const { id } = data
            return [
                ...state.slice(0, data.id),
                { ...state[id], completed: !state[id].completed },
                ...state.slice(id + 1, state.length)
            ]
        default:
            return initialTodos
    }
}

export default createReducer(initialTodos, {
    [ADD_TODO]: (state = [], action) => {
        return [...state, {id: state.length, text: action.data.text, completed: false}]
    },
    [TRIGGER_TODO]: (state, {type, data}) => {
        return [
            ...state.slice(0, data.id),
            {...state[data.id], completed: !state[data.id].completed},
            ...state.slice(data.id + 1, state.length)
        ]
    }
})

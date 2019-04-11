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

export default reducer
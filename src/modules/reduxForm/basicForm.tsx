import React from "react"

import { createStore, combineReducers } from "redux"
import {reducer as fromReducer, Field, reduxForm } from "redux-form"

const rootReducer = combineReducers({
    form: fromReducer
})

const store = createStore(rootReducer)

let ContactFrom = props => {
    const { handleSubmit } = props
    return <form onSubmit={handleSubmit} />
}


ContactFrom = reduxForm({
    form: 'contact',
})(ContactFrom)


// export default ContactFrom



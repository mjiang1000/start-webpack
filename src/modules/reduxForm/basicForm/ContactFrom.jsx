import React from "react"

// import { createStore, combineReducers } from "redux"
import {reducer as fromReducer, Field, reduxForm } from "redux-form"

let ContactForm = props => {
    const { handleSubmit } = props
    return <form onSubmit={handleSubmit} >
        <div>
            <label htmlFor="firstName">First Name</label>
            <Field type="text" component="input" name="firstName" />
        </div>
        <button type="submit">Submit</button>
    </form>
}


ContactForm = reduxForm({
    form: 'contact',
})(ContactForm)


export default ContactForm

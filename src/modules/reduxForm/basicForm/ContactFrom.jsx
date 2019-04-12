import React from "react"
import {reducer as fromReducer, Field, reduxForm } from "redux-form"

import Email from "../fields/Email"

let ContactForm = props => {
    const { handleSubmit } = props
    return <form onSubmit={handleSubmit} >
        <div>
            <label htmlFor="firstName">First Name</label>
            <Field type="text" component="input" name="firstName" />
            <Field name="email" component={Email}  />
        </div>
        <button type="submit">Submit</button>
    </form>
}
// field validate cannot use both with form validate
ContactForm = reduxForm({
    form: 'contact',
    validate: values => {
        const errors = {}
        if (!values.firstName) {
            errors.firstName = "firstName is required"
        }
        return errors
    }
})(ContactForm)


export default ContactForm

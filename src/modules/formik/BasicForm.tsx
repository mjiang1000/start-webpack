import React, { Fragment } from "react"
import { Formik, Field } from "formik"
import Email from "./fields/Email" 

export default class BasicFormik extends React.Component {
    render() {
        return <Fragment>
            <h1>Simple Form</h1>
            <Formik
                initialValues={{ name: "3", phone: "", "email": "" }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validate={(values) => {
                    let errors = {}
                    if (values.name.length < 10) {
                        errors[`name`] = "name is too short"
                    }
                    if(!/^1\d{9}$/g.test(values.phone)) {
                        errors[`phone`] = 'invalid phone number'
                    }
                    // console.log(errors)
                    return errors
                }}
            >
                {
                    (props) => {
                        return <form onSubmit={props.handleSubmit} >
                            <div>
                                <label >Mame</label>
                                <input type="text"
                                    name="name"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.name}
                                />
                                {props.errors.name && <div>{props.errors.name}</div>}
                            </div>
                            <div>
                                <label>Phone</label>
                                <input name="phone" 
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.phone}
                                />
                                {props.errors.phone && <div>{props.errors.phone}</div>}
                            </div>
                            {/* <Field 
                                name="email"
                                validate={(v) => {
                                console.info(v)
                                return false
                            }}>
                                <label >email</label>
                                <input type="text" name="email" />
                            </Field> */}
                            <Field 
                                validate={(v) => {
                                    console.info(v)
                                    return 'ff'
                                }}
                                component={Email} name="email" />
                            <button type="submit">Submit</button>
                        </form>
                    }
                }
            </Formik>
        </Fragment >
    }
}

import React, { Fragment } from "react"
import { Formik } from "formik"

export default class BasicFormik extends React.Component {
    render() {
        return <Fragment>
            <h1>Simple Form</h1>
            <Formik
                initialValues={{ name: "3", phone: "" }}
                onSubmit={(values) => {
                    console.log(values)
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

                            <button type="submit">Submit</button>
                        </form>
                    }
                }
            </Formik>
        </Fragment >
    }
}

import React from "react"
import {FieldProps} from "formik"

export default class Email extends React.Component<FieldProps> {
    render() {
        const {field, form: {errors}, ...rest} = this.props
        return <div>
            <label>email</label>
            <input type="text" {...field} {...rest} />
            {errors[name] && <div>{errors[name]}</div>}
        </div>
    }
}
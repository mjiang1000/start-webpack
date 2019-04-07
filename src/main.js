import React from "react"
import ReactDom from "react-dom"

// import Hello from "./modules/base/Hello"
import BasicFromik from "./modules/formik/BasicForm"
import BasicForm from "./modules/reduxForm/basicForm"

const NodeMount = document.getElementById("wrap")

export default function render() {
    ReactDom.render(
        <div >
            <BasicFromik />
            <BasicForm />
        </div>,
        NodeMount
    )
}
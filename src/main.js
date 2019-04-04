import React from "react"
import ReactDom from "react-dom"

import Hello from "./src/base/Hello"

const NodeMount = document.getElementById("wrap")

export default function render() {
    ReactDom.render(
        <Hello framework={"Formik"} />,
        NodeMount
    )
}
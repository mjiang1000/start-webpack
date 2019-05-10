import React from "react"
import ReactDom from "react-dom"
import styled from "styled-components"

// import Hello from "./modules/base/Hello"
import BasicFormik from "./modules/formik/BasicForm"
import BasicForm from "./modules/reduxForm/basicForm"
import TodoApp from "./modules/redux/todoList/index"
import Test from "./modules/testReactFiber/index"

const NodeMount = document.getElementById("wrap")
const Divider = styled.div`
    margin-top: 20px;
`

export default function render() {
    ReactDom.render(
        <div >
            {/* <BasicFormik />
            <Divider />
            <BasicForm /> */}
            <Test /> 
        </div>,
        NodeMount
    )
}
import React from "react"
import {BrowserRouter, Route} from "react-router-dom"
import {__RouterContext} from "react-router"

export const RouterContext = React.createContext({})

const CustomerBrowserRouter = ({children}) => (
    <BrowserRouter>
        <Route>
            {(routerProps) => (
                <RouterContext.Provider value={routerProps}>
                    {children}
                </RouterContext.Provider>
            )}
        </Route>
    </BrowserRouter>
)

export default CustomerBrowserRouter
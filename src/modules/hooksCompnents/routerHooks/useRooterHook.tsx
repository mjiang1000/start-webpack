import {useContext} from "react"
import {RouterContext} from "./customerBrowserRoute"

export default function useRouter() {
    return useContext(RouterContext)
}

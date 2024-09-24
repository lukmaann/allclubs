"use client"
import { Provider } from "react-redux"
import {store} from "./store"




interface reactProviderProps{
    children:React.ReactNode
}

export const ReduxProvider = ({ children }: reactProviderProps) => {
    return <Provider store={store}>{children}</Provider>
}
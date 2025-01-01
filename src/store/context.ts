import { createContext, Dispatch } from "react"
import getInitialState from "./local-storage"
import { AvailableActions } from "../types"

export const initialState = getInitialState()

export const AppContext = createContext(initialState)
export const AppDispatchContext = createContext<Dispatch<AvailableActions>>({} as Dispatch<AvailableActions>)
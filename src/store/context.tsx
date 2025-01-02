import { useReducer, createContext, Dispatch, PropsWithChildren } from "react"
import getInitialData from "./local-storage"
import { Action, State } from "../types"
import { ActionType } from "../enums"
import { charMap, LS_KEY } from "../k"

const initialState: State = {
    characters: getInitialData()
}

export const AppContext = createContext<[State, Dispatch<Action>]>([
    initialState,
    () => initialState,
])

const reducer = (state: State, action: Action): State => {
	const charIndexToUpdate = state.characters.findIndex((char) => char.name === action.payload.target)
	if (charIndexToUpdate === -1) return state

	const charToUpdate = state.characters[charIndexToUpdate]

	const runeIndexToUpdate = charToUpdate.runes.findIndex((rune) => rune.type === action.payload.type)
	if (runeIndexToUpdate === -1) return state

	const runeToUpdate = charToUpdate.runes[runeIndexToUpdate]

	switch (action.type) {
		case ActionType.AddRune: {
			const newRuneList = charToUpdate.runes
				.slice(0, runeIndexToUpdate)
				.concat({ ...runeToUpdate, count: runeToUpdate.count + 1 })
				.concat(charToUpdate.runes.slice(runeIndexToUpdate + 1))

			const newChar = { ...charToUpdate, runes: newRuneList }

			const newState = {
				...state,
				characters: state.characters
					.slice(0, charIndexToUpdate)
					.concat(newChar)
					.concat(state.characters.slice(charIndexToUpdate + 1)),
			}

			localStorage.setItem(LS_KEY, JSON.stringify(newState.characters));

			return newState
		}
		case ActionType.RemoveRune: {
			if (runeToUpdate.count === 0) return state

			const newRuneList = charToUpdate.runes
				.slice(0, runeIndexToUpdate)
				.concat({ ...runeToUpdate, count: runeToUpdate.count - 1 })
				.concat(charToUpdate.runes.slice(runeIndexToUpdate + 1))

			const newChar = { ...charToUpdate, runes: newRuneList }

			const newState = {
				...state,
				characters: state.characters
					.slice(0, charIndexToUpdate)
					.concat(newChar)
					.concat(state.characters.slice(charIndexToUpdate + 1)),
			}

			localStorage.setItem(LS_KEY, JSON.stringify(newState.characters))

			return newState
		}
		case ActionType.ResetCharacter: {
			const defaultChar = charMap.get(charToUpdate.name)
			if (!defaultChar) return state
			const newChar = { ...charToUpdate, runes: defaultChar.runes }

			const newState = {
				...state,
				characters: state.characters
					.slice(0, charIndexToUpdate)
					.concat(newChar)
					.concat(state.characters.slice(charIndexToUpdate + 1)),
			}

			localStorage.setItem(LS_KEY, JSON.stringify(newState.characters));

			return newState
		}

        default:
            throw new Error(`Unhandled action`)
    }
}

export const AppContextProvider = (props: PropsWithChildren<unknown>) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AppContext.Provider value={[state, dispatch]}>
            {props.children}
        </AppContext.Provider>
    )
}

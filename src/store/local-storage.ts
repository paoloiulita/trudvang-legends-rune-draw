import { DEFAULT_CHARACTERS, LS_KEY } from "../k"
import { AppState } from "../types"

// get from ls or initialize empty data
const getInitialState = (): AppState => {
	const existingData = localStorage.getItem(LS_KEY)
	if (existingData) {
		return JSON.parse(existingData)
	}
	const data: AppState = { characters: DEFAULT_CHARACTERS }
	localStorage.setItem(LS_KEY, JSON.stringify(data))
	return data
}

export default getInitialState
import { DEFAULT_CHARACTERS, LS_KEY } from "../k"
import { Character } from "../types"

// get from ls or initialize empty data
const getInitialData = (): Character[] => {
	const existingData = localStorage.getItem(LS_KEY)
	if (existingData) {
		return JSON.parse(existingData)
	}
	const data: Character[] = DEFAULT_CHARACTERS
	localStorage.setItem(LS_KEY, JSON.stringify(data))
	return data
}

export default getInitialData
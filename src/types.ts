import { Action, CharacterName, Rune } from "./enums"

type OwnedRune = {
	type: Rune,
	count: number,
}

export type Character = {
	name: CharacterName,
	picture: string,
	runes: OwnedRune[],
}

export type AppState = {
	characters: Character[]
}

export type SomeAction = {
	type: Action.Sth
	payload: any
}

export type SomeOtherAction = {
	type: Action.Soth
	payload: any
}

export type AvailableActions =
	SomeAction |
	SomeOtherAction
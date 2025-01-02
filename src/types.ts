import { ActionType, CharacterName, RuneType } from "./enums"

export type Rune = {
	type: RuneType,
	count: number,
}

export type Character = {
	name: CharacterName,
	slug: string,
	runes: Rune[],
}

export type CharacterRunes = {
	inBag: RuneType[],
	drawn: RuneType[],
}

export type State = {
    characters: Character[]
}

export type AddOrRemoveActionPayload = {
	target: CharacterName
	type: RuneType
}

export type Action =
	| { type: ActionType.AddRune, payload: AddOrRemoveActionPayload }
	| { type: ActionType.RemoveRune, payload: AddOrRemoveActionPayload }
	| { type: ActionType.ResetCharacter, payload: AddOrRemoveActionPayload }

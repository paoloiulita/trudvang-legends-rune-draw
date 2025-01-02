import { CharacterName, RuneType } from "./enums"
import { Character } from "./types"

export const LS_KEY = 'trudvang-legends-rune-draw-data'

const lydana: Character = {
	name: CharacterName.Lydana,
	slug: CharacterName.Lydana.toLowerCase(),
	runes: [
		{ type: RuneType.Dark, count: 5 },
		{ type: RuneType.Water, count: 3 },
		{ type: RuneType.Earth, count: 2 },
		{ type: RuneType.Wind, count: 3 },
		{ type: RuneType.Fire, count: 2 },
		{ type: RuneType.Wild, count: 0 },
	],
}
const maelling: Character = {
	name: CharacterName.Maelling,
	slug: CharacterName.Maelling.toLowerCase(),
	runes: [
		{ type: RuneType.Dark, count: 5 },
		{ type: RuneType.Water, count: 2 },
		{ type: RuneType.Earth, count: 4 },
		{ type: RuneType.Wind, count: 2 },
		{ type: RuneType.Fire, count: 2 },
		{ type: RuneType.Wild, count: 0 },
	],
}
const kattly: Character = {
	name: CharacterName.Kattly,
	slug: CharacterName.Kattly.toLowerCase(),
	runes: [
		{ type: RuneType.Dark, count: 5 },
		{ type: RuneType.Water, count: 4 },
		{ type: RuneType.Earth, count: 2 },
		{ type: RuneType.Wind, count: 2 },
		{ type: RuneType.Fire, count: 2 },
		{ type: RuneType.Wild, count: 0 },
	],
}
const briya: Character = {
	name: CharacterName.Briya,
	slug: CharacterName.Briya.toLowerCase(),
	runes: [
		{ type: RuneType.Dark, count: 5 },
		{ type: RuneType.Water, count: 1 },
		{ type: RuneType.Earth, count: 4 },
		{ type: RuneType.Wind, count: 2 },
		{ type: RuneType.Fire, count: 3 },
		{ type: RuneType.Wild, count: 0 },
	],
}
const volgr: Character = {
	name: CharacterName.Volgr,
	slug: CharacterName.Volgr.toLowerCase(),
	runes: [
		{ type: RuneType.Dark, count: 5 },
		{ type: RuneType.Water, count: 1 },
		{ type: RuneType.Earth, count: 3 },
		{ type: RuneType.Wind, count: 2 },
		{ type: RuneType.Fire, count: 4 },
		{ type: RuneType.Wild, count: 0 },
	],
}
const felerion: Character = {
	name: CharacterName.Felerion,
	slug: CharacterName.Felerion.toLowerCase(),
	runes: [
		{ type: RuneType.Dark, count: 5 },
		{ type: RuneType.Water, count: 2 },
		{ type: RuneType.Earth, count: 3 },
		{ type: RuneType.Wind, count: 4 },
		{ type: RuneType.Fire, count: 1 },
		{ type: RuneType.Wild, count: 0 },
	],
}

export const errorChar: Character = {
	name: CharacterName.Error,
	slug: CharacterName.Error.toLowerCase(),
	runes: [
		{ type: RuneType.Dark, count: -1 },
		{ type: RuneType.Water, count: -1 },
		{ type: RuneType.Earth, count: -1 },
		{ type: RuneType.Wind, count: -1 },
		{ type: RuneType.Fire, count: -1 },
		{ type: RuneType.Wild, count: -1 },
	],
}

export const DEFAULT_CHARACTERS: Character[] = [
	lydana,
	maelling,
	kattly,
	briya,
	volgr,
	felerion,
]

export const charMap = new Map<CharacterName, Character>()
charMap.set(CharacterName.Volgr, volgr)
charMap.set(CharacterName.Maelling, maelling)
charMap.set(CharacterName.Lydana, lydana)
charMap.set(CharacterName.Kattly, kattly)
charMap.set(CharacterName.Briya, briya)
charMap.set(CharacterName.Felerion, felerion)
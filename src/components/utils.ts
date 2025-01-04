import { RuneType } from "../enums"

export const groupRunes = (runes: RuneType[]): Record<RuneType, number> => {

	const start: Record<RuneType, number> = {
		[RuneType.Wild]: 0,
		[RuneType.Earth]: 0,
		[RuneType.Fire]: 0,
		[RuneType.Water]: 0,
		[RuneType.Wind]: 0,
		[RuneType.Dark]: 0,
	}

	return runes.reduce<Record<RuneType, number>>((acc, curr) => (
		acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
	), start);
}
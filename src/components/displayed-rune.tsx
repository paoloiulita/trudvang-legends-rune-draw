import dark from "../assets/dark.png"
import earth from "../assets/earth.png"
import fire from "../assets/fire.png"
import water from "../assets/water.png"
import wind from "../assets/wind.png"
import wild from "../assets/wild.png"
import { RuneType } from "../enums"

type Props = { type: RuneType, size?: number }

const DisplayedRune = ({ type, size = 143 }: Props) => {
	switch (type) {
		case RuneType.Dark:
			return (
				<img
					width={size}
					height={size}
					src={dark}
					alt="dark rune"
					title="dark rune"
				/>
			)
		case RuneType.Earth:
			return (
				<img
					width={size}
					height={size}
					src={earth}
					alt="earth rune"
					title="earth rune"
				/>
			)
		case RuneType.Fire:
			return (
				<img
					width={size}
					height={size}
					src={fire}
					alt="fire rune"
					title="fire rune"
				/>
			)
		case RuneType.Water:
			return (
				<img
					width={size}
					height={size}
					src={water}
					alt="water rune"
					title="water rune"
				/>
			)
		case RuneType.Wind:
			return (
				<img
					width={size}
					height={size}
					src={wind}
					alt="wind rune"
					title="wind rune"
				/>
			)
		case RuneType.Wild:
			return (
				<img
					width={size}
					height={size}
					src={wild}
					alt="wild rune"
					title="wild rune"
				/>
			)
	}
}

export default DisplayedRune

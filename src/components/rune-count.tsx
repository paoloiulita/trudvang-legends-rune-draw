import { Rune } from "../types"
import DisplayedRune from "./displayed-rune"

type Props = { rune: Rune, size?: number }

const RuneCount = ({ rune, size = 25 }: Props) => {
	return (
		<>
			<div>
				<DisplayedRune type={rune.type} size={size} />
			</div>
			<p className="text-white">{rune.count}</p>
		</>
	)
}

export default RuneCount

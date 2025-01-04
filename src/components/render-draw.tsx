import { RuneType } from "../enums"
import DisplayedRune from "./displayed-rune"

const RenderDraw = ({ runes }: { runes: RuneType[] }) => (
	<div className="row text-white text-center m-2">
		{runes.map((dr, index) => {
			const opacity = index >= runes.length - 3 ? "100" : "25"
			const cName = `col-4 p-1 opacity-${opacity}`
			return (
				<div key={`drawn_displayed_rune_${index}`} className={cName}>
					<DisplayedRune type={dr} size={50} />
				</div>
			)
		})}
	</div>
)

export default RenderDraw

import { runeOrder } from "../k";
import { RenderRuneProps } from "../types";
import DisplayedRune from "./displayed-rune";
import { groupRunes } from "./utils";

const RuneList = ({ runes, size }: RenderRuneProps) => {
	const groupedRunes = groupRunes(runes);
	return (
		<div className="text-white text-center m-2 d-flex flex-wrap equal-cols">
			{runeOrder.map((runeType, index) => {
				const runeCount = groupedRunes[runeType]
				if (runeCount === 0) return ''
				return (
					<div key={`rune_list_item_${index}`} className="flex-grow-1 pb-1">
						{[...Array(runeCount)].map(() => <DisplayedRune type={runeType} size={size} />)}
					</div>
				);
			})}
		</div>
	);
};

export default RuneList;

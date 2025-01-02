import { Link } from "react-router"
import { Character } from "../types"
import RuneCount from "./rune-count"
import { AppContext } from "../store/context"
import { useContext } from "react"

const CharacterItem = ({ item }: { item: Character }) => {
	const link = `/draw/${item.name.toLowerCase()}`

	return (
		<div className="row p-2">
			<div className="col-3 p-3">
				<Link
					className="text-white link-underline link-underline-opacity-0"
					to={link}
				>
					{item.name}
				</Link>
			</div>
			<div className="col-9">
				<div className="row">
					{item.runes.map((rune, index) => (
						<div key={`rune_count_${index}`} className="col-2 text-center">
							<RuneCount rune={rune} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

const Home = () => {
	const [state] = useContext(AppContext)

	return (
		<div className="row">
			<div className="col-12">
				<ul className="list-unstyled">
					{state.characters.map((item, index) => (
						<li key={`char_item_${index}`}>
							<CharacterItem item={item} />
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Home

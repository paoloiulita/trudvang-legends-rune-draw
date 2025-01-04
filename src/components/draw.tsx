import { Link, useParams } from "react-router"
import { useContext, useRef, useState } from "react"
import { CharacterRunes, Rune } from "../types"
import { RuneType } from "../enums"
import { AppContext } from "../store/context"
import { errorChar } from "../k"
import RenderDraw from "./render-draw"
import RuneList from "./rune-list"

const getRandomIndex = (max: number) => ~~(Math.random() * max)

enum DrawType {
	Draw,
	Test,
}

const Draw = () => {
	const { char: slug } = useParams()
	const [state] = useContext(AppContext)
	const char = state.characters.find((item) => item.slug === slug) || errorChar
	const runePool: Rune[] = JSON.parse(JSON.stringify(char.runes || []))
	const startingBag: CharacterRunes = {
		drawn: [],
		inBag: []
	}
	runePool.forEach((rune) => {
		for (let i = 0; i < rune.count; i++) {
			startingBag.inBag.push(rune.type)
		}
	})
	const [bag, setBag] = useState<CharacterRunes>(startingBag)
	const drawType = useRef<DrawType | null>(null)
	const drawnRunes = useRef<RuneType[]>([])

	const draw = (drawn: number = 0, pool: RuneType[] = bag.inBag) => {
		const amountToDraw = drawType.current === DrawType.Draw ? 3 : 7
		const randomIndex = getRandomIndex(pool.length)
		const r = pool[randomIndex]
		drawnRunes.current = drawnRunes.current.concat(r)
		const newPool = pool
			.slice(0, randomIndex)
			.concat(pool.slice(randomIndex + 1))
		if (drawn < amountToDraw - 1) {
			draw(drawn + 1, newPool)
			return
		}
		const newDrawn = bag.drawn.concat(drawnRunes.current)
		drawnRunes.current = []
		setBag({
			drawn: newDrawn,
			inBag: newPool,
		})
	}

	const reset = () => {
		setBag(startingBag)
	}

	const exhaust = () => {
		const newDrawn = JSON.parse(JSON.stringify(bag.drawn))
		const l1 = newDrawn.pop()
		const l2 = newDrawn.pop()
		const l3 = newDrawn.pop()
		setBag({
			drawn: [...newDrawn],
			inBag: [...bag.inBag, l1, l2, l3],
		})
	}

	const drawDisabled = bag.inBag.length < 3 || bag.drawn.length === 7
	const testDisabled = bag.drawn.length > 0
	const exhaustDisabled = bag.drawn.length < 3 || bag.drawn.length === 7

	return (
		<>
			<div className="row text-white text-center">
				<h1 className="">{char.name}</h1>
			</div>
			<div className="row text-white text-center mb-4">
				<div className="col-3">
					<button
						disabled={drawDisabled}
						type="button"
						className="btn btn-primary"
						onClick={() => {
							drawType.current = DrawType.Draw
							draw()
						}}
					>
						Draw
					</button>
				</div>
				<div className="col-3">
					<button
						disabled={testDisabled}
						type="button"
						className="btn btn-primary"
						onClick={() => {
							drawType.current = DrawType.Test
							draw()
						}}
					>
						Test
					</button>
				</div>
				<div className="col-3">
					<button
						disabled={exhaustDisabled}
						type="button"
						className="btn btn-info"
						onClick={() => exhaust()}
					>
						Exhaust
					</button>
				</div>
				<div className="col-3">
					<button
						type="button"
						className="btn btn-secondary"
						onClick={() => reset()}
					>
						Reset
					</button>
				</div>
			</div>
			<div className="row text-white text-center m-2">
				<div className="col-12">
					<h2>Drawn Runes</h2>
				</div>
			</div>
			{drawType.current === DrawType.Test && <RuneList runes={bag.drawn} size={40} />}
			{drawType.current === DrawType.Draw && <RenderDraw runes={bag.drawn} />}
			<div className="row text-white text-center m-2 mt-4">
				<div className="col-12">
					<h2>In the Bag</h2>
				</div>
			</div>
			<div className="row text-white text-center m-2">
				<RuneList runes={bag.inBag} size={25} />
			</div>
			<div className="row text-center m-4">
				<Link
					className="text-white link-underline link-underline-opacity-0"
					to={`/edit/${slug}`}
				>
					Edit
				</Link>
			</div>
			<div className="row text-center m-4">
				<Link
					className="text-white link-underline link-underline-opacity-0"
					to="/"
				>
					Back
				</Link>
			</div>
		</>
	)
}

export default Draw

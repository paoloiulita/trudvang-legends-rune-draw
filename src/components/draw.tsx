import { Link, useParams } from "react-router"
import { useContext, useRef, useState } from "react"
import { CharacterRunes, Rune } from "../types"
import { RuneType } from "../enums"
import DisplayedRune from "./displayed-rune"
import { AppContext } from "../store/context"
import { errorChar } from "../k"

const sample = (list: RuneType[]) => list[~~(Math.random() * list.length)]

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
	const drawAmount = useRef<number>(0)

	const draw = (amount: number) => {
		drawAmount.current = amount
		const drawnRunes: RuneType[] = []
		for (let i = 0; i < amount; i++) {
			const r = sample(bag.inBag)
			drawnRunes.push(r)
		}
		const newBag: RuneType[] = JSON.parse(JSON.stringify(bag.inBag))
		drawnRunes.forEach((rune) => {
			const runeIndex = newBag.findIndex((item) => item === rune)
			newBag.splice(runeIndex, 1)
		})
		setBag({
			drawn: [...bag.drawn, ...drawnRunes],
			inBag: newBag,
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
						onClick={() => draw(3)}
					>
						Draw
					</button>
				</div>
				<div className="col-3">
					<button
						disabled={testDisabled}
						type="button"
						className="btn btn-primary"
						onClick={() => draw(7)}
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
			<div className="row text-white text-center m-2">
				{drawAmount.current === 7 && <div className="col"></div>}
				{bag.drawn.map((dr, index) => {
					const opacity =
						index < bag.drawn.length - drawAmount.current ? "25" : "100"
					const col = drawAmount.current === 7 ? 1 : 4
					const cName = `col-${col} p-1 opacity-${opacity}`
					return (
						<div key={`drawn_displayed_rune_${index}`} className={cName}>
							<DisplayedRune type={dr} size={35} />
						</div>
					)
				})}
				{drawAmount.current === 7 && <div className="col"></div>}
			</div>
			<div className="row text-white text-center m-2 mt-4">
				<div className="col-12">
					<h2>In the Bag</h2>
				</div>
			</div>
			<div className="row text-white text-center m-2">
				{bag.inBag.map((dr, index) => (
					<div key={`inbag_displayed_rune_${index}`} className="col-1 p-2">
						<DisplayedRune type={dr} size={25} />
					</div>
				))}
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

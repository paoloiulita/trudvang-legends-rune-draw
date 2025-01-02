// import { useRef, useState } from "react"
import { Link, useParams } from "react-router"
import RuneCount from "./rune-count"
import { ActionType, RuneType } from "../enums"
import { useContext } from "react"
import { AppContext } from "../store/context"
import { errorChar } from "../k"

const Edit = () => {
	const { char: slug } = useParams()
	const [state, dispatch] = useContext(AppContext)
	const char = state.characters.find((item) => item.slug === slug) || errorChar

	const onAdd = (type: RuneType) => {
		dispatch({
			type: ActionType.AddRune,
			payload: {
				target: char.name,
				type
			},
		})
	}

	const onRemove = (type: RuneType) => {
		dispatch({
			type: ActionType.RemoveRune,
			payload: {
				target: char.name,
				type,
			},
		})
	}

	const onReset = () => {
		dispatch({
			type: ActionType.ResetCharacter,
			payload: {
				target: char.name,
				type: RuneType.Fire, // This is a dummy value
			},
		})
	}

	return (
		<>
			<div className="row text-white text-center">
				<h1 className="">{char.name}</h1>
			</div>
			<div className="row text-white text-center m-2">
				<div className="col-12">
					<h2>Edit Rune Bag</h2>
				</div>
			</div>
			{char.runes.map((rune, index) => (
				<div
					key={`edit_rune_${index}`}
					className="row text-white text-center m-2"
				>
					<div className="col-4">
						<button
							type="button"
							className="btn btn-primary text-center"
							onClick={() => onAdd(rune.type)}
						>
							<i className="bi bi-plus-circle"></i>
						</button>
					</div>
					<div className="col-4 text-center">
						<RuneCount rune={rune} size={40} />
					</div>
					<div className="col-4">
						<button
							type="button"
							className="btn btn-danger text-center"
							onClick={() => onRemove(rune.type)}
						>
							<i className="bi bi-dash-circle"></i>
						</button>
					</div>
				</div>
			))}
			<div className="row text-center m-4">
				<button
					type="button"
					className="btn btn-secondary text-center"
					onClick={() => onReset()}
				>
					Reset
				</button>
			</div>
			<div className="row text-center m-4">
				<Link
					className="text-white link-underline link-underline-opacity-0"
					to={`/draw/${slug}`}
				>
					Back
				</Link>
			</div>
		</>
	)
}

export default Edit

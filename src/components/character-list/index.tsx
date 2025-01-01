import { useCharacters } from "../../store/hooks";

const CharacterList = () => {
	const list = useCharacters();
	console.log(list)
	// const [selectedInheritance, setSelectedInheritance] = useState(
	// 	InheritanceEnum.BLANK
	// );
	// const selectedCharacter = useSelectedCharacter();
	// const dispatch = useCharactersDispatch();
	// const onChange = (event: SelectChangeEvent<InheritanceEnum>) => {
	// 	const selectedInh = event.target.value as InheritanceEnum;
	// 	dispatch({
	// 		type: "character-update",
	// 		payload: {
	// 			...selectedCharacter,
	// 			inheritance: selectedInh,
	// 		},
	// 	});
	// 	setSelectedInheritance(selectedInh);
	// };

	return (
		<>
			<p>Select a char</p>
			<ul>
				{list.map(item => <li>{item.name}</li>)}
			</ul>
		</>
	);
};

export default CharacterList;

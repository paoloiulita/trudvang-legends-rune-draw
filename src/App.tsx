import "./App.css";
import CharacterList from "./components/character-list";
import { Provider } from "./store/provider";

function App() {
	return (
		<Provider>
			<h1>trudvang-legends-rune-draw</h1>
			<CharacterList />
		</Provider>
	);
}

export default App;

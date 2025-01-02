import { Route, Routes } from "react-router"
import "./App.css"
import Home from "./components/home"
import Draw from "./components/draw"
import logo from "./assets/logo.jpg"
import Edit from "./components/edit"
import { AppContextProvider } from "./store/context"

const App = () => {
	return (
		<AppContextProvider>
			<div className="container-fluid">
				<div className="row mb-3">
					<div className="col-12">
						<img src={logo} alt="logo" title="logo" className="logo" />
					</div>
				</div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/draw/:char" element={<Draw />} />
					<Route path="/edit/:char" element={<Edit />} />
				</Routes>
			</div>
		</AppContextProvider>
	)
}

export default App

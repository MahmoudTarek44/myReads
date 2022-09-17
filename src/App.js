import "./App.css";
import Search from "./pages/search/Search.jsx";
import Home from "./pages/home/Home.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="app">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/search" element={<Search />} />
			</Routes>
		</div>
	);
}

export default App;

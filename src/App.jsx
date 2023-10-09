import "@fontsource/roboto/700.css"
import "./App.css"
import Gamesession from "./components/Gamesession"
import Pagebar from "./components/Pagebar"
import Hero from "./components/Hero"

function App() {
	const playing = false

	if (!playing) {
		return (
			<>
				<Pagebar />
				<Hero />
			</>
		)
	}

	if (playing) {
		return <Gamesession />
	}
}

export default App

import React, { useState, useEffect } from "react"
import "@fontsource/roboto/700.css"
import "./App.css"
import Gamesession from "./components/Gamesession"
import Pagebar from "./components/Pagebar"
import Hero from "./components/Hero"
import Background from "./components/Background"
import photos from "./assets/data"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Box, Button, Modal, Typography } from "@mui/material"

function App() {
	const [difficulty, setDifficulty] = useState(null)
	const [photoList, setPhotoList] = useState(photos)
	const [idStore, setIdStore] = useState([])
	const [request, setRequest] = useState(0)
	const [highestScore, setHighestScore] = useState(0)
	const [playing, setPlaying] = useState(false)
	const [hideScores, setHideScores] = useState(0)
	let score = idStore.length
	let win = false
	const [lost, setLost] = useState(false)

	useEffect(() => {
		const fetchPhoto = async () => {
			const response = await fetch(
				`https://api.pexels.com/v1/search?query=nature+query&per_page=${request}&page=1`,
				{
					headers: {
						Authorization: "t5DTqO3dcNhyVPBOTKt82MygctfM8PBmCtDJxmNWdyMAMwX7KLg3W1fr",
					},
				}
			)
			const data = await response.json()
			const urls = data.photos
			setPhotoList(urls)
		}
		fetchPhoto()

	}, [request])

	function handleDifficulty(v) {
		setDifficulty(v)
		if (v === "Easy") {
			setRequest(10)
		} else if (v === "Normal") {
			setRequest(20)
		} else if (v === "Difficult") {
			setRequest(30)
		}
	}

	function handlePlaying() {
		if (playing === false) {
			setPlaying(true)
			setHideScores(1)
		} else {
			setPlaying(false)
			setHideScores(0)
		}
	}

	if (score > highestScore) {
		setHighestScore(score)
	}

	function handleIdStore(e) {
		if (!idStore.find((el) => el === e.target.parentNode.id)) {
			setIdStore([...idStore, e.target.parentNode.id])
		} else {
			setLost(idStore.length)
			setIdStore([])
		}
	}

	if (difficulty === "Easy" && score === 10) {
		win = 10
	} else if (difficulty === "Normal" && score === 20) {
		win = 20
	} else if (difficulty === "Difficult" && score === 30) {
		win = 30
	}

	function randomSort() {
		return Math.random() - 0.5
	}

	photoList.sort(randomSort)

	function Restart() {
		handlePlaying()
		setIdStore([])
		setLost(false)
	}

	const theme = createTheme({
		palette: {
			secondary: {
				main: "#5C6BC0",
			},
		},
	})

	if (!playing) {
		return (
			<>
				<Pagebar score={score} hideScores={hideScores} handleLogo={Restart} />
				<Background />
				<Hero handlePlaying={handlePlaying} />
			</>
		)
	}

	if (playing && !lost && !win) {
		return (
			<>
				<Pagebar
					hideScores={hideScores}
					score={score}
					highestScore={highestScore}
					handleLogo={Restart}
				/>
				<Gamesession
					theme={theme}
					handleDifficulty={handleDifficulty}
					photoList={photoList}
					handleIdStore={handleIdStore}
				/>
			</>
		)
	}

	if (playing && win) {
		return (
			<ThemeProvider theme={theme}>
				<Modal open={true} className="Modal">
					<Box sx={{ p: 1 }} className="ModalBox">
						<Box>
							<Typography className="endGameTypo">Congratulations!</Typography>
							<Typography className="endGameResult">
								You have won with a record of {win} cards.
							</Typography>
						</Box>
						<Box className="instructionsBtnBox">
							<Button color="secondary" variant="contained" onClick={Restart}>
								Restart
							</Button>
						</Box>
					</Box>
				</Modal>
			</ThemeProvider>
		)
	}

	if (playing && lost) {
		return (
			<ThemeProvider theme={theme}>
				<Modal open={true} className="Modal">
					<Box sx={{ p: 1 }} className="ModalBox">
						<Box>
							<Typography className="endGameTypo">You have Lost!</Typography>
							<Typography className="endGameResult">
								But you memorized {lost} {lost > 1 ? "cards." : "card."}
							</Typography>
						</Box>
						<Box className="instructionsBtnBox">
							<Button color="secondary" variant="contained" onClick={Restart}>
								Restart
							</Button>
						</Box>
					</Box>
				</Modal>
			</ThemeProvider>
		)
	}
}

export default App

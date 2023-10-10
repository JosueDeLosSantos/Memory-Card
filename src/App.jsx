import React, { useState, useEffect } from "react"
import "@fontsource/roboto/700.css"
import "./App.css"
import Gamesession from "./components/Gamesession"
import Pagebar from "./components/Pagebar"
import Hero from "./components/Hero"
import Background from "./components/Background"
import photos from "./assets/data"

function App() {
	const [photoList, setPhotoList] = useState(photos)
	const [idStore, setIdStore] = useState([])
	const [request, setRequest] = useState(15)
	const [highestScore, setHighestScore] = useState(0)
	const [playing, setPlaying] = useState(false)
	const [hideScores, setHideScores] = useState(0)

	function handlePlaying() {
		if (playing === false) {
			setPlaying(true)
			setHideScores(1)
		} else {
			setPlaying(false)
			setHideScores(0)
		}
	}

	function handleLogo() {
		if (playing === true) {
			setPlaying(false)
			setHideScores(0)
		}
	}

	function handleIdStore(e) {
		if (!idStore.find((el) => el === e.target.parentNode.id)) {
			setIdStore([...idStore, e.target.parentNode.id])
		} else {
			setIdStore([])
		}
	}

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

		setRequest(15)
	}, [request])

	const score = idStore.length
	console.log(score)

	if (score > highestScore) {
		setHighestScore(score)
	}

	useEffect(() => {
		if (score >= 15 && Number.isInteger(score / 3)) {
			setRequest(score + 3)
		}
	})

	useEffect(() => {
		if (score === 0 || score === 30) {
			setRequest(15)
		}
	})

	/* function randomSort() {
		return Math.random() - 0.5
	}

	photoList.sort(randomSort) */

	if (!playing) {
		return (
			<>
				<Pagebar hideScores={hideScores} handleLogo={handleLogo} />
				<Background />
				<Hero handlePlaying={handlePlaying} />
			</>
		)
	}

	if (playing) {
		return (
			<>
				<Pagebar
					hideScores={hideScores}
					score={score}
					highestScore={highestScore}
					handleLogo={handleLogo}
				/>
				<Gamesession photoList={photoList} handleIdStore={handleIdStore} />
			</>
		)
	}
}

export default App

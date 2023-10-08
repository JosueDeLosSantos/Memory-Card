import React, { useState, useEffect } from "react"
import { Grid, Container, ImageListItem, ImageListItemBar } from "@mui/material"
import photos from "./assets/data"
import "./App.css"

// const APIkey = "t5DTqO3dcNhyVPBOTKt82MygctfM8PBmCtDJxmNWdyMAMwX7KLg3W1fr"

function App() {
	const [photoList, setPhotoList] = useState(photos)
	// const [photoUrl, setPhotoUrl] = useState(null)
	const [idStore, setIdStore] = useState([])
	const [request, setRequest] = useState(15)

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

	function randomSort() {
		return Math.random() - 0.5
	}

	photoList.sort(randomSort)

	const imgStyles = {
		height: "200px",
		width: "100%",
		objectFit: "cover",
	}

	/* function showClick(e) {
        console.log(e.target.parentNode.parentNode.id)
        e.stopPropagation()
    } */

	return (
		<Container maxWidth="sm">
			<Grid sx={{ maxWidth: 700 }} container rowSpacing={1} columnSpacing={1}>
				{photoList.map((photo, i) => {
					return (
						<Grid key={photo.id} container={true} item xs={4}>
							<Container onClick={handleIdStore} id={photo.id} disableGutters={true}>
								<ImageListItem onClick={handleIdStore} id={photo.id} key={photo.id}>
									<img
										onClick={handleIdStore}
										id={photo.id}
										style={imgStyles}
										src={photo.src.medium}
										title={`photo: ${i}`}
										alt={`photo: ${i}`}
									/>
									<ImageListItemBar
										onClick={handleIdStore}
										id={photo.id}
										sx={{
											textAlign: "center",

											color: "#ffffff",
										}}
										title={photo.photographer}
									/>
								</ImageListItem>
							</Container>
						</Grid>
					)
				})}
			</Grid>
		</Container>
	)
}

/*
            <img src={photo.src.medium} alt="photo" />
            {photoList.map((photo) => {
               return <Item></Item>
			})}
             */

export default App

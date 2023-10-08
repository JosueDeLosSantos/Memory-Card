// import React, { useState, useEffect } from "react"
import { Grid, Box, Container } from "@mui/material"
import photoList from "./assets/data"

// const APIkey = "t5DTqO3dcNhyVPBOTKt82MygctfM8PBmCtDJxmNWdyMAMwX7KLg3W1fr"

function App() {
	// const [photoUrl, setPhotoUrl] = useState(null)

	/* useEffect(() => {
		const fetchPhoto = async () => {
			const response = await fetch(
				"https://api.pexels.com/v1/search?query=nature+query&per_page=15&page=1",
				{
					headers: {
						Authorization: "t5DTqO3dcNhyVPBOTKt82MygctfM8PBmCtDJxmNWdyMAMwX7KLg3W1fr",
					},
				}
			)
			const data = await response.json() 
            const urls = data.photos
		}
		fetchPhoto()
	}, []) */

	console.log(photoList)
	function randomSort() {
		return Math.random() - 0.5
	}

	console.log(photoList.sort(randomSort))

	const imgStyles = {
		height: "300px",
		width: "100%",
		objectFit: "cover",
	}

	return (
        <Container maxWidth="sm">
          <Grid sx={{ maxWidth: 700}} container rowSpacing={1} columnSpacing={0}>
			{photoList.map((photo) => {
				return (
					<Grid item xs={4}>
						<Container >
							<img style={imgStyles} src={photo.src.medium} alt="photo" />
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

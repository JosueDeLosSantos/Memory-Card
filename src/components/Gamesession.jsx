import React, { useState } from "react"
import {
	Grid,
	Container,
	ImageListItem,
	ImageListItemBar,
	useMediaQuery,
	Modal,
	Box,
	Typography,
	Button,
	ButtonGroup,
} from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"

export default function Gamesession({ photoList, handleIdStore }) {
	const [open, setOpen] = useState(false)
	const [instructions, setInstructions] = useState(true)

	const handleInstructions = () => {
		setInstructions(false)
		setOpen(true)
	}

	const handleOpen = () => {
		setOpen(false)
	}

	const imgStyles = {
		height: "calc(100px + 5vw)",
		width: "100%",
		objectFit: "cover",
	}

	const imgMediumStyles = {
		height: "calc(100px + 15vw)",
		width: "100%",
		objectFit: "cover",
	}

	const imgTinyStyles = {
		height: "calc(100px + 20vw)",
		width: "100%",
		objectFit: "cover",
	}

	const containerStyles = {
		marginTop: "2rem",
	}

	const matches = useMediaQuery("(max-width: 600px)")
	const matchesSmall = useMediaQuery("(max-width: 350px)")

	console.log(matchesSmall)

	const theme = createTheme({
		palette: {
			secondary: {
				main: "#5C6BC0",
			},
		},
	})

	if (instructions && !open) {
		return (
			<ThemeProvider theme={theme}>
				<Modal className="Modal" open={instructions}>
					<Box sx={{ p: 1}} className="ModalBox">
						<Box>
							<Typography className="instructionsTypo">
								The more cards you select without repeating their selection, the
								more points you will score!
							</Typography>
						</Box>
						<Box className="instructionsBtnBox">
							<Button onClick={handleInstructions} variant="contained" color="secondary">
								OK
							</Button>
						</Box>
					</Box>
				</Modal>
			</ThemeProvider>
		)
	} else if (!instructions && open) {
		return (
			<ThemeProvider theme={theme}>
				<Modal className="Modal" open={open}>
					<Box sx={{ p: 1 }} className="ModalBox">
						<Box>
							<Typography className="modalTypo">
								Select your difficulty level:
							</Typography>
						</Box>
						<Box>
							<ButtonGroup
								color="secondary"
								variant="contained"
								orientation="vertical"
								className="modalBtnGroup"
							>
								<Button onClick={handleOpen}>Easy</Button>
								<Button onClick={handleOpen}>Normal</Button>
								<Button onClick={handleOpen}>Difficult</Button>
								<Button onClick={handleOpen}>Insane</Button>
							</ButtonGroup>
						</Box>
					</Box>
				</Modal>
			</ThemeProvider>
		)
	} else if (!instructions && !open) {
		return (
			<ThemeProvider theme={theme}>
				<Container style={containerStyles} maxWidth="sm">
					<Grid container rowSpacing={1} columnSpacing={1}>
						{photoList.map((photo, i) => {
							if (!matches && !matchesSmall) {
								return (
									<Grid key={photo.id} container={true} item xs={4}>
										<Container
											onClick={handleIdStore}
											id={photo.id}
											disableGutters={true}
										>
											<ImageListItem
												className="img-list-item"
												onClick={handleIdStore}
												id={photo.id}
												key={photo.id}
											>
												<img
													onClick={handleIdStore}
													id={photo.id}
													style={imgStyles}
													src={photo.src.large}
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
							} else if (!matchesSmall && matches) {
								return (
									<Grid key={photo.id} container={true} item xs={6}>
										<Container
											onClick={handleIdStore}
											id={photo.id}
											disableGutters={true}
										>
											<ImageListItem
												className="img-list-item"
												onClick={handleIdStore}
												id={photo.id}
												key={photo.id}
											>
												<img
													onClick={handleIdStore}
													id={photo.id}
													style={imgMediumStyles}
													src={photo.src.large}
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
							} else if (matches && matchesSmall) {
								return (
									<Grid key={photo.id} container={true} item xs={12}>
										<Container
											onClick={handleIdStore}
											id={photo.id}
											disableGutters={true}
										>
											<ImageListItem
												className="img-list-item"
												onClick={handleIdStore}
												id={photo.id}
												key={photo.id}
											>
												<img
													onClick={handleIdStore}
													id={photo.id}
													style={imgTinyStyles}
													src={photo.src.large}
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
							}
						})}
					</Grid>
				</Container>
			</ThemeProvider>
		)
	}
}

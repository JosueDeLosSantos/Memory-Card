import { Grid, Container, ImageListItem, ImageListItemBar, useMediaQuery } from "@mui/material"

export default function Gamesession({ photoList, handleIdStore }) {
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

	return (
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
	)
}

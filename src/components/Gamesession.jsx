import { Grid, Container, ImageListItem, ImageListItemBar } from "@mui/material"

export default function Gamesession({ photoList, handleIdStore }) {
	const imgStyles = {
		height: "200px",
		width: "100%",
		objectFit: "cover",
	}

	const containerStyles = {
		marginTop: "2rem",
	}

	return (
		<Container style={containerStyles} maxWidth="sm">
			<Grid sx={{ maxWidth: 700 }} container rowSpacing={1} columnSpacing={1}>
				{photoList.map((photo, i) => {
					return (
						<Grid key={photo.id} container={true} item xs={4}>
							<Container onClick={handleIdStore} id={photo.id} disableGutters={true}>
								<ImageListItem className="img-list-item" onClick={handleIdStore} id={photo.id} key={photo.id}>
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

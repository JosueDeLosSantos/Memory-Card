import { Button, Container, Typography } from "@mui/material"

const containerStyles = {
    marginTop: "15vh",
	display: "flex",
	flexDirection: "column",
    alignItems: "center",
    minWidth: "80%",
}

const typographyStyles = {
	textAlign: "center",
	fontSize: "3rem",
    fontFamily: "PoiretOne",
    marginBottom: "5rem",
}

export default function Hero({handlePlaying}) {
	return (
		<Container style={containerStyles} maxWidth="sm">
			<Typography variant="h1" component="h2" style={typographyStyles}>
				Training your photographic memory has never been so fun!
			</Typography>
			<Button onClick={handlePlaying} variant="contained">
				<Typography fontSize="1.5rem" variant="button" component="h3">Play</Typography>
			</Button>
		</Container>
	)
}

import { Button, Container, Typography } from "@mui/material"

export default function Hero({handlePlaying}) {
	return (
		<Container className="containerStyles" maxWidth="sm">
			<Typography className="typographyHeroStyles" variant="h1" component="h2" /* style={typographyStyles} */>
				Training your photographic memory has never been so fun!
			</Typography>
			<Button className="playBtn" onClick={handlePlaying} variant="contained">
				<Typography className="playBtnTypo" variant="button" component="h3">Play</Typography>
			</Button>
		</Container>
	)
}

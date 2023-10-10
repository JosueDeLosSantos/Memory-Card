import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material"
import PsychologyIcon from "@mui/icons-material/Psychology"

export default function Pagebar({ score, highestScore, handleLogo, hideScores }) {
	const scoresStyles = {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		gap: 10,
		opacity: `${hideScores}`,
		lineHeight: 0,
	}

	const highestScoreStyles = {
		display: "flex",
		gap: 5,
		width: hideScores ? "8.9rem" : 0,
		height: hideScores ? "fit-content": 0,
	}

	const scoreStyles = {
		display: "flex",
		gap: 5,
		width: hideScores ? "5rem" : 0,
		height: hideScores ? "fit-content": 0,
	}

	return (
		<AppBar position="sticky">
			<Toolbar className="toolbar" variant="dense">
				<Box className="gameLogo">
					<IconButton onClick={handleLogo} edge="start" color="inherit">
						<PsychologyIcon
							style={{ fontSize: "calc(2rem + 1vw)", color: "inherit" }}
						/>
					</IconButton>
					<Typography
						className="logoTypography"
						variant="h5"
						component="h1"
					>
						Memory Game
					</Typography>
				</Box>
				<Box style={scoresStyles}>
					<Box className="scoreStyles" style={scoreStyles}>
						<Typography className="scoresTypography">Score:</Typography>
						<Box className="insideBox">{score}</Box>
					</Box>

					<Box className="highestScoreStyles" style={highestScoreStyles}>
						<Typography className="scoresTypography">Highest Score:</Typography>
						<Box className="insideBox">{highestScore}</Box>
					</Box>
				</Box>
			</Toolbar>
		</AppBar>
	)
}

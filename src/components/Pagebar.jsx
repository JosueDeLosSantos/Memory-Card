import { AppBar, Toolbar, IconButton, Typography } from "@mui/material"
import PsychologyIcon from "@mui/icons-material/Psychology"

export default function Pagebar() {
	return (
		<AppBar position="static">
			<Toolbar variant="dense">
				<IconButton
					edge="start"
					color="inherit"
					sx={{ mr: 1 }}
					onClick={() => {
						console.log("i was clicked")
					}}
				>
					<PsychologyIcon style={{ fontSize: 50, color: "inherit" }} />
				</IconButton>
				<Typography sx={{ mt: 1, fontFamily: "Monoton" }} variant="h5" component="h1">
					Memory Game
				</Typography>
			</Toolbar>
		</AppBar>
	)
}

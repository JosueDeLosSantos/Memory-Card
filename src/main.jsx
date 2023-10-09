import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import Background from "./components/Background"
import CssBaseline from "@mui/material/CssBaseline"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<CssBaseline />
		<Background />
		<App />
	</React.StrictMode>
)

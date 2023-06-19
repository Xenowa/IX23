import { Box, Button, Typography } from "@mui/material";
// import AquathonLightIcon from "../assets/Auquadrop-light.png"
import IXIcon from "../assets/IX.svg"
import ReactParticles from "./ReactParticles";
import { useEffect, useState } from "react";

export default function Home() {
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 420px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(min-width: 420px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    return (
        <Box sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }} id="home">
            <ReactParticles />

            <img
                src={IXIcon} alt="Logo"
                style={{
                    maxWidth: matches ? "20rem" : "10rem",
                    objectFit: "contain",
                    marginBottom: "3rem"
                }}
            />
            <Typography
                component="h3"
                variant="h3"
                textAlign="center"
                sx={{
                    fontStyle: "italic",
                    marginBottom: "3rem"
                }}
            >
                "Unravelling Visions beyond Tradition"
            </Typography>
            <Button
                component="a"
                sx={{ fontSize: "20px" }}
                variant="outlined"
                color="primary"
                href="#register">
                Register Now
            </Button>
        </Box>
    )
}

// ===
// CSS
// ===
const styles = {
    image: {

    }
}
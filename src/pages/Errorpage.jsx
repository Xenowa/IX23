import { Box, Button, Typography } from "@mui/material";
import IXIcon from "../assets/IX.svg"
import ReactParticles from "../components/ReactParticles";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Errorpage() {
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
        }}>

            <ReactParticles />

            <img
                src={IXIcon} alt="Logo"
                style={{
                    maxWidth: matches ? "14rem" : "10rem",
                    objectFit: "contain",
                    marginBottom: "3rem",
                    zIndex: "2"
                }}
            />

            <Typography
                component="h1"
                variant="h1"
                textAlign="center"
                sx={{
                    marginBottom: "1rem",
                    zIndex: "2"
                }}
            >
                404, Not Found!
            </Typography>

            <Link to="/">
                <Button
                    sx={{
                        fontSize: "20px",
                        backdropFilter: "blur(10px)",
                        zIndex: "2"
                    }}
                    variant="outlined"
                    color="primary">
                    Go Back
                </Button>
            </Link>
        </Box>
    )
}

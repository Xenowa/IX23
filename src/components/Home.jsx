import { Box, Button, Link, Typography } from "@mui/material";
// import AquathonLightIcon from "../assets/Auquadrop-light.png"
import IXIcon from "../assets/IX.svg"
import ReactParticles from "./ReactParticles";
import { useContext, useEffect, useState } from "react";
import useElementVisibility from "../hooks/ElementVisibility";
import VisibilityContext from "../context/Visibility";
import zIndex from "@mui/material/styles/zIndex";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";

export default function Home() {
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 420px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(min-width: 420px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    // Set visible element context
    const [isVisible, setIsVisible] = useState();
    const [containerRef] = useElementVisibility(setIsVisible);
    const { setVisibleElement } = useContext(VisibilityContext);

    useEffect(() => {
        if (isVisible) setVisibleElement("home");
    }, [isVisible])

    return (
        <Box sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "10px",
        }} id="home" ref={containerRef}>

            <ReactParticles />

            <div style={{
                width: "100%",
                height: "100vh",
                background: "rgba(0, 0, 0, 60%)",
                position: "absolute",
                top: "0",
                left: "0",
                zIndex: "1",
                backdropFilter: "blur(1px)",
            }}></div>

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
                component="h4"
                variant="h4"
                textAlign="center"
                sx={{
                    fontStyle: "italic",
                    marginBottom: "1rem",
                    zIndex: "2"
                }}
            >
                "Unravelling Visions beyond Tradition"
            </Typography>
            <Box sx={{
                position: "relative",
                zIndex: "2",
                marginBottom: "1rem",
                display: "flex",
                gap: "15px",
            }}>
                <Link color="inherit" underline="none" href="https://www.instagram.com/designix.iit" target="_blank" sx={{ display: "flex" }}>
                    <Instagram sx={{ color: "primary.main" }} fontSize="medium" />
                </Link>
                <Link color="inherit" underline="none" href="https://web.facebook.com/people/IX-23/100093309528840/" target="_blank" sx={{ display: "flex" }}>
                    <Facebook sx={{ color: "primary.main" }} fontSize="medium" />
                </Link>
                <Link color="inherit" underline="none" href="https://www.linkedin.com/company/ix-23/" target="_blank" sx={{ display: "flex" }}>
                    <LinkedIn sx={{ color: "primary.main" }} fontSize="medium" />
                </Link>
            </Box>
            <Button
                component="a"
                sx={{ 
                    fontSize: "20px",
                    backdropFilter: "blur(10px)",
                    zIndex: "2"
                }}
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
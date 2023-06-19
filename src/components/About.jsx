import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

export default function About() {
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
            gap: "1rem",
            paddingBottom: "2rem"
        }} id="about" bgcolor="secondary.main">
            <Typography component="h1" variant="h1" fontWeight="bold" marginTop="1rem" textAlign="center">
                About <Typography color="primary" component="span" variant="span">IX 23</Typography>
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center", justifyContent: "center" }} >
                <iframe
                    style={{ borderRadius: "1rem", width: matches ? "25rem" : "100%", height: "35rem", border: "1px solid var(--primary)", pointerEvents: "none" }}
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FTSJhXfZDrLKfYTr8jLwIaM%2FIX-23-Website%3Ftype%3Ddesign%26node-id%3D0%253A1%26t%3DcIolwqXDdsha2iG9-1"
                />

                <Typography
                    component="p"
                    variant="p"
                    sx={{
                        bgcolor: "secondaryLight.main",
                        padding: "2rem",
                        margin: "0 2rem",
                        maxWidth: "35rem",
                        borderRadius: "0.5rem",
                        textAlign: "justify"
                    }}
                >
                    Welcome to IX 23, Sri Lanka's prestigious designathon event that unites the brightest minds in design. This year's IX is a
                    <Typography component="span" variant="span" color="primary"> two-phase research-based designathon focusing on XR-based UI/UX solutions. </Typography>
                    By integrating Vision OS-based AR and VR concepts, we encourage participants to explore new dimensions of design. <br /> <br />

                    In the initial round, participants get to choose between
                    <Typography component="span" variant="span" color="primary"> two tracks. </Typography>
                    The first tackles Sustainable Development Goals (SDGs) through innovative UI/UX solutions. The second challenges participants
                    to create cutting-edge UI/UX solutions using Apple's Vision OS design standards.
                    <Typography component="span" variant="span" color="primary"> Selecting the second track makes teams eligible for the coveted Round 1 Best Vision OS Design Award. </Typography> <br /> <br />

                    The electrifying final round is a
                    <Typography component="span" variant="span" color="primary"> 24-hour challenge </Typography>
                    where participants must push their skills to the limit and create XR-based, user-friendly UI/UX solutions tailored to a given
                    scenario. This ultimate test will determine the top teams whose creations exhibit exceptional innovation, practicality, and
                    presentation skills.
                </Typography>
            </Box>
        </Box>
    )
}

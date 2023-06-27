import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useContext, useEffect, useState } from 'react';
import useElementVisibility from '../hooks/ElementVisibility';
import VisibilityContext from '../context/Visibility';

export default function About() {
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
    const { visibleElement, setVisibleElement } = useContext(VisibilityContext);

    useEffect(() => {
        if (isVisible) setVisibleElement("about");
    }, [isVisible])

    return (
        <Box sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            paddingBottom: "2rem",
            marginBottom: "10px",
        }} id="about" bgcolor="secondary.main" ref={containerRef}>
            <Typography component="h1" variant="h1" fontWeight="bold" marginTop="1rem" textAlign="center">
                About <Typography color="primary" component="span" variant="span">IX 23</Typography>
            </Typography>

            <Box sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: "70rem",
                margin: "0 auto"
            }} >
                <iframe
                    style={{ borderRadius: "1rem", width: matches ? "25rem" : "80%", height: "34rem", border: "1px solid var(--primary)" }}
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FHLzvRBwIbjJiwQM7tpJj7v%2Fvision-OS-Starting-Design%3Ftype%3Ddesign%26node-id%3D3-118%26scaling%3Dcontain%26page-id%3D3%253A114%26starting-point-node-id%3D3%253A118%26mode%3Ddesign"
                    allowfullscreen
                    loading="lazy"
                />

                <Typography
                    component="p"
                    variant="p"
                    sx={{
                        bgcolor: "secondaryLight.main",
                        padding: "3rem",
                        maxWidth: "35rem",
                        borderRadius: "0.5rem",
                        textAlign: "justify"
                    }}
                >
                    Welcome to IX 23, Sri Lanka's prestigious designathon event that unites the brightest minds in design. This year's IX is a
                    <Typography component="span" variant="span" color="primary"> two-phase research-oriented designathon focusing on XR-based UI/UX solutions. </Typography>
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

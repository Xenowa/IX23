import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography';
import { Accordion, AccordionDetails, AccordionSummary, Alert, Collapse, List } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from "@mui/material/Divider";
import ixbackground from "../assets/IX-bg.jpg"
import UIPage from "./UI_Component/UIPage";
import { useContext, useEffect, useState } from "react";
import useElementVisibility from "../hooks/ElementVisibility";
import VisibilityContext from "../context/Visibility";

export default function Guidelines() {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    // Set visible element context
    const [isVisible, setIsVisible] = useState();
    const [containerRef] = useElementVisibility(setIsVisible);
    const { visibleElement, setVisibleElement } = useContext(VisibilityContext);

    useEffect(() => {
        if (isVisible) setVisibleElement("guidelines");
    }, [isVisible])

    return (
        <Box sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            backgroundImage: `url(${ixbackground})`,
            backgroundAttachment: "fixed",
            backgroundSize: "100%",
            paddingBottom: {
                xs: "0",
                sm: "2rem",
            },
            marginBottom: "10px",
        }} id="guidelines" ref={containerRef}>
            <Typography color="primary" component="h1" variant="h1" fontWeight="bold" marginTop="1rem" textAlign="center">
                Guidelines
            </Typography>

            <Box sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                maxWidth: "70rem",
                alignItems: "center",
                gap: "1rem"
            }}>
                <Box sx={{
                    maxWidth: "45rem",
                    order: {
                        xs: "2",
                        md: "1"
                    }
                }}>
                    <Accordion
                        disableGutters
                        expanded={expanded === 'panel1'}
                        onChange={handleChange('panel1')}
                        sx={{ bgcolor: "secondary.main", padding: "2rem 2rem 1rem 2rem" }}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon fontSize="large" color="primary" />}>
                            <Typography variant="h4">Can I participate as an individual, or do I need to form a team?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="p">
                                You need to participate as a team. Teams of 3-5 members are allowed.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Divider color="#AEEB40" />
                    <Accordion
                        disableGutters
                        expanded={expanded === 'panel2'}
                        onChange={handleChange('panel2')}
                        sx={{ bgcolor: "secondary.main", padding: "1rem 2rem 1rem 2rem" }}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon fontSize="large" color="primary" />}>
                            <Typography variant="h4">What is the significance of XR-based UI/UX solutions in IX 23?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="p">
                                XR-based UI/UX solutions play a central role in IX 23 as they allow participants to create
                                immersive and engaging user experiences using augmented reality (AR) and virtual reality
                                (VR) concepts. This enables them to design innovative solutions and envision new
                                possibilities in the field of design.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Divider color="#AEEB40" />
                    <Accordion
                        disableGutters
                        expanded={expanded === 'panel3'}
                        onChange={handleChange('panel3')}
                        sx={{ bgcolor: "secondary.main", padding: "1rem 2rem 1rem 2rem" }}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon fontSize="large" color="primary" />}>
                            <Typography variant="h4">What is the eligibility criteria for participating in IX 23?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="p">
                                All participants must be university undergraduates, and each team can only contain participants
                                from the same university.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Divider color="#AEEB40" />
                    <Accordion
                        disableGutters
                        expanded={expanded === 'panel4'}
                        onChange={handleChange('panel4')}
                        sx={{ bgcolor: "secondary.main", padding: "1rem 2rem 1rem 2rem" }}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon fontSize="large" color="primary" />}>
                            <Typography variant="h4">How to earn bonus marks in the initial round?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="p">
                                The criteria for earning bonus marks is integrating at least 5 spatial UI's that
                                adhere to Vision OS design guidelines.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Divider color="#AEEB40" />
                    <Accordion
                        disableGutters
                        expanded={expanded === 'panel6'}
                        onChange={handleChange('panel6')}
                        sx={{ bgcolor: "secondary.main", padding: "1rem 2rem 2rem 2rem" }}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon fontSize="large" color="primary" />}>
                            <Typography variant="h4">How long will the event last?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                In the initial round, participants will have a full week to ideate and bring their UI/UX
                                Solutions to life. Following the judging process for the initial round, the excitement continues
                                to build as the event enters its thrilling 24-hour final round. The entire journey of IX 23 spans
                                approximately two months, allowing participants ample time to refine their design skills.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>

                <UIPage />
            </Box>
        </Box >
    )
}

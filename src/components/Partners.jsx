import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import placeholder from "../assets/placeholder.jpg";
import { useContext, useEffect, useState } from "react";
import useElementVisibility from "../hooks/ElementVisibility";
import VisibilityContext from "../context/Visibility";
import econsulateLogo from "../assets/econsulate-logo.png"
import nwysmLogo from "../assets/nysm-logo.jpg"
import hackslLogo from "../assets/hacksl-logo.png"

export default function Partners() {
    // Set visible element context
    const [isVisible, setIsVisible] = useState();
    const [containerRef] = useElementVisibility(setIsVisible);
    const { visibleElement, setVisibleElement } = useContext(VisibilityContext);

    useEffect(() => {
        if (isVisible) setVisibleElement("partners");
    }, [isVisible])

    return (
        <Box sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "10px",
        }} id="partners" bgcolor="secondary.main" ref={containerRef}>
            <Typography component="h1" variant="h1" fontWeight="bold" marginTop="1rem" textAlign="center">
                Official <Typography color="primary" component="span" variant="span">Partners</Typography>
            </Typography>

            {/* =============== Sponsors START ================== */}
            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", gap: "3rem", marginBottom: "1rem" }}>
                <Typography component="h2" variant="h2" textAlign="center">Official Title Partner</Typography>
                <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
                    <Box component="a" href="https://econsulate.net/" target="_blank" margin="0 2rem" sx={{ transition: "translate 300ms ease-in-out", ":hover": { "translate": "0px -5px" } }}>
                        <Box
                            component="img"
                            sx={{
                                maxWidth: {
                                    xs: "16rem",
                                    sm: "25rem"
                                }
                            }}
                            alt="econsulate"
                            src={econsulateLogo}
                        />
                    </Box>
                </Box>

                <Typography component="h2" variant="h2" textAlign="center">Official Digital Media Partner</Typography>
                <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
                    <Box component="a" href="https://www.nysm.lk/" target="_blank" margin="0 2rem" sx={{ transition: "translate 300ms ease-in-out", ":hover": { "translate": "0px -5px" } }}>
                        <Box
                            component="img"
                            sx={{
                                maxWidth: {
                                    xs: "12rem",
                                    sm: "18rem"
                                }
                            }}
                            alt="now you see me"
                            src={nwysmLogo}
                        />
                    </Box>
                </Box>

                <Typography component="h2" variant="h2" textAlign="center">Official Online Event Partner</Typography>
                <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
                    <Box component="a" href="https://hacksl.tech/" target="_blank" margin="0 2rem" sx={{ transition: "translate 300ms ease-in-out", ":hover": { "translate": "0px -5px" } }}>
                        <Box
                            component="img"
                            sx={{
                                maxWidth: {
                                    xs: "8rem",
                                    sm: "10rem"
                                }
                            }}
                            alt="hacksl"
                            src={hackslLogo}
                        />
                    </Box>
                </Box>
            </Box>
            {/* =============== Sponsors END ================== */}
        </Box>
    )
}

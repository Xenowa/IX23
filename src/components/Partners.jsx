import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import placeholder from "../assets/placeholder.jpg";
import ixbackground from "../assets/IX-bg.jpg"
import { useContext, useEffect, useState } from "react";
import useElementVisibility from "../hooks/ElementVisibility";
import VisibilityContext from "../context/Visibility";

import econsulateLogo from "../assets/econsulate-logo.png"
import nwysmLogo from "../assets/nysm-logo.jpg"
import hackslLogo from "../assets/hacksl-logo.png"
import dailyMirrorLogo from "../assets/daily-mirror-logo.png"
import hiLogo from "../assets/hi-logo.jpg"

function PartnerLogo({ name, logo, link }) {
    return (
        <Box 
            component="a" 
            href={ link } 
            target="_blank" 
            margin="0 2rem" 
            sx={{ 
                transition: "translate 300ms ease-in-out", 
                ":hover": { 
                    "translate": "0px -5px" 
                }
            }}>
            <Box
                component="img"
                sx={{
                    maxWidth: {
                        xs: "150px",
                        sm: "200px"
                    }
                }}
                alt={ name }
                src={ logo }
                maxHeight={{
                    xs: "200px",
                    sm: "300px",
                }}
            />
        </Box>
    );
}

function PartnerSection({ title, children }) {
    return (
        <Box sx={{
            marginBottom: "20px",
            background: "#1d1c20",
            borderRadius: "10px",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            width: "100%",
            minHeight: "300px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }} id="partners" bgcolor="secondary.main">
            <Box sx={{
                width: "100%",
                padding: "1.8rem",
                background: "rgba(255,255,255,0.05)",
                position: "relative",
                boxSizing: "border-box",
                marginBottom: "2rem",
                "&::after": {
                    content: "''",
                    position: "absolute",
                    bottom: "0px",
                    left: "50%",
                    width: "80%",
                    transform: "translateX(-50%)",
                    height: "1px",
                    background: "linear-gradient(90deg, rgba(255,255,255,0.03) 0%, rgba(200,200,255, 0.2) 50%, rgba(255,255,255,0.03) 100%)",
                    boxShadow: "0px 2px 10px rgba(0,0,0,0.6)",
                },
            }}>
            <Typography 
                component="h1" 
                variant="h1" 
                fontWeight="bold" 
                fontSize={"24px"} 
                textAlign="center"
                >
                { title }
            </Typography>
            </Box>

            {/* =============== Sponsors START ================== */}
            <Box sx={{ 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center",
                flexWrap: "wrap",
                grow: 1,
                flexGrow: 1,
                height: "100%",
                gap: "3rem", 
                marginBottom: "1rem" }}>
                { children }
            </Box>
            {/* =============== Sponsors END ================== */}
        </Box>
    );
}

export default function Partners() {
    // Set visible element context
    const [isVisible, setIsVisible] = useState();
    const [containerRef] = useElementVisibility(setIsVisible);
    const { visibleElement, setVisibleElement } = useContext(VisibilityContext);

    useEffect(() => {
        if (isVisible) setVisibleElement("partners");
    }, [isVisible])

    return (
        <>
        <Box sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            paddingBottom: "50px",
            marginBottom: "10px",
            background: "#161518",
        }} id="partners" bgcolor="secondary.main" ref={containerRef}>

        <Box sx={{
            width: "80%",
            height: "1px",
            background: "linear-gradient(90deg, rgba(255,255,255,0.03) 0%, rgba(174, 235, 64, 0.7) 50%, rgba(255,255,255,0.03) 100%)",
            marginTop: "50px",
        }} />

            <Typography component="h1" variant="h1" fontWeight="bold" fontSize={"32px"} marginTop="3rem" marginBottom="3rem" textAlign="center">
                Official <Typography color="primary" component="span" variant="span">Partners</Typography>
            </Typography>

            {/* =============== Sponsors START ================== */}
            <Box sx={{ marginBottom: "1rem", padding: "20px" }}>
                <PartnerSection title="Official Title Partner">
                    <PartnerLogo
                        name="econsulate"
                        link={ "https://econsulate.net/" }
                        logo={econsulateLogo} />
                </PartnerSection>

                <PartnerSection title="Official Digital Media Partners">
                    <PartnerLogo
                        name="daily mirror"
                        link={ "https://www.dailymirror.lk/" }
                        logo={dailyMirrorLogo} />
                    <PartnerLogo
                        name="now you see me"
                        link={ "https://www.nysm.lk/" }
                        logo={nwysmLogo} />
                    <PartnerLogo
                        name="Hi"
                        link={ "https://www.hi.lk/" }
                        logo={hiLogo} />
                </PartnerSection> 

                <PartnerSection title="Online Event Partner">
                    <PartnerLogo
                        name="hacksl"
                        link={ "https://hacksl.tech/" }
                        logo={hackslLogo} />
                </PartnerSection>
            </Box>
            {/* =============== Sponsors END ================== */}
        </Box>
        </>
    )
}

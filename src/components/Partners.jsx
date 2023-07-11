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

function PartnerTile({ title, name, logo, link }) {
    return (
        <Box sx={{
            background: "#1d1c20",
            width: {
                xs: "300px",
                sm: "500px",
            },
            height: {
                xs: "400px",
                sm: "500px",
            },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            borderRadius: "10px",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            overflow: "hidden",
        }}>
            <Typography 
                component="h2" 
                variant="h2" 
                textAlign="center" 
                fontSize={{
                    xs: "20px",
                    sm: "28px",
                }}
                sx={{
                    width: "100%",
                    paddingTop: "2rem",
                    paddingBottom: "2rem",
                    background: "rgba(255,255,255,0.05)",
                    position: "relative",
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
                    { title }
            </Typography>
            <Box sx={{ 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center",
                flexWrap: "wrap", 
                gap: "1rem",
                grow: 1,
                height: "100%",
                padding: "3rem",
            }}>
                <Box component="a" href={ link } target="_blank" margin="0 2rem" sx={{ transition: "translate 300ms ease-in-out", ":hover": { "translate": "0px -5px" } }}>
                    <Box
                        component="img"
                        sx={{
                            maxWidth: {
                                xs: "16rem",
                                sm: "25rem"
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
            </Box>
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
            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", gap: "3rem", marginBottom: "1rem" }}>
                <PartnerTile
                    title="Official Title Partner"
                    name="econsulate"
                    link={ "https://econsulate.net/" }
                    logo={econsulateLogo} />

                <PartnerTile
                    title="Official Digital Media Partner"
                    name="now you see me"
                    link={ "https://www.nysm.lk/" }
                    logo={nwysmLogo} />

                <PartnerTile
                    title="Official Online Event Partner"
                    name="hacksl"
                    link={ "https://hacksl.tech/" }
                    logo={hackslLogo} />
            </Box>
            {/* =============== Sponsors END ================== */}
        </Box>
        </>
    )
}

import Box from "@mui/material/Box"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import firstplace from "../assets/first place.jpg"
import secondplace from "../assets/second place.jpg"
import thirdplace from "../assets/third place.jpg"
import ixbackground from "../assets/IX-bg.jpg"
import placeholder from "../assets/placeholder.jpg"
import { useContext, useEffect, useState } from "react";
import useElementVisibility from "../hooks/ElementVisibility";
import VisibilityContext from "../context/Visibility";

export default function Awards() {
    // Set visible element context
    const [isVisible, setIsVisible] = useState();
    const [containerRef] = useElementVisibility(setIsVisible);
    const {setVisibleElement} = useContext(VisibilityContext);

    useEffect(() => {
        if (isVisible) setVisibleElement("awards");
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
            marginBottom: "10px",
        }} id="awards" ref={containerRef}>
            <Typography color="primary" component="h1" variant="h1" fontWeight="bold" marginTop="1rem" textAlign="center">
                Awards
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "baseline", flexWrap: "wrap", gap: "1rem" }}>
                <Card sx={{
                    width: "15rem",
                    bgcolor: "secondaryLight.main",
                    textAlign: "center",
                    borderRadius: "0.5rem",
                    order: {
                        sm: "1",
                        md: "2"
                    }
                }}>
                    <CardMedia
                        sx={{
                            height: {
                                md: "23rem",
                                xs: "20rem"
                            },
                            borderRadius: "0.5rem 0.5rem 0 0"
                        }}
                        image={placeholder}
                        title="First Place"
                    />
                    <CardContent>
                        <Typography gutterBottom color="primary" variant="h2" component="h2">
                            1st Place
                        </Typography>
                        <Typography component="h3" variant="h3">
                            Rs. 60,000
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{
                    width: "15rem",
                    height: "100%",
                    bgcolor: "secondaryLight.main",
                    textAlign: "center",
                    borderRadius: "0.5rem",
                    order: {
                        sm: "2",
                        md: "3"
                    }
                }}>
                    <CardMedia
                        sx={{ height: "20rem", borderRadius: "0.5rem 0.5rem 0 0" }}
                        image={placeholder}
                        title="Second Place"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="h2">
                            2nd Place
                        </Typography>
                        <Typography component="h3" variant="h3">
                            Rs. 40,000
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{
                    width: "15rem",
                    height: "100%",
                    bgcolor: "secondaryLight.main",
                    textAlign: "center",
                    borderRadius: "0.5rem",
                    order: {
                        sm: "3",
                        md: "1"
                    }
                }}>
                    <CardMedia
                        sx={{ height: "20rem", borderRadius: "0.5rem 0.5rem 0 0" }}
                        image={placeholder}
                        title="First Place"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="h2">
                            3rd Place
                        </Typography>
                        <Typography component="h3" variant="h3">
                            Rs. 20,000
                        </Typography>
                    </CardContent>
                </Card>
            </Box>

            <Box sx={{ maxWidth: "40rem", display: "flex", alignItems: "center", flexDirection: "column", gap: "1rem", margin: "1rem 3rem" }}>
                <Box sx={{ bgcolor: "secondaryLight.main", padding: "1rem", borderRadius: "0.5rem", width: "100%", textAlign: "center" }}>
                    The top team who picked the Vision OS Track of round 1 is eligible for the <br />
                    <Typography gutterBottom color="primary" variant="span" component="span"> Best Vision OS Design Award  </Typography> <br />
                    worth <b>Rs. 15,000</b>
                </Box>
            </Box>
        </Box>
    )
}

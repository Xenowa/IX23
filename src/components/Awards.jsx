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

export default function Awards() {
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
            backgroundSize: "100%"
        }} id="awards">
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
                                md: "30rem",
                                xs: "20rem"
                            },
                            borderRadius: "0.5rem 0.5rem 0 0"
                        }}
                        image={firstplace}
                        title="First Place"
                    />
                    <CardContent>
                        <Typography gutterBottom color="primary" variant="h2" component="h2">
                            Winner
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
                        image={secondplace}
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
                        image={thirdplace}
                        title="Third Place"
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
        </Box>
    )
}

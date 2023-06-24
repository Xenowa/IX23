import Container from "@mui/material/Container"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Button from "@mui/material/Button"
import { Box } from "@mui/material"
import IXImage from "../../assets/IX.svg"

export default function UIPage() {

    // ====
    // HTML
    // ====
    return (
        <Box sx={{
            bgcolor: "secondary.main",
            width: "20rem",
            order: {
                xs: "1",
                md: "2"
            }
        }}>
            <Navbar />
            <Container sx={{ marginBottom: "2rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src={IXImage} alt="IIT logo" style={{
                    maxWidth: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "0.5rem",
                    margin: "10rem 0",
                }} />

                <Button size="large" variant="contained" color="primary" component="a" href="#" target='_blank'>
                    Download Booklet
                </Button>
            </Container>
            <Footer />
        </Box>
    )
}
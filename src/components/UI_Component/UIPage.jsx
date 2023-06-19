import Container from "@mui/material/Container"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Button from "@mui/material/Button"
import { Box } from "@mui/material"
import ArticleIcon from '@mui/icons-material/Article';

export default function UIPage() {

    // ====
    // HTML
    // ====
    return (
        <Box sx={{
            bgcolor: "secondary.main",
            width: "20rem",
            margin: "2rem 0",
            order: {
                xs: "1",
                md: "2"
            }
        }}>
            <Navbar />
            <Container sx={{ marginBottom: "2rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Box sx={{
                    bgcolor: "secondaryLight.main",
                    width: "5rem",
                    height: "5rem",
                    borderRadius: "0.5rem",
                    margin: "10rem 0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <ArticleIcon color="primary" />
                </Box>

                <Button size="large" variant="contained" color="primary" component="a" href="#" target='_blank'>
                    Download Booklet
                </Button>
            </Container>
            <Footer />
        </Box>
    )
}
import { Typography, Box } from "@mui/material";
import ixbackground from "../assets/IX-bg.jpg"

export default function Register() {
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
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "100%"
        }} id="register">
            <Typography color="primary" component="h1" variant="h1" fontWeight="bold" marginTop="1rem" textAlign="center">
                Register
            </Typography>
        </Box>
    )
}

// CSS
const styles = {
    iframe: {
        overflowX: "hidden",
        width: "calc(100% - 5px)",
        height: "40rem"
    }
}
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IX from "../../assets/IX.svg"

// ==
// JS
// ==


export default function Footer() {
    // ====
    // HTML
    // ====
    return (
        <AppBar position="static">
            <Toolbar sx={{ bgcolor: "secondaryLight.main" }}>
                <img style={styles.img} src={IX} alt="IX" />
                <Box sx={{ flexGrow: 1 }} />
                <Typography variant="p" color="primary" sx={{ fontSize: "10px" }}>IEEE Student Branch of IIT ©️ 2023</Typography>
            </Toolbar>
        </AppBar>
    );
}


// ===
// CSS
// ===
const styles = {
    img: {
        maxWidth: "2rem",
        marginRight: "1rem"
    }
}
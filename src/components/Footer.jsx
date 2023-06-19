import { Typography } from "@mui/material";


export default function Footer() {
    return (
        <Typography component="p" variant="p" textAlign="center" sx={{ bgcolor: "secondaryLight.main" }}>
            Made with ❤️ by <Typography
                component="a"
                variant="span"
                href="https://github.com/xenowa"
                target="_blank"
                sx={{
                    textDecoration: "none",
                    color: "primary.main"
                }}
            >
                Xenowa
            </Typography>
        </Typography>
    )
}

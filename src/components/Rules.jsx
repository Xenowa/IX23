import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import { MenuBook, Assignment, Draw } from '@mui/icons-material';
import { Stack } from '@mui/material';

export default function Rules() {
    return (
        <Box sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem"
        }} id="rules" bgcolor="secondary.main">
            <Typography component="h1" variant="h1" fontWeight="bold" marginTop="1rem" textAlign="center">
                Event <Typography color="primary" component="span" variant="span">Rules</Typography>
            </Typography>

            <Box sx={{ maxWidth: "40rem", display: "flex", alignItems: "center", flexDirection: "column", gap: "1rem", margin: "1rem 3rem" }}>
                <Alert severity="info" color="primary" variant="outlined" sx={{ width: "100%" }}>
                    All participants must wear their identification tags at all times during the competition.
                </Alert>
                <Alert severity="info" color="primary" variant="outlined" sx={{ width: "100%" }}>
                    Competitors will be allotted 24 hours to complete the design submission for the final task. The timing will not be paused once started, under any circumstances.
                </Alert>
                <Alert severity="info" color="primary" variant="outlined" sx={{ width: "100%" }}>
                    No competitors are allowed to possess or consume alcohol, drugs, or any substances that can impair their judgment or abilities during the competition.
                </Alert>
                <Alert severity="info" color="primary" variant="outlined" sx={{ width: "100%" }}>
                    The organizing committee reserves the right to disqualify any individual or team engaged in any observed or reported wrongdoing.
                </Alert>
                <Alert severity="info" color="primary" variant="outlined" sx={{ width: "100%" }}>
                    Once participants arrive for the event, they are expected to remain on the premises until the event's conclusion.
                </Alert>
                <Alert severity="info" color="primary" variant="outlined" sx={{ width: "100%" }}>
                    The organizing committee will provide refreshments throughout the event's duration.
                </Alert>
                <Alert severity="info" color="primary" variant="outlined" sx={{ width: "100%" }}>
                    Participants must remain within specific areas guided by the Organizing Committee of IX 23.
                </Alert>
                <Alert severity="info" color="primary" variant="outlined" sx={{ width: "100%" }}>
                    Each team will be monitored individually, and any instance of outside help or plagiarism will lead to disqualification.
                </Alert>
                <Alert severity="info" color="primary" variant="outlined" sx={{ width: "100%" }}>
                    Each team will be monitored individually, and any instance of outside help or plagiarism will lead to disqualification.
                </Alert>
            </Box>

            <Stack direction="row" gap="1rem" marginBottom="10rem">
                <Button
                    component="a"
                    sx={{
                        fontSize: "30px",
                        backdropFilter: "blur(10px)",
                        zIndex: "2"
                    }}
                    variant="outlined"
                    color="primary"
                    href="#timeline">
                    ▽
                </Button>
                <Button
                    component="a"
                    sx={{
                        fontSize: "30px",
                        backdropFilter: "blur(10px)",
                        zIndex: "2"
                    }}
                    variant="outlined"
                    color="primary"
                    href="#resources">
                    △
                </Button>
            </Stack>
        </Box>
    )
}

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CloudUpload } from '@mui/icons-material';

export default function Submission() {
    return (
        <Box sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem"
        }} id="submission" bgcolor="secondary.main">
            <Typography component="h1" variant="h1" fontWeight="bold" marginTop="1rem" textAlign="center">
                Final <Typography color="primary" component="span" variant="span">Submission</Typography>
            </Typography>

            <Card sx={{
                bgcolor: "secondaryLight.main",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                textAlign: "center",
                height: "100%"
            }}>
                <CardContent>
                    <CloudUpload color="primary" fontSize="large" />
                    <Typography component="h2" variant="h2" marginTop="1rem">
                        Submission Form
                    </Typography>
                    <Typography component="p" variant="p" marginTop="2rem">
                        Please Find the
                        <Typography component="span" variant="span" color="primary"> Final Task </Typography> <br />
                        Submission Form Below
                    </Typography>
                </CardContent>
                <CardActions sx={{ marginBottom: "2rem" }}>
                    <Button
                        size="large"
                        variant="contained"
                        color="primary"
                        component="a"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSetum8AAj4MElbgdBmiWa8MlznchOlmBittybWYqmKIfc5M7Q/viewform?usp=sf_link"
                        target='_blank'>
                        Submission Form
                    </Button>
                </CardActions>
            </Card>

            <Button
                component="a"
                sx={{
                    fontSize: "30px",
                    backdropFilter: "blur(10px)",
                    zIndex: "2",
                    marginBottom: "2rem"
                }}
                variant="outlined"
                color="primary"
                href="#timeline">
                △
            </Button>
        </Box>
    )
}

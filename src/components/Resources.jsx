import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { MenuBook, Assignment, Draw } from '@mui/icons-material';
import { Stack } from '@mui/material';

export default function Resources() {
    return (
        <Box sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem"
        }} id="resources" bgcolor="secondary.main">
            <Typography component="h1" variant="h1" fontWeight="bold" marginTop="1rem" textAlign="center">
                Event <Typography color="primary" component="span" variant="span">Resources</Typography>
            </Typography>

            <Grid container spacing={2} sx={{ maxWidth: "90rem", padding: "0 2rem" }} marginBottom="1rem">
                <Grid item xs={12} sm={12} md={4}>
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
                            <MenuBook color="primary" fontSize="large" />
                            <Typography component="h2" variant="h2" marginTop="1rem">
                                Guidelines Booklet
                            </Typography>
                            <Typography component="p" variant="p" marginTop="2rem">
                                All participants must adhere to the
                                <Typography component="span" variant="span" color="primary"> Designathon Guidelines </Typography>
                                when creating their solutions
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ marginBottom: "2rem" }}>
                            <Button size="large" variant="contained" color="primary" component="a" href="#" target='_blank'>
                                Read the Guidelines
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
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
                            <Assignment color="primary" fontSize="large" />
                            <Typography component="h2" variant="h2" marginTop="1rem">
                                Designathon Final Task
                            </Typography>
                            <Typography component="p" variant="p" marginTop="2rem">
                                Participants must create their solutions based on this
                                <Typography component="span" variant="span" color="primary"> Task </Typography>
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ marginBottom: "2rem" }}>
                            <Button size="large" variant="contained" color="primary" component="a" href="#" target='_blank'>
                                Go to Task
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
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
                            <Draw color="primary" fontSize="large" />
                            <Typography component="h2" variant="h2" marginTop="1rem">
                                Submission Template
                            </Typography>
                            <Typography component="p" variant="p" marginTop="2rem">
                                All participants must create a copy of this
                                <Typography component="span" variant="span" color="primary"> figma submission template </Typography>
                                and create your solutions on that
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ marginBottom: "2rem" }}>
                            <Button size="large" variant="contained" color="primary" component="a" href="#" target='_blank'>
                                Access the Template
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>

            <Stack direction="row" gap="1rem">
                <Button
                    component="a"
                    sx={{
                        fontSize: "30px",
                        backdropFilter: "blur(10px)",
                        zIndex: "2"
                    }}
                    variant="outlined"
                    color="primary"
                    href="#rules">
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
                    href="#finalehome">
                    △
                </Button>
            </Stack>
        </Box>
    )
}

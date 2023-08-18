import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

export default function Countdown() {
    const [visibility, setVisibility] = useState(true)

    // ===========
    // Timer logic
    // ===========
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    let currentTime = new Date().getTime()
    const startTime = new Date("August 19 2023 10:00:00 GMT+0530").getTime()
    const deadline = new Date("August 20 2023 10:00:00 GMT+0530").getTime()

    const getTime = () => {
        currentTime = new Date().getTime()
        const time = deadline - Date.now()

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24))
        setMinutes(Math.floor((time / 1000 / 60) % 60))
        setSeconds(Math.floor((time / 1000) % 60))
    }

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            {visibility ?
                <Card sx={{
                    display: ((currentTime > startTime) && (currentTime < deadline)) ? "flex" : "none",
                    width: "100vw",
                    height: "100vh",
                    zIndex: "10",
                    bgcolor: "secondary.main",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "fixed",
                    top: "0",
                    left: "0",
                    bottom: "0",
                    right: "0",
                    margin: "auto"
                }}>
                    <Typography gutterBottom variant="h1" component="h1" textAlign="center">
                        Countdown
                    </Typography>

                    <CardActions sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: {
                            xs: "15rem",
                            sm: "25rem"
                        },
                    }}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "0.5rem",
                            width: "100%",
                        }}>
                            <Button size="large" variant="contained" sx={{
                                width: "100%", fontSize: {
                                    xs: "2rem",
                                    sm: "8rem"
                                }
                            }}>{days}</Button>
                            <Typography variant="h3" component="h3">
                                Days
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "0.5rem",
                            width: "100%",
                        }}>
                            <Button size="large" variant="contained" sx={{
                                width: "100%", fontSize: {
                                    xs: "2rem",
                                    sm: "8rem"
                                }
                            }}>{hours}</Button>
                            <Typography variant="h3" component="h3">
                                Hours
                            </Typography>
                        </Box>
                    </CardActions>

                    <CardActions sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: {
                            xs: "15rem",
                            sm: "25rem"
                        },
                    }}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "0.5rem",
                            width: "100%",
                        }}>
                            <Button size="large" variant="contained" sx={{
                                width: "100%", fontSize: {
                                    xs: "2rem",
                                    sm: "8rem"
                                }
                            }}>{minutes}</Button>
                            <Typography variant="h3" component="h3">
                                Minutes
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "0.5rem",
                            width: "100%",
                        }}>
                            <Button size="large" variant="contained" sx={{
                                width: "100%", fontSize: {
                                    xs: "2rem",
                                    sm: "8rem"
                                }
                            }}>{seconds}</Button>
                            <Typography variant="h3" component="h3">
                                Seconds
                            </Typography>
                        </Box>
                    </CardActions>

                    <Button
                        size="large"
                        variant="contained"
                        sx={{ marginTop: "1rem" }}
                        onClick={() => setVisibility(!visibility)}
                    >
                        Hide Timer
                    </Button>
                </Card> :

                <Button
                    size="large"
                    variant="contained"
                    sx={{
                        display: ((currentTime > startTime) && (currentTime < deadline)) ? "block" : "none",
                        position: "fixed",
                        top: 0,
                        left: 0,
                        zIndex: "100"
                    }}
                    onClick={() => setVisibility(!visibility)}
                >
                    Show Timer
                </Button>
            }
        </div>
    )
}

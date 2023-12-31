import { Typography, Box } from "@mui/material"
import ixbackground from "../assets/IX-bg.jpg"
import { useContext, useEffect, useState } from "react"
import useElementVisibility from "../hooks/ElementVisibility"
import VisibilityContext from "../context/Visibility"

export default function Register() {
    // Set visible element context
    const [isVisible, setIsVisible] = useState()
    const [containerRef] = useElementVisibility(setIsVisible)
    const { setVisibleElement } = useContext(VisibilityContext)
    const [visibilityCounter, setVisibilityCounter] = useState(0)

    // =============
    // Tripetto form
    // =============
    useEffect(() => {
        if (visibilityCounter === 1) {
            const tripetto = TripettoServices.init({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiV2QyaytuQjBPd3FpWC92S0tLNmxGYkJwTk01Y21TSnJKZjBzTVNSZDBwbz0iLCJkZWZpbml0aW9uIjoiU01sMW04SWRTMGxuQ3RNREY2aElpRTNpb1lnTGNYT2RpT3lPc0RxY3JBcz0iLCJ0eXBlIjoiY29sbGVjdCJ9.WzeVrXepj7OqmqrdgtsTPUExAw1IRlocjVuxJt5lcXI" });

            TripettoChat.run({
                element: document.getElementById("tripetto"),
                definition: tripetto.definition,
                styles: tripetto.styles,
                display: "inline",
                l10n: tripetto.l10n,
                locale: tripetto.locale,
                translations: tripetto.translations,
                attachments: tripetto.attachments,
                onSubmit: tripetto.onSubmit,
                snapshot: tripetto.snapshot,
                onPause: tripetto.onPause,
                persistent: true
            })
        }
    }, [visibilityCounter])


    useEffect(() => {
        if (isVisible) {
            setVisibleElement("register")
            setVisibilityCounter(visibilityCounter + 1)
        }
    }, [isVisible])

    return (
        <Box sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            // backgroundImage: `url(${ixbackground})`,
            // backgroundAttachment: "fixed",
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "center",
            // backgroundSize: "100%",
            background: "#161518",
        }} id="register" ref={containerRef}>
            <Typography color="primary" component="h1" variant="h1" fontWeight="bold" marginTop="3rem" textAlign="center">
                Register
            </Typography>
            <div id="tripetto"></div>
        </Box>
    )
}
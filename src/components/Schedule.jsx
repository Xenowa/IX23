import Box from "@mui/material/Box"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import CancelScheduleSendIcon from '@mui/icons-material/CancelScheduleSend';
import EditIcon from '@mui/icons-material/Edit';
import EditOffIcon from '@mui/icons-material/EditOff';
import HandymanIcon from '@mui/icons-material/Handyman';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import DrawIcon from '@mui/icons-material/Draw';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useContext, useEffect, useState } from "react";
import useElementVisibility from "../hooks/ElementVisibility";
import VisibilityContext from "../context/Visibility";

export default function Schedule() {
    // Set visible element context
    const [isVisible, setIsVisible] = useState();
    const [containerRef] = useElementVisibility(setIsVisible);
    const {visibleElement, setVisibleElement} = useContext(VisibilityContext);

    useEffect(() => {
        if (isVisible) setVisibleElement("schedule");
    }, [isVisible])

    const Content = ({ heading }) => {
        return (
            <div>
                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                        <Typography variant={heading} component="span" fontWeight="bold">
                            Opening of Registrations
                        </Typography>
                        <Typography variant="h6" component="h6">
                            June 28th
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                        <TimelineDot color="secondaryLight" variant="filled">
                            <ScheduleSendIcon sx={{ color: "primary.main", padding: "1rem", borderRadius: "20rem", border: "1px solid var(--primary)" }} fontSize="medium" />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ m: 'auto 0' }} />
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                        <Typography variant={heading} component="span" fontWeight="bold">
                            Closing of Registrations
                        </Typography>
                        <Typography variant="h6" component="h6">
                            July 8th
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                        <TimelineDot color="secondaryLight" variant="filled">
                            <CancelScheduleSendIcon sx={{ color: "primary.main", padding: "1rem", borderRadius: "20rem", border: "1px solid var(--primary)" }} fontSize="medium" />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ m: 'auto 0' }} />
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                        <Typography variant={heading} component="span" fontWeight="bold">
                            Awarness Session
                        </Typography>
                        <Typography variant="h6" component="h6">
                            July 11th
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                        <TimelineDot color="secondaryLight" variant="filled">
                            <CoPresentIcon sx={{ color: "primary.main", padding: "1rem", borderRadius: "20rem", border: "1px solid var(--primary)" }} fontSize="medium" />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ m: 'auto 0' }} />
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                        <Typography variant={heading} component="span" fontWeight="bold">
                            Initial Design Submission Opening
                        </Typography>
                        <Typography variant="h6" component="h6">
                            July 12th
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                        <TimelineDot color="secondaryLight" variant="filled">
                            <EditIcon sx={{ color: "primary.main", padding: "1rem", borderRadius: "20rem", border: "1px solid var(--primary)" }} fontSize="medium" />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ m: 'auto 0' }} />
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                        <Typography variant={heading} component="span" fontWeight="bold">
                            Workshop 1
                        </Typography>
                        <Typography variant="h6" component="h6">
                            July 15th
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                        <TimelineDot color="secondaryLight" variant="filled">
                            <HandymanIcon sx={{ color: "primary.main", padding: "1rem", borderRadius: "20rem", border: "1px solid var(--primary)" }} fontSize="medium" />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ m: 'auto 0' }} />
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                        <Typography variant={heading} component="span" fontWeight="bold">
                            Initial Design Submission Closing
                        </Typography>
                        <Typography variant="h6" component="h6">
                            July 19th
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                        <TimelineDot color="secondaryLight" variant="filled">
                            <EditOffIcon sx={{ color: "primary.main", padding: "1rem", borderRadius: "20rem", border: "1px solid var(--primary)" }} fontSize="medium" />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ m: 'auto 0' }} />
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                        <Typography variant={heading} component="span" fontWeight="bold">
                            Workshop 2
                        </Typography>
                        <Typography variant="h6" component="h6">
                            July 26th
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                        <TimelineDot color="secondaryLight" variant="filled">
                            <HandymanIcon sx={{ color: "primary.main", padding: "1rem", borderRadius: "20rem", border: "1px solid var(--primary)" }} fontSize="medium" />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ m: 'auto 0' }} />
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                        <Typography variant={heading} component="span" fontWeight="bold">
                            Announcement of Finalists
                        </Typography>
                        <Typography variant="h6" component="h6">
                            July 30th
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                        <TimelineDot color="secondaryLight" variant="filled">
                            <AutoAwesomeIcon sx={{ color: "primary.main", padding: "1rem", borderRadius: "20rem", border: "1px solid var(--primary)" }} fontSize="medium" />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ m: 'auto 0' }} />
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                        <Typography variant={heading} component="span" fontWeight="bold">
                            Designathon
                        </Typography>
                        <Typography variant="h6" component="h6">
                            August 12th
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                        <TimelineDot color="secondaryLight" variant="filled">
                            <DrawIcon sx={{ color: "primary.main", padding: "1rem", borderRadius: "20rem", border: "1px solid var(--primary)" }} fontSize="medium" />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ m: 'auto 0' }} />
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                        <Typography variant={heading} component="span" fontWeight="bold">
                            Grab the Trophy
                        </Typography>
                        <Typography variant="h6" component="h6">
                            August 13th
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                        <TimelineDot color="secondaryLight" variant="filled">
                            <EmojiEventsIcon sx={{ color: "primary.main", padding: "1rem", borderRadius: "20rem", border: "1px solid var(--primary)" }} fontSize="medium" />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ m: 'auto 0' }} />
                </TimelineItem>
            </div>
        )
    }

    return (
        <Box sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "10px",
        }} id="schedule" bgcolor="secondary.main" ref={containerRef}>
            <Typography color="primary" component="h1" variant="h1" fontWeight="bold" marginTop="1rem" textAlign="center">Schedule</Typography>

            {/* For Desktops */}
            <Timeline position="alternate" sx={{ display: { xs: "none", md: "block" }, width: "50rem" }}>
                <Content heading="h4" />
            </Timeline>
            {/* For mobile */}
            <Timeline position="alternate" sx={{ display: { xs: "block", md: "none" } }}>
                <Content heading="h6" />
            </Timeline>
        </Box>
    )
}

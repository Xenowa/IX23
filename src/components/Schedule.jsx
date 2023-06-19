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

export default function Schedule() {
    const Content = ({ heading }) => {
        return (
            <div>
                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                        <Typography variant={heading} component="span" fontWeight="bold">
                            Opening of Registrations
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                        <TimelineDot color="secondaryLight" variant="filled">
                            <ScheduleSendIcon sx={{ color: "primary.main" }} fontSize="large" />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ m: 'auto 0' }}>
                        <Typography variant="h6" component="span">
                            June 28th
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                        <Typography variant={heading} component="span" fontWeight="bold">
                            Closing of Registrations
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                        <TimelineDot color="secondaryLight" variant="filled">
                            <CancelScheduleSendIcon sx={{ color: "primary.main" }} fontSize="large" />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ m: 'auto 0' }}>
                        <Typography variant="h6" component="span">
                            July 8th
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                        <Typography variant={heading} component="span" fontWeight="bold">
                            Awarness Session
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                        <TimelineDot color="secondaryLight" variant="filled">
                            <CoPresentIcon sx={{ color: "primary.main" }} fontSize="large" />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ m: 'auto 0' }}>
                        <Typography variant="h6" component="span">
                            July 11th
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                        <Typography variant={heading} component="span" fontWeight="bold">
                            Initial Design Submission Opening
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                        <TimelineDot color="secondaryLight" variant="filled">
                            <EditIcon sx={{ color: "primary.main" }} fontSize="large" />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ m: 'auto 0' }}>
                        <Typography variant="h6" component="span">
                            July 12th
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                        <Typography variant={heading} component="span" fontWeight="bold">
                            Workshop 1
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                        <TimelineDot color="secondaryLight" variant="filled">
                            <HandymanIcon sx={{ color: "primary.main" }} fontSize="large" />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ m: 'auto 0' }}>
                        <Typography variant="h6" component="span">
                            July 15th
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                        <Typography variant={heading} component="span" fontWeight="bold">
                            Initial Design Submission Closing
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                        <TimelineDot color="secondaryLight" variant="filled">
                            <EditOffIcon sx={{ color: "primary.main" }} fontSize="large" />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ m: 'auto 0' }}>
                        <Typography variant="h6" component="span">
                            July 19th
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                        <Typography variant={heading} component="span" fontWeight="bold">
                            Workshop 2
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                        <TimelineDot color="secondaryLight" variant="filled">
                            <HandymanIcon sx={{ color: "primary.main" }} fontSize="large" />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ m: 'auto 0' }}>
                        <Typography variant="h6" component="span">
                            July 26th
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                        <Typography variant={heading} component="span" fontWeight="bold">
                            Announcement of Finalists
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                        <TimelineDot color="secondaryLight" variant="filled">
                            <AutoAwesomeIcon sx={{ color: "primary.main" }} fontSize="large" />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ m: 'auto 0' }}>
                        <Typography variant="h6" component="span">
                            July 30th
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                        <Typography variant={heading} component="span" fontWeight="bold">
                            Designathon
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                        <TimelineDot color="secondaryLight" variant="filled">
                            <DrawIcon sx={{ color: "primary.main" }} fontSize="large" />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ m: 'auto 0' }}>
                        <Typography variant="h6" component="span">
                            August 12th
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                        <Typography variant={heading} component="span" fontWeight="bold">
                            Grab the Trophy
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                        <TimelineDot color="secondaryLight" variant="filled">
                            <EmojiEventsIcon sx={{ color: "primary.main" }} fontSize="large" />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ m: 'auto 0' }}>
                        <Typography variant="h6" component="span">
                            August 13th
                        </Typography>
                    </TimelineContent>
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
            gap: "1rem"
        }} id="schedule" bgcolor="secondary.main">
            <Typography color="primary" component="h1" variant="h1" fontWeight="bold" marginTop="1rem" textAlign="center">Schedule</Typography>

            {/* For Desktops */}
            <Timeline position="alternate" sx={{ display: { xs: "none", md: "block" }, width: "50rem" }}>
                <Content heading="h3" />
            </Timeline>
            {/* For mobile */}
            <Timeline position="alternate" sx={{ display: { xs: "block", md: "none" } }}>
                <Content heading="h6" />
            </Timeline>
        </Box>
    )
}

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
    const { visibleElement, setVisibleElement } = useContext(VisibilityContext);

    useEffect(() => {
        if (isVisible) setVisibleElement("schedule");
    }, [isVisible])

    const TimelineEvent = ({heading, title, date, icon}) => (
        <TimelineItem>
            <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                <Typography variant={heading} component="span" fontWeight="bold" sx={{ wordBreak: "break-word" }}>
                    { title }
                </Typography>
                <Typography variant="h6" component="h6" sx={{ wordBreak: "break-word" }}>
                    { date }
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                <TimelineDot color="secondaryLight" variant="filled">
                    { icon }
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ m: 'auto 0' }} />
        </TimelineItem>
    )

    const Content = ({ heading }) => {
        const iconSxProp = { color: "primary.main", padding: "1rem", borderRadius: "20rem", border: "1px solid var(--primary)" }

        return (
            <div>
                <TimelineEvent
                    heading={heading}
                    title={"Opening of Registrations"}
                    date={"July 12th"}
                    icon={<ScheduleSendIcon sx={iconSxProp} fontSize="medium" />}
                />

                <TimelineEvent
                    heading={heading}
                    title={"Closing of Registrations"}
                    date={"July 22nd"}
                    icon={<CancelScheduleSendIcon sx={iconSxProp} fontSize="medium" />}
                />

                <TimelineEvent
                    heading={heading}
                    title={"Awareness Session"}
                    date={"July 25th"}
                    icon={<CoPresentIcon sx={iconSxProp} fontSize="medium" />}
                />

                <TimelineEvent
                    heading={heading}
                    title={"Initial Design Submission Opening"}
                    date={"July 26th"}
                    icon={<EditIcon sx={iconSxProp} fontSize="medium" />}
                />

                <TimelineEvent
                    heading={heading}
                    title={"Workshop 1"}
                    date={"July 29th"}
                    icon={<HandymanIcon sx={iconSxProp} fontSize="medium" />}
                />

                <TimelineEvent
                    heading={heading}
                    title={"Initial Design Submission Closing"}
                    date={"Aug 2nd"}
                    icon={<EditOffIcon sx={iconSxProp} fontSize="medium" />}
                />

                <TimelineEvent
                    heading={heading}
                    title={"Workshop 2"}
                    date={"Aug 9th"}
                    icon={<HandymanIcon sx={iconSxProp} fontSize="medium" />}
                />

                <TimelineEvent
                    heading={heading}
                    title={"Announcement of Finalists"}
                    date={"Aug 13th"}
                    icon={<AutoAwesomeIcon sx={iconSxProp} fontSize="medium" />}
                />

                <TimelineEvent
                    heading={heading}
                    title={"Designathon"}
                    date={"Aug 19th"}
                    icon={<DrawIcon sx={iconSxProp} fontSize="medium" />}
                />

                <TimelineEvent
                    heading={heading}
                    title={"Grab the Trophy"}
                    date={"Aug 20th"}
                    icon={<EmojiEventsIcon sx={iconSxProp} fontSize="medium" />}
                />
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

import Box from "@mui/material/Box"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { Coffee, ConnectWithoutContact, DinnerDining, Diversity3, Draw, EditOff, EmojiEvents, Handshake, KebabDining, Light, LightMode, Person4, QueryBuilder, RamenDining, Title, Verified, WavingHand } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function EventTimeline() {
    // Added custom icon to simulate what is required
    // Prop added: customItem=undefined
    const TimelineEvent = ({ heading, title, date, icon, customItem }) => {
        // CUSTOM ITEM: for demonstration
        if (customItem) {
            return (
                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                        <Typography variant={customItem.heading} component="span" fontWeight="bold" sx={{ wordBreak: "break-word" }}>
                            {customItem.title}
                        </Typography>
                        <Typography variant="h6" component="h6" sx={{ wordBreak: "break-word" }}>
                            {customItem.date}
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                        <TimelineDot color={customItem.active ? "primary" : "secondaryLight"} variant="filled">
                            {customItem.active ? customItem.activeIcon : customItem.deactiveIcon}
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ m: 'auto 0' }} />
                </TimelineItem>
            )
        }

        return (
            <TimelineItem>
                <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                    <Typography variant={heading} component="span" fontWeight="bold" sx={{ wordBreak: "break-word" }}>
                        {title}
                    </Typography>
                    <Typography variant="h6" component="h6" sx={{ wordBreak: "break-word" }}>
                        {date}
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                    <TimelineDot color="secondaryLight" variant="filled">
                        {icon}
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                </TimelineSeparator>
                <TimelineContent sx={{ m: 'auto 0' }} />
            </TimelineItem>
        )
    }

    // CUSTOM ITEM: for demonstration
    const customTimelineItem = {
        title: "Delegate Reception Verification",
        date: "Aug 19 | 8:30 AM - 9:00 AM",
        active: true,
        activeIcon: <Verified sx={{ color: "secondary.main", padding: "1rem", borderRadius: "20rem", border: "1px solid var(--primary)" }} fontSize="medium" />,
        deactiveIcon: <Verified sx={{ color: "primary.main", padding: "1rem", borderRadius: "20rem", border: "1px solid var(--primary)" }} fontSize="medium" />
    }

    const Content = ({ heading }) => {
        const iconSxProp = { color: "primary.main", padding: "1rem", borderRadius: "20rem", border: "1px solid var(--primary)" }

        return (
            <div>
                {/* CUSTOM ITEM: for demonstration START */}
                <TimelineEvent
                    heading={heading}
                    title=""
                    date=""
                    icon=""
                    customItem={customTimelineItem}
                />
                {/* CUSTOM ITEM: for demonstration END */}



                <TimelineEvent
                    heading={heading}
                    title={"Welcome"}
                    date={"Aug 19 | 9:00 AM - 10:00 AM"}
                    icon={<WavingHand sx={iconSxProp} fontSize="medium" />}
                />

                <TimelineEvent
                    heading={heading}
                    title={"24hr Designathon Starts"}
                    date={"Aug 19 | 10:00 AM"}
                    icon={<Draw sx={iconSxProp} fontSize="medium" />}
                />

                {/* <TimelineEvent
                    heading={heading}
                    title={"Lunch distribution"}
                    date={"Aug 19 | 12:30 PM - 1:00 PM"}
                    icon={<LunchDining sx={iconSxProp} fontSize="medium" />}
                /> */}

                <TimelineEvent
                    heading={heading}
                    title={"Tea time snack"}
                    date={"Aug 19 | 4:30 PM - 5:00 PM"}
                    icon={<Coffee sx={iconSxProp} fontSize="medium" />}
                />

                {/* <TimelineEvent
                    heading={heading}
                    title={"Entertainment break"}
                    date={"Aug 19 | 7:30 PM - 8:00 PM"}
                    icon={<VideogameAsset sx={iconSxProp} fontSize="medium" />}
                /> */}

                <TimelineEvent
                    heading={heading}
                    title={"Dinner distribution"}
                    date={"Aug 19 | 8:30 PM - 9:30 PM"}
                    icon={<RamenDining sx={iconSxProp} fontSize="medium" />}
                />

                {/* <TimelineEvent
                    heading={heading}
                    title={"Coffee break"}
                    date={"Aug 20 | 12:00 AM - 12:30 AM"}
                    icon={<Coffee sx={iconSxProp} fontSize="medium" />}
                /> */}

                <TimelineEvent
                    heading={heading}
                    title={"Midnight snack"}
                    date={"Aug 20 | 2:00 AM - 2:30 AM"}
                    icon={<KebabDining sx={iconSxProp} fontSize="medium" />}
                />

                <TimelineEvent
                    heading={heading}
                    title={"Breakfast"}
                    date={"Aug 20 | 7:30 AM - 8:00 AM"}
                    icon={<DinnerDining sx={iconSxProp} fontSize="medium" />}
                />

                <TimelineEvent
                    heading={heading}
                    title={"24hr Designathon Ends"}
                    date={"Aug 20 | 10:00 AM"}
                    icon={<EditOff sx={iconSxProp} fontSize="medium" />}
                />

                <TimelineEvent
                    heading={heading}
                    title={"Lunch + Preparation time"}
                    date={"Aug 20 | 10:00 AM - 12:00 AM"}
                    icon={<QueryBuilder sx={iconSxProp} fontSize="medium" />}
                />

                <TimelineEvent
                    heading={heading}
                    title={"Team presentations"}
                    date={"Aug 20 | 12:00 AM - 2:00 AM"}
                    icon={<ConnectWithoutContact sx={iconSxProp} fontSize="medium" />}
                />

                <TimelineEvent
                    heading={heading}
                    title={"Award Ceremony Welcome"}
                    date={"Aug 20 | 2:30 PM - 2:40 PM"}
                    icon={<Handshake sx={iconSxProp} fontSize="medium" />}
                />

                <TimelineEvent
                    heading={heading}
                    title={"Lighting the oil lamp"}
                    date={"Aug 20 | 2:40 PM - 3:00 PM"}
                    icon={<LightMode sx={iconSxProp} fontSize="medium" />}
                />

                <TimelineEvent
                    heading={heading}
                    title={"Title partner addressing the event"}
                    date={"Aug 20 | 3:00 PM - 3:25 PM"}
                    icon={<Title sx={iconSxProp} fontSize="medium" />}
                />

                <TimelineEvent
                    heading={heading}
                    title={"IX 23 Chairperson Addressing the event"}
                    date={"Aug 20 | 3:25 PM - 3:35 PM"}
                    icon={<Person4 sx={iconSxProp} fontSize="medium" />}
                />

                <TimelineEvent
                    heading={heading}
                    title={"Appreciating the judges"}
                    date={"Aug 20 | 3:35 PM - 3:45 PM"}
                    icon={<Diversity3 sx={iconSxProp} fontSize="medium" />}
                />

                <TimelineEvent
                    heading={heading}
                    title={"Awarding ceremony"}
                    date={"Aug 20 | 3:45 PM - 4:00 PM"}
                    icon={<EmojiEvents sx={iconSxProp} fontSize="medium" />}
                />

                <TimelineEvent
                    heading={heading}
                    title={"Vote of thanks"}
                    date={"Aug 20 | 4:00 PM - 4:10 PM"}
                    icon={<Light sx={iconSxProp} fontSize="medium" />}
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
        }} id="timeline" bgcolor="secondary.main">
            <Typography color="primary" component="h1" variant="h1" fontWeight="bold" marginTop="1rem" textAlign="center">Schedule</Typography>

            {/* For Desktops */}
            <Timeline position="alternate" sx={{ display: { xs: "none", md: "block" }, width: "50rem" }}>
                <Content heading="h4" />
            </Timeline>
            {/* For mobile */}
            <Timeline position="alternate" sx={{ display: { xs: "block", md: "none" } }}>
                <Content heading="h6" />
            </Timeline>

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
                href="#rules">
                △
            </Button>
        </Box>
    )
}

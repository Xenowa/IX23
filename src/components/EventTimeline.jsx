import Box from "@mui/material/Box"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { Coffee, ConnectWithoutContact, DinnerDining, Diversity3, Draw, EditOff, EmojiEvents, Handshake, KebabDining, Light, LightMode, LunchDining, Person4, QueryBuilder, RamenDining, RecordVoiceOver, Restaurant, Title, Verified, WavingHand } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export default function EventTimeline() {
    // ====================
    // Timeline Timer Setup
    // ====================
    // Timeline item states
    const [timeline, setTimeline] = useState({
        receptionVerificationTime: false,
        welcomeTime: false,
        deignathonStartTime: false,
        lunch1Time: false,
        teaSnackTime: false,
        dinnerTime: false,
        midnightSnackTime: false,
        breakfastTime: false,
        deignathonEndTime: false,
        breakForPrepationTime: false,
        teamPresentationTime: false,
        awardCeremonyWelcomeTime: false,
        lunch2Time: false,
        lightingLampTime: false,
        advisorSpeechTime: false,
        titlePartnerAddressingTime: false,
        ix23ChairpersonAddressingTime: false,
        appreciatingTheJudgesTime: false,
        awardingCeremonyTime: false,
        voteOfThanksTime: false,
    })
    const [currentTime, setCurrentTime] = useState()

    // Timer state times
    const delegateReceptionVerificationTime = new Date("Aug 19 2023 08:30:00 GMT+0530").getTime()
    const welcomeTime = new Date("Aug 19 2023 09:00:00 GMT+0530").getTime()
    const deignathonStartTime = new Date("Aug 19 2023 10:00:00 GMT+0530").getTime()
    const lunch1Time = new Date("Aug 19 2023 12:30:00 GMT+0530").getTime()
    const teaSnackTime = new Date("Aug 19 2023 17:00:00 GMT+0530").getTime()
    const dinnerTime = new Date("Aug 19 2023 20:30:00 GMT+0530").getTime()
    const midnightSnackTime = new Date("Aug 20 2023 02:00:00 GMT+0530").getTime()
    const breakfastTime = new Date("Aug 20 2023 07:30:00 GMT+0530").getTime()
    const deignathonEndTime = new Date("Aug 20 2023 10:00:00 GMT+0530").getTime()
    const breakForPrepationTime = new Date("Aug 20 2023 10:00:00 GMT+0530").getTime()
    const teamPresentationTime = new Date("Aug 20 2023 12:00:00 GMT+0530").getTime()
    const awardCeremonyWelcomeTime = new Date("Aug 20 2023 14:30:00 GMT+0530").getTime()
    const lunch2Time = new Date("Aug 20 2023 12:30:00 GMT+0530").getTime()
    const lightingLampTime = new Date("Aug 20 2023 14:40:00 GMT+0530").getTime()
    const advisorSpeechTime = new Date("Aug 20 2023 14:50:00 GMT+0530").getTime()
    const titlePartnerAddressingTime = new Date("Aug 20 2023 15:00:00 GMT+0530").getTime()
    const ix23ChairpersonAddressingTime = new Date("Aug 20 2023 15:25:00 GMT+0530").getTime()
    const appreciatingTheJudgesTime = new Date("Aug 20 2023 15:35:00 GMT+0530").getTime()
    const awardingCeremonyTime = new Date("Aug 20 2023 15:45:00 GMT+0530").getTime()
    const voteOfThanksTime = new Date("Aug 20 2023 16:10:00 GMT+0530").getTime()

    // Timeline state setter
    let timer = useRef()

    // Set states if current time is less than event end time
    useEffect(() => {
        timer.current = setInterval(() => {
            setCurrentTime(new Date().getTime())
        }, 1000)

        // clean up the hook
        return () => {
            clearInterval(timer)
        }
    }, [])

    // clear time interval if current time is greater than event end time
    useEffect(() => {
        if (currentTime > voteOfThanksTime) {
            clearInterval(timer.current)
            setTimeline({
                receptionVerificationTime: true,
                welcomeTime: true,
                deignathonStartTime: true,
                lunch1Time: true,
                teaSnackTime: true,
                dinnerTime: true,
                midnightSnackTime: true,
                breakfastTime: true,
                deignathonEndTime: true,
                breakForPrepationTime: true,
                teamPresentationTime: true,
                awardCeremonyWelcomeTime: true,
                lunch2Time: true,
                lightingLampTime: true,
                advisorSpeechTime: true,
                titlePartnerAddressingTime: true,
                ix23ChairpersonAddressingTime: true,
                appreciatingTheJudgesTime: true,
                awardingCeremonyTime: true,
                voteOfThanksTime: true,
            })
        } else {
            setTimeline({
                receptionVerificationTime: currentTime > delegateReceptionVerificationTime,
                welcomeTime: currentTime > welcomeTime,
                deignathonStartTime: currentTime > deignathonStartTime,
                lunch1Time: currentTime > lunch1Time,
                teaSnackTime: currentTime > teaSnackTime,
                dinnerTime: currentTime > dinnerTime,
                midnightSnackTime: currentTime > midnightSnackTime,
                breakfastTime: currentTime > breakfastTime,
                deignathonEndTime: currentTime > deignathonEndTime,
                breakForPrepationTime: currentTime > breakForPrepationTime,
                teamPresentationTime: currentTime > teamPresentationTime,
                awardCeremonyWelcomeTime: currentTime > awardCeremonyWelcomeTime,
                lunch2Time: currentTime > lunch2Time,
                lightingLampTime: currentTime > lightingLampTime,
                advisorSpeechTime: currentTime > advisorSpeechTime,
                titlePartnerAddressingTime: currentTime > titlePartnerAddressingTime,
                ix23ChairpersonAddressingTime: currentTime > ix23ChairpersonAddressingTime,
                appreciatingTheJudgesTime: currentTime > appreciatingTheJudgesTime,
                awardingCeremonyTime: currentTime > awardingCeremonyTime,
                voteOfThanksTime: currentTime > voteOfThanksTime,
            })
        }
    }, [currentTime])

    const TimelineEvent = ({ heading, title, date, icon, timeState }) => {
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
                    <TimelineDot color={timeState ? "primary" : "secondaryLight"} variant="filled">
                        {icon}
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'primary.main', height: "2rem" }} />
                </TimelineSeparator>
                <TimelineContent sx={{ m: 'auto 0' }} />
            </TimelineItem>
        )
    }

    const Content = ({ heading }) => {
        const iconSxProp = { color: "primary.main", padding: "1rem", borderRadius: "20rem", border: "1px solid var(--primary)" }

        return (
            <div>
                <TimelineEvent
                    heading={heading}
                    title="Delegate Reception Verification"
                    date="Aug 19 | 8:30 AM - 9:00 AM"
                    icon={
                        <Verified
                            sx={{
                                color: timeline.receptionVerificationTime ? "secondary.main" : "primary.main",
                                padding: "1rem", borderRadius: "20rem", border: "1px solid var(--primary)"
                            }}
                            fontSize="medium"
                        />
                    }
                    timeState={timeline.receptionVerificationTime}
                />

                <TimelineEvent
                    heading={heading}
                    title={"Welcome"}
                    date={"Aug 19 | 9:00 AM - 10:00 AM"}
                    icon={
                        <WavingHand
                            sx={{
                                color: timeline.welcomeTime ? "secondary.main" : "primary.main",
                                padding: "1rem", borderRadius: "20rem", border: "1px solid var(--primary)"
                            }}
                            fontSize="medium"
                        />
                    }
                    timeState={timeline.welcomeTime}
                />

                <TimelineEvent
                    heading={heading}
                    title={"24hr Designathon Starts"}
                    date={"Aug 19 | 10:00 AM"}
                    icon={
                        <Draw
                            sx={{
                                color: timeline.deignathonStartTime ? "secondary.main" : "primary.main",
                                padding: "1rem", borderRadius: "20rem", border: "1px solid var(--primary)"
                            }}
                            fontSize="medium"
                        />
                    }
                    timeState={timeline.deignathonStartTime}
                />

                <TimelineEvent
                    heading={heading}
                    title={"Lunch distribution"}
                    date={"Aug 19 | 12:30 PM - 1:00 PM"}
                    icon={
                        <LunchDining
                            sx={{
                                color: timeline.lunch1Time ? "secondary.main" : "primary.main",
                                padding: "1rem", borderRadius: "20rem", border: "1px solid var(--primary)"
                            }}
                            fontSize="medium"
                        />
                    }
                    timeState={timeline.lunch1Time}
                />

                <TimelineEvent
                    heading={heading}
                    title={"Tea time snack"}
                    date={"Aug 19 | 5:00 PM - 5:30 PM"}
                    icon={
                        <Coffee
                            sx={{
                                color: timeline.teaSnackTime ? "secondary.main" : "primary.main",
                                padding: "1rem", borderRadius: "20rem", border: "1px solid var(--primary)"
                            }}
                            fontSize="medium"
                        />
                    }
                    timeState={timeline.teaSnackTime}
                />

                <TimelineEvent
                    heading={heading}
                    title={"Dinner distribution"}
                    date={"Aug 19 | 8:30 PM - 9:00 PM"}
                    icon={
                        <RamenDining
                            sx={{
                                color: timeline.dinnerTime ? "secondary.main" : "primary.main",
                                padding: "1rem", borderRadius: "20rem", border: "1px solid var(--primary)"
                            }}
                            fontSize="medium"
                        />
                    }
                    timeState={timeline.dinnerTime}
                />

                <TimelineEvent
                    heading={heading}
                    title={"Midnight snack"}
                    date={"Aug 20 | 2:00 AM - 2:30 AM"}
                    icon={
                        <KebabDining
                            sx={{
                                color: timeline.midnightSnackTime ? "secondary.main" : "primary.main",
                                padding: "1rem", borderRadius: "20rem", border: "1px solid var(--primary)"
                            }}
                            fontSize="medium"
                        />
                    }
                    timeState={timeline.midnightSnackTime}
                />

                <TimelineEvent
                    heading={heading}
                    title={"Breakfast"}
                    date={"Aug 20 | 7:30 AM - 8:00 AM"}
                    icon={
                        <DinnerDining
                            sx={{
                                color: timeline.breakfastTime ? "secondary.main" : "primary.main",
                                padding: "1rem", borderRadius: "20rem", border: "1px solid var(--primary)"
                            }}
                            fontSize="medium"
                        />
                    }
                    timeState={timeline.breakfastTime}
                />

                <TimelineEvent
                    heading={heading}
                    title={"24hr Designathon Ends"}
                    date={"Aug 20 | 10:00 AM"}
                    icon={
                        <EditOff
                            sx={{
                                color: timeline.deignathonEndTime ? "secondary.main" : "primary.main",
                                padding: "1rem", borderRadius: "20rem", border: "1px solid var(--primary)"
                            }}
                            fontSize="medium"
                        />
                    }
                    timeState={timeline.deignathonEndTime}
                />

                <TimelineEvent
                    heading={heading}
                    title={"Break + Preparation time"}
                    date={"Aug 20 | 10:00 AM - 12:00 PM"}
                    icon={
                        <QueryBuilder
                            sx={{
                                color: timeline.breakForPrepationTime ? "secondary.main" : "primary.main",
                                padding: "1rem", borderRadius: "20rem", border: "1px solid var(--primary)"
                            }}
                            fontSize="medium"
                        />
                    }
                    timeState={timeline.breakForPrepationTime}
                />

                <TimelineEvent
                    heading={heading}
                    title={"Team presentations"}
                    date={"Aug 20 | 12:00 PM - 2:00 PM"}
                    icon={
                        <ConnectWithoutContact
                            sx={{
                                color: timeline.teamPresentationTime ? "secondary.main" : "primary.main",
                                padding: "1rem", borderRadius: "20rem", border: "1px solid var(--primary)"
                            }}
                            fontSize="medium"
                        />
                    }
                    timeState={timeline.teamPresentationTime}
                />

                <TimelineEvent
                    heading={heading}
                    title={"Lunch Distribution"}
                    date={"Aug 20 | 12:30 PM - 2:00 PM"}
                    icon={
                        <Restaurant
                            sx={{
                                color: timeline.lunch2Time ? "secondary.main" : "primary.main",
                                padding: "1rem", borderRadius: "20rem", border: "1px solid var(--primary)"
                            }}
                            fontSize="medium"
                        />
                    }
                    timeState={timeline.lunch2Time}
                />

                <TimelineEvent
                    heading={heading}
                    title={"Award Ceremony Welcome"}
                    date={"Aug 20 | 2:30 PM - 2:40 PM"}
                    icon={
                        <Handshake
                            sx={{
                                color: timeline.awardCeremonyWelcomeTime ? "secondary.main" : "primary.main",
                                padding: "1rem", borderRadius: "20rem", border: "1px solid var(--primary)"
                            }}
                            fontSize="medium"
                        />
                    }
                    timeState={timeline.awardCeremonyWelcomeTime}
                />

                <TimelineEvent
                    heading={heading}
                    title={"Lighting the oil lamp"}
                    date={"Aug 20 | 2:40 PM - 2:50 PM"}
                    icon={
                        <LightMode
                            sx={{
                                color: timeline.lightingLampTime ? "secondary.main" : "primary.main",
                                padding: "1rem", borderRadius: "20rem", border: "1px solid var(--primary)"
                            }}
                            fontSize="medium"
                        />
                    }
                    timeState={timeline.lightingLampTime}
                />

                <TimelineEvent
                    heading={heading}
                    title={"Advisor speech"}
                    date={"Aug 20 | 2:50 PM - 3:00 PM"}
                    icon={
                        <RecordVoiceOver
                            sx={{
                                color: timeline.advisorSpeechTime ? "secondary.main" : "primary.main",
                                padding: "1rem", borderRadius: "20rem", border: "1px solid var(--primary)"
                            }}
                            fontSize="medium"
                        />
                    }
                    timeState={timeline.advisorSpeechTime}
                />

                <TimelineEvent
                    heading={heading}
                    title={"Title partner addressing the event"}
                    date={"Aug 20 | 3:00P M - 3:25 PM"}
                    icon={
                        <Title
                            sx={{
                                color: timeline.titlePartnerAddressingTime ? "secondary.main" : "primary.main",
                                padding: "1rem", borderRadius: "20rem", border: "1px solid var(--primary)"
                            }}
                            fontSize="medium"
                        />
                    }
                    timeState={timeline.titlePartnerAddressingTime}
                />

                <TimelineEvent
                    heading={heading}
                    title={"IX 23 Chairperson Addressing the event"}
                    date={"Aug 20 | 3:25 PM - 3:35 PM"}
                    icon={
                        <Person4
                            sx={{
                                color: timeline.ix23ChairpersonAddressingTime ? "secondary.main" : "primary.main",
                                padding: "1rem", borderRadius: "20rem", border: "1px solid var(--primary)"
                            }}
                            fontSize="medium"
                        />
                    }
                    timeState={timeline.ix23ChairpersonAddressingTime}
                />

                <TimelineEvent
                    heading={heading}
                    title={"Appreciating the judges"}
                    date={"Aug 20 | 3:35 PM - 3:45 PM"}
                    icon={
                        <Diversity3
                            sx={{
                                color: timeline.appreciatingTheJudgesTime ? "secondary.main" : "primary.main",
                                padding: "1rem", borderRadius: "20rem", border: "1px solid var(--primary)"
                            }}
                            fontSize="medium"
                        />
                    }
                    timeState={timeline.appreciatingTheJudgesTime}
                />

                <TimelineEvent
                    heading={heading}
                    title={"Awarding ceremony"}
                    date={"Aug 20 | 3:45 PM - 4:00 PM"}
                    icon={
                        <EmojiEvents
                            sx={{
                                color: timeline.awardingCeremonyTime ? "secondary.main" : "primary.main",
                                padding: "1rem", borderRadius: "20rem", border: "1px solid var(--primary)"
                            }}
                            fontSize="medium"
                        />
                    }
                    timeState={timeline.awardingCeremonyTime}
                />

                <TimelineEvent
                    heading={heading}
                    title={"Vote of thanks"}
                    date={"Aug 20 | 4:00 PM - 4:10 PM"}
                    icon={
                        <Light
                            sx={{
                                color: timeline.voteOfThanksTime ? "secondary.main" : "primary.main",
                                padding: "1rem", borderRadius: "20rem", border: "1px solid var(--primary)"
                            }}
                            fontSize="medium"
                        />
                    }
                    timeState={timeline.voteOfThanksTime}
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

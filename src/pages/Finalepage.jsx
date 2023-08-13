import Box from '@mui/material/Box';
import Resources from '../components/Resources';
import Rules from '../components/Rules';
import FinalHome from '../components/FinalHome';
import EventTimeline from '../components/EventTimeline';

export default function Finalepage() {
    return (
        <Box>
            <FinalHome />
            <Resources />
            <Rules />
            <EventTimeline />
        </Box>
    )
}
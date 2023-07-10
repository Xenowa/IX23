import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react"
import HomeIcon from '@mui/icons-material/Home';
import DrawIcon from '@mui/icons-material/Draw';
import ArticleIcon from '@mui/icons-material/Article';
import TimelineIcon from '@mui/icons-material/Timeline';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import SendIcon from '@mui/icons-material/Send';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Fab from "@mui/material/Fab"

export default function Dashboard() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [value, setValue] = useState(0);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const desktopNavDividerColor = "#2e3b15";

    return (
        <Box component="nav">
            <Fab
                color="secondary"
                variant="extended"
                onClick={handleDrawerToggle}
                size="large"
                sx={{
                    display: {
                        md: 'none'
                    },
                    position: "fixed",
                    bottom: "0",
                    right: "0",
                    marginBottom: "5rem",
                    marginRight: "2rem",
                    zIndex: "10000",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: "linear-gradient(0deg, rgba(255,255,255,10%) 0%, rgba(255,255,255,15%) 80%, rgba(255,255,255,20%) 100%)",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 2px 5px rgba(20, 20, 20, 70%)",
                    padding: "2rem",
                    visibility: (mobileOpen ? "hidden" : "visible")
                }}>
                <MenuIcon color="primary" />
            </Fab>

            {/* Mobile Navigation */}
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                sx={{
                    padding: "1rem",
                    borderRadius: "1rem",
                    bgcolor: "#00000050",
                    position: "fixed",
                    bottom: "0",
                    right: "0",
                    marginBottom: "1rem",
                    marginRight: "1rem",
                    width: "fit-content",
                    height: "fit-content",
                    zIndex: "100000",
                    display: {
                        xs: "flex",
                        md: "none"
                    },
                    visibility: (mobileOpen ? "visible" : "hidden"),
                    // transition: "all 300ms ease-in-out",
                    flexDirection: "column",
                    gap: "0.5rem",
                }}
            >

                <BottomNavigationAction LinkComponent="a" href="#home" label="Home" icon={<HomeIcon />} onClick={() => { setMobileOpen(false) }} />
                <Divider orientation="vertical" sx={{ bgcolor: "primary.main" }} />
                <BottomNavigationAction LinkComponent="a" href="#about" label="About" icon={<DrawIcon />} onClick={() => { setMobileOpen(false) }} />
                <Divider orientation="vertical" sx={{ bgcolor: "primary.main" }} />
                <BottomNavigationAction LinkComponent="a" href="#guidelines" label="Guidelines" icon={<ArticleIcon />} onClick={() => { setMobileOpen(false) }} />
                <Divider orientation="vertical" sx={{ bgcolor: "primary.main" }} />
                <BottomNavigationAction LinkComponent="a" href="#schedule" label="Schedule" icon={<TimelineIcon />} onClick={() => { setMobileOpen(false) }} />
                <Divider orientation="vertical" sx={{ bgcolor: "primary.main" }} />
                <BottomNavigationAction LinkComponent="a" href="#awards" label="Awards" icon={<EmojiEventsIcon />} onClick={() => { setMobileOpen(false) }} />
                <Divider orientation="vertical" sx={{ bgcolor: "primary.main" }} />
                <BottomNavigationAction LinkComponent="a" href="#partners" label="Partners" icon={<GroupsIcon />} onClick={() => { setMobileOpen(false) }} />
                <Divider orientation="vertical" sx={{ bgcolor: "primary.main" }} />
                <BottomNavigationAction LinkComponent="a" href="#register" label="Register" icon={<SendIcon />} onClick={() => { setMobileOpen(false) }} />
                <Divider orientation="vertical" sx={{ bgcolor: "primary.main" }} />
                <BottomNavigationAction LinkComponent="a" href="#contact" label="Contact" icon={<PermPhoneMsgIcon />} onClick={() => { setMobileOpen(false) }} />
            </BottomNavigation>

            {/* Desktop Navigation */}
            {/* bgcolor: "secondary.main", */}
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                sx={{
                    padding: "0.5rem",
                    borderRadius: "1rem",
                    bgcolor: "#00000050",
                    position: "fixed",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    margin: "0 auto",
                    marginBottom: "1.5rem",
                    width: "fit-content",
                    zIndex: "100",
                    display: {
                        xs: "none",
                        md: "flex"
                    },
                    border: "1px solid #1a2407",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 2px 5px rgba(0, 0, 0, 70%)",
                }}
            >

                <BottomNavigationAction LinkComponent="a" href="#home" label="Home" icon={<HomeIcon />} />
                <Divider orientation="vertical" sx={{ bgcolor: desktopNavDividerColor }} />
                <BottomNavigationAction LinkComponent="a" href="#about" label="About" icon={<DrawIcon />} />
                <Divider orientation="vertical" sx={{ bgcolor: desktopNavDividerColor }} />
                <BottomNavigationAction LinkComponent="a" href="#guidelines" label="Guidelines" icon={<ArticleIcon />} />
                <Divider orientation="vertical" sx={{ bgcolor: desktopNavDividerColor }} />
                <BottomNavigationAction LinkComponent="a" href="#schedule" label="Schedule" icon={<TimelineIcon />} />
                <Divider orientation="vertical" sx={{ bgcolor: desktopNavDividerColor }} />
                <BottomNavigationAction LinkComponent="a" href="#awards" label="Awards" icon={<EmojiEventsIcon />} />
                <Divider orientation="vertical" sx={{ bgcolor: desktopNavDividerColor }} />
                <BottomNavigationAction LinkComponent="a" href="#partners" label="Partners" icon={<GroupsIcon />} />
                <Divider orientation="vertical" sx={{ bgcolor: desktopNavDividerColor }} />
                <BottomNavigationAction LinkComponent="a" href="#register" label="Register" icon={<SendIcon />} />
                <Divider orientation="vertical" sx={{ bgcolor: desktopNavDividerColor }} />
                <BottomNavigationAction LinkComponent="a" href="#contact" label="Contact" icon={<PermPhoneMsgIcon />} />
            </BottomNavigation>
        </Box>
    )
}

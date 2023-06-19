import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';
import { useState } from 'react';
import { Link } from '@mui/material';


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [anchorElem, setAnchorElem] = useState(null);


    const handleClick = (event) => {
        setAnchorElem(event.currentTarget)
        setMenuOpen(true)
    }

    const handleClose = () => {
        setAnchorElem(null)
        setMenuOpen(false)
    }

    return (
        <AppBar position="sticky" sx={{ zIndex: "1" }}>
            <Toolbar sx={{ bgcolor: "secondaryLight.main" }}>
                <IconButton
                    size="large"
                    edge="start"
                    color="primary"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                    onClick={handleClick}
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    anchorEl={anchorElem} // Set up element for menu to attach to
                    open={menuOpen}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                        <Link color="inherit" underline="none" href="https://www.instagram.com/designix.iit" target="_blank" sx={{ display: "flex" }}>
                            <ListItemIcon>
                                <Instagram sx={{ color: "primary.main" }} fontSize="medium" />
                            </ListItemIcon>

                            <ListItemText>
                                IX 23 Instagram
                            </ListItemText>
                        </Link>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                        <Link color="inherit" underline="none" href="https://web.facebook.com/people/IX-23/100093309528840/" target="_blank" sx={{ display: "flex" }}>
                            <ListItemIcon>
                                <Facebook sx={{ color: "primary.main" }} fontSize="medium" />
                            </ListItemIcon>

                            <ListItemText>
                                IX 23 Facebook
                            </ListItemText>
                        </Link>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                        <Link color="inherit" underline="none" href="https://www.linkedin.com/company/ix-23/" target="_blank" sx={{ display: "flex" }}>
                            <ListItemIcon>
                                <LinkedIn sx={{ color: "primary.main" }} fontSize="medium" />
                            </ListItemIcon>

                            <ListItemText>
                                IX 23 LinkedIn
                            </ListItemText>
                        </Link>
                    </MenuItem>
                </Menu>
                <Box sx={{ flexGrow: 1 }} />
                <Link color="inherit" underline="none" href="#home">
                    <IconButton
                        size="large"
                        edge="end"
                        color="primary"
                    >
                        <HomeIcon />
                    </IconButton>
                </Link>
            </Toolbar>
        </AppBar>
    );
}
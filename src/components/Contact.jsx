import Box from "@mui/material/Box"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Person } from "@mui/icons-material";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import tharana from "../assets/Tharana.jpg"
import sanuda from "../assets/Sanuda.jpg"
import amirah from "../assets/Amirah.jpg"
import budwin from "../assets/Budwin.jpg"
import lahiru from "../assets/Lahiru.jpg"
import ishan from "../assets/Ishan.jpg"
import lahini from "../assets/Lahini.jpg"
import { useContext, useEffect, useState } from "react";
import useElementVisibility from "../hooks/ElementVisibility";
import VisibilityContext from "../context/Visibility";

export default function Contact() {
    // Set visible element context
    const [isVisible, setIsVisible] = useState();
    const [containerRef] = useElementVisibility(setIsVisible);
    const {setVisibleElement} = useContext(VisibilityContext);

    useEffect(() => {
        if (isVisible) setVisibleElement("contact");
    }, [isVisible])

    return (
        <div ref={containerRef}>
        <Box sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            bgcolor: "secondary.main",
            paddingBottom: "1rem"
        }} id="contact">
            <Typography component="h1" variant="h1" fontWeight="bold" marginTop="1rem" textAlign="center">
                Contact <Typography color="primary" component="span" variant="span">Us</Typography>
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
                <Card sx={{
                    width: "20rem",
                    height: "100%",
                    bgcolor: "secondaryLight.main",
                    textAlign: "center"
                }}>
                    <img
                        style={{ height: "15rem", width: "100%", objectFit: "cover", objectPosition: "top" }}
                        src={tharana}
                        title="Tharana Wanigaratne"
                    />
                    <CardContent>
                        <Typography gutterBottom color="primary" variant="h5" component="h5" fontWeight="bold">
                            Project <br />
                            Chair
                        </Typography>

                        <Table>
                            <TableBody >
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <Person fontSize="large" color="primary" />
                                    </TableCell>
                                    <TableCell align="right">
                                        Tharana Wanigaratne
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <EmailIcon fontSize="large" color="primary" />
                                    </TableCell>
                                    <TableCell align="right">
                                        tharana.20210597@iit.ac.lk
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" sx={{ borderBottom: "none" }}>
                                        <LocalPhoneIcon fontSize="large" color="primary" />
                                    </TableCell>
                                    <TableCell align="right" sx={{ borderBottom: "none" }}>
                                        +94 774 627 878
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem", maxWidth: "70rem" }}>
                <Card sx={{
                    width: "20rem",
                    height: "100%",
                    bgcolor: "secondaryLight.main",
                    color: "primary.main",
                    textAlign: "center"
                }}>
                    <img
                        style={{ height: "15rem", width: "100%", objectFit: "cover", objectPosition: "50% 15%" }}
                        src={sanuda}
                        title="Sanuda Kannangara"
                    />
                    <CardContent>
                        <Typography gutterBottom color="primary" variant="h5" component="h5" fontWeight="bold">
                            Program & Logistics <br />
                            Co-Chair
                        </Typography>

                        <Table>
                            <TableBody >
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <Person fontSize="large" color="primary" />
                                    </TableCell>
                                    <TableCell align="right">
                                        Sanuda Kannangara
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <EmailIcon fontSize="large" color="primary" />
                                    </TableCell>
                                    <TableCell align="right">
                                        sanuda.20220158@iit.ac.lk
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" sx={{ borderBottom: "none" }}>
                                        <LocalPhoneIcon fontSize="large" color="primary" />
                                    </TableCell>
                                    <TableCell align="right" sx={{ borderBottom: "none" }}>
                                        +94 776 024 440
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                <Card sx={{
                    width: "20rem",
                    height: "100%",
                    bgcolor: "secondaryLight.main",
                    textAlign: "center"
                }}>
                    <img
                        style={{ height: "15rem", width: "100%", objectFit: "cover", objectPosition: "50% 45%" }}
                        src={amirah}
                        title="Amirah Razmin"
                    />
                    <CardContent>
                        <Typography gutterBottom color="primary" variant="h5" component="h5" fontWeight="bold">
                            Industry Outreach & Finance <br />
                            Co-Chair
                        </Typography>

                        <Table>
                            <TableBody >
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <Person fontSize="large" color="primary" />
                                    </TableCell>
                                    <TableCell align="right">
                                        Amirah Rasmin
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <EmailIcon fontSize="large" color="primary" />
                                    </TableCell>
                                    <TableCell align="right">
                                        amirah.20221427@iit.ac.lk
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" sx={{ borderBottom: "none" }}>
                                        <LocalPhoneIcon fontSize="large" color="primary" />
                                    </TableCell>
                                    <TableCell align="right" sx={{ borderBottom: "none" }}>
                                        +94 779 245 954
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                <Card sx={{
                    width: "20rem",
                    height: "100%",
                    bgcolor: "secondaryLight.main",
                    textAlign: "center"
                }}>
                    <img
                        style={{ height: "15rem", width: "100%", objectFit: "cover", objectPosition: "top" }}
                        src={budwin}
                        title="Budwin De Saram"
                    />
                    <CardContent>
                        <Typography gutterBottom color="primary" variant="h5" component="h5" fontWeight="bold">
                            Publicity & Visibility <br />
                            Co-Chair
                        </Typography>

                        <Table>
                            <TableBody >
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <Person fontSize="large" color="primary" />
                                    </TableCell>
                                    <TableCell align="right">
                                        Budwin De Saram
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <EmailIcon fontSize="large" color="primary" />
                                    </TableCell>
                                    <TableCell align="right">
                                        dinura.20210387@iit.ac.lk
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" sx={{ borderBottom: "none" }}>
                                        <LocalPhoneIcon fontSize="large" color="primary" />
                                    </TableCell>
                                    <TableCell align="right" sx={{ borderBottom: "none" }}>
                                        +94 717 967 534
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                <Card sx={{
                    width: "20rem",
                    height: "100%",
                    bgcolor: "secondaryLight.main",
                    textAlign: "center"
                }}>
                    <img
                        style={{ height: "15rem", width: "100%", objectFit: "cover", objectPosition: "50% 20%" }}
                        src={lahiru}
                        title="Lahiru Viraj"
                    />
                    <CardContent>
                        <Typography gutterBottom color="primary" variant="h5" component="h5" fontWeight="bold">
                            Designing & Content <br />
                            Co-Chair
                        </Typography>

                        <Table>
                            <TableBody >
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <Person fontSize="large" color="primary" />
                                    </TableCell>
                                    <TableCell align="right">
                                        Lahiru Viraj
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <EmailIcon fontSize="large" color="primary" />
                                    </TableCell>
                                    <TableCell align="right">
                                        lahiru.20210329@iit.ac.lk
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" sx={{ borderBottom: "none" }}>
                                        <LocalPhoneIcon fontSize="large" color="primary" />
                                    </TableCell>
                                    <TableCell align="right" sx={{ borderBottom: "none" }}>
                                        +94 704 280 006
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                <Card sx={{
                    width: "20rem",
                    height: "100%",
                    bgcolor: "secondaryLight.main",
                    textAlign: "center"
                }}>
                    <img
                        style={{ height: "15rem", width: "100%", objectFit: "cover", objectPosition: "top" }}
                        src={ishan}
                        title="Ishan Emalsha"
                    />
                    <CardContent>
                        <Typography gutterBottom color="primary" variant="h5" component="h5" fontWeight="bold">
                            Designing & Content <br />
                            Co-Chair
                        </Typography>

                        <Table>
                            <TableBody >
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <Person fontSize="large" color="primary" />
                                    </TableCell>
                                    <TableCell align="right">
                                        Ishan Emalsha
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <EmailIcon fontSize="large" color="primary" />
                                    </TableCell>
                                    <TableCell align="right">
                                        ishan.20210036@iit.ac.lk
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" sx={{ borderBottom: "none" }}>
                                        <LocalPhoneIcon fontSize="large" color="primary" />
                                    </TableCell>
                                    <TableCell align="right" sx={{ borderBottom: "none" }}>
                                        +94 775 512 949
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                <Card sx={{
                    width: "20rem",
                    height: "100%",
                    bgcolor: "secondaryLight.main",
                    textAlign: "center"
                }}>
                    <img
                        style={{ height: "15rem", width: "100%", objectFit: "cover", objectPosition: "top" }}
                        src={lahini}
                        title="Lahini Balasooriya"
                    />
                    <CardContent>
                        <Typography gutterBottom color="primary" variant="h5" component="h5" fontWeight="bold">
                            Secretarial <br />
                            Co-Chair
                        </Typography>

                        <Table>
                            <TableBody >
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <Person fontSize="large" color="primary" />
                                    </TableCell>
                                    <TableCell align="right">
                                        Lahini Balasooriya
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <EmailIcon fontSize="large" color="primary" />
                                    </TableCell>
                                    <TableCell align="right">
                                        lahini.20210277@iit.ac.lk
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" sx={{ borderBottom: "none" }}>
                                        <LocalPhoneIcon fontSize="large" color="primary" />
                                    </TableCell>
                                    <TableCell align="right" sx={{ borderBottom: "none" }}>
                                        +94 752 142 592
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </Box>
        </Box>
        </div>
    )
}

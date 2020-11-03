import React, { useEffect, useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logoutUser } from "../../actions/authActions";

import {
    makeStyles,
    CssBaseline,
    Drawer,
    Box,
    AppBar,
    Toolbar,
    List,
    Typography,
    Divider,
    IconButton,
    Container,
    Grid,
    Paper,
    Link,
} from "@material-ui/core";

import { Menu, ChevronLeft } from "@material-ui/icons";

import { mainListItems } from "./components/listItems";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './components/Title';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import axios from 'axios'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://material-ui.com/">
                Portfolio Management System
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: "none",
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: "flex",
        overflow: "auto",
        flexDirection: "column",
    },
    fixedHeight: {
        height: 240,
    },
    seeMore: {
        marginTop: theme.spacing(3),
        textAlign: "center"
    },
}));

function Dashboard(props) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(true);
    const [portData, setPortData] = useState([]);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const getPortData = () => {
        axios.get("/api/portdata")
            .then((response) => {
                setPortData(response.data)
                console.log("data recieved")
                console.log(response.data)
            })
            .catch(() => {
                alert("error recieving data")
            })
    }

    useEffect(() => {
        getPortData();
    }, [])

    const onLogoutClick = (e) => {
        e.preventDefault();
        props.logoutUser();
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="absolute"
                className={clsx(classes.appBar, open && classes.appBarShift)}
            >
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(
                            classes.menuButton,
                            open && classes.menuButtonHidden
                        )}
                    >
                        <Menu />
                    </IconButton>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        className={classes.title}
                    >
                        Dashboard
                    </Typography>
                    <IconButton color="inherit">
                        <Typography
                            component="h1"
                            variant="h6"
                            noWrap
                            className={classes.title}
                        >
                            <Link
                                onClick={onLogoutClick}
                                className={classes.logoutBtn}
                                to="/login"
                                color="inherit"
                            >
                                Logout
                            </Link>
                        </Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(
                        classes.drawerPaper,
                        !open && classes.drawerPaperClose
                    ),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeft />
                    </IconButton>
                </div>
                <Divider />
                <List>{mainListItems}</List>
                <Divider />
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        {/* Recent Posts */}
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <React.Fragment>
                                    <Title>View Projects</Title>
                                    <Table size="small">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell><Typography fontWeight="fontWeightBold" m={1}>Project Name</Typography></TableCell>
                                                <TableCell><Typography fontWeight="fontWeightBold" m={1}>Description</Typography></TableCell>
                                                <TableCell><Typography fontWeight="fontWeightBold" m={1}>Alternate Tag</Typography></TableCell>
                                                <TableCell><Typography fontWeight="fontWeightBold" m={1}>Actions</Typography></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {portData.slice(0, 5).map((project) => (
                                                <TableRow key={project._id}>
                                                    <TableCell>{project.title}</TableCell>
                                                    <TableCell>{project.description}</TableCell>
                                                    <TableCell>{project.altTag}</TableCell>
                                                    <TableCell><EditIcon color="secondary" /><DeleteForeverIcon color="error" /></TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                    <div className={classes.seeMore}>
                                        1 - 5 of {portData.length}<br />
                                        <Link color="primary" href="/dashboard/projects/viewall">
                                            See all {portData.length} records
                                        </Link>
                                    </div>
                                </React.Fragment>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>
    );
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);

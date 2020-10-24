import React from 'react';
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MdMenu, MdExitToApp } from 'react-icons/md';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    palette: {
        
    },
    logoutBtn: {
        color: "#ffffff",
        textDecoration: "none",
        fontSize: "24px",
        marginTop: "3px"
    },
    navColor: {
        backgroundColor: "#163172",
        color: "#ffffff"
    }
}));

function Navbar(props) {
        
    const classes = useStyles();
    
    return (
        <AppBar className={classes.navColor} position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MdMenu/>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Welcome, {props.name}
                </Typography>
                <Link onClick={props.btnAction} className={classes.logoutBtn} to="/login"><MdExitToApp /></Link>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar
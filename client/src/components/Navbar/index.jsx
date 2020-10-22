import React from 'react';
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MdMenu } from 'react-icons/md';

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
        
    }
}));

function Navbar(props) {
        
    const classes = useStyles();
    
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MdMenu/>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Welcome, {props.name}
                </Typography>
                <Button edge="end" variant="contained" onClick={props.btnAction} color="inherit"><Link to="/login">Log Out</Link></Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Navbar from "../../components/Navbar";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
}));

function FullWidthGrid(props, settingData) {

    const [portData, setPortData] = useState([]);
    const [settings, setSettings] = useState([])

    useEffect(() => {
        getPortData();
        getPortSettings();
    }, []);

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

    const getPortSettings = () => {
        axios.get("/api/settings")
            .then((response) => {
                setSettings(response.data[0])
                console.log("settings recieved")
                console.log(response.data[0])
            })
            .catch(() => {
                alert("error recieving settings")
            })
    }

    const classes = useStyles();

    return (
        <React.Fragment>
            <Navbar name={settings.portName}/>
            <div className={classes.root} style={{ paddingTop: 10 }}>
                <Grid container spacing={3}>
                    <Grid item md={6}>
                        <Paper className={classes.paper}>
                            Image for Portfolio & Social Links{" "}
                        </Paper>
                    </Grid>
                    <Grid item md={6}>
                        <Paper className={classes.paper}> About Projects</Paper>
                    </Grid>
                    {portData.map((project) => {
                        return (
                            <Grid key={project._id} item xs={12} sm={6}>
                                <Paper className={classes.paper}>
                                    <a className="App 1" target="_blank" href={project.deployedLink}>
                                        {project.title}
                                    </a>
                                    <p>
                                        {project.description}
                                    </p>
                                    <a target="_blank" href={project.deployedLink}>View Deployed Application</a>
                                    {" "}
                                    <a target="_blank" href={project.repoLink}>View Repository for App</a>
                                </Paper>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        </React.Fragment>
    );
}

export default FullWidthGrid;

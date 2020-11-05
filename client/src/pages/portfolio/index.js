import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Navbar from "../../components/Navbar";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        marginLeft: 25,
        marginRight: 25
    },
    card: {
    marginLeft: 25,
   marginRight: 25,
   textAlign: "center"
}
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
            })
            .catch(() => {
                alert("error recieving data")
            })
    }

    const getPortSettings = () => {
        axios.get("/api/settings")
            .then((response) => {
                setSettings(response.data[0])
            })
            .catch(() => {
                alert("error recieving settings")
            })
    }

    const classes = useStyles();

    return (
        <React.Fragment>
            <Navbar name={settings.portName} linkedinLink={settings.linkedinLink} githubLink={settings.githubLink} />
            <div className={classes.root} style={{ paddingTop: 10 }}>
                <Grid container spacing={3}>
                    <Grid item md={12}>
                    <Card className={classes.card}>
                
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Name
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This about me/about portfolio will update.
          </Typography>
        </CardContent>
    </Card>
    </Grid>
    

                    {portData.map((project) => {
                        return (
                            <Grid key={project._id} item xs={12} sm={6}>
                                <Paper className={classes.paper}>
                                    <a rel="noopener noreferrer" target="_blank" href={project.deployedLink}>
                                        {project.title}
                                    </a>
                                    <p>
                                        {project.image}
                                    </p>
                                    <p>
                                        {project.description}
                                    </p>
                                    <a target="_blank" rel="noopener noreferrer" href={project.deployedLink}>View Deployed Application</a>
                                    {" "}
                                    <a target="_blank" rel="noopener noreferrer" href={project.repoLink}>View Repository for App</a>
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

import React, { useEffect } from "react";
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

// const getPortData = () => {
//     axios.get("/api/portdata")
//         .then((response) => {
//             const data = response.data
//             console.log("data recieved")
//         })
//         .catch(() => {
//             alert("error recieving data")
//         })
// }

function FullWidthGrid() {
    // useEffect(() => {
    //     getPortData()
    // });
    const classes = useStyles();

    return (
        <React.Fragment>
            <Navbar />
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
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            {" "}
                            <a className="App 1" href="/">
                                {" "}
                                App 1{" "}
                            </a>{" "}
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            <a className="App 1" href="/">
                                {" "}
                                App 2{" "}
                            </a>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            <a className="App 1" href="/">
                                {" "}
                                App 3{" "}
                            </a>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            <a className="App 1" href="/">
                                {" "}
                                App 4{" "}
                            </a>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            <a className="App 1" href="/">
                                {" "}
                                App 5{" "}
                            </a>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            <a className="App 1" href="/">
                                {" "}
                                App 6{" "}
                            </a>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}

export default FullWidthGrid;

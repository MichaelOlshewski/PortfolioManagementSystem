import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
    textAlign: "center"
  },
}));

function ViewPosts(props) {

  const [portData, setPortData] = useState([]);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const classes = useStyles();
  return (
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
          {portData.map((project) => (
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
        Showing all {portData.length} records
      </div>
    </React.Fragment>
  );
}

export default ViewPosts
import React, { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

function ViewPosts() {

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
      <Title>View Posts</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell><Typography fontWeight="fontWeightBold" m={1}>Date</Typography></TableCell>
            <TableCell><Typography fontWeight="fontWeightBold" m={1}>Post Title</Typography></TableCell>
            <TableCell><Typography fontWeight="fontWeightBold" m={1}>Author</Typography></TableCell>
            <TableCell><Typography fontWeight="fontWeightBold" m={1}>Actions</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {portData.map((project) => (
            <TableRow key={project._id}>
              <TableCell>{project.title}</TableCell>
              <TableCell>{project.description}</TableCell>
              <TableCell>{project.altTag}</TableCell>
              <TableCell><EditIcon color="primary" /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more posts
        </Link>
      </div>
    </React.Fragment>
  );
}

export default ViewPosts
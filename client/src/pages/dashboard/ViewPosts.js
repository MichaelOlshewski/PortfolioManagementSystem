import React from 'react';
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

// Generate View Posts Data
function createData(id, date, title, author) {
  return { id, date, title, author };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Alex Portfolio', 'Alex Fuss'),
  createData(1, '17 Mar, 2019', 'Michael Portfolio','Michael Olshewski'),
  createData(2, '18 Mar, 2019', 'Allison Portfolio', 'Allison Barnard'),
  createData(3, '19 Mar, 2019', 'George Portfolio', 'George Blake'),
  createData(4, '15 Mar, 2019', 'Aaron Portfolio', 'Aaron Holcomb'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function ViewPosts() {
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
            <TableCell><Typography fontWeight="fontWeightBold" m={1}>Edit</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.author}</TableCell>
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
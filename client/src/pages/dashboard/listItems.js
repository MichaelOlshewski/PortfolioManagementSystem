import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CompassCalibrationIcon from '@material-ui/icons/CompassCalibration';
import PersonPinIcon from '@material-ui/icons/PersonPin';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
      <Link to="/dashboard/orders">
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="View All Posts" />
    </ListItem>
      </Link>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Create New" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CompassCalibrationIcon />
      </ListItemIcon>
      <ListItemText primary="Plugins" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PersonPinIcon />
      </ListItemIcon>
      <ListItemText primary="View Portfolio" />
    </ListItem>
  </div>
);

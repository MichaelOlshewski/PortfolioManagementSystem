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
import SettingsIcon from '@material-ui/icons/Settings';

export const mainListItems = (
  <div>
    <Link to="/dashboard">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>
    <Link to="/dashboard/projects/viewall">
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="View Projects" />
      </ListItem>
    </Link>
    <Link to="/dashboard/projects/new">
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Add Project" />
      </ListItem>
    </Link>
    <Link to="/dashboard/settings">
      <ListItem button>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </Link>
    <hr />
    <Link to="/" target="_blank">
      <ListItem button>
        <ListItemIcon>
          <PersonPinIcon />
        </ListItemIcon>
        <ListItemText primary="View Portfolio" />
      </ListItem>
    </Link>
  </div>
);

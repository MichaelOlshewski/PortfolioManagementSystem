import React from "react";
import { Link } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import {
    Dashboard,
    BarChart,
    Assignment,
    PersonPin,
    Settings,
} from "@material-ui/icons";

export const mainListItems = (
    <div>
        <Link to="/dashboard">
            <ListItem button>
                <ListItemIcon>
                    <Dashboard />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
        </Link>
        <Link to="/dashboard/projects/viewall">
            <ListItem button>
                <ListItemIcon>
                    <Assignment />
                </ListItemIcon>
                <ListItemText primary="View Projects" />
            </ListItem>
        </Link>
        <Link to="/dashboard/projects/new">
            <ListItem button>
                <ListItemIcon>
                    <BarChart />
                </ListItemIcon>
                <ListItemText primary="Add Project" />
            </ListItem>
        </Link>
        <Link to="/dashboard/settings">
            <ListItem button>
                <ListItemIcon>
                    <Settings />
                </ListItemIcon>
                <ListItemText primary="Settings" />
            </ListItem>
        </Link>
        <hr />
        <Link to="/" target="_blank">
            <ListItem button>
                <ListItemIcon>
                    <PersonPin />
                </ListItemIcon>
                <ListItemText primary="View Portfolio" />
            </ListItem>
        </Link>
    </div>
);

import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import ForumIcon from "@material-ui/icons/Forum";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import SchoolIcon from "@material-ui/icons/School";
import AlunoComponent from "../aluno/AlunoComponent";
import Link from "@material-ui/core/Link";

export const mainListItems = (
  <div>
    <Link href="/" color="inherit">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>
    <Link href="/alunos" color="inherit">
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Alunos" />
      </ListItem>
    </Link>
    <Link href="/mentores" color="inherit">
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Mentores" />
      </ListItem>
    </Link>
    <ListItem button>
      <ListItemIcon>
        <ForumIcon />
      </ListItemIcon>
      <ListItemText primary="Mentorias" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Projetos" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SchoolIcon />
      </ListItemIcon>
      <ListItemText primary="Disciplinas" />
    </ListItem>
  </div>
);



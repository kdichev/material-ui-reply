import React from "react";
import ReactDOM from "react-dom";
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import EditIcon from "@material-ui/icons/Edit";
import StarIcon from "@material-ui/icons/Star";
import SendIcon from "@material-ui/icons/Send";
import MiniDrawer from "./MiniDrawer";

import "./styles.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#4a6572",
      main: "#344955",
      dark: "#232f34"
    },
    secondary: {
      main: "#f9aa33"
    }
  },
  typography: {
    fontFamily: "Work Sans, sans-serif",
    display4: { fontWeight: 200 },
    display3: { fontWeight: "semi-bold" },
    display2: {},
    display1: {},
    headline: {},
    title: {},
    subheading: {},
    body2: {},
    body1: {},
    caption: {},
    button: {}
  }
});

const Navigation = withStyles(theme => ({
  drawerPaper: {
    position: "relative",
    backgroundColor: theme.palette.primary.main,
    width: theme.spacing.unit * 9,
    [theme.breakpoints.up("md")]: {
      width: 240
    }
  },
  docked: { height: "100%" }
}))(({ classes, ...props }) => {
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
        docked: classes.docked
      }}
      {...props}
    />
  );
});

const App = props => (
  <div style={{ height: "100vh" }}>
    <MiniDrawer>
      {({ isDrawerOpen, toggleDrawer }) => {
        return (
          <React.Fragment>
            <div>
              <IconButton onClick={toggleDrawer}>
                {isDrawerOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>
            <Button
              color="secondary"
              variant={isDrawerOpen ? "extendedFab" : "fab"}
            >
              <EditIcon /> {isDrawerOpen && `Compose`}
            </Button>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Send mail" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItem>
            </List>
          </React.Fragment>
        );
      }}
    </MiniDrawer>
  </div>
);

function Root() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { withStateHandlers, compose } from "recompose";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "100%",
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex"
  },
  drawerPaper: {
    backgroundColor: theme.palette.primary.main,
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    backgroundColor: theme.palette.primary.main,
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  }
});

const MiniDrawer = ({ classes, isDrawerOpen, toggleDrawer, children }) => (
  <div className={classes.root}>
    <Drawer
      variant="permanent"
      classes={{
        paper: classNames(
          classes.drawerPaper,
          !isDrawerOpen && classes.drawerPaperClose
        )
      }}
      open={isDrawerOpen}
    >
      {children({
        isDrawerOpen,
        toggleDrawer
      })}
    </Drawer>
  </div>
);

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired
};

export default compose(
  withStyles(styles),
  withStateHandlers(() => ({ isDrawerOpen: false }), {
    toggleDrawer: ({ isDrawerOpen }) => () => ({ isDrawerOpen: !isDrawerOpen })
  })
)(MiniDrawer);

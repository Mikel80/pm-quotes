import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import AppTopBar from "./components/AppTopBar";
import SideDrawer from "./components/SideDrawer";
import "./App.css";
const Calculator = lazy(() => import("./pages/Calculator"));
const Home = lazy(() => import("./pages/Home"));
const PlayGround = lazy(() => import("./pages/PlayGround"));

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Router>
        <AppTopBar open={open} handleDrawerOpen={handleDrawerOpen} />
        <SideDrawer open={open} handleDrawerClose={handleDrawerClose} />
        <Suspense fallback={<div>Loading...</div>}>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
              <Route path="/calculator">
                <Calculator />
              </Route>
              <Route path="/playground">
                <PlayGround />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </main>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

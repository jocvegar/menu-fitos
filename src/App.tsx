import React, { useEffect } from "react";
import Itemlist from "./components/ItemList";
import logo from "./assets/images/logo.png";
// styles
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.scss";
import "./assets/styles/utilities.css";

const drawerWidth = 240;

const theme = createMuiTheme({
  typography: {
    fontFamily: ["MYRIADPRO", "Helvetica Neue", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#de5200",
    },
    secondary: {
      main: "#ff9d2d",
    },
  },
});

const cardStyles = makeStyles({
  root: {
    maxWidth: 345,
    borderRadius: "1rem",
    margin: "0 auto",
  },
  main: {
    display: "flex",
  },
  media: {
    height: 300,
  },
  logo: {
    height: 150,
  },
  navLogo: {
    height: 50,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    overflow: "hidden",
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "whitesmoke",
    borderRight: "none",
  },
  content: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "whitesmoke",
  },
});

function App() {
  const classes = cardStyles();

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      <div className={`${classes.main} App`}>
        <ThemeProvider theme={theme}>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <img src={logo} className={classes.navLogo} alt="logo" />
            </Toolbar>
          </AppBar>

          <Hidden mdDown>
            <Drawer
              className={classes.drawer}
              variant="permanent"
              classes={{
                paper: classes.drawerPaper,
              }}
              anchor="left">
              <List style={{ marginTop: "12em" }}>
                {["Entradas", "Burgers", "Sandwiches", "Combos"].map((text) => (
                  <ListItem button key={text} style={{ textAlign: "end" }}>
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="h4"
                            color="primary">
                            {text}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </Hidden>

          <main className={`${classes.content} pa-0 pa-md-8`}>
            <Container fixed maxWidth="md">
              <Box mt={10} mb={5} style={{ textAlign: "center" }}>
                <Typography component="span" variant="h3">
                  MENU
                </Typography>
              </Box>
            </Container>
            <Itemlist />
          </main>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;

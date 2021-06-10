import { useEffect } from "react";
import Itemlist from "./components/ItemList";
import img from "./assets/images/chicken_blue_cheese.jpg";
import logo from "./assets/images/logo.png";
// styles
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.scss";

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
  media: {
    height: 300,
  },
  logo: {
    height: 150,
  },
});

function App() {
  const cardClasses = cardStyles();

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container fixed maxWidth="md">
          <Box mt={3} mb={3} style={{ textAlign: "center" }}>
            <img src={logo} className={cardClasses.logo} alt="logo" />
            <Grid container spacing={3} alignItems="center" justify="center">
              <Grid item xs={12}>
                <Typography
                  style={{ fontWeight: 800 }}
                  align="center"
                  variant="h4"
                  gutterBottom>
                  MENU
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Box px={1} mx="auto" data-aos="fade-down" data-aos-delay="200">
                  <Card className={cardClasses.root}>
                    <CardActionArea>
                      <CardMedia
                        className={cardClasses.media}
                        component="img"
                        alt="fitos"
                        image={img}
                      />
                    </CardActionArea>
                  </Card>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Itemlist />
      </ThemeProvider>
    </div>
  );
}

export default App;

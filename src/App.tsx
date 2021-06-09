import { useEffect } from "react";
import img from "./assets/images/chicken_blue_cheese.jpg";
import logo from "./assets/images/logo.png";
import ItemCard from "./components/ItemCard";
// styles
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
// import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.scss";

// const theme = createMuiTheme();

// theme.typography.h2 = {
//   fontSize: "2rem",
//   "@media (min-width:600px)": {
//     fontSize: "2.3",
//   },
//   [theme.breakpoints.up("md")]: {
//     fontSize: "3rem",
//   },
// };

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
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <div className="App">
      <Container fixed maxWidth="md">
        <Box mt={6} mb={6} style={{ textAlign: "center" }}>
          <img src={logo} className={cardClasses.logo} alt="logo" />
          <Grid container spacing={3} alignItems="center" justify="center">
            <Grid item xs={12}>
              <Typography
                style={{ fontWeight: 800 }}
                align="center"
                variant="h4"
                gutterBottom>
                Coming Soon!
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
      {/* <Box style={{ display: "flex", justifyContent: "center" }}>
        <ItemCard />
      </Box> */}

      <Grid container spacing={isSmall ? 0 : 4}>
        <Grid item xs={12} md={4} key={1}>
          <ItemCard title="Card 1" />
        </Grid>
        <Grid item xs={12} md={4} key={2}>
          <ItemCard title="Card 2" />
        </Grid>
        <Grid item xs={12} md={4} key={3}>
          <ItemCard title="Card 3" />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

import img from "./assets/images/chicken_blue_cheese.jpg";
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
import "./App.scss";

const theme = createMuiTheme();

theme.typography.h2 = {
  fontSize: "2rem",
  "@media (min-width:600px)": {
    fontSize: "2.3",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
};

const cardStyles = makeStyles({
  root: {
    maxWidth: 345,
    borderRadius: "1rem",
    margin: "0 auto",
  },
  media: {
    height: 300,
  },
});

function App() {
  const cardClasses = cardStyles();

  return (
    <div className="App">
      <Container fixed maxWidth="md">
        <Box mt={6} mb={6}>
          <ThemeProvider theme={theme}>
            <Typography align="center" variant="h2" gutterBottom>
              FITOS
            </Typography>
          </ThemeProvider>
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
              <Box px={1} mx="auto">
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
    </div>
  );
}

export default App;

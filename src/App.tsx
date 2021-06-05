// styles
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Container fixed>
        <Box mt={2}>
          <Typography align="center" variant="h2">
            FITOS
          </Typography>
        </Box>
      </Container>
    </div>
  );
}

export default App;

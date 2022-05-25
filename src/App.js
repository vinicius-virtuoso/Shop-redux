import { Grid } from "@chakra-ui/react";
import Header from "./components/Header";
import Rotas from "./routes";

function App() {
  return (
    <Grid
      bg="gray.800"
      minH="100vh"
      gridAutoRows={["80px 1fr", "80px 1fr", "96px 1fr"]}
    >
      <Header />
      <Rotas />
    </Grid>
  );
}

export default App;

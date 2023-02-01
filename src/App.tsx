import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import SwapiContainer from "./components/SwapiContainer";
import SwapiPlanet from "./components/SwapiPlanet";
import empire_movie from "../src/data/empire_movie.json";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

// Should we need to resolve MUI theme typing issues we can extend the existing interface
declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    type?: string;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
    fontSize: 14,
    h1: {
      fontFamily: "Roboto",
      fontSize: 18,
    },
  },
  palette: {
    mode: "dark",
    type: "custom", // the custom type value we extended above
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

const queryClient = new QueryClient({});

function App() {
  // We can use useTheme to determine the existing theme values
  const entireTheme = useTheme();
  console.dir(entireTheme);
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <div className="App">
          <SwapiPlanet planet={empire_movie} />
          <SwapiContainer />
        </div>
        {/* <ReactQueryDevtools initialIsOpen={true} /> */}
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

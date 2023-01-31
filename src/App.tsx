import './App.css';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import SwapiContainer from './components/SwapiContainer'
import SwapiPlanet from './components/SwapiPlanet';
import empire_movie from '../src/data/empire_movie.json'
const queryClient = new QueryClient({})

// const mockedData = 
function App() {
  return (
      <QueryClientProvider client={queryClient}>

      
    <div className="App">
        <SwapiPlanet planet={empire_movie} />
      <SwapiContainer />
    </div>
    {/* <ReactQueryDevtools initialIsOpen={true} /> */}
    </QueryClientProvider>
  );
}

export default App;

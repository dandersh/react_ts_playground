import React from 'react';
import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import SwapiContainer from './components/SwapiContainer'

const queryClient = new QueryClient({})
function App() {
  return (
      <QueryClientProvider client={queryClient}>

      
    <div className="App">
      <SwapiContainer />
    </div>
    {/* <ReactQueryDevtools initialIsOpen={true} /> */}
    </QueryClientProvider>
  );
}

export default App;

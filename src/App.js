import './App.scss'
import Router from './Router/router';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
    <div className="App">
     <Router />
    </div>
    </ChakraProvider>
  );
}

export default App;

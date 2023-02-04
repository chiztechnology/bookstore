import Bookstore from './components/Bookstore';
import './App.css'
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Bookstore />
    </MantineProvider>
  );
}

export default App;

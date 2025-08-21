// src/index.js (or wherever your ChakraProvider is used)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { system } from './theme'; // Updated import to use named export 'system'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider value={system}> {/* Use 'value' prop with 'system' */}
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from "react-redux";
import { store, persistedStore } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from "react-router-dom";
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
          <BrowserRouter basename="/goit-react-hw-08-phonebook1" >
      <App />
        </BrowserRouter>
        </PersistGate>
      </Provider>
      </ChakraProvider>
  </React.StrictMode>
);

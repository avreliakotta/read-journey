import React from 'react';
import ReactDOM from "react-dom/client";
import {store,persistor} from "./redux/store";

import { BrowserRouter } from "react-router-dom";
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter basename='/read-journey'>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)

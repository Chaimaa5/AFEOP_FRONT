// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import 'leaflet/dist/leaflet.css';

// import { Provider } from "react-redux";
// import store from "./store.tsx";
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
import { BrowserRouter } from "react-router-dom";
import React from "react";
import store from './store/store'; // Import the configured store
import { Provider } from "react-redux";
window.global = window;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  </React.StrictMode>,
  );

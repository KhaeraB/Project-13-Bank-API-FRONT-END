import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

import { Header, Footer } from "./components/Layout/Layout";
import { persistor } from "./app/store/store"
import { Provider } from "react-redux";

import { BrowserRouter} from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import store from "./app/store/store";

/**
 * 
 * @param {any} document.getElementById("root")
 * @param {PersistGate} persistor
 * The redux-persist library provides ways to store redux 
 * state tree into some sorts of storage, and rehydrate 
 * when app is re-opened.
 * @returns {createRoot}
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

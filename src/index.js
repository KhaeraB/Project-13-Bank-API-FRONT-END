import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter} from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { Header, Footer } from "./components/Layout/Layout";
import { persistor } from "./app/store/store"
import store from "./app/store/store";
import "./index.scss";
import App from "./App";

/**
 * 
 * @param {any} document.getElementById("root")
 * @param {store} persistor
 * @param {store} persistor for persisGate
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

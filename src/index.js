import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

import { Header, Footer } from "./components/Layout/Layout";
import { persistor } from "./store/store"
import store from "./store/store"
import { Provider } from "react-redux";

import { BrowserRouter} from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

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

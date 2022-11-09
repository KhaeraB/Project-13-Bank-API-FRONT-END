import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import './style.scss'; 
import { store } from './app/store';
import App from './App';
import { Header, Footer } from "./components/Layout/Layout";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);



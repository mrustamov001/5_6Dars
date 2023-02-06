import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import axious from 'axios'

// redux
import { Provider } from 'react-redux';
import store from './store';


// styles
import 'react-toastify/dist/ReactToastify.css'
import './index.css'

axious.defaults.baseURL = "https://fakestoreapi.com"
axious.defaults.headers.access_token = localStorage.getItem("token")

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer />
  </Router>,
)

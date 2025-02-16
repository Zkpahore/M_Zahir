<<<<<<< HEAD
import React from "react";
import { createRoot } from "react-dom/client";
import './index.css'
import Router from "./router/Router";

createRoot(document.getElementById("root")).render(<Router />);
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
>>>>>>> 419e851414907003ee8c1035a6e0151df8e9ecf4

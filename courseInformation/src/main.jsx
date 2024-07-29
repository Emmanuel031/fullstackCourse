import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import axios from 'axios';

const baseURL = "http://localhost:3000/notes";

useEffect(() => {
  
})


axios.get(baseURL).then(response => {
  const notes = response.data
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App notes={notes} />
  )
});

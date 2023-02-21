import './index.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
//import { Main } from "./App";
// import { FirstApp } from "./FirstApp";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CounterApp  />
    </React.StrictMode>
);
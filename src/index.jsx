import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import IndexPage from "./pages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <IndexPage />
    </React.StrictMode>,
);

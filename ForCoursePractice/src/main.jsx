import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import Page from "./contextapi/Page";
import "./style.css";
// import TaskUseState from "./useReducer/TaskReducer";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);

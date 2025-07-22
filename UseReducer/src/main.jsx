import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./useState/App";
// import App from "./useReducer/App";
import App from "./Reducer&Context/App";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);

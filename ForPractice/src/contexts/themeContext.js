import createContext from "../lib/Context";
import React from "react";

const themeContext = React.createContext({ theme: "light" });

export default themeContext; 
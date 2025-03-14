import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Document from "./pages/Document";
import News from "./pages/News";
import ReactLayouts from "./layouts/ReactLayout";
import "./assets/main.css";

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/" element={<ReactLayouts />}>
                    <Route path="home" element={<Home />} />
                    <Route path="document" element={<Document />} />
                    <Route path="news" element={<News />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
        </div>
    );
}

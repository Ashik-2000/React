import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Document from "./pages/Document";
import News from "./pages/News";

export default function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/document" element={<Document />} />
                <Route path="/news" element={<News />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
}

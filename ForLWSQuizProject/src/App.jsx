import "./styles/App.css";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Quiz from "./components/pages/Quiz";
import Result from "./components/pages/Result";
import { Routes, Route } from "react-router";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRouter from "./components/PrivateRouter";
import PublicRouter from "./components/PublicRouter";

function App() {
    return (
        <AuthProvider>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/signup"
                        element={<PublicRouter component={Signup} />}
                    />
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/quiz/:id"
                        element={<PrivateRouter component={Quiz} />}
                    />
                    <Route
                        path="/result/:id"
                        element={<PrivateRouter component={Result} />}
                    />
                </Routes>
            </Layout>
        </AuthProvider>
    );
}

export default App;

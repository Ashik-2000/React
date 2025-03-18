import "./styles/App.css";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Quiz from "./components/pages/Quiz";

function App() {
    return (
        <>
            <Layout>
                {/* <Home /> */}
                {/* <Signup /> */}
                {/* <Login /> */}
                <Quiz />
            </Layout>
        </>
    );
}

export default App;

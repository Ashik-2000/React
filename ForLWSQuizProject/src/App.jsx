import "./styles/App.css";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";

function App() {
    return (
        <>
            <Layout>
                {/* <Home /> */}
                {/* <Signup /> */}
                <Login />
            </Layout>
        </>
    );
}

export default App;

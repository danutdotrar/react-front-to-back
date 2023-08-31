import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import About from "./components/About";

const App = () => {
    return (
        <>
            <Router>
                <div className="flex flex-col justify-between h-screen">
                    <NavBar />
                    <main>Content</main>
                </div>
                <Routes>
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;

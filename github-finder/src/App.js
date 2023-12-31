import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { GithubProvider } from "./context/github/GithubContext";

const App = () => {
    return (
        <GithubProvider>
            <Router>
                <div className="flex flex-col justify-between h-screen">
                    <NavBar />

                    <main className="container mx-auto px-3 pb-12">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/notfound" element={<NotFound />} />
                            <Route path="/*" element={<NotFound />} />
                        </Routes>
                    </main>

                    <Footer />
                </div>
            </Router>
        </GithubProvider>
    );
};

export default App;

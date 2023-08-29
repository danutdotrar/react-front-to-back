import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIconLink from "./components/AboutIconLink";

const App = () => {
    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            // return an array minus the one we are deleting
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        // set feedback to an array of the current feedback and the rest of the feedback array
        setFeedback([newFeedback, ...feedback]);
    };

    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <FeedbackForm handleAdd={addFeedback} />
                                    <FeedbackStats feedback={feedback} />
                                    <FeedbackList
                                        feedback={feedback}
                                        handleDelete={deleteFeedback}
                                    />
                                </>
                            }
                        />

                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                </div>
                <AboutIconLink />
            </Router>
        </FeedbackProvider>
    );
};

export default App;

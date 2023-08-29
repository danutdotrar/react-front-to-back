import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import AboutPage from "./pages/AboutPage";

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
        <>
            <Header />
            <div className="container">
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                />
            </div>
        </>
    );
};

export default App;

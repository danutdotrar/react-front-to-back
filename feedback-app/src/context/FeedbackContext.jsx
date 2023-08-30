import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Create context
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        { id: 1, text: "This item 1 is from context", rating: 10 },
        { id: 2, text: "This item 2 is from context", rating: 6 },
        { id: 3, text: "This item 3 is from context", rating: 8 },
    ]);
    const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

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

    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({ item, edit: true });
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                deleteFeedback,
                addFeedback,
                editFeedback,
                feedbackEdit,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;

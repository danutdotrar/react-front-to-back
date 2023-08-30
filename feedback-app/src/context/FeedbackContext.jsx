import { createContext, useState, useEffect } from "react";

// Create context
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [feedback, setFeedback] = useState([]);
    const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

    useEffect(() => {
        fetchFeedback();
    }, []);

    const fetchFeedback = async () => {
        const response = await fetch(`/feedback`);

        const data = await response.json();

        setFeedback(data);
        setIsLoading(false);
    };

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            // return an array minus the one we are deleting
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };

    const addFeedback = async (newFeedback) => {
        const response = await fetch(`/feedback`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newFeedback),
        });

        const data = await response.json();

        // set feedback to an array of the current feedback and the rest of the feedback array
        setFeedback([data, ...feedback]);
    };

    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({ item, edit: true });
    };

    const updateFeedback = (id, updatedItem) => {
        setFeedback(
            feedback.map((item) =>
                item.id === id ? { ...item, ...updatedItem } : item
            )
        );
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                deleteFeedback,
                addFeedback,
                editFeedback,
                feedbackEdit,
                updateFeedback,
                isLoading,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;

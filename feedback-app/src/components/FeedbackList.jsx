import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedback }) => {
    if (!feedback || feedback === 0) {
        return <p>No feedback yet</p>;
    } else {
        return (
            <div className="feedback-list">
                {feedback.map((item) => (
                    <FeedbackItem item={item} key={item.id} />
                ))}
            </div>
        );
    }
};

export default FeedbackList;

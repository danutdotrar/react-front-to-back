import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

const FeedbackList = ({ feedback, handleDelete }) => {
    if (!feedback || feedback === 0) {
        return <p>No feedback yet</p>;
    } else {
        return (
            <div className="feedback-list">
                {feedback.map((item) => (
                    <FeedbackItem
                        key={item.id}
                        item={item}
                        handleDelete={handleDelete}
                    />
                ))}
            </div>
        );
    }
};

FeedbackList.propTypes = {
    feedback: PropTypes.array,
};

export default FeedbackList;

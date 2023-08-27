import PropTypes from "prop-types";

const FeedbackStats = ({ feedback }) => {
    // const calcAverage = (arr) => {
    //     const arrayOfRatings = arr.map((item) => item.rating);
    //     const average =
    //         arrayOfRatings.reduce((acc, val) => acc + val, 0) /
    //         arrayOfRatings.length;
    //     return average;
    // };

    let average =
        feedback.reduce((acc, val) => acc + val.rating, 0) / feedback.length;

    average = average.toFixed(1).replace(/[.,]0$/, "");

    return (
        <>
            <div className="feedback-stats">
                <h4>{feedback.length} Reviews</h4>
                <h4>Average rating: {isNaN(average) ? "0" : average}</h4>
            </div>
        </>
    );
};

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;

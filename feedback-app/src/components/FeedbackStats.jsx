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

    return (
        <>
            <div className="feedback-stats">
                <h4>{feedback.length} Reviews</h4>
                <h4>Average rating: {average}</h4>
            </div>
        </>
    );
};

export default FeedbackStats;

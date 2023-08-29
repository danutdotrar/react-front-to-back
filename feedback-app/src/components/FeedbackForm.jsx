import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

const FeedbackForm = ({ handleAdd }) => {
    const [text, setText] = useState("");
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");

    const handleTextChange = (e) => {
        if (text === "") {
            setBtnDisabled(true);
            setMessage(null);
        } else if (text.trim().length <= 10) {
            setBtnDisabled(true);
            setMessage("At least 10 characters");
        } else if (text.trim().length >= 10) {
            setMessage(null);
            setBtnDisabled(false);
        }

        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim().length > 10) {
            const newFeedback = {
                text: text,
                rating: rating,
            };

            handleAdd(newFeedback);

            setText("");
        }
    };

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Write a reviews..."
                        onChange={handleTextChange}
                        value={text}
                    />
                    <Button
                        type={"submit"}
                        isDisabled={btnDisabled}
                        version={"primary"}
                    >
                        Send
                    </Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    );
};

export default FeedbackForm;

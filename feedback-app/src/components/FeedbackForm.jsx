import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";

const FeedbackForm = () => {
    const [text, setText] = useState("");
    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    return (
        <Card>
            <form>
                <h2>How would you rate your service with us?</h2>
                {/* todo - rating select component */}
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Write a reviews..."
                        onChange={handleTextChange}
                        value={text}
                    />
                    <Button
                        type={"submit"}
                        isDisabled={false}
                        version={"primary"}
                    >
                        Send
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default FeedbackForm;

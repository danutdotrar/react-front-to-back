import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <Card>
            <div>About this project</div>
            <p>
                This is a React app to leave feedback for a product or service
            </p>

            <Link to="/">Back to home</Link>
        </Card>
    );
};

export default AboutPage;

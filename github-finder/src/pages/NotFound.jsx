import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="hero ">
            <div className="text-center hero-content">
                <div className="max-w-lg">
                    <h1 className="text-6xl font-bold mb-8">Oops!</h1>
                    <p className="text-2xl mb-8">404 - Page not found :(</p>
                    <Link to="/" className="btn btn-primary btn-lg">
                        <FaHome className="mr-2 text-3xl" />
                        <p>Back home</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;

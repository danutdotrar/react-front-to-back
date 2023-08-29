import { Link } from "react-router-dom";
const Header = ({ text, bgColor, textColor }) => {
    const headerStyle = {
        backgroundColor: bgColor,
        color: textColor,
    };

    return (
        <>
            <header style={headerStyle}>
                <div className="container">
                    <Link to={"/"} className="link-h3">
                        <h3>{text}</h3>
                    </Link>
                </div>
            </header>
        </>
    );
};

// Set default props
Header.defaultProps = {
    text: "Feedback UI",
    bgColor: "rgba(0,0,0,0.4)",
    textColor: "#ff6a95",
};

export default Header;

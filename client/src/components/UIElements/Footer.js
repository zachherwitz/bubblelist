import React from "react";

const Footer = () => {
    return (
        <footer>
            <h1>bubblelist created by zach herwitz</h1>
            <div className="socials">
                <a target="_blank" href="https://github.com/zachherwitz/">
                    <i className="fab fa-2x fa-github"></i>
                </a>
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/zach-herwitz/"
                >
                    <i className="fab fa-2x fa-linkedin-in"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;

import React from "react";

function Footer() {
    const date = new Date();
    return (
        <footer className="footer">
            <p
                className="footer__info"
            >
                {/* &copy; 2020 Mesto Russia */}
                {date.getFullYear()} Mesto Russia
            </p>
        </footer>
    )
}

export default Footer;
import "./Navbar.scss";
import Logo from "../../assets/img_1.png";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = ({ scrollToSection }) => {
    const [showNav, setShowNav] = useState(false);

    // Handles both scrolling and closing the menu
    const handleNavClick = (section) => {
        scrollToSection(section);
        setShowNav(false);
    };

    return (
        <header className="navbar">
            <nav className="navbar__container wrapper">
                <a href="#" className="navbar__logo" onClick={() => handleNavClick("home")}>
                    <img src={Logo} alt="Logo" />
                </a>

                <ul className={`navbar__links ${showNav ? "show-nav" : "hide-nav"}`}>
                    <li onClick={() => handleNavClick("pricing")}>
                        <a href="#">Pricing</a>
                    </li>
                    <li onClick={() => handleNavClick("earnings")}>
                        <a href="#">Earnings</a>
                    </li>
                    <li onClick={() => handleNavClick("status")}>
                        <a href="#">Status</a>
                    </li>
                    <li onClick={() => handleNavClick("subscribe")}>
                        <a href="#">Subscribe</a>
                    </li>
                </ul>

                <div className="navbar__btns">
                    <a href="#">Login</a>
                    <a href="#" className="btn">Register</a>
                </div>

                {/* Toggle menu icon */}
                <div className="navbar__menu" onClick={() => setShowNav(!showNav)}>
                    {showNav ? <IoMdClose /> : <IoMenu />}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

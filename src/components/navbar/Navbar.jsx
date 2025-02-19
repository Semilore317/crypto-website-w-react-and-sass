/*
import "./Navbar.scss";
import Logo from "../../assets/Logo.png";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {

    const[showNav, setShowNav] = useState(true);

    return(
        <header className="navbar">
            <nav className="navbar__container wrapper">
                <a href="#" className="navbar__logo" onClick={()=>setShowNav(false)}>
                    <img src={Logo} alt="Logo"/>
                </a>

                <ul className={`${showNav ? "show" : ""}`}>
                    <li onClick={()=>setShowNav(false)}>
                        <a href="#">Pricing</a>
                    </li>
                    <li onClick={()=>setShowNav(false)}>
                        <a href="#">Company</a>
                    </li>
                    <li onClick={()=>setShowNav(false)}>
                        <a href="#">Product</a>
                    </li>
                    <li onClick={()=>setShowNav(false)}>
                        <a href="#">Blog</a>
                    </li>
                </ul>

                <div className="navbar__btns">
                    <a href="#">Login</a>
                    <a href="#" className="btn">
                        Register
                    </a>
                </div>

                <div className="navbar__menu" onClick={() => setShowNav(!showNav)}>
                    {showNav ? <IoMdClose /> : <IoMenu />}
                </div>

                <div className="navbar__menu">
                    {showNav ? <IoMdClose /> : <IoMenu />}
                </div>

            </nav>
        </header>
    )
}

export default Navbar;
* */

import "./Navbar.scss";
import Logo from "../../assets/Logo.png";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
    const [showNav, setShowNav] = useState(false); // Default to hidden

    return (
        <header className="navbar">
            <nav className="navbar__container wrapper">
                <a href="#" className="navbar__logo">
                    <img src={Logo} alt="Logo" />
                </a>

                {/* Toggle class based on state */}
                <ul className={`navbar__links ${showNav ? "show-nav" : "hide-nav"}`}>
                    <li onClick={() => setShowNav(false)}>
                        <a href="#">Pricing</a>
                    </li>
                    <li onClick={() => setShowNav(false)}>
                        <a href="#">Company</a>
                    </li>
                    <li onClick={() => setShowNav(false)}>
                        <a href="#">Product</a>
                    </li>
                    <li onClick={() => setShowNav(false)}>
                        <a href="#">Blog</a>
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

import "./Footer.scss";
import Logo from "../../assets/Logo.png";
import wallet from "../../assets/img_1.png"
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaYoutube
}   from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

const Footer = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    })
    return (
        <div className="footer">
            <div className="footer__container wrapper" data-aos="fade-up">
                <div className="footer__col">
                    <img src={wallet} alt="Logo image"/>
                    {/*
                    <p>
                        Your trusted source for the latest crypto updates, <br/>
                        trends, and insights. Secure, reliable, and always up to date.
                    </p>
                    */}

                </div>

                <div className="footer__col">
                    <h3>About</h3>
                    <a href="#">About Us</a>
                    <a href="#">Features</a>
                    <a href="#">News</a>
                </div>

                <div className="footer__col">
                    <h3>Company</h3>
                    <a href="#">CryptoCode</a>
                    <a href="#">Security</a>
                    <a href="#">Banking</a>
                </div>

                <div className="footer__col">
                    <h3>Support</h3>
                    <a href="#">FAQs</a>
                    <a href="#">Support</a>
                    <a href="#">Contact Us</a>
                </div>

                <div className="footer__col">
                    <h3>Socials</h3>
                    <div className="footer__icons">
                        <a href="#" className="footer__icon">
                            <FaFacebookF/>
                        </a>
                        <a href="#" className="footer__icon">
                            <FaInstagram/>
                        </a>
                        <a href="#" className="footer__icon">
                            <FaTwitter/>
                        </a>
                        <a href="#" className="footer__icon">
                            <FaYoutube/>
                        </a>
                        <a href="#" className="footer__icon">
                            <FaLinkedin/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
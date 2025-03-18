import "./Hero.scss";
import Mob from "../../assets/Mob.png";
import wallet from "../../assets/img_1.png";
// animate on scroll library
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
    useEffect(() => {
        Aos.init({duration: 1000})
    })
    return (
        <>
            <section className="hero">
                <div className="hero__container wrapper">
                    <div className="hero__left" data-aos="fade-right">
                        <img src={Mob} alt="Hero" className="img-1" />
                        <img src={wallet} alt="wallet" className="img-2" />
                    </div>
                    <div className="hero__right" data-aos="zoom-in-up">
                        <h1>Make easier Crypto Transactions</h1>
                        <p>
                            Crypto Code offers a fast, secure and affordable alternative
                            for all of your financial needs. <br/> Join the cryptocurrency revolution
                            today and take control of your financial future. <br/>
                            Sign up now to start using our platform for yourself.
                        </p>
                        <a href="#" className="btn">
                            TRY FOR FREE
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;
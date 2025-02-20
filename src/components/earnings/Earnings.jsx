import "./Earnings.scss";
import Img from "../../assets/earnings.png";
import Aos from "aos";
import "aos/dist/aos.css"
import {useEffect} from "react";

const Earnings = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    })
    return (
        <>
            <section className="earnings">
                <div className="earnings__container wrapper">
                    <div className="earnings__left" data-aos="fade-right">
                        <img src={Img} alt="Earnings"/>
                    </div>

                    <div className="earnings__right" data-aos="zoom-in-up">
                        <h2>Track your earnings and cryptocode made it easy</h2>
                        <p>
                            CryptoCode is a powerful web application designed for developers and enthusiasts working with cryptocurrency. <br/>
                            It provides real-time price tracking, blockchain API integrations, smart contract testing, <br/>
                            and secure wallet management—all in one sleek and responsive interface.
                        </p>
                        <a href="#" className="btn">
                            GET STARTED
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Earnings;
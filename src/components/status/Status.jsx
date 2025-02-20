import "./Status.scss";
import StatusImg from "../../assets/status.png";
import Aos from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

const Status = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    });

    return (
        <div className="status">
            <div className="status__container wrapper">
                <div className="status__left" data-aos="zoom-in-up">
                    <h2>Trust us due to our safe and convenient deposit</h2>
                    <p>
                        At CryptoCode, we prioritize security and ease of use. <br/>
                        Our robust encryption and seamless deposit process ensure that <br/>
                        your funds are protected while providing a hassle-free experience. <br/>
                        Enjoy peace of mind with every transaction.
                    </p>
                    <a href="#" className="btn">
                        Know More
                    </a>
                </div>

                <div className="status__right" data-aos="slide-left">
                    <img src={StatusImg} alt="Status Image"/>
                </div>
            </div>
        </div>
    )
};

export default Status;
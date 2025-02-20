import "./Subscribe.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";


const Subscribe = () => {
    useEffect(() => {
        Aos.init({duration: 1000})
    })
    return (
        <div className="subscribe">
            <div className="subscribe__container">
                <h2 data-aos="fade-up">Subscribe & Get News Updates</h2>
                <p data-aos="fade-up">
                    Join our community and stay ahead in the crypto world! <br/>
                    Subscribe now to receive the latest updates, market trends, <br/>
                    and exclusive insights straight to your inbox. <br/>
                </p>
                <form action="#" data-aos="fade-up">
                    <input type="email" placeholder="Your Email Here"/>
                    <a href="#" className="btn">
                        Subscribe
                    </a>
                </form>
            </div>
        </div>
    )
}

export default Subscribe;
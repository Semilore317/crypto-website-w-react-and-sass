import "./Pricing.scss";
import { pricingInfo } from "../../appData/Data.jsx";
import Aos from "aos";
import "aos/dist/aos.css";
import  {useEffect} from "react";

const Pricing = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    })
    return (
        <>
            <section className="pricing">
                <h2 data-aos="fade-up">Best Crypto currently</h2>
                <div className="pricing__container wrapper">
                    {
                        pricingInfo.map(({image, name, price}) => (
                           <div className="pricing__card" data-aos="fade-up">
                               <img src={image} alt={name} className="pricing__card-img"/>
                               <h3>{name}</h3>
                               <span>{price}</span>
                               <a href="#" className="btn">
                                    Buy Now
                               </a>
                           </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Pricing;
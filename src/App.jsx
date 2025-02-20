//import "./index.scss"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Companies from "./components/companies/Companies";
import Pricing from "./components/pricing/Pricing";
import Earnings from "./components/earnings/Earnings";
import Status from "./components/status/Status";

function App() {
  return (
    <>
        <Navbar />
        <Hero />
        <Companies />
        <Pricing />
        <Earnings />
        <Status />
    </>
  )
}

export default App
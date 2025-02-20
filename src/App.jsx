//import "./index.scss"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Companies from "./components/companies/Companies";
import Pricing from "./components/pricing/Pricing";

function App() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Companies/>
        <Pricing />
    </>
  )
}

export default App
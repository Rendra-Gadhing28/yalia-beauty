import Navbar from '../components/layout/Navbar'
import Home from '../components/layout/Home'
import AboutUs from '../components/layout/AboutUs'
import PriceList from '../components/layout/PriceList'
import Footer from '../components/layout/Footer'

function LandingPage(){
    return (
    <>
        <Navbar />
        <Home />
        <AboutUs />
        <PriceList />
        <Footer />
    </>
    );
}

export default LandingPage

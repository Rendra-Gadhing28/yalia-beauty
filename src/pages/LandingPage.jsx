import Navbar from '../components/layout/Navbar'
import Home from '../components/layout/Home'
import AboutUs from '../components/layout/AboutUs'
import PriceList from '../components/layout/PriceList'
import Footer from '../components/layout/Footer'
import Produk from '../components/layout/Produk'



function LandingPage(){
    return (
    <>
        <Navbar />
        <Home />
        <AboutUs />
        <Produk />
        <PriceList />
        <Footer />
    </>
    );
}

export default LandingPage

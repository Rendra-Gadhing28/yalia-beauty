import Logos from '../../../public/yalia-logos.svg'
import Logo from '../../../public/yalia-logos-trnsprnt.svg'



function Navbar(){
    return (
    <nav className="navbar">
        <div className="nav-line">
            <div style={{display: "flex", gap:12, alignItems: "center"}}>
            <img src={Logo} alt="ini logo yalia" style={{ widht : 42, height: 42}}/>
            <span>Yalia Beauty</span>
            </div>
            <div className="nav-link">
            <ul className="">
                <li style={{}}>
                    <a href="#home">Home</a>
                    <a href="#aboutus">About Us</a>
                    <a href="#pricelist">Price List</a>
                    <a href="#sertificate">Sertificate</a>
                    <a href="#footer">Footer</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar
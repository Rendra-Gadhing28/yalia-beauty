import logo from '../../assets/hero-nail.svg'

function Home(){
return(
   <section className="home1">
  <div className="container">
    <div className="hero">
      <div className="hero-text">
        <h1 style={{
            fontSize:75
        }}>Best Nails<br/>For Best <br/> Moments</h1>
        <p>Elegance in Every Touch</p>
      </div>

      <div className="hero-image">
        <div style={{width: 500, height: "auto"}}></div>
      </div>
      
    </div>
    <div className="bottom-line"></div> 
    <diV className="image-hero">
        <img className="" src={logo} alt="" style={{width:600, height:"auto", objectFit:"cover", borderRadius:"15px"}} />
    </diV>
    
  </div>
  
</section>
)
}

export default Home
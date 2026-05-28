import logo from '../../assets/hero-nail.svg'
import Color from '../UI/color'
import React from 'react'
import "../../index.css"

function Home() {
  return (
    <>
      <Color />
      <section className="home" id='home'>
        <div className="container">
          <div className="hero">
            <div className="hero-text">
              <h1 style={{ fontSize: '75px' }}>
                Best Nails<br />
                For Best <br />
                Moments
              </h1>
              <p>Elegance in Every Touch</p>
            </div>
            <button
              className="py-4 px-6 rounded-md"
              style={{ backgroundColor: 'var(--accent)' }}
              onClick={() => {}}
            >
              Contacts
            </button>
          </div>
        </div>

        {/* ✅ diV → div */}
        <div className="image-hero">
          <img
            src={logo}
            alt="Hero nail illustration"
            style={{
              width: 400,
              height: 'auto',
              objectFit: 'cover',
              borderRadius: '15px'
            }}
          />
        </div>
      </section>
    </>
  )
}

export default Home
import Logo from '../../../public/yalia-logos-trnsprnt.svg'
import React, { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: '4rem',
        display: 'flex',
        alignItems: 'center',
        padding: '0 2.5rem',
        transition: 'background 0.4s ease, box-shadow 0.4s ease, backdrop-filter 0.4s ease',
        background: scrolled ? 'rgba(255, 255, 255, 0.92)' : 'transparent',
        boxShadow: scrolled ? '0 1px 24px 0 rgba(0,0,0,0.07)' : 'none',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
      }}
    >
      {/* Logo + Brand */}
      <a
        href="#home"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          textDecoration: 'none',
          flexShrink: 0,
        }}
      >
        <img
          src={Logo}
          alt="Yalia Beauty"
          style={{ width: 36, height: 36, objectFit: 'contain' }}
        />
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.2rem',
            fontWeight: 700,
            color: 'var(--accent)',
            letterSpacing: '0.01em',
            lineHeight: 1,
          }}
        >
          Yalia Beauty
        </span>
      </a>

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Nav Links */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        {['Home', 'About Us'," Product ", 'Price List', 'Certificate'].map((label) => {
          const href = '#' + label.toLowerCase().replace(/\s+/g, '')
          return (
            <a
              key={label}
              href={href}
              style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: scrolled ? 'var(--dark, #1a1a1a)' : 'var(--dark, #1a1a1a)',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                position: 'relative',
                padding: '2px 0',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--accent)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = scrolled ? 'var(--dark, #1a1a1a)' : 'var(--dark, #1a1a1a)'
              }}
            >
              {label}
            </a>
          )
        })}

        {/* CTA Button */}
        <a
          href="#contact"
          style={{
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            color: 'var(--white, #fff)',
            background: 'var(--accent)',
            padding: '0.5rem 1.25rem',
            borderRadius: '4px',
            transition: 'opacity 0.2s, transform 0.15s',
            display: 'inline-block',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.opacity = '0.85'
            e.currentTarget.style.transform = 'translateY(-1px)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.opacity = '1'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          Contact
        </a>
      </div>
    </nav>
  )
}

export default Navbar
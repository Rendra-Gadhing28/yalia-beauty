import FadeSection from "../UI/fadeSection"
import nailArt from "../../assets/nail-art.png"
import nailCare from "../../assets/nail-care.png"
import beauty from "../../assets/beauty.png"
import "../../index.css"

const services = [
  {
    title: "Nail Care",
    desc: "Perawatan kuku profesional untuk tampilan bersih, sehat, dan terawat setiap hari.",
    src: nailCare,
  },
  {
    title: "Nail Art",
    desc: "Desain kreatif yang mengekspresikan kepribadianmu — dari minimalis hingga statement bold.",
    src: nailArt,
  },
  {
    title: "Beauty",
    desc: "Sentuhan perawatan menyeluruh untuk kulitmu tampil glowing dan bercahaya sempurna.",
    src: beauty,
  },
]

function ServiceCard({ title, desc, src, delay = 0 }) {
  return (
    <FadeSection delay={delay} style={{ flex: 1 }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "1.25rem",
      }}>

        {/* Gambar */}
        <div style={{
          width: 180,
          height: 180,
          borderRadius: 12,
          overflow: "hidden",
        }}>
          <img
            src={src}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.5s ease",
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          />
        </div>

        {/* Judul */}
        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.25rem",
          fontWeight: 700,
          color: "var(--dark)",
          margin: 0,
          letterSpacing: "-0.01em",
        }}>
          {title}
        </h3>

        {/* Deskripsi */}
        <p style={{
          fontSize: "0.875rem",
          lineHeight: 1.7,
          color: "var(--dark)",
          opacity: 0.65,
          maxWidth: 220,
          margin: 0,
        }}>
          {desc}
        </p>

        {/* Link */}
        <a
          href="#"
          className="service-link"
          style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--dark)",
            textDecoration: "none",
            paddingBottom: 2,
            borderBottom: "1px solid var(--dark)",
            transition: "color 0.2s, border-color 0.2s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = "var(--accent)"
            e.currentTarget.style.borderColor = "var(--accent)"
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = "var(--dark)"
            e.currentTarget.style.borderColor = "var(--dark)"
          }}
        >
          Find Out More
        </a>
      </div>
    </FadeSection>
  )
}

function AboutUs() {
  return (
    <section
      id="aboutus"
      style={{
        width: "100%",
        background: "var(--primary)",
        padding: "8rem 12rem",
        boxSizing: "border-box",
      }}
    >
      {/* Heading */}
      <FadeSection style={{ textAlign: "center", marginBottom: "3.5rem" }}>
        <p style={{
          fontSize: "1.7rem",
          fontWeight: 600,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "black",
          marginBottom: "0.5rem",
        }}>
          Our Services
        </p>
    
      </FadeSection>

      {/* Cards */}
      <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "3rem",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "wrap",  /* wrap otomatis di layar kecil */
      }}>
        {services.map((s, i) => (
          <ServiceCard key={s.title} {...s} delay={i * 150} />
        ))}
      </div>
    </section>
  )
}

export default AboutUs
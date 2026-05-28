import React from "react";
import FadeSection from "../UI/fadeSection";
import fullProduct from "../../assets/full-product2.jpeg"
import Peralatan from "../../assets/peralatan.jpeg"
import produk1 from "../../assets/produk1.jpeg"
import produk2 from "../../assets/produk2.jpeg"
import produk4 from "../../assets/produk4.jpeg"
import produk5 from "../../assets/produk5.jpeg"


    const produk = [
  {
    title: "Color Collection",
    desc: "Ratusan pilihan warna dari nude elegan hingga bold statement semua tahan lama dan aman di kuku.",
    src: fullProduct,
  },
  {
    title: "Nail Tools",
    desc: "Peralatan lengkap yang kami pakai langsung di studio presisi, higienis, dan nyaman di tangan.",
    src: Peralatan,
  },
  {
    title: "Gel Series",
    desc: "Formula gel pilihan kami mudah diaplikasikan, cepat kering, dan hasilnya glossy tahan berminggu-minggu.",
    src: produk1,
  },
  {
    title: "Treatment Kit",
    desc: "Rangkaian perawatan dari pembersih hingga base coat  karena kuku sehat adalah fondasi dari segalanya.",
    src: produk2,
  },
  {
    title: "Signature Gel",
    desc: "Gel eksklusif koleksi Yalia warna-warna yang kami kurasi sendiri dan tidak akan kamu temukan di tempat lain.",
    src: produk4,
  },
  {
    title: "Pro Finish",
    desc: "Top coat dan finishing produk pilihan para nail artist kami  untuk hasil akhir yang benar-benar sempurna.",
    src: produk5,
  },
]
function CardProduk({ title, desc, src, delay = 0 }){
    return (

    <FadeSection  delay={delay}>
        <div 
        style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "1.25rem",
      }}>

            <div style={{
                width:180,
                height: 180, 
                borderRadius: 16,
                overflow:"hidden"
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

        </div>
    </FadeSection>
)
}

function Produk(){
    return (
        <section 
        id="product"
        style={{
            width:"100%", 
            background: "var(--light)",
            padding: "8rem 12rem",
            boxSizing:"border-box"
        }}>
            <FadeSection style={{
                textAlign: "center", 
                marginBottom: "2.5rem"
            }}>
                <span style={{
                     fontSize: "1.7rem",
          fontWeight: 600,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "black",
          marginBottom: "0.5rem",
                }}>
                    Our Products
                </span>
            </FadeSection>

            <div style={{
                display:"flex", flexDirection: "row",
                gap: "3rem",
                justifyContent:"center", alignItems: "center",
                flexWrap : "wrap"
            }}>
                {produk.map((s,i)=>(
                    <CardProduk key={s.title} {...s} delay={i * 150} />
                ))}
            </div>
        </section>
    )
}

export default Produk
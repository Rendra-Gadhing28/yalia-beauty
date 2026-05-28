import { useRef } from 'react'
import { useInView } from 'framer-motion'

function FadeSection({ children, className = "", delay = 0, style = {} }) {
  const ref = useRef(null)

  // FIX Bug 4: once:true agar animasi tidak reset saat scroll balik
  const visible = useInView(ref, { once: true, margin: "0px 0px -60px 0px" })

  return (
    <div
      ref={ref}
      // FIX Bug 2: tambah spasi sebelum "visible" dan sebelum className
      className={`fade-in-up${visible ? " visible" : ""} ${className}`.trim()}
      style={{
        // FIX Bug 3: transition lengkap dengan property + easing
        transitionProperty: 'opacity, transform',
        transitionDuration: '0.65s',
        transitionTimingFunction: 'ease',
        transitionDelay: `${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export default FadeSection
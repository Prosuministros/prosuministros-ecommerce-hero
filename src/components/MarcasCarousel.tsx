import React from 'react'

const logos = [
  '/img/lenovo.png',
  '/img/Logitech.png',
  '/img/Microsoft.png',
  '/img/dell.png',
  '/img/apple.png',
  '/img/HP.png'
]

// Calcula cuántas veces hay que repetir los logos para llenar la pantalla
const getRepeatCount = () => {
  if (typeof window === 'undefined') return 3 // SSR fallback
  const logoWidth = 128 + 16 // ancho del logo + gap (w-32 + gap-6)
  const screenWidth = window.innerWidth
  return Math.ceil(screenWidth / (logos.length * logoWidth)) + 2
}

const MarcasCarousel = () => {
  const [repeat, setRepeat] = React.useState(3)

  React.useEffect(() => {
    setRepeat(getRepeatCount())
    const handleResize = () => setRepeat(getRepeatCount())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const logosToShow = Array(repeat).fill(logos).flat()

  return (
    <section className="w-full bg-white py-6 overflow-hidden">
      <div className="relative w-full">
        <div className="marcas-carousel flex items-center gap-6 animate-marcas-scroll">
          {logosToShow.map((src, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center h-16 w-32 bg-white rounded-md shadow-sm mx-2"
              style={{ minWidth: 96, minHeight: 48 }}
            >
              <img
                src={src}
                alt="Logo marca"
                className="max-h-12 max-w-[90px] object-contain"
                draggable={false}
                style={{ margin: '0 auto' }}
              />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marcas-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marcas-carousel {
          width: max-content;
          animation: marcas-scroll 30s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default MarcasCarousel 
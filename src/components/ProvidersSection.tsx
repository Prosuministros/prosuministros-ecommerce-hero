
const ProvidersSection = () => {
  const providers = [
    { name: 'Lenovo', logo: '/lovable-uploads/90c20181-812b-46a1-82ad-6ee8a7dda6f5.png' },
    { name: 'Logitech', logo: '/lovable-uploads/90c20181-812b-46a1-82ad-6ee8a7dda6f5.png' },
    { name: 'Sony', logo: '/lovable-uploads/90c20181-812b-46a1-82ad-6ee8a7dda6f5.png' },
    { name: 'Microsoft', logo: '/lovable-uploads/90c20181-812b-46a1-82ad-6ee8a7dda6f5.png' },
    { name: 'Dell', logo: '/lovable-uploads/90c20181-812b-46a1-82ad-6ee8a7dda6f5.png' },
    { name: 'Apple', logo: '/lovable-uploads/90c20181-812b-46a1-82ad-6ee8a7dda6f5.png' }
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Nuestros Proveedores de Confianza
          </h2>
          <p className="text-gray-600">
            Trabajamos con las mejores marcas del mercado tecnológico
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-12 items-center justify-center">
            {providers.concat(providers).map((provider, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={provider.logo}
                  alt={provider.name}
                  className="max-w-full max-h-full object-contain filter brightness-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default ProvidersSection

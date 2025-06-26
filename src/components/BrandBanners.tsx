
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'

const BrandBanners = () => {
  const featuredBrands = [
    {
      id: 1,
      name: "Apple",
      logo: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=120&h=120&fit=crop",
      description: "Innovación y diseño premium para profesionales",
      tagline: "Think Different",
      gradient: "from-gray-900 via-gray-800 to-black",
      textColor: "text-white",
      buttonStyle: "bg-white text-black hover:bg-gray-100",
      accentColor: "#ffffff"
    },
    {
      id: 2,
      name: "Logitech",
      logo: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=120&h=120&fit=crop",
      description: "Periféricos y accesorios de alta calidad",
      tagline: "Aliados en innovación para entornos de trabajo exigentes",
      gradient: "from-blue-900 via-blue-700 to-cyan-600",
      textColor: "text-white",
      buttonStyle: "bg-white text-blue-900 hover:bg-gray-100",
      accentColor: "#00C8CF"
    },
    {
      id: 3,
      name: "Microsoft",
      logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=120&h=120&fit=crop",
      description: "Productividad y colaboración empresarial",
      tagline: "Empower every person and organization",
      gradient: "from-blue-600 via-blue-500 to-blue-400",
      textColor: "text-white",
      buttonStyle: "bg-white text-blue-600 hover:bg-gray-100",
      accentColor: "#0078d4"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Marcas Aliadas
          </h2>
          <div className="w-16 h-1 bg-[#00C8CF] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trabajamos con las mejores marcas del mercado para ofrecerte 
            tecnología de vanguardia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredBrands.map((brand) => (
            <Card 
              key={brand.id} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden border-0"
            >
              <CardContent className="p-0 relative">
                <div className={`bg-gradient-to-br ${brand.gradient} p-8 text-center relative overflow-hidden min-h-[300px] flex flex-col justify-between`}>
                  {/* Elementos decorativos de fondo */}
                  <div className="absolute top-4 right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                  
                  {/* Contenido superior */}
                  <div className="relative z-10">
                    <div className="mb-6">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="w-20 h-20 object-cover mx-auto rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    <h3 className={`text-2xl font-bold ${brand.textColor} mb-2`}>
                      {brand.name}
                    </h3>
                  </div>
                  
                  {/* Contenido central */}
                  <div className="relative z-10 flex-1 flex flex-col justify-center">
                    <p className={`${brand.textColor} text-lg font-medium mb-4 italic`}>
                      "{brand.tagline}"
                    </p>
                    
                    <p className={`${brand.textColor}/90 mb-6 leading-relaxed`}>
                      {brand.description}
                    </p>
                  </div>
                  
                  {/* Botón inferior */}
                  <div className="relative z-10">
                    <Button
                      className={`${brand.buttonStyle} group-hover:scale-105 transition-all duration-300 font-semibold`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Productos
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Banner promocional especial */}
        <div className="bg-gradient-to-r from-[#00C8CF] to-[#00A5B0] rounded-2xl p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Buscas una marca específica?
            </h3>
            <p className="text-white/90 mb-6 text-lg">
              Contamos con un catálogo amplio de marcas reconocidas mundialmente. 
              Contáctanos para consultar disponibilidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-[#00C8CF] hover:bg-gray-100 font-semibold"
              >
                Catálogo Completo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#00C8CF] font-semibold"
              >
                Contactar Asesor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandBanners

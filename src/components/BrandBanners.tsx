
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useAdminStore } from '@/store/useAdminStore'
import { ExternalLink } from 'lucide-react'

const BrandBanners = () => {
  const { brands } = useAdminStore()
  const featuredBrands = brands.filter(brand => brand.featured)

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Marcas Aliadas
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trabajamos con las mejores marcas del mercado para ofrecerte 
            tecnología de vanguardia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredBrands.map((brand, index) => (
            <Card 
              key={brand.id} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/10 backdrop-blur-sm border-white/20"
            >
              <CardContent className="p-8 text-center">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-24 h-24 object-cover mx-auto rounded-lg group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">
                  {brand.name}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {brand.description}
                </p>
                
                <Button
                  variant="outline"
                  className="border-[#00C8CF] text-[#00C8CF] hover:bg-[#00C8CF] hover:text-white group-hover:scale-105 transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver Productos
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Banner promocional especial */}
        <div className="bg-gradient-to-r from-[#00C8CF] to-[#00A5B0] rounded-2xl p-8 text-center">
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
              className="bg-white text-[#00C8CF] hover:bg-gray-100"
            >
              Catálogo Completo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#00C8CF]"
            >
              Contactar Asesor
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandBanners


import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useAdminStore } from '@/store/useAdminStore'
import { useStore } from '@/store/useStore'
import { ShoppingCart, Star, Download } from 'lucide-react'

const SoftwareSection = () => {
  const { products } = useAdminStore()
  const { addToCart } = useStore()
  
  const softwareProducts = products.filter(p => p.category === 'software' && p.featured).slice(0, 3)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Licencias de Software</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Software empresarial original con licencias legales y soporte 
            técnico especializado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {softwareProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.featured && (
                    <Badge className="absolute top-2 right-2 bg-[#00C8CF] text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {product.name}
                </CardTitle>
                {product.brand && (
                  <Badge variant="secondary" className="w-fit">
                    {product.brand}
                  </Badge>
                )}
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-[#00C8CF] rounded-full" />
                    <span className="text-sm text-gray-700">Licencia original</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-[#00C8CF] rounded-full" />
                    <span className="text-sm text-gray-700">Soporte técnico incluido</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#00C8CF] rounded-full" />
                    <span className="text-sm text-gray-700">Instalación gratuita</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-[#00C8CF]">
                      ${product.price.toLocaleString()} COP
                    </span>
                    <span className="text-sm text-gray-500 ml-2">/ licencia</span>
                  </div>
                  <Badge variant="outline" className="text-green-600">
                    Disponible
                  </Badge>
                </div>
                
                <div className="flex space-x-2">
                  <Button 
                    onClick={() => addToCart(product)}
                    className="flex-1 bg-[#00C8CF] hover:bg-[#00A5B0] text-white"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Adquirir Licencia
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-[#00C8CF] text-[#00C8CF] hover:bg-[#00C8CF] hover:text-white"
                  >
                    Info
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="border-[#00C8CF] text-[#00C8CF] hover:bg-[#00C8CF] hover:text-white"
          >
            Ver Todas las Licencias
          </Button>
        </div>
      </div>
    </section>
  )
}

export default SoftwareSection

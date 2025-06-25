
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useAdminStore } from '@/store/useAdminStore'
import { useStore } from '@/store/useStore'
import { ShoppingCart, Star } from 'lucide-react'

const HardwareSection = () => {
  const { products } = useAdminStore()
  const { addToCart } = useStore()
  
  const hardwareProducts = products.filter(p => p.category === 'hardware' && p.featured).slice(0, 3)

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Hardware Empresarial</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Equipos de alta gama y componentes tecnológicos para potenciar 
            el rendimiento de tu empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {hardwareProducts.map((product) => (
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
                      Destacado
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
                
                {product.specifications && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Especificaciones:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {Object.entries(product.specifications).slice(0, 3).map(([key, value]) => (
                        <li key={key} className="flex justify-between">
                          <span>{key}:</span>
                          <span className="font-medium">{value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-[#00C8CF]">
                    ${product.price.toLocaleString()} COP
                  </span>
                  <span className="text-sm text-gray-500">
                    Stock: {product.stock}
                  </span>
                </div>
                
                <div className="flex space-x-2">
                  <Button 
                    onClick={() => addToCart(product)}
                    className="flex-1 bg-[#00C8CF] hover:bg-[#00A5B0] text-white"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Agregar al Carrito
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-[#00C8CF] text-[#00C8CF] hover:bg-[#00C8CF] hover:text-white"
                  >
                    Ver Detalles
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
            Ver Todo el Hardware
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HardwareSection

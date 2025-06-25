
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart, Star } from 'lucide-react'
import { useStore, Product } from '@/store/useStore'

// Datos de ejemplo (temporales hasta conectar con backend)
const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Laptop HP EliteBook 840',
    sku: 'HP-EB840-001',
    description: 'Laptop empresarial con procesador Intel Core i7, 16GB RAM, 512GB SSD',
    price: 3500000,
    stock: 15,
    category: 'Hardware',
    images: ['https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400'],
    brand: 'HP'
  },
  {
    id: '2',
    name: 'Monitor Dell UltraSharp 27"',
    sku: 'DELL-US27-001',
    description: 'Monitor 4K UltraSharp de 27 pulgadas para profesionales',
    price: 1200000,
    stock: 8,
    category: 'Hardware',
    images: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400'],
    brand: 'Dell'
  },
  {
    id: '3',
    name: 'Impresora Multifuncional Canon',
    sku: 'CANON-MF001',
    description: 'Impresora multifuncional láser con escáner y copiadora',
    price: 800000,
    stock: 12,
    category: 'Hardware',
    images: ['https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400'],
    brand: 'Canon'
  },
  {
    id: '4',
    name: 'Software Office 365 Business',
    sku: 'MS-O365-BUS',
    description: 'Suite completa de productividad Microsoft Office 365 Business',
    price: 350000,
    stock: 50,
    category: 'Software',
    images: ['https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400'],
    brand: 'Microsoft'
  }
]

const FeaturedProducts = () => {
  const { addToCart } = useStore()

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const handleAddToCart = (product: Product) => {
    addToCart(product)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Productos Destacados</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra selección de productos más populares con la mejor relación calidad-precio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sampleProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 right-2 bg-[#00C8CF]">
                    {product.category}
                  </Badge>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">(4.5)</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-[#00C8CF]">{formatPrice(product.price)}</p>
                      <p className="text-sm text-gray-500">Stock: {product.stock}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="p-4 pt-0">
                <Button 
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-[#00C8CF] hover:bg-[#00A5B0] text-white"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Agregar al Carrito
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-[#00C8CF] text-[#00C8CF] hover:bg-[#00C8CF] hover:text-white">
            Ver Todos los Productos
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts

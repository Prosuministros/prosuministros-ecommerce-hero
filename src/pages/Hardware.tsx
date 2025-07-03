import Header from '@/components/Header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Monitor, 
  Server, 
  Laptop, 
  Printer,
  Wifi,
  HardDrive,
  ShoppingCart,
  Star
} from 'lucide-react'
import { useStore } from '@/store/useStore'

const categorias = [
  {
    icon: Laptop,
    title: 'Equipos de Cómputo',
    description: 'Laptops, desktops y workstations empresariales',
    productos: '150+ productos'
  },
  {
    icon: Server,
    title: 'Servidores',
    description: 'Servidores rack, tower y blade para empresas',
    productos: '80+ productos'
  },
  {
    icon: Monitor,
    title: 'Monitores',
    description: 'Monitores profesionales y gaming',
    productos: '120+ productos'
  },
  {
    icon: Printer,
    title: 'Impresoras',
    description: 'Impresoras láser, multifuncionales y plotters',
    productos: '90+ productos'
  },
  {
    icon: Wifi,
    title: 'Equipos de Red',
    description: 'Switches, routers, access points y firewalls',
    productos: '200+ productos'
  },
  {
    icon: HardDrive,
    title: 'Almacenamiento',
    description: 'Discos duros, SSD y sistemas de backup',
    productos: '180+ productos'
  }
]

const productosDestacados = [
  {
    id: 'hp-laptop-15',
    name: 'HP Laptop 15-dy2074ms',
    sku: 'HP-LT-15-2074',
    description: 'Laptop empresarial con procesador Intel Core i5, 8GB RAM, 256GB SSD',
    price: 1850000,
    stock: 25,
    category: 'Laptops',
    images: ['/placeholder.svg'],
    brand: 'HP',
    rating: 4.5,
    reviews: 24
  },
  {
    id: 'dell-server-r740',
    name: 'Dell PowerEdge R740',
    sku: 'DELL-SRV-R740',
    description: 'Servidor rack 2U con procesadores Intel Xeon, ideal para virtualización',
    price: 18500000,
    stock: 8,
    category: 'Servidores',
    images: ['/placeholder.svg'],
    brand: 'Dell',
    rating: 4.8,
    reviews: 12
  },
  {
    id: 'cisco-switch-24p',
    name: 'Cisco Catalyst 2960-24TC-L',
    sku: 'CISCO-SW-2960-24',
    description: 'Switch administrable 24 puertos Gigabit Ethernet',
    price: 2800000,
    stock: 15,
    category: 'Redes',
    images: ['/placeholder.svg'],
    brand: 'Cisco',
    rating: 4.7,
    reviews: 18
  },
  {
    id: 'hp-printer-m404',
    name: 'HP LaserJet Pro M404dn',
    sku: 'HP-PRT-M404',
    description: 'Impresora láser monocromática con dúplex automático',
    price: 650000,
    stock: 30,
    category: 'Impresoras',
    images: ['/placeholder.svg'],
    brand: 'HP',
    rating: 4.3,
    reviews: 35
  }
]

const Hardware = () => {
  const { addToCart } = useStore()

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#00C8CF] to-[#161052]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hardware Empresarial
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Equipos de cómputo, servidores y tecnología de las mejores marcas 
              para potenciar tu negocio
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => window.open('https://zhzwhe-up.myshopify.com/collections/frontpage', '_blank')}
              className="bg-white text-[#00C8CF] hover:bg-gray-100"
            >
              Ver Catálogo Completo
            </Button>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Categorías de Hardware
            </h2>
            <p className="text-lg text-gray-600">
              Encuentra la tecnología que necesitas para tu empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria, index) => {
              const IconComponent = categoria.icon
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00C8CF] to-[#00A5B0] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {categoria.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-4">
                      {categoria.description}
                    </p>
                    <Badge variant="secondary" className="bg-[#00C8CF]/10 text-[#00C8CF]">
                      {categoria.productos}
                    </Badge>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Productos Destacados
            </h2>
            <p className="text-lg text-gray-600">
              Los equipos más solicitados por nuestros clientes empresariales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productosDestacados.map((producto) => (
              <Card key={producto.id} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="aspect-square bg-gray-100 rounded-t-lg flex items-center justify-center">
                    <img 
                      src={producto.images[0]} 
                      alt={producto.name}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                </CardHeader>
                
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {producto.brand}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">{producto.rating}</span>
                      <span className="text-sm text-gray-400">({producto.reviews})</span>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {producto.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {producto.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-[#00C8CF]">
                      ${producto.price.toLocaleString()} COP
                    </span>
                    <span className="text-sm text-gray-500">
                      Stock: {producto.stock}
                    </span>
                  </div>
                  
                  <Button 
                    onClick={() => addToCart(producto)}
                    className="w-full bg-[#00C8CF] hover:bg-[#00A5B0] text-white"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Agregar al Carrito
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              onClick={() => window.open('https://zhzwhe-up.myshopify.com/collections/frontpage', '_blank')}
              className="bg-[#00C8CF] hover:bg-[#00A5B0] text-white"
            >
              Ver Todos los Productos
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hardware

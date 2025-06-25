
import Header from '@/components/Header'
import FeaturedProducts from '@/components/FeaturedProducts'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  Search, 
  Filter, 
  Grid3X3,
  List,
  SortAsc
} from 'lucide-react'
import { useState } from 'react'

const Ecommerce = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const categorias = [
    { name: 'Todos', count: 850 },
    { name: 'Laptops', count: 120 },
    { name: 'Servidores', count: 45 },
    { name: 'Monitores', count: 80 },
    { name: 'Impresoras', count: 65 },
    { name: 'Redes', count: 150 },
    { name: 'Almacenamiento', count: 90 },
    { name: 'Software', count: 200 },
    { name: 'Accesorios', count: 100 }
  ]

  const filtros = [
    {
      title: 'Marca',
      options: ['HP', 'Dell', 'Lenovo', 'Cisco', 'Microsoft', 'Adobe']
    },
    {
      title: 'Rango de Precio',
      options: ['$0 - $500.000', '$500.000 - $1.000.000', '$1.000.000 - $5.000.000', '$5.000.000+']
    },
    {
      title: 'Disponibilidad',
      options: ['En stock', 'Por encargo', 'Próximamente']
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-[#00C8CF] to-[#161052]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tienda Online
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Encuentra todo el hardware y software que necesitas para tu empresa
            </p>
            
            {/* Buscador */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Buscar productos, marcas, categorías..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-3 text-lg bg-white text-gray-900 border-0"
                />
                <Button 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#00C8CF] hover:bg-[#00A5B0]"
                >
                  Buscar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar de Filtros */}
          <aside className="lg:w-1/4">
            <div className="bg-white border rounded-lg p-6 sticky top-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categorías</h3>
              <ul className="space-y-2 mb-6">
                {categorias.map((categoria, index) => (
                  <li key={index}>
                    <button className="flex items-center justify-between w-full p-2 text-left hover:bg-gray-50 rounded-md transition-colors">
                      <span className="text-gray-700">{categoria.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {categoria.count}
                      </Badge>
                    </button>
                  </li>
                ))}
              </ul>

              {filtros.map((filtro, filtroIndex) => (
                <div key={filtroIndex} className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">{filtro.title}</h4>
                  <div className="space-y-2">
                    {filtro.options.map((opcion, opcionIndex) => (
                      <label key={opcionIndex} className="flex items-center">
                        <input 
                          type="checkbox" 
                          className="mr-2 rounded border-gray-300 text-[#00C8CF] focus:ring-[#00C8CF]" 
                        />
                        <span className="text-sm text-gray-600">{opcion}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              <Button className="w-full bg-[#00C8CF] hover:bg-[#00A5B0] text-white">
                <Filter className="w-4 h-4 mr-2" />
                Aplicar Filtros
              </Button>
            </div>
          </aside>

          {/* Contenido Principal */}
          <main className="lg:w-3/4">
            {/* Controles de Vista */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">850 productos encontrados</span>
                <div className="flex items-center space-x-2">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className={viewMode === 'grid' ? 'bg-[#00C8CF] hover:bg-[#00A5B0]' : ''}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className={viewMode === 'list' ? 'bg-[#00C8CF] hover:bg-[#00A5B0]' : ''}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Ordenar por:</span>
                <Button variant="outline" size="sm">
                  <SortAsc className="w-4 h-4 mr-2" />
                  Más Relevantes
                </Button>
              </div>
            </div>

            {/* Productos */}
            <FeaturedProducts />

            {/* Paginación */}
            <div className="flex items-center justify-center space-x-2 mt-12">
              <Button variant="outline" disabled>
                Anterior
              </Button>
              <Button className="bg-[#00C8CF] hover:bg-[#00A5B0] text-white">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <span className="px-2">...</span>
              <Button variant="outline">15</Button>
              <Button variant="outline">
                Siguiente
              </Button>
            </div>
          </main>
        </div>
      </div>

      {/* Banner Promocional */}
      <section className="py-16 bg-gradient-to-r from-[#00C8CF] to-[#00A5B0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            ¿No encuentras lo que buscas?
          </h3>
          <p className="text-xl text-white/90 mb-8">
            Contáctanos y te ayudamos a encontrar el producto perfecto para tu empresa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => {
                const whatsappUrl = 'https://wa.me/573183612161?text=Hola, necesito ayuda para encontrar un producto específico'
                window.open(whatsappUrl, '_blank')
              }}
              className="bg-white text-[#00C8CF] hover:bg-gray-100"
            >
              WhatsApp: +57 318 361 2161
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.location.href = '/contacto'}
              className="border-white text-white hover:bg-white hover:text-[#00C8CF]"
            >
              Formulario de Contacto
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Ecommerce

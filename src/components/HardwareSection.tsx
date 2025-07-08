import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Server, 
  Network, 
  Computer, 
  Video, 
  Printer
} from 'lucide-react'

const HardwareSection = () => {
  const hardwareCategories = [
    {
      id: 1,
      title: "Servidores",
      icon: Server,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      description: "Servidores de alta performance para empresas"
    },
    {
      id: 2,
      title: "Networking",
      icon: Network,
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop",
      description: "Equipos de red y conectividad empresarial"
    },
    {
      id: 3,
      title: "Computo",
      icon: Computer,
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
      description: "Equipos de cómputo para oficina y trabajo"
    },
    {
      id: 4,
      title: "Video conferencia",
      icon: Video,
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop",
      description: "Soluciones de videoconferencia empresarial"
    },
    {
      id: 5,
      title: "Impresión",
      icon: Printer,
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop",
      description: "Equipos de impresión y digitalización"
    }
  ]

  const whatsappNumber = '573183612161'
  const whatsappMessage = 'Hola, me interesa conocer más sobre sus servicios de hardware'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Portafolio de Hardware</h2>
          <div className="w-16 h-1 bg-[#00C8CF] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Ofrecemos productos y soluciones tecnológicas de alta calidad para asegurar 
            el rendimiento y la confiabilidad de tu negocio. Nuestro portafolio:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {hardwareCategories.map((category) => {
            const IconComponent = category.icon
            return (
              <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-2 left-2">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-4 text-center">
                  <CardTitle className="text-sm font-semibold text-gray-900 mb-2">
                    {category.title}
                  </CardTitle>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-[#00C8CF] hover:bg-[#00A5B0] text-white"
            onClick={() => window.open(whatsappUrl, '_blank')}
          >
            Solicitar Cotización
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HardwareSection

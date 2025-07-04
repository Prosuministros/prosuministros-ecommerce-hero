import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Palette, 
  Building2, 
  Shield, 
  ShieldCheck, 
  MoreHorizontal 
} from 'lucide-react'

const SoftwareSection = () => {
  const softwareCategories = [
    {
      id: 1,
      title: "Diseño",
      icon: Palette,
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=400&h=300&fit=crop",
      products: ["Adobe", "Autodesk"]
    },
    {
      id: 2,
      title: "Microsoft",
      icon: Building2,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      products: ["O365", "Azure"]
    },
    {
      id: 3,
      title: "Ciberseguridad",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=300&fit=crop",
      products: ["AWS", "Check Point", "Trellix", "Acronis", "Hilistone"]
    },
    {
      id: 4,
      title: "Antivirus",
      icon: ShieldCheck,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
      products: ["McAfee", "Kaspersky", "ESET", "Bitdefender"]
    },
    {
      id: 5,
      title: "Otros",
      icon: MoreHorizontal,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      products: ["Oracle", "Sophos"]
    }
  ]

  const whatsappNumber = '573183612161'
  const whatsappMessage = 'Hola, me interesa conocer más sobre sus servicios de software'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Portafolio de Software</h2>
          <div className="w-16 h-1 bg-[#00C8CF] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Desarrollamos soluciones a medida para optimizar tus operaciones y mejorar la eficiencia. 
            Nuestro portafolio incluye:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {softwareCategories.map((category) => {
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 left-2">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute bottom-2 right-2">
                      <CardTitle className="text-sm font-bold text-white">
                        {category.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-4">
                  <div className="space-y-2">
                    {category.products.map((product, index) => (
                      <div key={index} className="text-sm text-gray-600 text-center py-1">
                        {product}
                      </div>
                    ))}
                  </div>
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

export default SoftwareSection

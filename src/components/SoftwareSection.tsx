
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
      color: "bg-purple-600",
      products: ["Adobe", "Autodesk"]
    },
    {
      id: 2,
      title: "Microsoft",
      icon: Building2,
      color: "bg-blue-600",
      products: ["O365", "Azure"]
    },
    {
      id: 3,
      title: "Ciberseguridad",
      icon: Shield,
      color: "bg-red-600",
      products: ["AWS", "Check Point", "Trellix", "Acronis", "Hilistone"]
    },
    {
      id: 4,
      title: "Antivirus",
      icon: ShieldCheck,
      color: "bg-green-600",
      products: ["McAfee", "Kaspersky", "ESET", "Bitdefender"]
    },
    {
      id: 5,
      title: "Otros",
      icon: MoreHorizontal,
      color: "bg-gray-600",
      products: ["Oracle", "Sophos"]
    }
  ]

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
                  <div className={`${category.color} text-white p-6 rounded-t-lg text-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
                    <IconComponent className="w-8 h-8 mx-auto mb-3 relative z-10" />
                    <CardTitle className="text-lg font-bold text-white relative z-10">
                      {category.title}
                    </CardTitle>
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
          >
            Ver Todas las Licencias
          </Button>
        </div>
      </div>
    </section>
  )
}

export default SoftwareSection

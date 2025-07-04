import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Server, Clock, Cable, Cctv, Zap, Printer } from 'lucide-react'

const services = [
  {
    icon: Server,
    title: 'Diagnóstico, instalación y configuración de infraestructura TI',
    description: 'Evaluamos y dejamos operativa tu red, servidores, estaciones de trabajo y periféricos.',
    features: []
  },
  {
    icon: Clock,
    title: 'Bolsa de horas de soporte técnico o ingeniería especializada',
    description: 'Accede a un equipo técnico experto para resolver incidentes, ejecutar mejoras o atender necesidades específicas cuando lo necesites.',
    features: []
  },
  {
    icon: Cable,
    title: 'Cableado estructurado',
    description: 'Diseñamos, instalamos y certificamos redes físicas de datos, voz y energía para garantizar conectividad estable y segura.',
    features: []
  },
  {
    icon: Cctv,
    title: 'Instalación de Circuito Cerrado de Televisión (CCTV)',
    description: 'Implementamos sistemas de videovigilancia para protección, monitoreo y control de tus espacios físicos.',
    features: []
  },
  {
    icon: Zap,
    title: 'Diagnóstico, mantenimiento preventivo y correctivo de UPS',
    description: 'Protege tus equipos frente a fallos eléctricos con un mantenimiento adecuado y soporte especializado.',
    features: []
  },
  {
    icon: Printer,
    title: 'Diagnóstico, mantenimiento preventivo y correctivo de impresoras',
    description: 'Asegura el funcionamiento óptimo de tus equipos de impresión con nuestras soluciones técnicas.',
    features: []
  },
]

const whatsappNumber = '573183612161'
const whatsappMessage = 'Hola, me interesa conocer más sobre sus servicios'
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones especializadas para optimizar tu infraestructura tecnológica y procesos operativos:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00C8CF] to-[#00A5B0] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-[#00C8CF] text-[#00C8CF] hover:bg-[#00C8CF] hover:text-white mt-auto"
                    onClick={() => window.open(whatsappUrl, '_blank')}
                  >
                    Más Información
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-[#00C8CF] hover:bg-[#00A5B0] text-white" onClick={() => window.open(whatsappUrl, '_blank')}>
            Solicitar Cotización
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Services

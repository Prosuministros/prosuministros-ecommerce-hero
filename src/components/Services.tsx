
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Server, 
  Shield, 
  Cloud, 
  Headphones, 
  Settings, 
  Database 
} from 'lucide-react'

const services = [
  {
    icon: Server,
    title: 'Infraestructura IT',
    description: 'Diseño e implementación de infraestructura tecnológica escalable y segura para tu empresa.',
    features: ['Servidores empresariales', 'Redes corporativas', 'Virtualización']
  },
  {
    icon: Shield,
    title: 'Ciberseguridad',
    description: 'Protección integral contra amenazas digitales con las mejores prácticas de seguridad.',
    features: ['Firewall avanzado', 'Antivirus empresarial', 'Auditorías de seguridad']
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    description: 'Migración y gestión de servicios en la nube para mayor flexibilidad y escalabilidad.',
    features: ['Azure & AWS', 'Backup en la nube', 'Monitoreo 24/7']
  },
  {
    icon: Database,
    title: 'Gestión de Datos',
    description: 'Administración profesional de bases de datos y sistemas de información empresarial.',
    features: ['SQL Server', 'Oracle Database', 'Backup automatizado']
  },
  {
    icon: Settings,
    title: 'Soporte Técnico',
    description: 'Mantenimiento preventivo y correctivo de equipos e infraestructura tecnológica.',
    features: ['Mesa de ayuda', 'Mantenimiento on-site', 'Soporte remoto']
  },
  {
    icon: Headphones,
    title: 'Consultoría TI',
    description: 'Asesoría especializada para la transformación digital de tu organización.',
    features: ['Análisis de procesos', 'Optimización IT', 'Roadmap tecnológico']
  }
]

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones tecnológicas integrales diseñadas para impulsar 
            la eficiencia y productividad de tu empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00C8CF] to-[#00A5B0] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-[#00C8CF] rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-[#00C8CF] text-[#00C8CF] hover:bg-[#00C8CF] hover:text-white"
                  >
                    Más Información
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-[#00C8CF] hover:bg-[#00A5B0] text-white">
            Solicitar Cotización Personalizada
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Services


import Header from '@/components/Header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Server, 
  Shield, 
  Cloud, 
  Headphones, 
  Settings, 
  Database,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const serviciosDetallados = [
  {
    icon: Server,
    title: 'Infraestructura IT 2',
    description: 'Diseño e implementación de infraestructura tecnológica escalable y segura para tu empresa.',
    features: [
      'Servidores empresariales Dell, HP, Lenovo',
      'Redes corporativas con equipos Cisco y Ubiquiti',
      'Virtualización con VMware y Hyper-V',
      'Almacenamiento SAN y NAS empresarial',
      'Implementación de centros de datos'
    ],
    precio: 'Desde $2,500,000 COP'
  },
  {
    icon: Shield,
    title: 'Ciberseguridad',
    description: 'Protección integral contra amenazas digitales con las mejores prácticas de seguridad.',
    features: [
      'Firewall de nueva generación Fortinet y SonicWall',
      'Antivirus empresarial Bitdefender y Kaspersky',
      'Auditorías de seguridad y penetration testing',
      'Implementación de políticas de seguridad',
      'Monitoreo 24/7 de amenazas'
    ],
    precio: 'Desde $800,000 COP/mes'
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    description: 'Migración y gestión de servicios en la nube para mayor flexibilidad y escalabilidad.',
    features: [
      'Migración a Microsoft Azure y AWS',
      'Office 365 y Google Workspace',
      'Backup automático en la nube',
      'Disaster Recovery como servicio',
      'Monitoreo y optimización continua'
    ],
    precio: 'Desde $150,000 COP/usuario/mes'
  },
  {
    icon: Database,
    title: 'Gestión de Datos',
    description: 'Administración profesional de bases de datos y sistemas de información empresarial.',
    features: [
      'Implementación SQL Server y Oracle',
      'Optimización de consultas y rendimiento',
      'Backup automatizado y restauración',
      'Migración de bases de datos legacy',
      'Business Intelligence con Power BI'
    ],
    precio: 'Desde $1,200,000 COP'
  },
  {
    icon: Settings,
    title: 'Soporte Técnico',
    description: 'Mantenimiento preventivo y correctivo de equipos e infraestructura tecnológica.',
    features: [
      'Mesa de ayuda remota y presencial',
      'Mantenimiento preventivo programado',
      'Soporte on-site en Bogotá y alrededores',
      'Gestión de activos tecnológicos',
      'SLA garantizado según plan contratado'
    ],
    precio: 'Desde $80,000 COP/usuario/mes'
  },
  {
    icon: Headphones,
    title: 'Consultoría TI',
    description: 'Asesoría especializada para la transformación digital de tu organización.',
    features: [
      'Análisis de procesos y digitalización',
      'Auditoría de infraestructura actual',
      'Roadmap de transformación digital',
      'Selección de tecnologías adecuadas',
      'Capacitación y change management'
    ],
    precio: 'Desde $2,000,000 COP/proyecto'
  }
]

const Servicios = () => {
  const whatsappNumber = '573183612161'
  const whatsappMessage = 'Hola, me interesa conocer más sobre sus servicios tecnológicos'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#00C8CF] to-[#161052]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Servicios Tecnológicos
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Soluciones integrales de TI para empresas que buscan eficiencia, 
            seguridad y crecimiento sostenible
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            onClick={() => window.open(whatsappUrl, '_blank')}
            className="bg-white text-[#00C8CF] hover:bg-gray-100"
          >
            Solicitar Cotización
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Servicios Detallados */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestros Servicios Especializados
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cada servicio está diseñado para cubrir las necesidades específicas 
              de tu empresa con tecnología de vanguardia
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviciosDetallados.map((servicio, index) => {
              const IconComponent = servicio.icon
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#00C8CF] to-[#00A5B0] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-semibold text-gray-900">
                          {servicio.title}
                        </CardTitle>
                        <p className="text-[#00C8CF] font-semibold">{servicio.precio}</p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {servicio.description}
                    </p>
                    
                    <ul className="space-y-3 mb-6">
                      {servicio.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-[#00C8CF] mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-[#00C8CF] text-[#00C8CF] hover:bg-[#00C8CF] hover:text-white"
                      onClick={() => window.open(whatsappUrl, '_blank')}
                    >
                      Solicitar Información
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Necesitas una solución personalizada?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Nuestro equipo de expertos está listo para analizar tus necesidades 
            y diseñar la solución tecnológica perfecta para tu empresa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#00C8CF] hover:bg-[#00A5B0] text-white"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              WhatsApp: +57 318 361 2161
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.location.href = '/contacto'}
            >
              Formulario de Contacto
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Servicios

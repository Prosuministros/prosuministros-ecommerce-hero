
import Header from '@/components/Header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Shield, 
  Database, 
  Cloud, 
  Monitor,
  Users,
  FileText,
  CheckCircle,
  Download
} from 'lucide-react'

const categoriasSoftware = [
  {
    icon: Shield,
    title: 'Seguridad',
    description: 'Antivirus, firewalls y soluciones de ciberseguridad',
    productos: '25+ licencias'
  },
  {
    icon: Database,
    title: 'Bases de Datos',
    description: 'SQL Server, Oracle, MySQL y soluciones NoSQL',
    productos: '15+ licencias'
  },
  {
    icon: Cloud,
    title: 'Productividad',
    description: 'Office 365, Google Workspace y herramientas colaborativas',
    productos: '30+ licencias'
  },
  {
    icon: Monitor,
    title: 'Sistemas Operativos',
    description: 'Windows Server, Ubuntu Server y licencias de SO',
    productos: '20+ licencias'
  },
  {
    icon: Users,
    title: 'Gestión Empresarial',
    description: 'ERP, CRM y software de gestión de recursos',
    productos: '40+ licencias'
  },
  {
    icon: FileText,
    title: 'Diseño y Desarrollo',
    description: 'Adobe Creative Suite, AutoCAD y herramientas de desarrollo',
    productos: '35+ licencias'
  }
]

const softwareDestacado = [
  {
    id: 'office365-business',
    name: 'Microsoft Office 365 Business Premium',
    categoria: 'Productividad',
    descripcion: 'Suite completa de productividad con Word, Excel, PowerPoint, Teams y más',
    precio: 45000,
    periodo: 'usuario/mes',
    caracteristicas: [
      '1TB de almacenamiento OneDrive',
      'Microsoft Teams incluido',
      'Exchange Online con 50GB',
      'SharePoint y Power Platform',
      'Seguridad avanzada incluida'
    ],
    licencias: 'Disponible',
    popular: true
  },
  {
    id: 'windows-server-2022',
    name: 'Windows Server 2022 Standard',
    categoria: 'Sistema Operativo',
    descripcion: 'Sistema operativo servidor con características empresariales avanzadas',
    precio: 2800000,
    periodo: 'licencia',
    caracteristicas: [
      'Hasta 2 procesadores físicos',
      'Virtualización Hyper-V',
      'Active Directory incluido',
      'Contenedores Windows incluidos',
      'Seguridad multicapa'
    ],
    licencias: 'Disponible'
  },
  {
    id: 'kaspersky-endpoint',
    name: 'Kaspersky Endpoint Security',
    categoria: 'Seguridad',
    descripcion: 'Protección empresarial completa contra malware y amenazas avanzadas',
    precio: 28000,
    periodo: 'dispositivo/año',
    caracteristicas: [
      'Protección en tiempo real',
      'Control de aplicaciones',
      'Firewall personal',
      'Protección de navegación web',
      'Gestión centralizada'
    ],
    licencias: 'Disponible'
  },
  {
    id: 'sql-server-2022',
    name: 'SQL Server 2022 Standard',
    categoria: 'Base de Datos',
    descripcion: 'Base de datos empresarial con características avanzadas de análisis',
    precio: 8500000,
    periodo: 'licencia',
    caracteristicas: [
      'Soporte para Big Data',
      'Always Encrypted',
      'In-Memory OLTP',
      'Advanced Analytics',
      'Backup automático'
    ],
    licencias: 'Disponible'
  }
]

const Software = () => {
  const whatsappNumber = '573183612161'
  const whatsappMessage = 'Hola, me interesa conocer más sobre las licencias de software'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#00C8CF] to-[#161052]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Licencias de Software
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Licencias originales de software empresarial para potenciar 
              la productividad y seguridad de tu organización
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="bg-white text-[#00C8CF] hover:bg-gray-100"
              >
                Solicitar Cotización
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#00C8CF]"
              >
                Ver Catálogo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Categorías de Software
            </h2>
            <p className="text-lg text-gray-600">
              Licencias originales de las mejores marcas del mercado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoriasSoftware.map((categoria, index) => {
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

      {/* Software Destacado */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Software Más Solicitado
            </h2>
            <p className="text-lg text-gray-600">
              Las licencias más populares entre nuestros clientes empresariales
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {softwareDestacado.map((software, index) => (
              <Card key={software.id} className={`group hover:shadow-xl transition-all duration-300 ${software.popular ? 'ring-2 ring-[#00C8CF]' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-[#00C8CF]/10 text-[#00C8CF]">
                      {software.categoria}
                    </Badge>
                    {software.popular && (
                      <Badge className="bg-[#00C8CF] text-white">
                        Más Popular
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 mb-2">
                    {software.name}
                  </CardTitle>
                  <p className="text-gray-600">
                    {software.descripcion}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-6">
                    <div className="flex items-baseline space-x-2 mb-4">
                      <span className="text-2xl font-bold text-[#00C8CF]">
                        ${software.precio.toLocaleString()} COP
                      </span>
                      <span className="text-gray-500">/ {software.periodo}</span>
                    </div>
                    
                    <ul className="space-y-2">
                      {software.caracteristicas.map((caracteristica, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-[#00C8CF] mr-3 flex-shrink-0" />
                          {caracteristica}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col space-y-3">
                    <Button 
                      onClick={() => window.open(whatsappUrl, '_blank')}
                      className="w-full bg-[#00C8CF] hover:bg-[#00A5B0] text-white"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Solicitar Licencia
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-[#00C8CF] text-[#00C8CF] hover:bg-[#00C8CF] hover:text-white"
                    >
                      Más Información
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            ¿Por qué elegir nuestras licencias?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#00C8CF]/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-[#00C8CF]" />
              </div>
              <h4 className="font-semibold mb-2">100% Originales</h4>
              <p className="text-gray-600">Todas nuestras licencias son originales y están respaldadas por los fabricantes</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#00C8CF]/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-[#00C8CF]" />
              </div>
              <h4 className="font-semibold mb-2">Soporte Incluido</h4>
              <p className="text-gray-600">Instalación y configuración incluida con soporte técnico especializado</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#00C8CF]/10 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-8 h-8 text-[#00C8CF]" />
              </div>
              <h4 className="font-semibold mb-2">Facturación Legal</h4>
              <p className="text-gray-600">Facturación electrónica válida para deducción de impuestos</p>
            </div>
          </div>

          <div className="mt-12">
            <Button 
              size="lg" 
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="bg-[#00C8CF] hover:bg-[#00A5B0] text-white"
            >
              Contactar Asesor Comercial
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Software

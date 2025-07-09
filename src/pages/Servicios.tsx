import Header from '@/components/Header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react';
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

const extraInfo = [
  'Contamos con ingenieros certificados y experiencia en proyectos de alta complejidad. Garantizamos la continuidad operativa y soporte post-implementación.',
  'Nuestros expertos en ciberseguridad realizan análisis proactivos y capacitación para tu equipo, asegurando una protección integral.',
  'Acompañamos la migración a la nube de principio a fin, optimizando costos y maximizando la seguridad de tus datos.',
  'Ofrecemos monitoreo continuo y optimización de bases de datos, asegurando el máximo rendimiento y disponibilidad.',
  'Soporte técnico personalizado, con atención prioritaria y reportes periódicos de estado de tus activos tecnológicos.',
  'Consultores con experiencia en transformación digital para empresas de todos los tamaños. Te ayudamos a innovar y crecer.',
];

const Servicios = () => {
  // Estado para controlar el flip de cada tarjeta
  // (Elimina el estado flipped)

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
          {/* Botón de cotización eliminado porque ya no se usa WhatsApp */}
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

          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
            {serviciosDetallados.map((servicio, index) => {
              const IconComponent = servicio.icon
              return (
                <Card key={index} className="w-full group hover:shadow-xl transition-all duration-300 mb-6 sm:mb-0">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#00C8CF] to-[#00A5B0] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-2 sm:mb-0">
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <div className="text-center sm:text-left">
                        <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900">
                          {servicio.title}
                        </CardTitle>
                        <p className="text-[#00C8CF] font-semibold">{servicio.precio}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 leading-relaxed text-center sm:text-left">
                      {servicio.description}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {servicio.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-[#00C8CF] mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      className="w-full py-3 border-[#00C8CF] text-[#00C8CF] hover:bg-[#00C8CF] hover:text-white"
                      // Aquí puedes poner la acción que desees para 'Más Información', o dejarlo sin acción
                    >
                      Más Información
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
              onClick={() => window.open('https://wa.me/573183612161?text=Hola,%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios%20tecnol%C3%B3gicos', '_blank')}
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
      {/* Estilos para el flip 3D */}
      <style>{`
        .flip-card {
          background-color: transparent;
          width: 100%;
          height: 100%;
          perspective: 1200px;
          min-height: 420px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.7s cubic-bezier(.4,2,.6,1);
          transform-style: preserve-3d;
        }
        .flip-card-inner.flipped {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          top: 0;
          left: 0;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  )
}

export default Servicios

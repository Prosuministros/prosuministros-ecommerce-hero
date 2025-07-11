import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Server, Clock, Cable, Cctv, Zap, Printer } from 'lucide-react'
import React, { useState } from 'react';

const services = [
  {
    icon: Server,
    title: 'Diagnóstico, instalación y configuración de infraestructura TI',
    description: 'Evaluamos y dejamos operativa tu red, servidores, estaciones de trabajo y periféricos.',
    features: [],
    extraInfo: `Ofrecemos servicios especializados en instalación y configuración de servidores, personalizados según los requerimientos de cada organización. Nuestro equipo de ingenieros altamente capacitados asegura un rendimiento óptimo y una integración eficiente, tanto en entornos Windows Server como en diversas distribuciones de Linux.\n\nOfrecemos asesoría experta para definir la solución tecnológica más adecuada, con implementaciones on-premise, híbridas y migraciones hacia la nube pública de Microsoft Azure. Nuestra experiencia garantiza una transición fluida y segura hacia infraestructuras modernas y escalables.`
  },
  {
    icon: Clock,
    title: 'Bolsa de horas de soporte técnico o ingeniería especializada',
    description: 'Accede a un equipo técnico experto para resolver incidentes, ejecutar mejoras o atender necesidades específicas cuando lo necesites.',
    features: [],
    extraInfo: `Ofrecemos soporte técnico integral para organizaciones sin personal especializado en TI, con atención remota o presencial. Identificamos fallas en equipos de computo, así como reparación e instalación de aplicaciones, antivirus y herramientas de ofimática. Nuestra asistencia personalizada nos permite identificar y abordar las fallas y debilidades de su organización, proporcionando soluciones a la medida para mejorar su productividad.

Contamos con contratos de mantenimiento flexibles y asistencia continua de lunes a viernes. Además, implementamos medidas de ciberseguridad, respaldos en la nube y protección perimetral para prevenir fraudes, pérdida de datos y suplantación de identidad.`
  },
  {
    icon: Cable,
    title: 'Cableado estructurado',
    description: 'Diseñamos, instalamos y certificamos redes físicas de datos, voz y energía para garantizar conectividad estable y segura.',
    features: [],
    extraInfo: `Ofrecemos soluciones profesionales en instalación de cableado estructurado, diseñadas para garantizar la conectividad eficiente, segura y escalable de redes de voz, datos y video. Nuestro servicio abarca el diseño, tendido, canalización, certificación y organización del cableado, cumpliendo con las normativas internacionales y los más altos estándares de calidad.

Contamos con personal técnico especializado y materiales certificados que aseguran un desempeño óptimo y confiable de su infraestructura tecnológica. Diseñamos soluciones a medida, adaptadas a las necesidades presentes y futuras de su organización, permitiendo una administración eficiente de la red y facilitando futuras expansiones.

Este servicio es ideal para entornos corporativos, industriales y comerciales que requieren redes robustas, ordenadas y de alto rendimiento.`
  },
  {
    icon: Cctv,
    title: 'Instalación de Circuito Cerrado de Televisión (CCTV)',
    description: 'Implementamos sistemas de videovigilancia para protección, monitoreo y control de tus espacios físicos.',
    features: [],
    extraInfo: `Proveemos soluciones integrales en instalación de sistemas de circuito cerrado de televisión (CCTV), orientadas a fortalecer la seguridad y el monitoreo de instalaciones corporativas, industriales y comerciales. Nuestro servicio incluye el diseño, suministro, instalación y configuración de cámaras de videovigilancia, grabadores y sistemas de almacenamiento, garantizando cobertura eficiente y control en tiempo real.

Contamos con personal técnico certificado y tecnología de vanguardia, que permiten adaptar cada solución a las necesidades específicas de nuestros clientes, ya sea para vigilancia local o monitoreo remoto mediante redes IP. Implementamos sistemas escalables, con alta calidad de imagen y soporte para analítica de video.

Nuestro enfoque busca brindar mayor tranquilidad operativa, disuasión de riesgos y evidencia visual ante cualquier eventualidad.`
  },
  {
    icon: Zap,
    title: 'Diagnóstico, mantenimiento preventivo y correctivo de UPS',
    description: 'Protege tus equipos frente a fallos eléctricos con un mantenimiento adecuado y soporte especializado.',
    features: [],
    extraInfo: `Ofrecemos un servicio especializado de diagnóstico, mantenimiento preventivo y correctivo de sistemas de alimentación ininterrumpida (UPS), orientado a garantizar la continuidad operativa y la protección de equipos críticos ante fallos eléctricos.

Nuestro equipo técnico realiza inspecciones detalladas, pruebas funcionales y limpieza especializada para asegurar el óptimo desempeño de las unidades. A través del mantenimiento preventivo, mitigamos riesgos de fallas inesperadas, mientras que nuestras intervenciones correctivas restablecen de forma rápida y segura el funcionamiento de los sistemas.

Este servicio está diseñado para extender la vida útil de los equipos, optimizar su rendimiento y reducir tiempos de inactividad, alineándose con las mejores prácticas del sector y los estándares de calidad empresarial.`
  },
  {
    icon: Printer,
    title: 'Diagnóstico, mantenimiento preventivo y correctivo de impresoras',
    description: 'Asegura el funcionamiento óptimo de tus equipos de impresión con nuestras soluciones técnicas.',
    features: [],
    extraInfo: `Brindamos un servicio profesional de diagnóstico y mantenimiento preventivo y correctivo de impresoras, enfocado en garantizar su funcionamiento continuo y eficiente. Realizamos revisiones técnicas especializadas para identificar fallas, desgaste de componentes y problemas de rendimiento.

El mantenimiento preventivo permite anticipar y evitar interrupciones operativas, mientras que nuestras intervenciones correctivas aseguran una pronta solución ante cualquier avería. Atendemos una amplia gama de marcas y modelos, con repuestos originales y procedimientos alineados a estándares del fabricante.

Este servicio está orientado a optimizar el ciclo de vida de sus equipos, mejorar la productividad operativa y reducir costos asociados a tiempos de inactividad.`
  },
]

const whatsappNumber = '573183612161'
const whatsappMessage = 'Hola, me interesa conocer más sobre sus servicios'
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

type ServicesProps = {
  openIndex?: number | null;
  setOpenIndex?: (i: number | null) => void;
};

const Services: React.FC<ServicesProps> = ({ openIndex: controlledOpenIndex, setOpenIndex: controlledSetOpenIndex }) => {
  const [internalOpenIndex, internalSetOpenIndex] = useState<number | null>(null);
  const openIndex = controlledOpenIndex !== undefined ? controlledOpenIndex : internalOpenIndex;
  const setOpenIndex = controlledSetOpenIndex !== undefined ? controlledSetOpenIndex : internalSetOpenIndex;
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
                    onClick={() => setOpenIndex(index)}
                  >
                    Más Información
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

      </div>

      {/* Modal */}
      {openIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl mx-4 animate-fade-in">
            {/* Barra superior de acento */}
            <div className="h-2 w-full rounded-t-xl bg-gradient-to-r from-[#00C8CF] to-[#00A5B0]"></div>
            <div className="bg-white rounded-b-2xl rounded-t-none shadow-2xl p-8 pt-6 flex flex-col items-center relative">
              {/* Icono grande */}
              <div className="-mt-12 mb-2 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#00C8CF] to-[#00A5B0] shadow-lg border-4 border-white">
                {openIndex !== null && (() => {
                  const IconComponent = services[openIndex].icon;
                  return <IconComponent className="w-10 h-10 text-white" />;
                })()}
              </div>
              <h3 className="text-2xl font-bold text-[#00C8CF] mb-4 text-center">{services[openIndex].title}</h3>
              <div className="max-h-96 overflow-y-auto w-full mb-4">
                <p className="text-gray-700 whitespace-pre-line text-base leading-relaxed text-center">{services[openIndex].extraInfo}</p>
              </div>
              <Button 
                variant="secondary" 
                className="w-full mt-2 bg-[#00C8CF] text-white hover:bg-[#00A5B0] shadow-md"
                onClick={() => {
                  window.open('https://outlook.office.com/book/AgendaDanielValbuena@prosuministros.com/?ismsaljsauthenabled', '_blank');
                  setOpenIndex(null);
                }}
              >
                Solicita tu cotización
              </Button>
              <button className="absolute top-3 right-3 text-gray-400 hover:text-[#00C8CF] text-3xl font-bold transition-transform duration-200 hover:scale-125" onClick={() => setOpenIndex(null)} aria-label="Cerrar">×</button>
            </div>
          </div>
        </div>
      )}
      {/* Animación fade-in */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.25s cubic-bezier(.4,2,.6,1);
        }
      `}</style>
    </section>
  )
}

export default Services

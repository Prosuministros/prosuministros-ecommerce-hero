import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Server, 
  Network, 
  Computer, 
  Video, 
  Printer,
  Briefcase
} from 'lucide-react'
import React, { useState } from 'react';

const hardwarePortfolio = [
  {
    title: 'Computo y Workstation',
    marcas: 'Lenovo, Apple, Dell, HP, Asus, Acer.'
  },
  {
    title: 'Servidores',
    marcas: 'Lenovo, HP, Dell.'
  },
  {
    title: 'Back up NAS y SAN',
    marcas: 'Qnap, Dell.'
  },
  {
    title: 'Networking',
    marcas: 'Fortinet, Hillstone, Checkpoint, Cisco, Aruba, Microtic.'
  },
  {
    title: 'Monitores',
    marcas: 'Samsung, LG, Viewsonic, Onescreen.'
  },
  {
    title: 'Video proyectores',
    marcas: 'Epson, Viewsonic, VTA.'
  },
  {
    title: 'Videoconferencia',
    marcas: 'Logitech, Poly, Avaya.'
  },
  {
    title: 'Televisores',
    marcas: 'Samsung, LG.'
  },
  {
    title: 'Impresoras y Escáneres',
    marcas: 'HP, Epson, Kyocera, Toshiba, Ricoh, Lexmark.'
  },
  {
    title: 'Impresoras POS',
    marcas: 'Zebra, Sat.'
  },
  {
    title: 'Telefonía y Accesorios',
    marcas: 'Plantronics, Cisco, Avaya, Poly.'
  },
  {
    title: 'Otros',
    marcas: 'Aires acondicionados, electrodomésticos, impresoras 3D.'
  }
];

const HardwareSection = () => {
  const hardwareCategories = [
    {
      id: 1,
      title: "Computo y Workstation",
      icon: Computer,
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
      // sin descripción
    },
    {
      id: 2,
      title: "Servidores",
      icon: Server,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      // sin descripción
    },
    {
      id: 3,
      title: "Back up NAS y SAN",
      icon: Network,
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop",
      // sin descripción
    },
    {
      id: 4,
      title: "Networking",
      icon: Network,
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop",
      // sin descripción
    },
    {
      id: 5,
      title: "Monitores",
      icon: Video,
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop",
      // sin descripción
    }
  ];
  const [showAll, setShowAll] = useState(false);

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
            const IconComponent = category.icon;
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
                  {/* Sin descripción */}
                  <div className="text-xs text-[#00C8CF] font-semibold mt-2">
                    {hardwarePortfolio.find((item) => item.title === category.title)?.marcas}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-[#00C8CF] hover:bg-[#00A5B0] text-white"
            onClick={() => setShowAll(true)}
          >
            Ver portafolio completo
          </Button>
        </div>
        {/* Modal de portafolio completo */}
        {showAll && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-2">
            <div className="relative w-full max-w-full sm:max-w-2xl lg:max-w-4xl mx-auto animate-fade-in">
              {/* Barra superior de acento */}
              <div className="h-2 w-full rounded-t-xl bg-gradient-to-r from-[#00C8CF] to-[#00A5B0]"></div>
              <div className="bg-white rounded-b-2xl rounded-t-none shadow-2xl p-4 sm:p-8 lg:p-10 pt-8 flex flex-col items-center relative">
                {/* Ícono decorativo grande */}
                <div className="-mt-12 sm:-mt-14 mb-2 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#00C8CF] to-[#00A5B0] shadow-lg border-4 border-white">
                  <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#00C8CF] mb-6 sm:mb-8 text-center tracking-tight">Portafolio completo de hardware</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
                  {hardwarePortfolio.map((item, idx) => (
                    <div key={idx} className="rounded-xl bg-white shadow-md hover:shadow-xl border border-[#00C8CF]/20 p-4 sm:p-6 transition-all duration-200 flex flex-col items-start min-h-[90px] sm:min-h-[110px]">
                      <div className="font-semibold text-[#00C8CF] mb-2 text-base sm:text-lg leading-tight">{item.title}</div>
                      <div className="text-gray-700 text-xs sm:text-sm whitespace-pre-line">{item.marcas}</div>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="secondary" 
                  className="w-full mt-6 sm:mt-8 bg-[#00C8CF] text-white hover:bg-[#00A5B0] shadow-md text-base sm:text-lg font-semibold py-2 sm:py-3"
                  onClick={() => window.open('https://outlook.office.com/book/AgendaDanielValbuena@prosuministros.com/?ismsaljsauthenabled', '_blank')}
                >
                  Solicita tu cotización
                </Button>
                <button className="absolute top-3 right-3 text-gray-400 hover:text-[#00C8CF] text-2xl sm:text-3xl font-bold transition-transform duration-200 hover:scale-125" onClick={() => setShowAll(false)} aria-label="Cerrar">×</button>
              </div>
            </div>
          </div>
        )}
        <style>{`
          @keyframes fade-in {
            from { opacity: 0; transform: scale(0.97); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fade-in {
            animation: fade-in 0.25s cubic-bezier(.4,2,.6,1);
          }
        `}</style>
      </div>
    </section>
  )
}

export default HardwareSection

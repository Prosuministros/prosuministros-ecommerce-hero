import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import HardwareSection from '@/components/HardwareSection'
import SoftwareSection from '@/components/SoftwareSection'
import FeaturedProducts from '@/components/FeaturedProducts'
import BrandBanners from '@/components/BrandBanners'
import EquipoInfo from '@/components/EquipoInfo'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'
import MarcasCarousel from '@/components/MarcasCarousel'
import { SiLinkedin } from 'react-icons/si'

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="w-full relative">
        <Carousel opts={{ align: 'start', loop: true }} className="w-full">
          <CarouselContent>
            <CarouselItem>
              <Hero />
            </CarouselItem>
            <CarouselItem>
              <img
                src="/img/BannerProsuministros01.png"
                alt="Soluciones de Renting Tecnológico"
                className="w-full h-[60vw] max-h-[80vh] min-h-[250px] object-contain bg-[#00c8cf]"
                style={{ backgroundColor: '#00c8cf' }}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="/img/BannerProsuministros02.png"
                alt="Servicios Integrales para su Negocio"
                className="w-full h-[60vw] max-h-[80vh] min-h-[250px] object-contain bg-[#00c8cf]"
                style={{ backgroundColor: '#00c8cf' }}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="/img/BannerProsuministros03.png"
                alt="Soporte Técnico Especializado"
                className="w-full h-[60vw] max-h-[80vh] min-h-[250px] object-contain bg-[#00c8cf]"
                style={{ backgroundColor: '#00c8cf' }}
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-4 md:left-8" />
          <CarouselNext className="right-4 md:right-8" />
        </Carousel>
      </div>
      <MarcasCarousel />
      <div id="servicios">
        <Services />
      </div>
      <EquipoInfo />
      <div id="hardware">
        <HardwareSection />
      </div>
      <div id="software">
        <SoftwareSection />
      </div>
      <FeaturedProducts />
      <BrandBanners />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <img src="/img/logoprosuministrosBlanco.png" alt="ProSuministros Logo" className="mx-auto mb-4 w-56 h-auto" />
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-300">
                <li>WhatsApp: +57 318 361 2161</li>
                <li>Bogotá, Colombia</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Horarios de atención</h4>
              <p className="text-gray-300">Lunes - Viernes: 8:00 am to 5:00 pm</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Redes Sociales</h4>
              <div className="flex justify-center mt-2">
                <a href="https://www.linkedin.com/company/prosuministros/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#00C8CF] hover:text-white text-3xl">
                  <SiLinkedin />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ProSuministros. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index

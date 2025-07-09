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
import { SiLinkedin, SiWhatsapp } from 'react-icons/si'
import BannerRenting from '@/components/BannerRenting'
import BannerServicios from '@/components/BannerServicios'
import BannerSoporte from '@/components/BannerSoporte'

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="w-full relative">
        <Carousel 
          opts={{ 
            align: 'start', 
            loop: true,
            slidesToScroll: 1,
            duration: 20 
          }} 
          className="w-full"
        >
          <CarouselContent>
            
            {/* Banner 1 - Renting Tecnológico */}
            <CarouselItem>
              <BannerRenting />
            </CarouselItem>
            
            {/* Banner 2 - Servicios Integrales */}
            <CarouselItem>
              <BannerServicios />
            </CarouselItem>
            
            {/* Banner 3 - Soporte Técnico */}
            <CarouselItem>
              <BannerSoporte />
            </CarouselItem>
                     {/* Hero Component */}
          <CarouselItem>
                <Hero />
           </CarouselItem>
          </CarouselContent>

          {/* Navigation Buttons */}
          <CarouselPrevious className="left-2 sm:left-4 md:left-6 lg:left-8 z-20 bg-white/90 hover:bg-white border-2 border-[#00c8cf] text-[#00c8cf] hover:text-[#00c8cf] shadow-lg transition-all duration-200" />
          <CarouselNext className="right-2 sm:right-4 md:right-6 lg:right-8 z-20 bg-white/90 hover:bg-white border-2 border-[#00c8cf] text-[#00c8cf] hover:text-[#00c8cf] shadow-lg transition-all duration-200" />
        </Carousel>
      </div>
      
      {/* Brands Carousel */}
      <MarcasCarousel />
      
      {/* Services Section */}
      <div id="servicios">
        <Services />
      </div>
      
      {/* Team Info */}
      <EquipoInfo />
      
      {/* Hardware Section */}
      <div id="hardware">
        <HardwareSection />
      </div>
      
      {/* Software Section */}
      <div id="software">
        <SoftwareSection />
      </div>
      
      {/* Brand Banners */}
      <BrandBanners />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {/* Logo Section */}
            <div className="flex justify-center items-center">
              <img 
                src="/img/logoprosuministrosBlanco.png" 
                alt="ProSuministros Logo" 
                className="w-48 md:w-56 h-auto"
                loading="lazy"
              />
            </div>
            
            {/* Contact Section */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Contacto</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center justify-center md:justify-start">
                  <span className="mr-2 text-[#25D366] text-xl"><SiWhatsapp /></span>
                  WhatsApp: +57 318 361 2161
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <span className="mr-2">📍</span>
                  Bogotá, Colombia
                </li>
              </ul>
            </div>
            
            {/* Business Hours */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Horarios de atención</h4>
              <div className="text-gray-300 space-y-1">
                <p className="font-medium">Lunes - Viernes</p>
                <p>8:00 am - 5:00 pm</p>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Redes Sociales</h4>
              <div className="flex justify-center">
                <a 
                  href="https://www.linkedin.com/company/prosuministros/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn ProSuministros"
                  className="text-[#00C8CF] hover:text-white text-3xl transition-colors duration-200 hover:scale-110 transform"
                >
                  <SiLinkedin />
                </a>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TDX. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
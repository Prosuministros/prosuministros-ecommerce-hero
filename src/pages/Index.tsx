
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import HardwareSection from '@/components/HardwareSection'
import SoftwareSection from '@/components/SoftwareSection'
import FeaturedProducts from '@/components/FeaturedProducts'
import BrandBanners from '@/components/BrandBanners'

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <HardwareSection />
      <SoftwareSection />
      <FeaturedProducts />
      <BrandBanners />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#00C8CF] mb-4">ProSuministros</h3>
              <p className="text-gray-300">
                Tu socio tecnológico de confianza para el crecimiento empresarial.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Infraestructura IT</li>
                <li>Ciberseguridad</li>
                <li>Cloud Computing</li>
                <li>Soporte Técnico</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Productos</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Hardware</li>
                <li>Software</li>
                <li>Equipos de Red</li>
                <li>Servidores</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-300">
                <li>WhatsApp: +57 318 361 2161</li>
                <li>info@prosuministros.com</li>
                <li>Bogotá, Colombia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ProSuministros. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index

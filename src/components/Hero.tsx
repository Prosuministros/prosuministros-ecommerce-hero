
import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, Zap, Users } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00C8CF] via-[#00A5B0] to-[#161052] opacity-95" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Soluciones
              <span className="block text-white/90">Tecnológicas</span>
              <span className="block">Empresariales</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Proveemos tecnología de vanguardia, software especializado y hardware 
              de alto rendimiento para impulsar el crecimiento de tu empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-[#00C8CF] hover:bg-gray-100">
                Ver Productos
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#00C8CF]">
                Conocer Servicios
              </Button>
            </div>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 gap-8">
            <div className="flex items-center space-x-4 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Seguridad Garantizada</h3>
                <p className="text-white/80">Protección y confiabilidad en todos nuestros productos</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Alto Rendimiento</h3>
                <p className="text-white/80">Tecnología de última generación para máxima eficiencia</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Soporte Especializado</h3>
                <p className="text-white/80">Acompañamiento técnico personalizado 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

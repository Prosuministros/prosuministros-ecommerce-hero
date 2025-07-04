import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, Zap, Users } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative w-full h-full flex items-center">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00C8CF] via-[#00A5B0] to-[#161052] opacity-95" />
      
      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="text-white">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 lg:mb-6">
                Soluciones
                <span className="block text-white/90">Tecnológicas</span>
                <span className="block">Empresariales</span>
              </h1>
              <p className="text-sm sm:text-base lg:text-xl text-white/90 mb-4 lg:mb-8 leading-relaxed">
                Proveemos tecnología de vanguardia, software especializado y hardware 
                de alto rendimiento para impulsar el crecimiento de tu empresa.
              </p>
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-1 gap-3 lg:gap-6">
              <div className="flex items-center space-x-3 lg:space-x-4 text-white">
                <div className="w-8 h-8 lg:w-12 lg:h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 lg:w-6 lg:h-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm lg:text-lg font-semibold">Seguridad Garantizada</h3>
                  <p className="text-xs lg:text-base text-white/80 hidden sm:block">Protección y confiabilidad en todos nuestros productos</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 lg:space-x-4 text-white">
                <div className="w-8 h-8 lg:w-12 lg:h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4 lg:w-6 lg:h-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm lg:text-lg font-semibold">Alto Rendimiento</h3>
                  <p className="text-xs lg:text-base text-white/80 hidden sm:block">Tecnología de última generación para máxima eficiencia</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 lg:space-x-4 text-white">
                <div className="w-8 h-8 lg:w-12 lg:h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 lg:w-6 lg:h-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm lg:text-lg font-semibold">Soporte Especializado</h3>
                  <p className="text-xs lg:text-base text-white/80 hidden sm:block">Acompañamiento técnico personalizado 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, Zap, Users } from 'lucide-react'

const Hero = ({ onClick }: { onClick?: () => void }) => {
  return (
    <section
      className="relative w-full font-[Verdana] text-[90%] cursor-pointer"
      style={{ aspectRatio: '8000/3333' }}
      onClick={onClick}
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00C8CF] via-[#00A5B0] to-[#161052] opacity-95" />
      
      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center px-3 sm:px-6 lg:px-8 py-4 sm:py-0">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 items-center h-full">
            {/* Text Content */}
            <div className="text-white flex flex-col justify-center">
              <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-tight mb-2 sm:mb-3 lg:mb-6">
                Soluciones
                <span className="block text-white/90">Tecnológicas</span>
                <span className="block">Empresariales</span>
              </h1>
              <p className="text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg text-white/90 mb-3 sm:mb-4 lg:mb-8 leading-relaxed hidden sm:block">
                Proveemos tecnología de vanguardia, software especializado y hardware 
                de alto rendimiento para impulsar el crecimiento de tu empresa.
              </p>
            </div>
            
            {/* Feature Icons */}
            <div className="grid grid-cols-1 gap-1 sm:gap-2 lg:gap-4 xl:gap-6">
              <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 text-white">
                <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-xs lg:text-sm xl:text-base font-semibold">Seguridad Garantizada</h3>
                  <p className="text-xs lg:text-xs xl:text-sm text-white/80 hidden md:block">Protección y confiabilidad en todos nuestros productos</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 text-white">
                <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-xs lg:text-sm xl:text-base font-semibold">Alto Rendimiento</h3>
                  <p className="text-xs lg:text-xs xl:text-sm text-white/80 hidden md:block">Tecnología de última generación para máxima eficiencia</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 text-white">
                <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-xs lg:text-sm xl:text-base font-semibold">Soporte Especializado</h3>
                  <p className="text-xs lg:text-xs xl:text-sm text-white/80 hidden md:block">Acompañamiento técnico personalizado 24/7</p>
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
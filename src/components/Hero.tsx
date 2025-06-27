
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-wide">
              SOPORTE TÉCNICO ESPECIALIZADO
              <span className="block text-3xl md:text-5xl mt-4">
                Y MANTENIMIENTO INTEGRAL
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-light tracking-wide">
              MANTENIMIENTO DE UPS, A/C, E IMPRESORAS
            </p>
            <p className="text-2xl md:text-3xl text-white font-bold mb-8 tracking-wide">
              ¡TODO EN UN SOLO LUGAR!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[#00C8CF] text-white hover:bg-[#00C8CF]/90 font-semibold text-lg px-8 py-4 rounded-full"
              >
                Solicita tu cotización
              </Button>
            </div>
          </div>

          {/* Right side can be used for additional content if needed */}
          <div className="hidden lg:block">
            {/* Space for additional content or leave empty for image focus */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

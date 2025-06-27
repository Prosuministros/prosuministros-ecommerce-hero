
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background with gradient similar to the uploaded image */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a5e] via-[#2563eb] to-[#00C8CF]" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-8 h-8 bg-[#00C8CF] opacity-60" 
           style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}></div>
      <div className="absolute top-20 right-32 w-6 h-6 bg-[#00C8CF] opacity-40" 
           style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}></div>
      <div className="absolute top-32 right-20 w-4 h-4 bg-[#00C8CF] opacity-30" 
           style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}></div>
      
      <div className="absolute bottom-10 left-10 w-6 h-6 bg-[#00C8CF] opacity-40" 
           style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}></div>
      <div className="absolute bottom-24 left-24 w-4 h-4 bg-[#00C8CF] opacity-30" 
           style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}></div>
      
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
                className="bg-white text-[#1a1a5e] hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-full"
              >
                Solicita tu cotización
              </Button>
            </div>
          </div>

          {/* 3D Isometric Illustration */}
          <div className="hidden lg:flex items-center justify-center relative">
            {/* Phone/Device Base */}
            <div className="relative">
              {/* Phone outline */}
              <div className="w-80 h-96 bg-gradient-to-br from-[#00C8CF]/20 to-[#2563eb]/30 rounded-3xl border-2 border-[#00C8CF]/50 relative overflow-hidden">
                {/* Screen content with servers */}
                <div className="absolute top-8 left-8 right-8 bottom-8 bg-gradient-to-br from-[#1a1a5e] to-[#2563eb] rounded-2xl p-4">
                  {/* Server racks representation */}
                  <div className="grid grid-cols-5 gap-2 h-full">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="flex flex-col gap-1">
                        {[...Array(8)].map((_, j) => (
                          <div 
                            key={j} 
                            className="h-6 bg-gradient-to-r from-[#00C8CF] to-[#60a5fa] rounded opacity-80"
                            style={{ 
                              animationDelay: `${(i + j) * 0.2}s`,
                              animation: 'pulse 2s infinite'
                            }}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Connection lines */}
              <div className="absolute -bottom-10 -left-20 w-40 h-2 bg-gradient-to-r from-transparent via-[#00C8CF] to-transparent opacity-60"></div>
              <div className="absolute -bottom-16 -left-16 w-32 h-2 bg-gradient-to-r from-transparent via-[#00C8CF] to-transparent opacity-40"></div>
              <div className="absolute -bottom-22 -left-12 w-24 h-2 bg-gradient-to-r from-transparent via-[#00C8CF] to-transparent opacity-30"></div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#00C8CF] rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute top-1/4 -left-6 w-6 h-6 bg-[#60a5fa] rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute bottom-1/4 -right-8 w-4 h-4 bg-[#00C8CF] rounded-full opacity-40 animate-bounce" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

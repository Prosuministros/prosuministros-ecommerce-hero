import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { ExternalLink } from 'lucide-react'
import { useEffect, useState } from 'react'

const BrandBanners = () => {
  const featuredBrands = []
  const [api, setApi] = useState<any>()

  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [api])

  return (
    <section className="py-0 bg-gray-50">


      {/* Carrusel de banners de ancho completo */}
      <div className="w-full">
        <Carousel 
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {featuredBrands.map((brand) => (
              <CarouselItem key={brand.id} className="pl-2 md:pl-4">
                <Card className="border-0 shadow-none">
                  <CardContent className="p-0">
                    <div className={`bg-gradient-to-r ${brand.gradient} relative overflow-hidden min-h-[300px] md:min-h-[400px] flex items-center`}>
                      {/* Elementos decorativos de fondo */}
                      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
                      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
                      
                      {/* Contenido del banner */}
                      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                          {/* Contenido de texto */}
                          <div className="text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start mb-6">
                              <img
                                src={brand.logo}
                                alt={brand.name}
                                className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-xl shadow-lg mr-4"
                              />
                              <h3 className={`text-3xl md:text-4xl font-bold ${brand.textColor}`}>
                                {brand.name}
                              </h3>
                            </div>
                            
                            <p className={`${brand.textColor} text-xl md:text-2xl font-medium mb-4 italic`}>
                              "{brand.tagline}"
                            </p>
                            
                            <p className={`${brand.textColor}/90 text-lg md:text-xl mb-8 leading-relaxed max-w-md mx-auto md:mx-0`}>
                              {brand.description}
                            </p>
                            
                            <Button
                              size="lg"
                              className={`${brand.buttonStyle} font-semibold text-lg px-8 py-3`}
                            >
                              <ExternalLink className="w-5 h-5 mr-2" />
                              Ver Productos
                            </Button>
                          </div>
                          
                          {/* Área visual decorativa */}
                          <div className="hidden md:flex items-center justify-center">
                            <div className="relative">
                              <div className={`w-64 h-64 bg-white/10 rounded-full blur-sm`}></div>
                              <div className={`absolute top-8 left-8 w-48 h-48 bg-white/20 rounded-full blur-lg`}></div>
                              <div className={`absolute top-16 left-16 w-32 h-32 bg-white/30 rounded-full`}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
            <CarouselItem>
              <div className="w-full min-h-[300px] md:min-h-[400px] flex items-center justify-center">
                <img
                  src="/img/BannerProsuministros04.png"
                  alt="Banner ProSuministros 04"
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div
              
                className="w-full min-h-[300px] md:min-h-[400px] flex items-center justify-center cursor-pointer"
                onClick={() => window.open('/logitech', '_blank')}
                role="button"
                tabIndex={0}
                onKeyPress={e => { if (e.key === 'Enter') window.open('/logitech', '_blank') }}
                aria-label="Ir a landing de Logitech"
              >
                <img
                  src="/img/BannerProsuministros05.png"
                  alt="Banner ProSuministros 05"
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
            
          </CarouselContent>
          
          <CarouselPrevious className="left-4 md:left-8" />
          <CarouselNext className="right-4 md:right-8" />
        </Carousel>
      </div>

    </section>
  )
}

export default BrandBanners

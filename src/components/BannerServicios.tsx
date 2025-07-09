/*const BannerServicios = () => (
  <section className="w-full h-[350px] xs:h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[650px] relative overflow-hidden flex items-center justify-center">*/
    {/* Degradado personalizado */}
   /* <div className="absolute inset-0 bg-gradient-to-br from-[#00c8cf] via-[#00e0e6] to-[#005e63]" />*/
    {/* Imagen */}
  /*  <img
      src="/img/BannerProsuministros02.png"
      alt="Servicios Integrales para su Negocio"
      className="w-full h-full object-cover object-center relative z-10"
      style={{ minWidth: '100%', minHeight: '100%' }}
      loading="lazy"
    />*/
    {/* Overlay sutil para mejor legibilidad en móvil */}
  /*  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 sm:hidden pointer-events-none z-20" />
  </section>
);

export default BannerServicios; */



import React from 'react'

const BannerServicios = () => {
  return (
    <section className="w-full bg-white">
      <img
        src="/img/BannerProsuministros03.png"
        alt="Equipo ProSuministros"
        className="w-full h-auto object-cover"
        style={{ display: 'block' }}
      />
    </section>
  )
}

export default BannerServicios ;
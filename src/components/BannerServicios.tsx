import React from 'react'

const BannerServicios = ({ onClick }: { onClick?: () => void }) => {
  return (
    <section className="w-full bg-white cursor-pointer" onClick={onClick}>
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
import React from 'react'

type BannerSoporteProps = {
  onClick?: () => void;
};

const BannerSoporte: React.FC<BannerSoporteProps> = ({ onClick }) => {
  return (
    <section className="w-full bg-white cursor-pointer" onClick={onClick}>
      <img
        src="/img/BannerProsuministros01.png"
        alt="Equipo ProSuministros"
        className="w-full h-auto object-cover"
        style={{ display: 'block' }}
      />
    </section>
  )
}

export default BannerSoporte ;
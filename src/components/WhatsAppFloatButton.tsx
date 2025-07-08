import { SiWhatsapp } from 'react-icons/si';

const whatsappNumber = '573183612161';
const whatsappMessage = 'Hola, me interesa conocer más sobre sus servicios';
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

const WhatsAppFloatButton = () => (
  <button
    onClick={() => window.open(whatsappUrl, '_blank')}
    style={{
      position: 'fixed',
      right: 24,
      bottom: 24,
      zIndex: 1000,
      background: '#25D366', // WhatsApp green
      border: 'none',
      color: '#fff',
      borderRadius: '50%',
      width: 56,
      height: 56,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
      cursor: 'pointer',
      transition: 'background 0.2s',
    }}
    aria-label="WhatsApp"
    onMouseOver={e => {
      (e.currentTarget as HTMLButtonElement).style.background = '#128C7E';
    }}
    onMouseOut={e => {
      (e.currentTarget as HTMLButtonElement).style.background = '#25D366';
    }}
  >
    <SiWhatsapp style={{ width: 32, height: 32 }} />
  </button>
);

export default WhatsAppFloatButton; 
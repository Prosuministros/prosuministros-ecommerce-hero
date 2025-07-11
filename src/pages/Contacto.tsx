import Header from '@/components/Header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { SiLinkedin, SiWhatsapp } from 'react-icons/si'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  Send
} from 'lucide-react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from '@/hooks/use-toast'

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        nombre: formData.nombre,
        email: formData.email,
        empresa: formData.empresa,
        telefono: formData.telefono,
        asunto: formData.asunto,
        mensaje: formData.mensaje,
      },
      PUBLIC_KEY
    )
    .then((result) => {
      toast({
        title: '¡Mensaje enviado correctamente!',
        description: 'Nos pondremos en contacto contigo pronto.',
      });
      setFormData({
        nombre: '',
        email: '',
        empresa: '',
        telefono: '',
        asunto: '',
        mensaje: ''
      });
    }, (error) => {
      console.error('Error al enviar el mensaje:', error);
      toast({
        title: 'Error al enviar el mensaje',
        description: 'Intenta de nuevo o revisa tu conexión.',
      });
    });
  }

  const whatsappNumber = '573183612161'
  const whatsappMessage = 'Hola, me interesa conocer más sobre sus servicios'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#00C8CF] to-[#161052]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contáctanos
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Estamos aquí para ayudarte a encontrar la solución tecnológica 
              perfecta para tu empresa
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Información de Contacto */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                ¡Escríbenos!
                </h2>
                <p className="text-gray-600 mb-8">
                  Para solicitar cualquier tipo de información o cotización via correo electrónico.
                </p>
              </div>

            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Envíanos un mensaje
                </CardTitle>
                <p className="text-gray-600">
                  Completa el formulario y nos pondremos en contacto contigo lo antes posible
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="nombre">Nombre Completo *</Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={handleInputChange}
                        placeholder="Tu nombre completo"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@empresa.com"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="empresa">Empresa</Label>
                      <Input
                        id="empresa"
                        name="empresa"
                        type="text"
                        value={formData.empresa}
                        onChange={handleInputChange}
                        placeholder="Nombre de tu empresa"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="telefono">Teléfono</Label>
                      <Input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        placeholder="+57 300 123 4567"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="asunto">Asunto *</Label>
                    <Input
                      id="asunto"
                      name="asunto"
                      type="text"
                      required
                      value={formData.asunto}
                      onChange={handleInputChange}
                      placeholder="¿En qué podemos ayudarte?"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="mensaje">Mensaje *</Label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      placeholder="Describe tu consulta o necesidad con el mayor detalle posible..."
                      rows={6}
                      className="mt-1"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit"
                      className="flex-1 bg-[#00C8CF] hover:bg-[#00A5B0] text-white"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensaje
                    </Button>

                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Mapa o Información Adicional */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir Prosuministros?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Más de 11 años de experiencia respaldando el crecimiento tecnológico 
              de empresas en Colombia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00C8CF]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-[#00C8CF]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Respuesta Rápida
              </h3>
              <p className="text-gray-600">
                Tiempo de respuesta promedio de 2 horas en horario laboral
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#00C8CF]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-[#00C8CF]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Asesoría Personalizada
              </h3>
              <p className="text-gray-600">
                Consultoría especializada para cada necesidad empresarial
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#00C8CF]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-[#00C8CF]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Soporte Continuo
              </h3>
              <p className="text-gray-600">
                Acompañamiento post-venta y soporte técnico especializado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <img src="/img/logoprosuministrosBlanco.png" alt="ProSuministros Logo" className="mx-auto mb-4 w-56 h-auto" />
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Contacto</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center justify-center md:justify-start">
                  <span className="mr-2 text-[#25D366] text-xl"><SiWhatsapp /></span>
                  WhatsApp: +57 318 361 2161
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <span className="mr-2">📍</span>
                  Bogotá, Colombia
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Horarios de atención</h4>
              <div className="text-gray-300 space-y-1">
                <p className="font-medium">Lunes - Viernes</p>
                <p>8:00 am - 5:00 pm</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Redes Sociales</h4>
              <div className="flex justify-center mt-2">
                <a href="https://www.linkedin.com/company/prosuministros/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#00C8CF] hover:text-white text-3xl">
                  {/* Icono de LinkedIn */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.597 2.001 3.597 4.601v5.595z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TDX. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Contacto

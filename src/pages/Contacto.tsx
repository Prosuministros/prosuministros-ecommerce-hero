
import Header from '@/components/Header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  Send
} from 'lucide-react'
import { useState } from 'react'

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de envío del formulario
    console.log('Formulario enviado:', formData)
    
    // Por ahora, redirigir a WhatsApp con el mensaje
    const mensaje = `Hola, mi nombre es ${formData.nombre} de ${formData.empresa}. ${formData.mensaje}`
    const whatsappUrl = `https://wa.me/573183612161?text=${encodeURIComponent(mensaje)}`
    window.open(whatsappUrl, '_blank')
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Información de Contacto
                </h2>
                <p className="text-gray-600 mb-8">
                  Nuestro equipo de expertos está listo para atenderte y brindarte 
                  la mejor asesoría tecnológica.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#00C8CF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#00C8CF]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Dirección</h3>
                    <p className="text-gray-600">
                      Bogotá, Colombia<br />
                      Zona Empresarial
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#00C8CF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#00C8CF]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Teléfono</h3>
                    <p className="text-gray-600">+57 318 361 2161</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#00C8CF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#00C8CF]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@prosuministros.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#00C8CF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#00C8CF]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Horarios</h3>
                    <p className="text-gray-600">
                      Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                      Sábados: 8:00 AM - 12:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button 
                  onClick={() => window.open(whatsappUrl, '_blank')}
                  className="w-full bg-[#00C8CF] hover:bg-[#00A5B0] text-white"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chatear por WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Envíanos un Mensaje
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
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={() => window.open(whatsappUrl, '_blank')}
                      className="flex-1 border-[#00C8CF] text-[#00C8CF] hover:bg-[#00C8CF] hover:text-white"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Directo
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
              ¿Por qué elegir ProSuministros?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Más de 10 años de experiencia respaldando el crecimiento tecnológico 
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
    </div>
  )
}

export default Contacto

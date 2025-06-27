
import { Card, CardContent } from '@/components/ui/card'
import { User, Award, Clock, CheckCircle } from 'lucide-react'

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Carlos Rodríguez',
      role: 'Director Técnico',
      experience: '15+ años',
      specialties: ['Infraestructura IT', 'Virtualización', 'Redes Corporativas'],
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'María González',
      role: 'Especialista en Ciberseguridad',
      experience: '10+ años',
      specialties: ['Seguridad Informática', 'Auditorías', 'Compliance'],
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Luis Martínez',
      role: 'Consultor Cloud',
      experience: '12+ años',
      specialties: ['Azure', 'AWS', 'Migración Cloud'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Ana Herrera',
      role: 'Soporte Técnico Senior',
      experience: '8+ años',
      specialties: ['Mesa de Ayuda', 'Mantenimiento', 'Capacitación'],
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face'
    }
  ]

  const stats = [
    {
      icon: User,
      number: '500+',
      label: 'Clientes Satisfechos'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Años de Experiencia'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Soporte Disponible'
    },
    {
      icon: CheckCircle,
      number: '99.9%',
      label: 'Disponibilidad Garantizada'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nuestro Equipo de Expertos
          </h2>
          <div className="w-16 h-1 bg-[#00C8CF] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profesionales certificados con amplia experiencia en tecnología empresarial, 
            comprometidos con la excelencia y la innovación
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00C8CF] to-[#00A5B0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                
                <p className="text-[#00C8CF] font-medium mb-2">
                  {member.role}
                </p>
                
                <p className="text-sm text-gray-500 mb-4">
                  {member.experience} de experiencia
                </p>
                
                <div className="space-y-2">
                  {member.specialties.map((specialty, specialtyIndex) => (
                    <div key={specialtyIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-[#00C8CF] rounded-full mr-2 flex-shrink-0" />
                      {specialty}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[#00C8CF] to-[#00A5B0] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para trabajar con nosotros?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Nuestro equipo está preparado para llevar tu empresa al siguiente nivel tecnológico
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#00C8CF] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contactar Equipo
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#00C8CF] transition-colors">
                Ver Certificaciones
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection

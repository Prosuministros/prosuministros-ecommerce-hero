import { useState } from 'react'
import { ShoppingCart, Menu, X, MessageCircle } from 'lucide-react'
import { SiWhatsapp } from 'react-icons/si'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useStore } from '@/store/useStore'
import { Cart } from './Cart'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { getTotalItems, setIsCartOpen } = useStore()
  
  const menuItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/#servicios' },
    { name: 'Hardware', href: '/#hardware' },
    { name: 'Software', href: '/#software' },
    { name: 'eCommerce', href: '/ecommerce' },
    { name: 'Contacto', href: '/contacto' },
  ]

  const whatsappNumber = '573183612161'
  const whatsappMessage = 'Hola, me interesa conocer más sobre sus servicios'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <>
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img src="/img/logProsuministrosNegro.png" alt="ProSuministros Logo" className="h-8 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-900 hover:text-[#00C8CF] px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* WhatsApp Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="hidden sm:flex items-center space-x-2 border-[#00C8CF] text-[#00C8CF] hover:bg-[#00C8CF] hover:text-white"
              >
                <SiWhatsapp className="w-4 h-4" />
                <span>WhatsApp</span>
              </Button>

              {/* Cart Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsCartOpen(true)}
                className="relative"
              >
                <ShoppingCart className="w-4 h-4" />
                {getTotalItems() > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-[#00C8CF] text-white min-w-[20px] h-5 flex items-center justify-center text-xs">
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-[#00C8CF] hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button
                variant="outline"
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="w-full mt-2 border-[#00C8CF] text-[#00C8CF] hover:bg-[#00C8CF] hover:text-white"
              >
                <SiWhatsapp className="w-4 h-4 mr-2" />
                Contactar por WhatsApp
              </Button>
            </div>
          </div>
        )}
      </header>

      <Cart />
    </>
  )
}

export default Header

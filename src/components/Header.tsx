import { Leaf, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { id: 'contact', label: '¡Contáctanos!' },
    { id: 'blog', label: 'Blog' },
    { id: 'catalog', label: 'Catálogo' },
    { id: 'wellness', label: 'Guía de Bienestar' },
  ];

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="natural-gradient border-b border-sage-200 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          {/* Logo y título */}
          <div className="flex items-center space-x-2 sm:space-x-4 flex-1">
            <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full shadow-lg flex-shrink-0 overflow-hidden">
              <img 
                src="/img/logo.jpeg" 
                alt="Sayqa Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <h1 className="text-lg sm:text-2xl lg:text-3xl font-display font-bold text-sage-800 leading-tight">
                Sayqa – Medicina Natural
              </h1>
              <p className="text-xs sm:text-sm text-sage-600 mt-1 sm:mt-2 leading-relaxed hidden sm:block lg:max-w-2xl">
                Ofrecemos infusiones hechas de hierbas medicinales tradicionales, elaboradas 
                cuidadosamente para tu bienestar y salud con el objetivo de ser una alternativa 
                viable para el cuidado del cuerpo.
              </p>
            </div>
          </div>
          
          {/* Navegación desktop */}
          <nav className="hidden lg:flex space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-4 xl:px-6 py-2 xl:py-3 rounded-full font-medium transition-all duration-300 text-sm xl:text-base whitespace-nowrap ${
                  activeSection === item.id
                    ? 'bg-sage-600 text-white shadow-lg scale-105'
                    : 'bg-white/70 text-sage-700 hover:bg-sage-100 hover:scale-105'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Botón menú móvil */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/70 text-sage-700 hover:bg-sage-100 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menú móvil */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 space-y-2 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSectionChange(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-sage-600 text-white shadow-md'
                    : 'bg-transparent text-sage-700 hover:bg-sage-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

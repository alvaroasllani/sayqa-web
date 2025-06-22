
import { Leaf } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const navItems = [
    { id: 'contact', label: '¡Contáctanos!' },
    { id: 'blog', label: 'Blog' },
    { id: 'catalog', label: 'Catálogo' },
    { id: 'wellness', label: 'Guía de Bienestar' },
  ];

  return (
    <header className="natural-gradient border-b border-sage-200 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo y título */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-16 h-16 bg-sage-600 rounded-full shadow-lg">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-display font-bold text-sage-800">
                Sayqa – Medicina Natural
              </h1>
              <p className="text-sm text-sage-600 mt-2 max-w-2xl leading-relaxed">
                Ofrecemos infusiones hechas de hierbas medicinales tradicionales, elaboradas 
                cuidadosamente para tu bienestar y salud con el objetivo de ser una alternativa 
                viable para el cuidado del cuerpo.
              </p>
            </div>
          </div>
          
          {/* Navegación */}
          <nav className="flex space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-sage-600 text-white shadow-lg scale-105'
                    : 'bg-white/70 text-sage-700 hover:bg-sage-100 hover:scale-105'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

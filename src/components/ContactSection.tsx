import { Facebook, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-sage-800 mb-4 sm:mb-6">
            ¡Contáctanos!
          </h2>
          <p className="text-base sm:text-lg text-sage-600 leading-relaxed max-w-2xl mx-auto px-4">
            Estamos siempre conectados. Síguenos en nuestras redes sociales y contáctanos 
            en cualquier momento. Ya sea para dudas sobre nuestros productos o cualquier 
            consulta, te respondemos lo antes posible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Imagen ilustrativa */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl max-w-md mx-auto lg:max-w-none">
              <img
                src="/img/logo.jpeg"
                alt="Sayqa - Medicina Natural Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 bg-sage-200 rounded-full opacity-50"></div>
            <div className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 bg-earth-200 rounded-full opacity-60"></div>
          </div>

          {/* Redes sociales */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-sage-800 mb-6 sm:mb-8 text-center lg:text-left">
              Encuéntranos en:
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              <a
                href="#"
                className="flex items-center space-x-4 p-4 sm:p-6 bg-white rounded-2xl shadow-lg hover-lift group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-sage-800 text-sm sm:text-base">Facebook</h4>
                  <p className="text-sage-600 text-xs sm:text-sm">Síguenos para tips de bienestar</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center space-x-4 p-4 sm:p-6 bg-white rounded-2xl shadow-lg hover-lift group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-sage-800 text-sm sm:text-base">WhatsApp</h4>
                  <p className="text-sage-600 text-xs sm:text-sm">Consultas directas y personalizadas</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center space-x-4 p-4 sm:p-6 bg-white rounded-2xl shadow-lg hover-lift group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <span className="text-white font-bold text-xs sm:text-sm">TT</span>
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-sage-800 text-sm sm:text-base">TikTok</h4>
                  <p className="text-sage-600 text-xs sm:text-sm">Recetas y consejos naturales</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

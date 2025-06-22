
import { Facebook, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-sage-800 mb-6">
            ¡Contáctanos!
          </h2>
          <p className="text-lg text-sage-600 leading-relaxed max-w-2xl mx-auto">
            Estamos siempre conectados. Síguenos en nuestras redes sociales y contáctanos 
            en cualquier momento. Ya sea para dudas sobre nuestros productos o cualquier 
            consulta, te respondemos lo antes posible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen ilustrativa */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=600&fit=crop"
                alt="Infusiones naturales y hierbas medicinales"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-sage-200 rounded-full opacity-50"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-earth-200 rounded-full opacity-60"></div>
          </div>

          {/* Redes sociales */}
          <div className="space-y-8">
            <h3 className="text-2xl font-display font-semibold text-sage-800 mb-8">
              Encuéntranos en:
            </h3>
            
            <div className="space-y-6">
              <a
                href="#"
                className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg hover-lift group"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Facebook className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-sage-800">Facebook</h4>
                  <p className="text-sage-600 text-sm">Síguenos para tips de bienestar</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg hover-lift group"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-sage-800">WhatsApp</h4>
                  <p className="text-sage-600 text-sm">Consultas directas y personalizadas</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg hover-lift group"
              >
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-sm">TT</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sage-800">TikTok</h4>
                  <p className="text-sage-600 text-sm">Recetas y consejos naturales</p>
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


import { useState } from 'react';
import { X, Info } from 'lucide-react';

const WellnessGuideSection = () => {
  const [selectedBodyPart, setSelectedBodyPart] = useState<string | null>(null);

  const bodyParts = {
    head: {
      name: "Cabeza (Estrés y sueño)",
      products: [
        { 
          name: "Toronjil (melisa)", 
          properties: "Propiedades calmantes para el estrés, ansiedad y mejora del sueño.",
          recommendation: "Infusión con una cucharada de hojas frescas o secas en agua caliente, reposar 10 minutos. Beber 1-3 veces al día."
        },
        { 
          name: "Llantén", 
          properties: "Alivio de infecciones respiratorias y tos.",
          recommendation: "Té con 3-5 hojas frescas o secas en agua caliente, reposar 10 minutos. Beber 1-2 veces al día."
        }
      ]
    },
    lungs: {
      name: "Pulmones",
      products: [
        { 
          name: "Menta", 
          properties: "Mejora de problemas respiratorios y alivio de resfriados",
          recommendation: "Infusión con 1 cucharadita de hojas secas en agua caliente. Reposar 10 minutos y beber después de las comidas."
        },
        { 
          name: "Hoja de guanábana", 
          properties: "Alivio de infecciones respiratorias y tos",
          recommendation: "Té con 1 cucharadita de hojas secas en agua caliente. Beber caliente."
        }
      ]
    },
    kidneys: {
      name: "Riñones",
      products: [
        { 
          name: "Cabello de choclo", 
          properties: "Diurético para problemas renales y urinarios",
          recommendation: "Infusión con una cucharada de cabello de choclo en agua caliente, reposar 10 minutos. Beber 1-2 veces al día"
        },
        { 
          name: "Rompe piedra", 
          properties: "Prevención y disolución de cálculos renales.",
          recommendation: "Infusión con 2 cucharadas de planta seca en 1 litro de agua hervida. Reposar 10 minutos. Beber durante el día."
        }
      ]
    },
    digestive: {
      name: "Sistema digestivo (estómago, cólon e intestinos)",
      products: [
        { 
          name: "Sedrón (verbena)", 
          properties: "Ayuda en la digestión y reducción de gases.",
          recommendation: "Infusión con 1 cucharadita de hojas secas en agua caliente. Reposar 10 minutos y beber después de las comidas."
        },
        { 
          name: "Paico", 
          properties: "Combate parásitos intestinales y cólicos.",
          recommendation: "Infusión con 1 cucharadita de hojas frescas o secas en agua caliente. Reposar 10 minutos. Beber después de las comidas."
        },
        { 
          name: "Hojas de sen", 
          properties: "Laxante natural para el estreñimiento.",
          recommendation: "Té con 1-2 gramos de hojas secas en agua caliente. Reposar 5-10 minutos y beber antes de dormir."
        }
      ]
    },
    liver: {
      name: "Hígado",
      products: [
        { 
          name: "Boldo", 
          properties: "Propiedades digestivas y hepáticas.",
          recommendation: "Infusión con 1-2 cucharaditas de hojas secas en agua caliente. Reposar 10 minutos y beber después de las comidas (máximo 2-3 veces por semana)."
        },
        { 
          name: "Alcachofa", 
          properties: "Mejora del funcionamiento hepático y depurativa.",
          recommendation: "Té con 2-3 hojas secas en agua hervida. Beber después de las comidas."
        }
      ]
    },
    heart: {
      name: "Presión arterial y colesterol (Corazón)",
      products: [
        { 
          name: "Jamaica", 
          properties: "Baja la presión arterial y combate el colesterol malo.",
          recommendation: "Infusión con 10-15 flores en 1 litro de agua hervida. Reposar 10 minutos. Beber frío o caliente."
        }
      ]
    }
  };

  const handleBodyPartClick = (partKey: string) => {
    setSelectedBodyPart(partKey);
  };

  const closeModal = () => {
    setSelectedBodyPart(null);
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-sage-800 mb-4 sm:mb-6">
            Guía de Bienestar
          </h2>
          <div className="text-sm sm:text-base lg:text-lg text-sage-600 leading-relaxed max-w-4xl mx-auto space-y-4 px-4">
            <p>
              Aquí podrás identificar de manera sencilla las áreas del cuerpo donde sientes 
              malestar o incomodidad. Al seleccionar la parte del cuerpo afectada, te brindaremos 
              recomendaciones personalizadas con productos naturales de Inti Mate que pueden 
              ayudarte a mejorar tu bienestar.
            </p>
            
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-6 text-amber-800 text-left">
              <p className="font-semibold mb-2 text-sm sm:text-base">NOTA IMPORTANTE:</p>
              <p className="text-xs sm:text-sm lg:text-base">
                Este recurso está diseñado para ofrecerte sugerencias de bienestar y no reemplaza 
                la consulta con profesionales de la salud. Si tienes problemas de salud graves o 
                persistentes, te recomendamos que acudas a un especialista. La Guía de Bienestar 
                es solo una herramienta complementaria para tu cuidado personal.
              </p>
            </div>
            
            <p className="text-sage-700 font-medium text-sm sm:text-base">
              Selecciona la zona donde sientas molestias o incomodidad para recibir 
              recomendaciones sobre productos que podrían ayudarte.
            </p>
          </div>
        </div>

        {/* Lista de partes del cuerpo */}
        <div className="mb-6 sm:mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 max-w-4xl mx-auto text-sm sm:text-base">
            <div className="text-sage-700 p-2">1. Cabeza (Estrés y sueño)</div>
            <div className="text-sage-700 p-2">2. Pulmones</div>
            <div className="text-sage-700 p-2">3. Riñones</div>
            <div className="text-sage-700 p-2">4. Sistema digestivo (estómago, cólon e intestinos)</div>
            <div className="text-sage-700 p-2">5. Hígado</div>
            <div className="text-sage-700 p-2">6. Presión arterial y colesterol (Corazón)</div>
          </div>
        </div>

        {/* Imagen del cuerpo humano interactivo */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md">
            <img 
              src="/lovable-uploads/8f6c5408-9a48-4a60-bb30-f43883009744.png" 
              alt="Cuerpo humano interactivo" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            
            {/* Áreas clickeables - ajustadas para móviles */}
            {/* Cerebro */}
            <button
              onClick={() => handleBodyPartClick('head')}
              className="absolute w-12 h-12 sm:w-16 sm:h-16 bg-sage-600/20 hover:bg-sage-600/40 rounded-full border-2 border-sage-600 transition-all duration-200 hover:scale-110 active:scale-95"
              style={{ top: '8%', right: '15%' }}
              title="Cabeza (Estrés y sueño)"
            />
            
            {/* Pulmones */}
            <button
              onClick={() => handleBodyPartClick('lungs')}
              className="absolute w-16 h-12 sm:w-20 sm:h-16 bg-sage-600/20 hover:bg-sage-600/40 rounded-lg border-2 border-sage-600 transition-all duration-200 hover:scale-110 active:scale-95"
              style={{ top: '30%', left: '15%' }}
              title="Pulmones"
            />
            
            {/* Corazón */}
            <button
              onClick={() => handleBodyPartClick('heart')}
              className="absolute w-10 h-10 sm:w-12 sm:h-12 bg-sage-600/20 hover:bg-sage-600/40 rounded-full border-2 border-sage-600 transition-all duration-200 hover:scale-110 active:scale-95"
              style={{ top: '32%', right: '12%' }}
              title="Presión arterial y colesterol (Corazón)"
            />
            
            {/* Hígado */}
            <button
              onClick={() => handleBodyPartClick('liver')}
              className="absolute w-12 h-10 sm:w-16 sm:h-12 bg-sage-600/20 hover:bg-sage-600/40 rounded-lg border-2 border-sage-600 transition-all duration-200 hover:scale-110 active:scale-95"
              style={{ top: '45%', right: '8%' }}
              title="Hígado"
            />
            
            {/* Sistema digestivo */}
            <button
              onClick={() => handleBodyPartClick('digestive')}
              className="absolute w-14 h-16 sm:w-18 sm:h-20 bg-sage-600/20 hover:bg-sage-600/40 rounded-lg border-2 border-sage-600 transition-all duration-200 hover:scale-110 active:scale-95"
              style={{ top: '55%', left: '35%', right: '35%' }}
              title="Sistema digestivo"
            />
            
            {/* Riñones */}
            <button
              onClick={() => handleBodyPartClick('kidneys')}
              className="absolute w-12 h-12 sm:w-14 sm:h-16 bg-sage-600/20 hover:bg-sage-600/40 rounded-lg border-2 border-sage-600 transition-all duration-200 hover:scale-110 active:scale-95"
              style={{ top: '48%', left: '8%' }}
              title="Riñones"
            />
            
            <p className="text-center text-sage-600 mt-4 text-xs sm:text-sm px-4">
              Haz clic en las áreas resaltadas para explorar recomendaciones específicas
            </p>
          </div>
        </div>

        {/* Modal con información detallada */}
        {selectedBodyPart && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-display font-bold text-sage-800 pr-4">
                    {bodyParts[selectedBodyPart].name}
                  </h3>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-sage-100 rounded-full transition-colors flex-shrink-0"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6 text-sage-600" />
                  </button>
                </div>

                {/* Productos recomendados */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-base sm:text-lg font-semibold text-sage-800 mb-3 sm:mb-4 flex items-center">
                    <Info className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                    Productos Recomendados:
                  </h4>
                  <div className="space-y-4 sm:space-y-6">
                    {bodyParts[selectedBodyPart].products.map((product, index) => (
                      <div key={index} className="border border-sage-200 rounded-lg p-3 sm:p-4 bg-sage-50">
                        <h5 className="font-bold text-sage-800 text-base sm:text-lg mb-2">{product.name}</h5>
                        <div className="space-y-2 sm:space-y-3">
                          <div>
                            <p className="font-semibold text-sage-700 mb-1 text-sm sm:text-base">Propiedades:</p>
                            <p className="text-sage-600 text-sm sm:text-base">{product.properties}</p>
                          </div>
                          <div>
                            <p className="font-semibold text-sage-700 mb-1 text-sm sm:text-base">Recomendación:</p>
                            <p className="text-sage-600 text-sm sm:text-base">{product.recommendation}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={closeModal}
                  className="w-full bg-sage-600 text-white py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-sage-700 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WellnessGuideSection;

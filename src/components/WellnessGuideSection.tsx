import { useState } from 'react';
import { X, Info } from 'lucide-react';

const WellnessGuideSection = () => {
  const [selectedBodyPart, setSelectedBodyPart] = useState<string | null>(null);

  const bodyParts = {
    head: {
      name: "Cerebro",
      products: [
        { 
          name: "Multivitamínico Sangre de toro", 
          properties: "Contiene Vitaminas A, D, B12, Palo Dulce y Omega 3. Proporciona más energía, defensas fuertes, huesos sanos, mente ágil y corazón fuerte.",
          recommendation: "Tomar las cápsulas 3 veces al día, 30 minutos antes de cada comida."
        },
        { 
          name: "Complejo B12 Antianémico", 
          properties: "Contiene Vitaminas A, D, B12, Palo Dulce y Omega 3. Reconstituyente cerebral que regenera las neuronas.",
          recommendation: "Tomar las cápsulas 3 veces al día, 30 minutos antes de cada comida."
        },
        { 
          name: "Cerebral memorex", 
          properties: "Contiene Fitina, Ginseng, Ginkgo Biloba, Nueces, Malta, Aguacate y Maca. Reconstituyente cerebral y antidepresivo.",
          recommendation: "Tomar las cápsulas 3 veces al día, 30 minutos antes de cada comida."
        },
        { 
          name: "Multicerebral", 
          properties: "Reforzado con Magnesio, Calcio, Huevo de Angelote y Levadura de Cerveza. Antianémico que apoya la salud general.",
          recommendation: "Tomar las cápsulas 3 veces al día, 30 minutos antes de cada comida."
        }
      ]
    },
    lungs: {
      name: "Sistema Nervioso",
      products: [
        { 
          name: "Nerviosan", 
          properties: "Regula el sistema nervioso, combate el insomnio, apoya deficiencias del corazón, alivia el estrés y disminuye los mareos.",
          recommendation: "Tomar las cápsulas 3 veces al día, 30 minutos antes de cada comida."
        },
        { 
          name: "Noni/Anona Graviola", 
          properties: "Estimula y regula el sistema inmunológico, regenera células y tejidos, potencial anticancerígeno y antitumoral, cicatrizante de heridas, regula los niveles de glucosa y alivia dolencias articulares y dolores musculares.",
          recommendation: "Tomar las cápsulas 3 veces al día, 30 minutos antes de cada comida."
        }
      ]
    },
    kidneys: {
      name: "Dolor Muscular",
      products: [
        { 
          name: "Chuchuguaza", 
          properties: "Alivio efectivo para dolores y lesiones, dolores reumáticos y artritis, lesiones musculares y articulares (golpes, torceduras), aceleración de la recuperación.",
          recommendation: "Aplicar en la zona afectada según indicaciones del envase."
        },
        { 
          name: "Uña de gato", 
          properties: "Efectivo para dolores reumáticos y artritis, lesiones dolorosas de músculos, tendones y articulaciones, torceduras y esguinces, lumbago, picadura de mosquitos e insectos, artrosis.",
          recommendation: "Tomar las cápsulas 3 veces al día, 30 minutos antes de cada comida."
        }
      ]
    },
    digestive: {
      name: "Sistema digestivo",
      products: [
        { 
          name: "Hercampuri", 
          properties: "Protege el hígado y la sangre, elimina grasas y reduce el colesterol, desinflama hígado y vesícula, combate barros y espinillas, normaliza la presión arterial, purifica la sangre.",
          recommendation: "Tomar las cápsulas 3 veces al día, 30 minutos antes de cada comida."
        },
        { 
          name: "Adelgazante forte", 
          properties: "Controla la obesidad y reduce el colesterol, desintoxica la sangre y limpia el hígado, limpia las venas de glucosa y colesterol, adelgazante natural.",
          recommendation: "Tomar las cápsulas 3 veces al día, 30 minutos antes de cada comida."
        },
        { 
          name: "Ajo, apio y perejil", 
          properties: "Purifica la sangre, disminuye la presión alta, relajante natural, reduce colesterol y triglicéridos, ayuda a disminuir el apetito, reduce la grasa corporal, ayuda a eliminar la celulitis.",
          recommendation: "Tomar las cápsulas 3 veces al día, 30 minutos antes de cada comida."
        },
        { 
          name: "Chupa Panza", 
          properties: "Desinflama el hígado, controla la obesidad y reduce el colesterol, desintoxica la sangre, limpia las venas de glucosa y colesterol, adelgazante natural, quema grasa.",
          recommendation: "Tomar las cápsulas 3 veces al día, 30 minutos antes de cada comida."
        },
        { 
          name: "Plan 30 días", 
          properties: "Elaborado con hierbas de acción diurética, contiene hierbas de acción laxante suave, favorece la eliminación de líquidos y toxinas.",
          recommendation: "Seguir las indicaciones del plan de 30 días incluido en el envase."
        }
      ]
    },
    liver: {
      name: "Hígado",
      products: [
        { 
          name: "Cúrcuma", 
          properties: "Previene gases y flatulencias, alivia inflamaciones gastrointestinales, úlceras gástricas y gastrointestinales, beneficioso para artritis y artrosis, reduce triglicéridos en la sangre, protege riñones, hígado y corazón.",
          recommendation: "Tomar las cápsulas 3 veces al día, 30 minutos antes de cada comida."
        },
        { 
          name: "Graviola", 
          properties: "Regenera células y repotencia el sistema inmunológico, actúa como antiinflamatorio y antioxidante, alivia el dolor (analgésico), potencial anticancerígeno, beneficioso para dolencias renales, úlceras internas y cólicos.",
          recommendation: "Tomar las cápsulas 3 veces al día, 30 minutos antes de cada comida."
        }
      ]
    },
    heart: {
      name: "Corazón",
      products: [
        { 
          name: "Ajos", 
          properties: "Alivia eficazmente tos, bronquitis y asma, ayuda a combatir la gripe, previene la arteriosclerosis, el colesterol alto y la presión arterial alta.",
          recommendation: "Tomar las cápsulas 3 veces al día, 30 minutos antes de cada comida."
        },
        { 
          name: "Cúrcuma", 
          properties: "Previene gases y flatulencias, alivia inflamaciones gastrointestinales, reduce triglicéridos en la sangre, protege riñones, hígado y corazón.",
          recommendation: "Tomar las cápsulas 3 veces al día, 30 minutos antes de cada comida."
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
              recomendaciones personalizadas con productos naturales de Sayqa que pueden 
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
            <div className="text-sage-700 p-2">1. Cerebro</div>
            <div className="text-sage-700 p-2">2. Sistema Nervioso</div>
            <div className="text-sage-700 p-2">3. Dolor Muscular</div>
            <div className="text-sage-700 p-2">4. Sistema digestivo</div>
            <div className="text-sage-700 p-2">5. Hígado</div>
            <div className="text-sage-700 p-2">6. Corazón</div>
          </div>
        </div>

        {/* Imagen del cuerpo humano interactivo con mejor posicionamiento */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md">
            <img 
              src="/lovable-uploads/8f6c5408-9a48-4a60-bb30-f43883009744.png" 
              alt="Cuerpo humano interactivo" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            
            {/* Cerebro - sobre el icono del cerebro en la parte superior derecha */}
            <button
              onClick={() => handleBodyPartClick('head')}
              className="absolute w-10 h-10 sm:w-12 sm:h-12 bg-sage-600/30 hover:bg-sage-600/50 rounded-full border-2 border-sage-600 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center"
              style={{ top: '8%', right: '8%' }}
              title="Cerebro"
            >
              <span className="text-xs font-bold text-sage-800">1</span>
            </button>
            
            {/* Sistema Nervioso - sobre el icono de pulmones en la parte izquierda */}
            <button
              onClick={() => handleBodyPartClick('lungs')}
              className="absolute w-12 h-10 sm:w-14 sm:h-12 bg-sage-600/30 hover:bg-sage-600/50 rounded-lg border-2 border-sage-600 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center"
              style={{ top: '15%', left: '5%' }}
              title="Sistema Nervioso"
            >
              <span className="text-xs font-bold text-sage-800">2</span>
            </button>
            
            {/* Dolor Muscular - sobre el icono de riñones en la parte izquierda media */}
            <button
              onClick={() => handleBodyPartClick('kidneys')}
              className="absolute w-10 h-12 sm:w-12 sm:h-14 bg-sage-600/30 hover:bg-sage-600/50 rounded-lg border-2 border-sage-600 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center"
              style={{ top: '45%', left: '8%' }}
              title="Dolor Muscular"
            >
              <span className="text-xs font-bold text-sage-800">3</span>
            </button>
            
            {/* Sistema digestivo - sobre el icono del sistema digestivo justo debajo de riñones */}
            <button
              onClick={() => handleBodyPartClick('digestive')}
              className="absolute w-14 h-14 sm:w-16 sm:h-16 bg-sage-600/30 hover:bg-sage-600/50 rounded-lg border-2 border-sage-600 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center"
              style={{ bottom: '15%', left: '12%' }}
              title="Sistema digestivo"
            >
              <span className="text-xs font-bold text-sage-800">4</span>
            </button>
            
            {/* Hígado - sobre el icono del hígado en la parte derecha */}
            <button
              onClick={() => handleBodyPartClick('liver')}
              className="absolute w-12 h-10 sm:w-14 sm:h-12 bg-sage-600/30 hover:bg-sage-600/50 rounded-lg border-2 border-sage-600 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center"
              style={{ top: '50%', right: '5%' }}
              title="Hígado"
            >
              <span className="text-xs font-bold text-sage-800">5</span>
            </button>
            
            {/* Corazón - sobre el icono del corazón en la parte superior derecha */}
            <button
              onClick={() => handleBodyPartClick('heart')}
              className="absolute w-10 h-10 sm:w-12 sm:h-12 bg-sage-600/30 hover:bg-sage-600/50 rounded-full border-2 border-sage-600 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center"
              style={{ top: '25%', right: '12%' }}
              title="Corazón"
            >
              <span className="text-xs font-bold text-sage-800">6</span>
            </button>
            
            <p className="text-center text-sage-600 mt-4 text-xs sm:text-sm px-4">
              Haz clic en las áreas numeradas para explorar recomendaciones específicas
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

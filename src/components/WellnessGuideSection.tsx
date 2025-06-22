
import { useState } from 'react';
import { X, Info } from 'lucide-react';

const WellnessGuideSection = () => {
  const [selectedBodyPart, setSelectedBodyPart] = useState<string | null>(null);

  const bodyParts = {
    head: {
      name: "Cabeza (Estrés y Sueño)",
      position: { top: "8%", left: "50%" },
      products: [
        { name: "Infusión de Manzanilla", price: "35 Bs", benefits: "Relajante y promotora del sueño" },
        { name: "Té de Lavanda", price: "38 Bs", benefits: "Reduce el estrés y la ansiedad" },
        { name: "Mezcla Anti-estrés", price: "42 Bs", benefits: "Combina hierbas calmantes" }
      ],
      properties: "Las hierbas como la manzanilla y lavanda contienen compuestos naturales que ayudan a relajar el sistema nervioso.",
      recommendations: "Consumir 30 minutos antes de dormir. Preparar con agua a 80°C durante 5-7 minutos."
    },
    lungs: {
      name: "Pulmones",
      position: { top: "25%", left: "50%" },
      products: [
        { name: "Té de Eucalipto", price: "40 Bs", benefits: "Expectorante y descongestionante" },
        { name: "Infusión Respiratoria", price: "45 Bs", benefits: "Limpia las vías respiratorias" },
        { name: "Té de Tomillo", price: "37 Bs", benefits: "Antiséptico natural" }
      ],
      properties: "El eucalipto y tomillo poseen propiedades expectorantes y antisépticas que ayudan a limpiar las vías respiratorias.",
      recommendations: "Tomar 2-3 tazas al día. Inhalar el vapor mientras se prepara para mayor beneficio."
    },
    heart: {
      name: "Corazón (Presión y Colesterol)",
      position: { top: "30%", left: "40%" },
      products: [
        { name: "Té Verde Premium", price: "48 Bs", benefits: "Reduce el colesterol" },
        { name: "Infusión Cardioprotectora", price: "52 Bs", benefits: "Fortalece el sistema cardiovascular" },
        { name: "Té de Espino Blanco", price: "45 Bs", benefits: "Regula la presión arterial" }
      ],
      properties: "Los antioxidantes del té verde y las propiedades del espino blanco ayudan a mantener un corazón saludable.",
      recommendations: "Consumir 2 tazas diarias, preferiblemente después de las comidas principales."
    },
    liver: {
      name: "Hígado",
      position: { top: "35%", left: "60%" },
      products: [
        { name: "Té de Diente de León", price: "43 Bs", benefits: "Desintoxica el hígado" },
        { name: "Infusión Hepatica", price: "47 Bs", benefits: "Regenera células hepáticas" },
        { name: "Té de Cardo Mariano", price: "50 Bs", benefits: "Protege el hígado" }
      ],
      properties: "El diente de león y cardo mariano contienen silimarina que protege y regenera las células hepáticas.",
      recommendations: "Tomar en ayunas por la mañana. Ciclos de 21 días con descanso de 7 días."
    },
    digestive: {
      name: "Sistema Digestivo",
      position: { top: "45%", left: "50%" },
      products: [
        { name: "Té de Jengibre", price: "40 Bs", benefits: "Mejora la digestión" },
        { name: "Infusión Digestiva", price: "38 Bs", benefits: "Alivia malestares estomacales" },
        { name: "Té de Menta", price: "35 Bs", benefits: "Antiespasmódico natural" }
      ],
      properties: "El jengibre estimula la producción de enzimas digestivas, mientras que la menta relaja los músculos intestinales.",
      recommendations: "Consumir después de las comidas principales. No exceder 3 tazas al día."
    },
    kidneys: {
      name: "Riñones",
      position: { top: "40%", left: "30%" },
      products: [
        { name: "Té de Cola de Caballo", price: "41 Bs", benefits: "Diurético natural" },
        { name: "Infusión Renal", price: "46 Bs", benefits: "Limpia los riñones" },
        { name: "Té de Perejil", price: "36 Bs", benefits: "Elimina toxinas" }
      ],
      properties: "La cola de caballo y perejil son diuréticos naturales que ayudan a eliminar toxinas y líquidos retenidos.",
      recommendations: "Tomar entre comidas con abundante agua. Consultar médico si tienes cálculos renales."
    }
  };

  const handleBodyPartClick = (partKey: string) => {
    setSelectedBodyPart(partKey);
  };

  const closeModal = () => {
    setSelectedBodyPart(null);
  };

  return (
    <section className="container mx-auto px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-sage-800 mb-6">
            Guía de Bienestar
          </h2>
          <p className="text-lg text-sage-600 leading-relaxed max-w-3xl mx-auto">
            Aquí podrás identificar de manera sencilla las áreas del cuerpo donde sientes 
            malestar o incomodidad. Haz clic en cualquier parte del cuerpo para descubrir 
            nuestras recomendaciones personalizadas.
          </p>
        </div>

        {/* Diagrama del cuerpo humano interactivo */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="w-80 h-96 mx-auto relative bg-gradient-to-b from-sage-100 to-sage-200 rounded-full shadow-lg">
              {/* Simulación simple del cuerpo humano */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-sage-400 text-sm mb-4">Cuerpo Humano Interactivo</div>
                
                {/* Puntos clickeables para cada parte del cuerpo */}
                {Object.entries(bodyParts).map(([key, part]) => (
                  <button
                    key={key}
                    onClick={() => handleBodyPartClick(key)}
                    className="absolute w-6 h-6 bg-sage-600 hover:bg-sage-700 rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 hover:scale-125 z-10"
                    style={{ top: part.position.top, left: part.position.left }}
                    title={part.name}
                  >
                    <span className="sr-only">{part.name}</span>
                  </button>
                ))}
                
                {/* Representación visual simple */}
                <div className="absolute top-4 w-16 h-16 bg-sage-300 rounded-full"></div>
                <div className="absolute top-20 w-20 h-32 bg-sage-300 rounded-lg"></div>
                <div className="absolute top-52 w-12 h-20 bg-sage-300 rounded-lg left-1/2 transform -translate-x-6"></div>
                <div className="absolute top-52 w-12 h-20 bg-sage-300 rounded-lg right-1/2 transform translate-x-6"></div>
                <div className="absolute bottom-20 w-10 h-16 bg-sage-300 rounded-lg left-1/2 transform -translate-x-8"></div>
                <div className="absolute bottom-20 w-10 h-16 bg-sage-300 rounded-lg right-1/2 transform translate-x-8"></div>
              </div>
            </div>
            
            <p className="text-center text-sage-600 mt-4 text-sm">
              Haz clic en los puntos para explorar recomendaciones específicas
            </p>
          </div>
        </div>

        {/* Modal con información detallada */}
        {selectedBodyPart && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-display font-bold text-sage-800">
                    {bodyParts[selectedBodyPart].name}
                  </h3>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-sage-100 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-sage-600" />
                  </button>
                </div>

                {/* Productos recomendados */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-sage-800 mb-4">
                    Productos Recomendados:
                  </h4>
                  <div className="grid gap-4">
                    {bodyParts[selectedBodyPart].products.map((product, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-sage-50 rounded-lg">
                        <div>
                          <h5 className="font-semibold text-sage-800">{product.name}</h5>
                          <p className="text-sm text-sage-600">{product.benefits}</p>
                        </div>
                        <div className="text-lg font-bold text-sage-700">
                          {product.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Propiedades medicinales */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-sage-800 mb-3 flex items-center">
                    <Info className="w-5 h-5 mr-2" />
                    Propiedades Medicinales:
                  </h4>
                  <p className="text-sage-600 leading-relaxed">
                    {bodyParts[selectedBodyPart].properties}
                  </p>
                </div>

                {/* Recomendaciones de consumo */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-sage-800 mb-3">
                    Recomendaciones de Consumo:
                  </h4>
                  <p className="text-sage-600 leading-relaxed">
                    {bodyParts[selectedBodyPart].recommendations}
                  </p>
                </div>

                <button
                  onClick={closeModal}
                  className="w-full bg-sage-600 text-white py-3 rounded-lg font-semibold hover:bg-sage-700 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Nota importante */}
        <div className="bg-earth-100 border border-earth-200 rounded-2xl p-6 text-center">
          <p className="text-earth-800 leading-relaxed">
            <strong>Nota importante:</strong> Este recurso está diseñado para ofrecerte sugerencias 
            de bienestar y no reemplaza la consulta con profesionales de la salud. Siempre consulta 
            con tu médico antes de incorporar nuevos productos a tu rutina, especialmente si tienes 
            condiciones médicas preexistentes o estás tomando medicamentos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WellnessGuideSection;

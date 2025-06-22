
import { ShoppingCart } from 'lucide-react';

const CatalogSection = () => {
  const products = [
    {
      id: 1,
      name: "Infusión de Manzanilla",
      price: "35",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop",
      description: "Perfecta para relajarse y conciliar el sueño",
      benefits: ["Relajante", "Digestiva", "Anti-inflamatoria"]
    },
    {
      id: 2,
      name: "Té Verde Orgánico",
      price: "42",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400&h=400&fit=crop",
      description: "Rico en antioxidantes y energía natural",
      benefits: ["Antioxidante", "Energizante", "Digestiva"]
    },
    {
      id: 3,
      name: "Mezcla Digestiva",
      price: "38",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=400&fit=crop",
      description: "Combina hierbas para una digestión saludable",
      benefits: ["Digestiva", "Calmante", "Purificante"]
    },
    {
      id: 4,
      name: "Infusión Detox",
      price: "45",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=400&fit=crop",
      description: "Limpia y purifica tu organismo naturalmente",
      benefits: ["Detox", "Purificante", "Diurética"]
    },
    {
      id: 5,
      name: "Té de Jengibre",
      price: "40",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=400&fit=crop",
      description: "Fortalece el sistema inmunológico",
      benefits: ["Inmunológico", "Digestiva", "Anti-inflamatoria"]
    },
    {
      id: 6,
      name: "Mezcla Relajante",
      price: "37",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop",
      description: "Combina lavanda y hierbas calmantes",
      benefits: ["Relajante", "Anti-estrés", "Sedante"]
    }
  ];

  return (
    <section className="container mx-auto px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-sage-800 mb-6">
            Nuestro Catálogo
          </h2>
          <p className="text-lg text-sage-600 leading-relaxed max-w-2xl mx-auto">
            Descubre nuestra selección cuidadosamente elaborada de infusiones medicinales, 
            cada una preparada con hierbas tradicionales para tu bienestar específico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="font-display font-semibold text-xl text-sage-800 mb-2">
                  {product.name}
                </h3>
                
                <p className="text-sage-600 text-sm mb-4">
                  {product.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.benefits.map((benefit, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-sage-100 text-sage-700 text-xs rounded-full"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-sage-800">
                    {product.price} <span className="text-sm font-normal">Bs.</span>
                  </div>
                  <button className="bg-sage-600 text-white p-3 rounded-full hover:bg-sage-700 transition-colors group-hover:scale-110">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;

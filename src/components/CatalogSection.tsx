import { MessageCircle } from 'lucide-react';

const CatalogSection = () => {
  const productCategories = [
    {
      categoryName: "Próstata",
      description: "Productos naturales para el cuidado de la próstata",
      products: [
        {
          id: 1,
          image: "/src/img/prostata/043141e7-b31e-4e63-b0c4-5262144bde6a.jpeg",
          benefits: ["Salud masculina", "Anti-inflamatorio", "Preventivo"]
        }
      ]
    },
    {
      categoryName: "Enfermedades de la Mujer",
      description: "Soluciones naturales para la salud femenina",
      products: [
        {
          id: 2,
          image: "/src/img/enfermedades_mujer/390e69e8-bf31-4228-860d-85952efeca14.jpeg",
          benefits: ["Salud femenina", "Hormonal", "Bienestar"]
        }
      ]
    },
    {
      categoryName: "Dolor Muscular",
      description: "Alivio natural para dolores musculares y articulares",
      products: [
        {
          id: 3,
          image: "/src/img/dolor_muscular/e1c15af8-3dfa-4885-9fbb-32084abfac0e.jpeg",
          benefits: ["Anti-inflamatorio", "Analgésico", "Relajante"]
        },
        {
          id: 4,
          image: "/src/img/dolor_muscular/0a26d15c-864c-4cd8-8e77-04c4b653aa16.jpeg",
          benefits: ["Anti-inflamatorio", "Analgésico", "Relajante"]
        }
      ]
    },
    {
      categoryName: "Suplementos",
      description: "Suplementos naturales para tu bienestar diario",
      products: [
        {
          id: 5,
          image: "/src/img/suplementos/49a49a47-29d0-4042-936a-532a3e2a9805.jpeg",
          benefits: ["Nutritivo", "Fortalecedor", "Energizante"]
        },
        {
          id: 6,
          image: "/src/img/suplementos/3ab7db3c-f4a2-43db-84d6-56c799430947.jpeg",
          benefits: ["Nutritivo", "Fortalecedor", "Energizante"]
        },
        {
          id: 7,
          image: "/src/img/suplementos/37802f30-3a3c-4a4b-a81b-1f5b52469e8c.jpeg",
          benefits: ["Nutritivo", "Fortalecedor", "Energizante"]
        },
        {
          id: 8,
          image: "/src/img/suplementos/8e2a84ad-6d6b-40c6-b015-1d101951e772.jpeg",
          benefits: ["Nutritivo", "Fortalecedor", "Energizante"]
        },
        {
          id: 9,
          image: "/src/img/suplementos/564debb5-271b-4ca9-aec5-6a5b96487d90.jpeg",
          benefits: ["Nutritivo", "Fortalecedor", "Energizante"]
        }
      ]
    },
    {
      categoryName: "Fortalecedor de Huesos",
      description: "Productos para fortalecer y cuidar tus huesos",
      products: [
        {
          id: 10,
          image: "/src/img/fortalezedor_huesos/4419c538-c76b-474a-9e0b-b49d6b96b66a.jpeg",
          benefits: ["Calcio natural", "Fortalecedor", "Preventivo"]
        },
        {
          id: 11,
          image: "/src/img/fortalezedor_huesos/c220d7ae-3969-4bfd-acda-8849a6fc03d0.jpeg",
          benefits: ["Calcio natural", "Fortalecedor", "Preventivo"]
        }
      ]
    },
    {
      categoryName: "Cicatrizante",
      description: "Acelera la cicatrización de forma natural",
      products: [
        {
          id: 12,
          image: "/src/img/cicatrizante/f1f5139f-a0cd-4430-8fa9-ab904cca0277.jpeg",
          benefits: ["Regenerativo", "Curativo", "Natural"]
        },
        {
          id: 13,
          image: "/src/img/cicatrizante/f2cbce21-6a5e-44b0-afb0-25d5ab313cda.jpeg",
          benefits: ["Regenerativo", "Curativo", "Natural"]
        }
      ]
    },
    {
      categoryName: "Depurativo",
      description: "Limpia y depura tu organismo naturalmente",
      products: [
        {
          id: 14,
          image: "/src/img/depurativo/3a51204d-f3f6-4fd7-8abb-ba2f6caab767.jpeg",
          benefits: ["Detox", "Purificante", "Digestivo"]
        },
        {
          id: 15,
          image: "/src/img/depurativo/5a976ef3-1565-4464-8891-cfd12a55a291.jpeg",
          benefits: ["Detox", "Purificante", "Digestivo"]
        }
      ]
    },
    {
      categoryName: "Sistema Nervioso",
      description: "Calma y fortalece tu sistema nervioso",
      products: [
        {
          id: 16,
          image: "/src/img/sistema_nervioso/3a51204d-f3f6-4fd7-8abb-ba2f6caab767.jpeg",
          benefits: ["Relajante", "Calmante", "Equilibrio"]
        },
        {
          id: 17,
          image: "/src/img/sistema_nervioso/7253a273-f4e6-4bc7-b5f6-61abcadda282.jpeg",
          benefits: ["Relajante", "Calmante", "Equilibrio"]
        }
      ]
    },
    {
      categoryName: "Adelgazantes",
      description: "Apoyo natural para el control de peso",
      products: [
        {
          id: 18,
          image: "/src/img/adelgazantes/5dfca16c-5fde-4367-9cf0-51829f585770.jpeg",
          benefits: ["Quema grasa", "Saciante", "Metabolismo"]
        },
        {
          id: 19,
          image: "/src/img/adelgazantes/98dba0df-53c6-4c20-985d-4a1dfb928176.jpeg",
          benefits: ["Quema grasa", "Saciante", "Metabolismo"]
        },
        {
          id: 20,
          image: "/src/img/adelgazantes/ce3d7006-a4a9-4daa-9d1a-749f8f9f356d.jpeg",
          benefits: ["Quema grasa", "Saciante", "Metabolismo"]
        },
        {
          id: 21,
          image: "/src/img/adelgazantes/bbb7a4e0-3dc0-4e89-ae7c-6f832414f2ea.jpeg",
          benefits: ["Quema grasa", "Saciante", "Metabolismo"]
        },
        {
          id: 22,
          image: "/src/img/adelgazantes/74d5b275-aa10-4335-adce-6af611022a3f.jpeg",
          benefits: ["Quema grasa", "Saciante", "Metabolismo"]
        }
      ]
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "59172727157";
    const message = "Hola, me interesa conocer más sobre sus productos de medicina natural.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="container mx-auto px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-sage-800 mb-6">
            Nuestro Catálogo
          </h2>
          <p className="text-lg text-sage-600 leading-relaxed max-w-2xl mx-auto">
            Descubre nuestra selección cuidadosamente elaborada de productos medicinales naturales, 
            cada uno preparado con hierbas tradicionales para tu bienestar específico.
          </p>
        </div>

        {productCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            {/* Título de la categoría */}
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-sage-800 mb-4">
                {category.categoryName}
              </h3>
              <p className="text-sage-600 text-lg max-w-xl mx-auto">
                {category.description}
              </p>
            </div>

            {/* Grid de productos de la categoría */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift group"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={`Producto ${category.categoryName}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.benefits.map((benefit, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-sage-100 text-sage-700 text-xs rounded-full"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <button 
                        onClick={handleWhatsAppClick}
                        className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors group-hover:scale-105 flex items-center space-x-2 font-semibold text-sm"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>+591 72727157</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CatalogSection;

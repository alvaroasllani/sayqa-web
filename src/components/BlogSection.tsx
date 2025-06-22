
import { Calendar, User, Heart } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Mi experiencia con la infusión de manzanilla",
      author: "María González",
      date: "15 de Marzo, 2024",
      excerpt: "Después de años luchando con el insomnio, encontré en las infusiones de Sayqa una solución natural que cambió mi vida...",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      likes: 24
    },
    {
      id: 2,
      title: "Remedios naturales para el estrés diario",
      author: "Dr. Carlos Mendez",
      date: "12 de Marzo, 2024",
      excerpt: "En el mundo acelerado de hoy, encontrar momentos de calma es esencial. Te comparto mis consejos profesionales...",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400&h=300&fit=crop",
      likes: 18
    },
    {
      id: 3,
      title: "Cómo preparar la infusión perfecta",
      author: "Ana Morales",
      date: "10 de Marzo, 2024",
      excerpt: "La preparación correcta de las infusiones es clave para obtener todos sus beneficios. Aquí mis secretos...",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop",
      likes: 31
    }
  ];

  return (
    <section className="container mx-auto px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-sage-800 mb-6">
            Blog de Bienestar
          </h2>
          <p className="text-lg text-sage-600 leading-relaxed max-w-2xl mx-auto">
            Comparte tu experiencia, descubre consejos de bienestar y conecta con nuestra 
            comunidad de personas que buscan una vida más saludable y natural.
          </p>
        </div>

        {/* Botón para publicar */}
        <div className="text-center mb-12">
          <button className="bg-sage-600 text-white px-8 py-4 rounded-full font-semibold hover-lift">
            Comparte tu experiencia
          </button>
        </div>

        {/* Posts del blog */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="font-display font-semibold text-xl text-sage-800 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-sage-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-sage-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <button className="text-sage-600 font-medium hover:text-sage-700 transition-colors">
                    Leer más →
                  </button>
                  <div className="flex items-center space-x-1 text-sage-500">
                    <Heart className="w-4 h-4" />
                    <span>{post.likes}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

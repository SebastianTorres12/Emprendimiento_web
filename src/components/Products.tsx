import React from 'react';
import cantunaImage from '../img/Cantuña.jpg';

const Products: React.FC = () => {
  const games = [
    {
      title: "El Pacto de Cantuña",
      category: "Endless Runner / Aventura",
      description: "Un emocionante endless runner inspirado en la legendaria historia ecuatoriana de Cantuña y su pacto con el diablo para construir la iglesia de San Francisco en Quito.",
      platforms: ["PC"],
      status: "Disponible",
      image: cantunaImage
    }
  ];

  return (
    <section id="products" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-futuristic font-bold text-white mb-6">
            ¿Qué Vendemos?
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Nuestro catálogo de videojuegos ofrece experiencias únicas para todos los tipos de jugadores
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="max-w-md">
            {games.map((game, index) => (
              <div key={index} className="bg-lava-gradient rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-gaming font-bold text-white mb-2">{game.title}</h3>
                  <p className="text-gold font-semibold mb-4">{game.category}</p>
                  <p className="text-white mb-4 leading-relaxed">{game.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm text-white mb-2">Plataformas:</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {game.platforms.map((platform, idx) => (
                        <span key={idx} className="bg-gold text-volcanic-black px-2 py-1 rounded text-xs font-bold">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                    game.status === 'Disponible' ? 'bg-green-600 text-white' :
                    game.status === 'En Desarrollo' ? 'bg-amber-600 text-white' :
                    'bg-blue-600 text-white'
                  }`}>
                    {game.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tecnologías */}
        <div className="bg-earth-gradient p-8 rounded-lg">
          <h3 className="text-3xl font-gaming font-bold text-white text-center mb-8">
            Tecnologías que Utilizamos
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-md mb-2">
                <div className="text-3xl mb-2"><i className="fas fa-bullseye"></i></div>
                <p className="font-semibold text-volcanic-black">Unity 3D</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-md mb-2">
                <div className="text-3xl mb-2"><i className="fas fa-rocket"></i></div>
                <p className="font-semibold text-volcanic-black">Unreal Engine</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-md mb-2">
                <div className="text-3xl mb-2"><i className="fas fa-palette"></i></div>
                <p className="font-semibold text-volcanic-black">Blender</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-md mb-2">
                <div className="text-3xl mb-2">💻</div>
                <p className="font-semibold text-volcanic-black">C# / C++</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

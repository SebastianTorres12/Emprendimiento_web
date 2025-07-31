import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-military font-bold text-white mb-6">
            ¿Quiénes Somos?
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-gaming font-bold text-gold mb-6">
              Nuestra Historia
            </h3>
            <p className="text-white mb-6 leading-relaxed">
              Somos un estudio de desarrollo de videojuegos independiente fundado en 2020, 
              especializado en crear experiencias gaming innovadoras que combinan narrativas 
              profundas con mecánicas de juego revolucionarias.
            </p>
            <p className="text-white mb-6 leading-relaxed">
              Nuestro equipo está conformado por desarrolladores apasionados, artistas creativos 
              y diseñadores visionarios que trabajan juntos para dar vida a mundos virtuales únicos.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center bg-lava-red p-4 rounded-lg">
                <div className="text-3xl font-bold text-gold">15+</div>
                <div className="text-white">Proyectos</div>
              </div>
              <div className="text-center bg-lava-red p-4 rounded-lg">
                <div className="text-3xl font-bold text-gold">50K+</div>
                <div className="text-white">Jugadores</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Misión */}
            <div className="bg-lava-gradient p-6 rounded-lg shadow-lg border-l-4 border-gold">
              <h4 className="text-lg font-pixel font-bold text-white mb-4 flex items-center">
                <i className="fas fa-bullseye mr-2"></i>Nuestra Misión
              </h4>
              <p className="text-white">
                Desarrollar videojuegos que inspiren, entretengan y conecten a las personas 
                a través de experiencias interactivas memorables, utilizando las últimas 
                tecnologías y técnicas de desarrollo.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-earth-gradient p-6 rounded-lg shadow-lg border-l-4 border-gold">
              <h4 className="text-lg font-pixel font-bold text-white mb-4 flex items-center">
                <i className="fas fa-eye mr-2"></i>Nuestra Visión
              </h4>
              <p className="text-white">
                Ser reconocidos como un estudio líder en la industria del gaming, 
                creando títulos que marquen tendencias y establezcan nuevos estándares 
                en la experiencia de juego.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-volcanic-red p-6 rounded-lg shadow-lg border-l-4 border-gold">
              <h4 className="text-lg font-pixel font-bold text-white mb-4 flex items-center">
                <i className="fas fa-star mr-2"></i>Nuestros Valores
              </h4>
              <ul className="text-white space-y-2">
                <li>• Innovación constante</li>
                <li>• Calidad sin compromisos</li>
                <li>• Pasión por el gaming</li>
                <li>• Trabajo en equipo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

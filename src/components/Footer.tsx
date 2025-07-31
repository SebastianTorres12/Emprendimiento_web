import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'Instagram', icon: <i className="fab fa-instagram"></i>, url: 'https://www.instagram.com/puente_diablo_studios/', color: 'hover:text-pink-400' },
    { name: 'Facebook', icon: <i className="fab fa-facebook"></i>, url: 'https://www.facebook.com/profile.php?id=61578650893454', color: 'hover:text-blue-600' },
  ];

  const quickLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Quiénes Somos', path: '/about' },
    { name: 'Nuestros Juegos', path: '/products' },
    { name: 'Contacto', path: '/contact' },
    { name: 'Licencias', path: '/licenses' }
  ];

  const legalLinks = [
    { name: 'Términos de Servicio', href: '#' },
    { name: 'Política de Privacidad', href: '#' },
    { name: 'EULA', href: '#' },
    { name: 'Cookies', href: '#' }
  ];

  return (
    <footer className="relative bg-volcanic-gradient text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-2"><i className="fas fa-fire"></i></span>
              <h3 className="text-xl font-gaming font-bold text-gold">
                Puente del Diablo
              </h3>
            </div>
            <p className="text-white mb-6 leading-relaxed">
              Game Studio dedicado a crear experiencias gaming épicas que 
              desafían los límites de la imaginación y conectan jugadores 
              de todo el mundo.
            </p>
            <div className="flex items-center space-x-2 text-sm text-white">
              <span><i className="fas fa-trophy"></i></span>
              <span>Estudio del Año 2024</span>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-gaming font-bold text-gold mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-white hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Información legal */}
          <div>
            <h4 className="text-lg font-gaming font-bold text-gold mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter y contacto */}
          <div>
            <h4 className="text-lg font-gaming font-bold text-gold mb-4">
              Mantente Conectado
            </h4>
            <p className="text-white mb-4 text-sm">
              Suscríbete para recibir las últimas noticias sobre nuestros juegos
            </p>
            <div className="flex mb-4">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button className="bg-gold hover:bg-bronze-gold text-volcanic-black px-4 py-2 rounded-r-md transition-colors font-bold">
                <i className="fas fa-envelope"></i>
              </button>
            </div>
            <div className="flex items-center space-x-2 text-sm text-white">
              <span><i className="fas fa-map-marker-alt"></i></span>
              <span>Ciudad Tecnológica, País</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-white mt-1">
              <span><i className="fas fa-phone"></i></span>
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-gaming font-bold text-gold mb-3">
                <i className="fas fa-globe mr-2"></i>Síguenos en Redes Sociales
              </h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`flex items-center space-x-2 text-white ${social.color} transition-colors duration-300 hover:transform hover:scale-110`}
                    title={social.name}
                  >
                    <span className="text-xl">{social.icon}</span>
                    <span className="hidden sm:inline">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Badges de calidad */}
            <div className="flex space-x-4 text-sm">
              <div className="bg-green-600 px-3 py-1 rounded-full flex items-center space-x-1">
                <span><i className="fas fa-shield-alt"></i></span>
                <span>SSL Seguro</span>
              </div>
              <div className="bg-gold text-volcanic-black px-3 py-1 rounded-full flex items-center space-x-1 font-bold">
                <span><i className="fas fa-star"></i></span>
                <span>4.9/5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white">
            <div className="mb-2 md:mb-0">
              <p>
                © 2024 Puente del Diablo Game Studio. Todos los derechos reservados.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span>Hecho con <i className="fas fa-heart text-lava-red"></i> y <i className="fas fa-coffee text-earth-brown"></i></span>
              <span>•</span>
              <span>Powered by Unity & Unreal</span>
            </div>
          </div>
          
          <div className="mt-4 text-xs text-white/50">
            <p>
              Este sitio web utiliza cookies para mejorar tu experiencia. 
              Al continuar navegando, aceptas nuestras políticas de privacidad.
            </p>
          </div>
        </div>
      </div>

      {/* Efecto de partículas decorativo - solo en la página de inicio */}
      <div className="w-full h-1 bg-gradient-to-r from-gold via-lava-red to-earth-brown"></div>
    </footer>
  );
};

export default Footer;

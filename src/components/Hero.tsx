import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.jpg';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen bg-volcanic-gradient flex items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-lava-red rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-magma-orange rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-20">
        {/* Logo del estudio */}
        <div className="mb-4 flex justify-center">
          <img 
            src={logo} 
            alt="Puente del Diablo Game Studio Logo" 
            className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 object-cover border-4 border-gold shadow-xl hover:border-lava-red transition-all duration-300 transform hover:scale-105"
          />
        </div>
        
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-military font-bold text-white mb-4">
          <span className="text-gold">Puente del Diablo</span>
          <br />
          <span className="text-2xl sm:text-3xl lg:text-4xl font-futuristic">Game Studio</span>
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-white mb-6 max-w-3xl mx-auto font-gaming">
          Creamos experiencias de juego épicas que desafían los límites de la imaginación
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/products"
            className="bg-lava-red hover:bg-volcanic-red text-white font-gaming font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 inline-block"
          >
            <i className="fas fa-gamepad mr-2"></i>Nuestros Juegos
          </Link>
          <Link
            to="/contact"
            className="border-2 border-gold text-gold hover:bg-gold hover:text-volcanic-black font-gaming font-bold py-3 px-8 rounded-lg transition-all inline-block"
          >
            <i className="fas fa-envelope mr-2"></i>Contactanos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

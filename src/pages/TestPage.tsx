import React from 'react';

const TestPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-16 bg-volcanic-black">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-gaming font-bold text-gold mb-8 text-center">
          🔥 Test de Colores Volcánicos
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Test de colores */}
          <div className="bg-volcanic-red p-6 rounded-lg">
            <h3 className="text-white font-bold">Volcanic Red</h3>
            <p className="text-white">Clase: bg-volcanic-red</p>
          </div>
          
          <div className="bg-lava-red p-6 rounded-lg">
            <h3 className="text-white font-bold">Lava Red</h3>
            <p className="text-white">Clase: bg-lava-red</p>
          </div>
          
          <div className="bg-magma-orange p-6 rounded-lg">
            <h3 className="text-white font-bold">Magma Orange</h3>
            <p className="text-white">Clase: bg-magma-orange</p>
          </div>
          
          <div className="bg-earth-brown p-6 rounded-lg">
            <h3 className="text-white font-bold">Earth Brown</h3>
            <p className="text-white">Clase: bg-earth-brown</p>
          </div>
          
          <div className="bg-gold p-6 rounded-lg">
            <h3 className="text-volcanic-black font-bold">Gold</h3>
            <p className="text-volcanic-black">Clase: bg-gold</p>
          </div>
          
          <div className="bg-ash-gray p-6 rounded-lg">
            <h3 className="text-white font-bold">Ash Gray</h3>
            <p className="text-white">Clase: bg-ash-gray</p>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-gaming font-bold text-volcanic-black mb-4">
            ✅ Test de Componentes
          </h2>
          <p className="text-charcoal mb-4">
            Si ves los colores volcánicos arriba, ¡Tailwind está funcionando correctamente!
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-lava-red hover:bg-volcanic-red text-white font-bold py-2 px-4 rounded transition-colors">
              Botón Lava
            </button>
            <button className="border-2 border-gold text-gold hover:bg-gold hover:text-volcanic-black font-bold py-2 px-4 rounded transition-colors">
              Botón Gold
            </button>
            <button className="bg-earth-brown hover:bg-dirt-brown text-white font-bold py-2 px-4 rounded transition-colors">
              Botón Tierra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;

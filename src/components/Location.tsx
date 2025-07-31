import React from 'react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-volcanic-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-pixel font-bold text-gold mb-6">
            ¿Dónde Estamos?
          </h2>
          <div className="w-24 h-1 bg-lava-red mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de ubicación */}
          <div>
            <div className="bg-gradient-to-br from-earth-brown to-volcanic-black border border-gold/30 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-gaming font-bold text-gold mb-6">
                🏢 Nuestra Sede Principal
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-lava-red text-xl">📍</div>
                  <div>
                    <p className="font-semibold text-gold">Dirección:</p>
                    <p className="text-white">Av. Principal 123, Zona Gaming<br />Ciudad Tecnológica, País</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="text-lava-red text-xl">🏢</div>
                  <div>
                    <p className="font-semibold text-gold">Oficinas:</p>
                    <p className="text-white">Edificio Tech Tower, Pisos 8-10</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-lava-red text-xl">🌍</div>
                  <div>
                    <p className="font-semibold text-gold">Presencia Global:</p>
                    <p className="text-white">Con equipos remotos en más de 15 países</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-lava-red text-xl">🚗</div>
                  <div>
                    <p className="font-semibold text-gold">Acceso:</p>
                    <p className="text-white">Estacionamiento gratuito disponible<br />Cerca del metro línea azul</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horarios */}
            <div className="bg-gradient-to-br from-earth-brown to-volcanic-black border border-gold/30 p-8 rounded-lg shadow-lg mt-6">
              <h3 className="text-2xl font-gaming font-bold text-gold mb-6">
                🕒 Horarios de Atención
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gold">Lunes - Viernes</p>
                  <p className="text-white">9:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-gold">Sábados</p>
                  <p className="text-white">10:00 AM - 2:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-gold">Domingos</p>
                  <p className="text-white">Cerrado</p>
                </div>
                <div>
                  <p className="font-semibold text-gold">Soporte 24/7</p>
                  <p className="text-white">Online disponible</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa placeholder y información adicional */}
          <div>
            <div className="bg-gradient-to-br from-lava-red to-magma-orange p-8 rounded-lg text-white h-64 flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="text-6xl mb-4"><i className="fas fa-map"></i></div>
                <p className="text-xl font-gaming">Mapa Interactivo</p>
                <p className="text-gold mt-2">Próximamente disponible</p>
              </div>
            </div>

            {/* Oficinas adicionales */}
            <div className="bg-gradient-to-br from-earth-brown to-volcanic-black border border-gold/30 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-gaming font-bold text-gold mb-4">
                <i className="fas fa-globe mr-2"></i>Oficinas Satélite
              </h4>
              
              <div className="space-y-4">
                <div className="border-l-4 border-lava-red pl-4">
                  <p className="font-semibold text-gold">Oficina Norte</p>
                  <p className="text-white text-sm">Centro de Desarrollo Secundario</p>
                </div>
                
                <div className="border-l-4 border-lava-red pl-4">
                  <p className="font-semibold text-gold">Hub Creativo</p>
                  <p className="text-white text-sm">Estudio de Arte y Diseño</p>
                </div>
                
                <div className="border-l-4 border-lava-red pl-4">
                  <p className="font-semibold text-gold">Centro de Testing</p>
                  <p className="text-white text-sm">QA y Beta Testing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

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
                <i className="fas fa-building mr-2"></i>Nuestra Sede Principal
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-lava-red text-xl"><i className="fas fa-map-marker-alt"></i></div>
                  <div>
                    <p className="font-semibold text-gold">Dirección:</p>
                    <p className="text-white">Sector El Inca, Quito<br />Pichincha, Ecuador</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="text-lava-red text-xl"><i className="fas fa-building"></i></div>
                  <div>
                    <p className="font-semibold text-gold">Ubicación:</p>
                    <p className="text-white">Puente del diablo Game Studios</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-lava-red text-xl"><i className="fas fa-globe-americas"></i></div>
                  <div>
                    <p className="font-semibold text-gold">Presencia Global:</p>
                    <p className="text-white">Desde Ecuador al mundo, con equipos remotos en Latinoamérica</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-lava-red text-xl"><i className="fas fa-car"></i></div>
                  <div>
                    <p className="font-semibold text-gold">Acceso:</p>
                    <p className="text-white">Metro Estación Plaza de Toros<br />Transporte público y vías principales</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horarios */}
            <div className="bg-gradient-to-br from-earth-brown to-volcanic-black border border-gold/30 p-8 rounded-lg shadow-lg mt-6">
              <h3 className="text-2xl font-gaming font-bold text-gold mb-6">
                <i className="fas fa-clock mr-2"></i>Horarios de Atención
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gold">Lunes - Viernes</p>
                  <p className="text-white">8:00 AM - 5:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-gold">Sábados</p>
                  <p className="text-white">9:00 AM - 1:00 PM</p>
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

          {/* Mapa de Google Maps */}
          <div>
            <div className="bg-gradient-to-br from-earth-brown to-volcanic-black border border-gold/30 rounded-lg overflow-hidden shadow-lg mb-6">
              <div className="p-4 bg-gradient-to-r from-lava-red to-magma-orange">
                <h3 className="text-xl font-gaming font-bold text-white text-center">
                  <i className="fas fa-map-marked-alt mr-2"></i>Nuestra Ubicación
                </h3>
              </div>
              <div className="p-2">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.8052037832103!2d-78.4753655615273!3d-0.14691669947025435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMDgnNDguOSJTIDc4wrAyOCcxMy44Ilc!5e0!3m2!1ses!2sec!4v1753923586894!5m2!1ses!2sec" 
                  width="100%" 
                  height="400" 
                  style={{border:0}} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>

            {/* Oficinas adicionales */}
            <div className="bg-gradient-to-br from-earth-brown to-volcanic-black border border-gold/30 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-gaming font-bold text-gold mb-4">
                <i className="fas fa-globe mr-2"></i>Oficinas Satélite
              </h4>
              
              <div className="space-y-4">
                <div className="border-l-4 border-lava-red pl-4">
                  <p className="font-semibold text-gold">Guayaquil</p>
                  <p className="text-white text-sm">Centro de Desarrollo Secundario</p>
                </div>
                
                <div className="border-l-4 border-lava-red pl-4">
                  <p className="font-semibold text-gold">Cuenca</p>
                  <p className="text-white text-sm">Estudio de Arte y Diseño</p>
                </div>
                
                <div className="border-l-4 border-lava-red pl-4">
                  <p className="font-semibold text-gold">Remoto</p>
                  <p className="text-white text-sm">Equipos distribuidos en toda Latinoamérica</p>
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

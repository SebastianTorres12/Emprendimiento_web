import React, { useState } from 'react';
import LicenseModal from './LicenseModal';

const Licenses: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLicense, setSelectedLicense] = useState<{
    title: string;
    price: string;
    features: string[];
    basePrice: number;
  } | null>(null);

  const openModal = (license: { title: string; price: string; features: string[]; basePrice: number }) => {
    setSelectedLicense(license);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedLicense(null);
  };
  const licenseTypes = [
    {
      title: "Licencia Individual",
      price: "$15.00",
      description: "Perfecta para usuarios individuales",
      features: [
        "Acceso completo al software",
        "Actualizaciones incluidas durante la vigencia",
        "Soporte técnico básico",
        "Documentación completa",
        "Instalación en 1 dispositivo"
      ],
      popular: true,
      icon: "👤",
      basePrice: 15.00
    },
    {
      title: "Licencia Escolar",
      price: "$650.00",
      description: "Ideal para instituciones educativas (50 usuarios)",
      features: [
        "Licencia para hasta 50 usuarios",
        "Panel de administración educativo",
        "Soporte prioritario institucional",
        "Materiales didácticos incluidos",
        "Instalación en múltiples dispositivos",
        "Reportes de uso y progreso"
      ],
      popular: false,
      icon: "📚",
      basePrice: 650.00
    }
  ];

  const distributors = [
    {
      name: "Steam",
      logo: "fab fa-steam",
      description: "La plataforma líder mundial para juegos PC",
      reach: "180+ países",
      specialty: "PC Gaming"
    },
    {
      name: "Epic Games Store",
      logo: "fas fa-rocket",
      description: "Plataforma moderna con excelentes ofertas",
      reach: "190+ países",
      specialty: "PC & Mobile"
    },
    {
      name: "PlayStation Store",
      logo: "fab fa-playstation",
      description: "Exclusivo para consolas PlayStation",
      reach: "100+ países",
      specialty: "Console Gaming"
    },
    {
      name: "Xbox Marketplace",
      logo: "fab fa-xbox",
      description: "Ecosistema Microsoft Xbox y PC",
      reach: "120+ países",
      specialty: "Xbox & PC"
    },
    {
      name: "Nintendo eShop",
      logo: "fas fa-star",
      description: "Plataforma oficial de Nintendo",
      reach: "80+ países",
      specialty: "Nintendo Switch"
    },
    {
      name: "Google Play Games",
      logo: "fab fa-google-play",
      description: "Juegos móviles para Android",
      reach: "200+ países",
      specialty: "Mobile Gaming"
    }
  ];

  const clients = [
    {
      type: "Jugadores Casuales",
      percentage: "45%",
      description: "Buscan entretenimiento relajado y accesible",
      icon: "fas fa-gamepad"
    },
    {
      type: "Gamers Hardcore",
      percentage: "30%",
      description: "Demandan desafíos complejos y competitivos",
      icon: "fas fa-sword"
    },
    {
      type: "Streamers & Creadores",
      percentage: "15%",
      description: "Crean contenido para sus audiencias",
      icon: "📹"
    },
    {
      type: "Desarrolladores Indie",
      percentage: "10%",
      description: "Buscan inspiración y herramientas",
      icon: "💻"
    }
  ];

  return (
    <>
      <section id="licenses" className="py-20 bg-volcanic-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-military font-bold text-gold mb-6">
              🎫 Licencias & Distribución
            </h2>
            <div className="w-24 h-1 bg-lava-red mx-auto mb-6"></div>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Elige la licencia perfecta para tu experiencia gaming y conoce nuestros canales de distribución
            </p>
          </div>

          {/* Tipos de Licencia */}
          <div className="mb-20">
            <h3 className="text-3xl font-gaming font-bold text-gold text-center mb-12">
              Tipos de Licencia
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {licenseTypes.map((license, index) => (
                <div key={index} className={`relative bg-gradient-to-br from-earth-brown to-volcanic-black border border-gold rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:border-lava-red ${license.popular ? 'ring-4 ring-lava-red' : ''}`}>
                  {license.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-lava-red text-white px-4 py-1 rounded-b-lg text-sm font-bold">
                      MÁS POPULAR
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-2">{license.icon}</div>
                      <h4 className="text-2xl font-gaming font-bold text-gold">{license.title}</h4>
                      <div className="text-3xl font-bold text-lava-red mt-2">{license.price}</div>
                      <p className="text-white mt-2">{license.description}</p>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {license.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-white">
                          <span className="text-gold mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button 
                      onClick={() => openModal(license)}
                      className={`w-full py-3 px-6 rounded-lg font-bold transition-colors ${
                        license.popular 
                          ? 'bg-lava-red hover:bg-magma-orange text-white' 
                          : 'border-2 border-gold text-gold hover:bg-gold hover:text-volcanic-black'
                      }`}
                    >
                      Obtener Licencia
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Distribuidores */}
          <div className="mb-20">
            <h3 className="text-3xl font-gaming font-bold text-gold text-center mb-12">
              <i className="fas fa-handshake mr-2"></i>Nuestros Distribuidores
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {distributors.map((distributor, index) => (
                <div key={index} className="bg-gradient-to-br from-earth-brown to-volcanic-black border border-gold/30 p-6 rounded-lg shadow-lg hover:shadow-xl hover:border-lava-red transition-all">
                  <div className="text-center">
                    <div className="text-4xl mb-3"><i className={distributor.logo}></i></div>
                    <h4 className="text-xl font-gaming font-bold text-gold mb-2">{distributor.name}</h4>
                    <p className="text-white mb-3">{distributor.description}</p>
                    
                    <div className="flex justify-between text-sm">
                      <span className="bg-lava-red text-white px-2 py-1 rounded">{distributor.reach}</span>
                      <span className="bg-gold text-volcanic-black px-2 py-1 rounded">{distributor.specialty}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Clientes */}
          <div className="bg-gradient-to-br from-earth-brown to-volcanic-black border border-gold/30 p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-gaming font-bold text-gold text-center mb-12">
              👥 ¿Quiénes son Nuestros Clientes?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {clients.map((client, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-lava-red to-magma-orange p-6 rounded-lg text-white mb-4 hover:from-magma-orange hover:to-lava-red transition-all">
                    <div className="text-4xl mb-3"><i className={client.icon}></i></div>
                    <div className="text-3xl font-bold text-gold">{client.percentage}</div>
                    <h4 className="font-gaming font-bold text-lg mt-2">{client.type}</h4>
                  </div>
                  <p className="text-white text-sm">{client.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <div className="bg-lava-red p-6 rounded-lg">
                <h4 className="text-xl font-gaming font-bold text-white mb-4">
                  📊 Estadísticas de la Comunidad
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-gold">50,000+</div>
                    <div className="text-sm text-white">Jugadores Activos</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gold">95%</div>
                    <div className="text-sm text-white">Satisfacción</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gold">24/7</div>
                    <div className="text-sm text-white">Soporte</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gold">15+</div>
                    <div className="text-sm text-white">Países</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <LicenseModal 
        isOpen={modalOpen} 
        onClose={closeModal} 
        license={selectedLicense} 
      />
    </>
  );
};

export default Licenses;

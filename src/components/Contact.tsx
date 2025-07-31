import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert('¡Mensaje enviado! Te contactaremos pronto.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const paymentMethods = [
    { name: 'Steam', icon: '<i class="fab fa-steam"></i>', description: 'Compra directa en Steam Store' },
    { name: 'PayPal', icon: '<i class="fab fa-paypal"></i>', description: 'Pagos seguros internacionales' },
    { name: 'Tarjetas', icon: '<i class="fas fa-credit-card"></i>', description: 'Visa, MasterCard, American Express' },
    { name: 'Crypto', icon: '<i class="fab fa-bitcoin"></i>', description: 'Bitcoin, Ethereum, Litecoin' },
    { name: 'Epic Games', icon: '<i class="fas fa-rocket"></i>', description: 'Epic Games Store' },
    { name: 'Xbox Live', icon: '<i class="fab fa-xbox"></i>', description: 'Microsoft Store & Xbox' }
  ];

  return (
    <section id="contact" className="py-20 bg-volcanic-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-futuristic font-bold text-gold mb-6">
            ¿Cómo Contactarnos?
          </h2>
          <div className="w-24 h-1 bg-lava-red mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Formulario de contacto */}
          <div>
            <div className="bg-gradient-to-br from-earth-brown to-volcanic-black border border-gold/30 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-gaming font-bold text-gold mb-6">
                <i className="fas fa-envelope mr-2"></i>Envíanos un Mensaje
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gold mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gold mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gold mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gold mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-gold focus:border-transparent transition-colors resize-none"
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-lava-red hover:bg-magma-orange text-white font-bold py-3 px-6 rounded-md transition-colors transform hover:scale-105"
                >
                  Enviar Mensaje <i className="fas fa-rocket ml-2"></i>
                </button>
              </form>
            </div>
          </div>

          {/* Información de contacto */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-lava-red to-magma-orange p-8 rounded-lg text-white">
              <h3 className="text-2xl font-gaming font-bold mb-6">
                <i className="fas fa-phone mr-2"></i>Información de Contacto
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="text-gold text-xl"><i className="fas fa-envelope"></i></div>
                  <div>
                    <p className="font-semibold">Email Principal</p>
                    <p className="text-white">info@puentedeldiablo.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="text-gold text-xl"><i className="fas fa-gamepad"></i></div>
                  <div>
                    <p className="font-semibold">Soporte de Juegos</p>
                    <p className="text-white">support@puentedeldiablo.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="text-gold text-xl"><i className="fas fa-briefcase"></i></div>
                  <div>
                    <p className="font-semibold">Negocios</p>
                    <p className="text-white">business@puentedeldiablo.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="text-gold text-xl"><i className="fas fa-mobile-alt"></i></div>
                  <div>
                    <p className="font-semibold">Teléfono</p>
                    <p className="text-white">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="text-gold text-xl"><i className="fab fa-discord"></i></div>
                  <div>
                    <p className="font-semibold">Discord</p>
                    <p className="text-white">discord.gg/puentedeldiablo</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tiempo de respuesta */}
            <div className="bg-gradient-to-br from-earth-brown to-volcanic-black border border-gold/30 p-6 rounded-lg shadow-lg border-l-4 border-lava-red">
              <h4 className="text-lg font-gaming font-bold text-gold mb-2">
                <i className="fas fa-clock mr-2"></i>Tiempo de Respuesta
              </h4>
              <p className="text-white">
                Respondemos a todos los mensajes en un plazo máximo de 24 horas durante días laborales.
              </p>
            </div>
          </div>
        </div>

        {/* Métodos de Pago */}
        <div className="bg-gradient-to-br from-earth-brown to-volcanic-black border border-gold/30 p-8 rounded-lg">
          <h3 className="text-3xl font-gaming font-bold text-gold text-center mb-8">
            <i className="fas fa-credit-card mr-2"></i>Métodos de Pago
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {paymentMethods.map((method, index) => (
              <div key={index} className="bg-gradient-to-br from-lava-red to-magma-orange p-4 rounded-lg shadow-md text-center hover:from-magma-orange hover:to-lava-red transition-all transform hover:scale-105 text-white">
                <div className="text-3xl mb-2" dangerouslySetInnerHTML={{ __html: method.icon }}></div>
                <p className="font-semibold text-gold text-sm">{method.name}</p>
                <p className="text-xs text-white mt-1">{method.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <p className="text-white">
              <i className="fas fa-lock mr-2"></i>Todos los pagos son procesados de forma segura con encriptación SSL
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

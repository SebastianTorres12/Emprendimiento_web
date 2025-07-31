import React, { useState } from 'react';

interface LicenseModalProps {
  isOpen: boolean;
  onClose: () => void;
  license: {
    title: string;
    price: string;
    features: string[];
    basePrice: number;
  } | null;
}

const LicenseModal: React.FC<LicenseModalProps> = ({ isOpen, onClose, license }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    quantity: 1,
    period: '3' // 3, 6, o 12 meses
  });

  const [step, setStep] = useState(1); // 1: form, 2: confirmation

  if (!isOpen || !license) return null;

  // Multiplicadores por período
  const periodMultipliers = {
    '3': 1,     // 3 meses = precio base
    '6': 1.8,   // 6 meses = 10% descuento (vs 2x)
    '12': 3.2   // 12 meses = 20% descuento (vs 4x) + promoción
  };

  const periodLabels = {
    '3': '3 meses',
    '6': '6 meses',
    '12': '12 meses'
  };

  const basePrice = license.basePrice * periodMultipliers[formData.period as keyof typeof periodMultipliers];
  const total = basePrice * formData.quantity;
  
  // Verificar si hay promoción (12 meses)
  const hasPromotion = formData.period === '12';
  const promotionSavings = hasPromotion ? license.basePrice * formData.quantity * 0.8 : 0; // 20% de descuento

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'quantity' ? parseInt(value) || 1 : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleConfirm = () => {
    // Aquí iría la lógica para procesar la compra
    const periodText = periodLabels[formData.period as keyof typeof periodLabels];
    const promoText = hasPromotion ? ' (¡Con 20% de descuento!)' : '';
    alert(`¡Gracias ${formData.name}! Tu solicitud de ${formData.quantity} licencia(s) de ${license.title} por ${periodText}${promoText} con un total de $${(total * 1.1).toFixed(2)} ha sido recibida. Te contactaremos pronto.`);
    onClose();
    setStep(1);
    setFormData({ name: '', email: '', company: '', quantity: 1, period: '3' });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-volcanic-black border-2 border-gold rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        {step === 1 ? (
          // Formulario
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-military font-bold text-gold">
                🎫 Comprar Licencia
              </h2>
              <button
                onClick={onClose}
                className="text-white hover:text-gold text-2xl"
              >
                ✕
              </button>
            </div>

            <div className="mb-6 p-4 bg-lava-red rounded-lg">
              <h3 className="text-lg font-bold text-white mb-2">{license.title}</h3>
              <p className="text-white mb-2">
                Período: <span className="text-gold font-bold">{periodLabels[formData.period as keyof typeof periodLabels]}</span>
              </p>
              <p className="text-white mb-2">
                Precio por licencia: <span className="text-gold font-bold">${basePrice.toFixed(2)}</span>
                {hasPromotion && (
                  <span className="ml-2 bg-gold text-volcanic-black px-2 py-1 rounded text-xs font-bold">
                    <i className="fas fa-gift mr-1"></i>¡20% DESCUENTO!
                  </span>
                )}
              </p>
              <div className="text-sm text-white">
                <strong>Incluye:</strong>
                <ul className="mt-1 space-y-1">
                  {license.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </div>
              {hasPromotion && (
                <div className="mt-3 p-2 bg-gold text-volcanic-black rounded text-sm">
                  <strong><i className="fas fa-gift mr-1"></i>Promoción 12 meses:</strong> Ahorras ${promotionSavings.toFixed(2)} vs precio mensual
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded text-white focus:border-gold focus:outline-none"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded text-white focus:border-gold focus:outline-none"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Empresa/Organización
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded text-white focus:border-gold focus:outline-none"
                  placeholder="Nombre de tu empresa (opcional)"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Período de Validez *
                </label>
                <select
                  name="period"
                  value={formData.period}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded text-white focus:border-gold focus:outline-none"
                >
                  <option value="3">3 meses - ${(license.basePrice * 1).toFixed(2)}</option>
                  <option value="6">6 meses - ${(license.basePrice * 1.8).toFixed(2)} (10% descuento)</option>
                  <option value="12">12 meses - ${(license.basePrice * 3.2).toFixed(2)} (20% descuento + promoción)</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Cantidad de Licencias
                </label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  min="1"
                  max="100"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded text-white focus:border-gold focus:outline-none"
                />
              </div>

              <div className="bg-earth-brown p-4 rounded-lg">
                <div className="flex justify-between text-white">
                  <span>Subtotal ({formData.quantity} licencia{formData.quantity > 1 ? 's' : ''}):</span>
                  <span className="font-bold">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-white mt-2">
                  <span>Impuestos (estimado):</span>
                  <span className="font-bold">${(total * 0.1).toFixed(2)}</span>
                </div>
                <hr className="my-2 border-white/30" />
                <div className="flex justify-between text-gold text-lg font-bold">
                  <span>Total:</span>
                  <span>${(total * 1.1).toFixed(2)}</span>
                </div>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-2 border border-gray-600 text-white rounded hover:bg-gray-800 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-gold text-volcanic-black font-bold rounded hover:bg-bronze-gold transition-colors"
                >
                  Continuar
                </button>
              </div>
            </form>
          </div>
        ) : (
          // Confirmación
          <div className="p-6">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4"><i className="fas fa-party-horn"></i></div>
              <h2 className="text-2xl font-military font-bold text-gold mb-2">
                ¡Confirmación de Pedido!
              </h2>
            </div>

            <div className="bg-lava-red p-4 rounded-lg mb-6">
              <h3 className="text-white font-bold mb-2">Resumen del Pedido:</h3>
              <div className="text-white space-y-1">
                <p><strong>Cliente:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                {formData.company && <p><strong>Empresa:</strong> {formData.company}</p>}
                <p><strong>Licencia:</strong> {license.title}</p>
                <p><strong>Período:</strong> {periodLabels[formData.period as keyof typeof periodLabels]}</p>
                <p><strong>Cantidad:</strong> {formData.quantity}</p>
                <p><strong>Total:</strong> <span className="text-gold font-bold">${(total * 1.1).toFixed(2)}</span></p>
              </div>
            </div>

            <div className="bg-earth-brown p-4 rounded-lg mb-6">
              <p className="text-white text-sm">
                <strong><i className="fas fa-envelope mr-1"></i>Próximos pasos:</strong><br />
                1. Recibirás un email de confirmación<br />
                2. Te contactaremos para procesar el pago<br />
                3. Las licencias se activarán en 24-48 horas
              </p>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setStep(1)}
                className="flex-1 px-4 py-2 border border-gray-600 text-white rounded hover:bg-gray-800 transition-colors"
              >
                Atrás
              </button>
              <button
                onClick={handleConfirm}
                className="flex-1 px-4 py-2 bg-gold text-volcanic-black font-bold rounded hover:bg-bronze-gold transition-colors"
              >
                Confirmar Pedido
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LicenseModal;

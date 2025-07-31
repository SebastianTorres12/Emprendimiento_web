/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta volcánica y tierra
        'volcanic-black': '#1C1C1C',
        'volcanic-red': '#8B0000',
        'lava-red': '#DC143C',
        'ember-orange': '#FF6347',
        'earth-brown': '#8B4513',
        'dirt-brown': '#A0522D',
        'gold': '#FFD700',
        'bronze-gold': '#CD7F32',
        'ash-gray': '#696969',
        'charcoal': '#36454F',
        'magma-orange': '#FF4500',
        'obsidian': '#0F0F0F',
      },
      fontFamily: {
        'gaming': ['Orbitron', 'monospace'],
      },
      backgroundImage: {
        'volcanic-gradient': 'linear-gradient(135deg, #1C1C1C 0%, #8B0000 50%, #DC143C 100%)',
        'earth-gradient': 'linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #CD7F32 100%)',
        'lava-gradient': 'linear-gradient(135deg, #FF4500 0%, #DC143C 50%, #8B0000 100%)',
      }
    },
  },
  plugins: [],
}

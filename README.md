# 🔥 Puente del Diablo Game Studio

## Descripción
Sitio web oficial de **Puente del Diablo Game Studio**, un estudio independiente de desarrollo de videojuegos especializado en crear experiencias gaming innovadoras.

## 🎮 Características del Sitio

### Secciones Principales:
- **🏠 Inicio (Hero)**: Presentación impactante del estudio
- **👥 ¿Quiénes Somos?**: Historia, misión, visión y valores del estudio
- **🎯 ¿Qué Vendemos?**: Catálogo de videojuegos y tecnologías utilizadas
- **📍 ¿Dónde Estamos?**: Ubicación y información de contacto
- **📧 ¿Cómo Contactarnos?**: Formulario de contacto y métodos de pago
- **🎫 Licencias**: Tipos de licencias, distribuidores y perfil de clientes
- **🌐 Footer**: Redes sociales e información adicional

### 🛠 Tecnologías Utilizadas:
- **React 18** con TypeScript
- **Vite** (build tool ultra-rápido)
- **Tailwind CSS** (diseño responsivo y moderno)
- **Google Fonts** (Orbitron para temática gaming)
- **Componentes reutilizables** con buenas prácticas

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

# Instrucciones para Ejecutar el Proyecto

1. **Descomprimir el archivo**:
   - Extrae el contenido del archivo comprimido en alguna ubicación de tu elección.

2. **Abrir la carpeta del proyecto**:
   - Navega a la carpeta donde has descomprimido el archivo.
   - En la barra de direcciones del Explorador de Archivos, escribe `cmd` y presiona `Enter` para abrir la consola de comandos en esa ubicación.

3. **Instalar las dependencias**:
   - Una vez dentro de la consola de comandos, ejecuta el siguiente comando:
     ```sh
     npm install
     ```

4. **Ejecutar el proyecto**:
   - Después de que se complete la instalación de las dependencias, ejecuta el siguiente comando:
     ```sh
     npm run dev
     ```

5. **Acceder al proyecto en el navegador**:
   - Copia la dirección que aparece en la consola bajo la sección "Local".
   - Pega esa dirección en tu navegador web preferido para ver el proyecto en funcionamiento.







# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

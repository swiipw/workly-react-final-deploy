import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Asumo que tienes un archivo CSS base
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Función para medir el rendimiento (puedes dejarla o eliminarla)
reportWebVitals();

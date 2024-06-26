import React from 'react';
import ModelCanvas from '../Model';
import './home.css'; // Crea un archivo CSS para estilos adicionales si lo deseas

const Home = () => {
  return (
    <div className="home-container">
      <h1>Se puede</h1>
      <ModelCanvas url="http://localhost:5173/models/DamagedHelmet.gltf" />
    </div>
  );
};

export default Home;

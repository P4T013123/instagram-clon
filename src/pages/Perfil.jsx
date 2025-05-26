
import React from 'react';
import '../style/Perfil.css';

const Perfil = () => {
  return (
    <div className="perfil-container">
      <div className="perfil-header">
        <img src="/src/assets/PATOS.jpeg" alt="Foto de perfil" className="foto-perfil" />
        <div className="perfil-info">
          <div className="perfil-nombre">
            <h2>PATO_CUACK</h2>
            <button className="boton-editar">Editar perfil</button>
          </div>
          <div className="perfil-estadisticas">
            <span><strong>12</strong> publicaciones</span>
            <span><strong>120</strong> seguidores</span>
            <span><strong>100</strong> seguidos</span>
          </div>
          <div className="perfil-descripcion">
            <p>Se llama patocuack si eso</p>
          </div>
        </div>
      </div>

      <div className="perfil-tabs">
        <button className="activo">Publicaciones</button>
        <button>Reels</button>
        <button>Guardados</button>
        <button>Etiquetadas</button>
      </div>

      <div className="perfil-grid">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="cuadro-publicacion">
            <img src="/src/assets/PATOS.jpeg" alt={`post-${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Perfil;

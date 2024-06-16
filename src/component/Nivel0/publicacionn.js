import React from 'react';

const Publicacion = ({ titulo, contenido, imagenURL }) => {
  return (
    <div className="publicacion">
      <h2>{titulo}</h2>
      <p>{contenido}</p>
      <img src={imagenURL} alt={titulo} />
    </div>
  );
};

export default Publicacion;
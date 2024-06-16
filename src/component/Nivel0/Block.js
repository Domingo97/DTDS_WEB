import React from 'react';
import Publicacion from './publicacionn'; // Ajusta la ruta según tu estructura de archivos

const BlockDePublicaciones = () => {
  const publicaciones = [
    {
      id: 1,
      titulo: 'Firma de un nuevo contrato',
      contenido: 'en el dia de hoy, la empresa DataTech Deep solucion, hemos firmado un nuevo contrato con varias empresas, donde les vamos a brindar el servicio de  analisis de mercado y analisis de datos en el sector de la medicina',
      imagenURL: 'url_de_imagen_1.jpg',
    },
    {
      id: 2,
      titulo: 'Visita de Inspeccion del director general de la empresa',
      contenido: 'en el dia de hoy, la empresa DataTech Deep solucion, hemos firmado un nuevo contrato con varias empresas, donde les vamos a brindar el servicio de  analisis de mercado y analisis de datos en el sector de la medicina',
      imagenURL: 'url_de_imagen_2.jpg',
    },

    {
      id: 3,
      titulo: 'Integracion de un nuevo equipo de trabajo',
      contenido: 'en el dia de hoy, la empresa DataTech Deep solucion, hemos firmado un nuevo contrato con varias empresas, donde les vamos a brindar el servicio de  analisis de mercado y analisis de datos en el sector de la medicina',
      imagenURL: 'url_de_imagen_2.jpg',
    },

    {
      id: 4,
      titulo: 'Actividades de Solidaridad ',
      contenido: 'en el dia de hoy, la empresa DataTech Deep solucion, hemos firmado un nuevo contrato con varias empresas, donde les vamos a brindar el servicio de  analisis de mercado y analisis de datos en el sector de la medicina',
      imagenURL: 'url_de_imagen_2.jpg',
    },

    // Puedes agregar más objetos para representar más publicaciones
  ];

  return (
    <div className="block-de-publicaciones">
      {publicaciones.map((publicacion) => (
        <Publicacion
          key={publicacion.id}
          titulo={publicacion.titulo}
          contenido={publicacion.contenido}
          imagenURL={publicacion.imagenURL}
        />
      ))}
    </div>
  );
};

export default BlockDePublicaciones;
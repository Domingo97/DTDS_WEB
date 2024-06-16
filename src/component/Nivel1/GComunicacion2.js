import React, { useState, useEffect } from 'react';
import "../../Estilos/Principal.css";
import "../../Estilos/formgusuarios.css";
import IMG from '../../Imagenes/IMG';
import axios from 'axios';
import { Link } from 'react-router-dom';

import "../../Estilos/tabla.css";

const GComunicaciones2 = () => {

  const [registros, setRegistros] = useState([]);
  const obtenerRegistros = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/MostrarDatosCS');
      setRegistros(response.data); // Guardar los registros en el estado local
    } catch (error) {
      console.error('Error al obtener registros:', error);
    }
  };

  useEffect(() => {
    obtenerRegistros();
  }, []); // Ejecutar solo una vez al cargar el componente
 

  return (
    <div>
      <div style={{ width: '100%' }}>
        <header className="custom-header">
          <h1>INTRANET-DTDS</h1>
          <h1 style={{ marginLeft: '400px' }}>Servicio de Gestion de info de contratacion</h1>
          <img src={IMG.lgo} alt="" style={{ width: '30%', height: '80px', marginLeft: '70%', marginTop: '-30px' }} />
        </header>
      </div>
      <div className='cabezara' style={{ backgroundColor: '#00387b', width: '100%', height: '50px', marginBottom: '10px', marginTop: '-7px' }}>
          <nav>
            <ul className="horizontal-list">
              <li>
                <h1><Link to="/principal" spy={true} smooth={true} duration={200} style={{ cursor: 'pointer', color: 'white', marginLeft:'80px' }}>NUESTRO SERVICIOS </Link></h1>
              </li>
              <li>
                <h1><Link to="/IntraPrincipal" spy={true} smooth={true} duration={200} style={{ cursor: 'pointer', color: 'white' }}>INICIO-INTRANET</Link></h1>
              </li>
              <li>
                <h1><Link to="/principal" spy={true} smooth={true} duration={200} style={{ cursor: 'pointer', color: 'white' }}> SOBRE NOSOTROS </Link></h1>
              </li>
              <li>
                <h1><Link to="/principal" spy={true} smooth={true} duration={200} style={{ cursor: 'pointer', color: 'white' }}> DONDE ESTAMOS </Link></h1>
              </li>
              <li>
                <h1> <Link to="/principal" spy={true} smooth={true} duration={200} style={{ cursor: 'pointer', color: 'white' }}> TRABAJA CON NOSOTROS </Link></h1>
              </li>
              <li>
                <h1><Link to="/principal" spy={true} smooth={true} duration={200} style={{ cursor: 'pointer', color: 'white' }}> CONTACTOS </Link></h1>
              </li>
              <li>
                <h1><Link to="/principal" style={{ cursor: 'pointer', color: 'white' }}>INICIO-DTDS</Link></h1>
              </li>
            </ul>
          </nav>
        </div><br/><br/><br/>

     

      <div className="caja-datos" style={{ marginTop: '-50px', width: '100%' }}>
        <h2>Informacion de los que desean trabajar con nosotros</h2><br/><br/>
        <div className="scroll-container">
        <table className="tabla-registros" style={{ width: '100%' }}>
          <thead style={{ width: '100%' }}>
            <tr>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Profesion</th>
              <th>Correo</th>
              <th>Teléfono</th>
              <th>Dirección</th>
              <th>Pais</th>
              <th>Cuidad</th>
              <th>C. Postal</th>
            </tr>
          </thead>
          
          <tbody>
            {registros.map((registro) => (
              <tr key={registro._id}>
                <td>{registro.nombre}</td>
                <td>{registro.email}</td>
                <td>{registro.identificacion}</td>
                <td>{registro.apelidos}</td>
                <td>{registro.Telefono}</td>
                <td>{registro.direccion}</td>
                <td>{registro.codeprob}</td>
                <td>{registro.descripcion}</td>
                <td>{registro.explpro}</td>
    
              </tr>
            ))}
          </tbody>
        
        </table>
      </div>
      </div><br/><br/>

      <footer className="footer">
        <div className="footer-bottom">
          <p>Sección de gestión de Usuarios de nuestro sistema interno de la empresa DATATECH DEEP SOLUTION</p>
        </div>
      </footer>
    </div>
  );
};

export default GComunicaciones2;

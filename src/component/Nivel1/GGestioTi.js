
import React, { useState, useEffect } from 'react';
import "../../Estilos/Principal.css";
import "../../Estilos/formgusuarios.css";
import IMG from '../../Imagenes/IMG';
import axios from 'axios';
import { Link } from 'react-router-dom';

import "../../Estilos/tabla.css";

const GGestioTis = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [contraseña2, setContraseña2] = useState('');

  const [registros, setRegistros] = useState([]);
  const [buscar, setBuscar] = useState('');
  const [registro, setRegistro] = useState(null);

  const obtenerRegistros = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/MostrarDatosGP');
      setRegistros(response.data); // Guardar los registros en el estado local
    } catch (error) {
      console.error('Error al obtener registros:', error);
    }
  };

  useEffect(() => {
    obtenerRegistros();
  }, []); // Ejecutar solo una vez al cargar el componente

  const handleBorrarRegistro = async (nombre) => {
    try {
      await axios.delete(`http://localhost:3001/api/EliminarVP2/${nombre}`);
      obtenerRegistros(); // Vuelve a obtener los registros después de borrar
      alert('Registro borrado correctamente');
    } catch (error) {
      console.error('Error al borrar registro:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { nombre, apellidos, correo, telefono, direccion, departamento, contraseña, contraseña2 };

    if (nombre.trim() === '' || apellidos.trim() === '' || correo.trim() === '' || telefono.trim() === '' || direccion.trim() === '' ||
      departamento.trim() === '' || contraseña.trim() === '') {
      alert('Algunos campos están vacíos. Complétalos.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/api/RegistrarDatosGP', formData);
      console.log(response.data.message);
      alert('El registro se ha hecho correctamente.');
      obtenerRegistros(); // Actualiza la lista de registros
    } catch (error) {
      console.error('Error al guardar los datos:', error.response); // Imprime el error de respuesta detallado
      alert('Error al intentar guardar los datos en el servidor.');
    }

    // Limpiar los campos del formulario
    setNombre('');
    setApellidos('');
    setCorreo('');
    setTelefono('');
    setDireccion('');
    setDepartamento('');
    setContraseña('');
    setContraseña2('');
  };

  const handleBuscarRegistro = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/Busqueeda/${buscar}`);
      setRegistro(response.data);
      alert('Registro encontrado correctamente');
    } catch (error) {
      console.error('Error al buscar el registro:', error);
      alert('Error al buscar el registro');
    }
    setBuscar('');
  };

  return (
    <div>
      <div style={{ width: '100%' }}>
        <header className="custom-header">
          <h1>INTRANET-DTDS</h1>
          <h1 style={{ marginLeft: '400px' }}>Servicio de Gestión de Registros de Ventas de Servicios</h1>
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
        </div>


      <div>
        <form onSubmit={handleSubmit}>
          <div style={{ marginRight: '20px', marginLeft: '20px' }}>
            <label>Nombre del Cliente:</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Gepetrol"
            />
          </div>

          <div style={{ marginRight: '20px', marginLeft: '20px' }}>
            <label>Tipo de Cliente:</label>
            <select className='opcion' value={apellidos} onChange={(e) => setApellidos(e.target.value)} style={{width:'350px' }}>
                <option value="Empresa Privada">Empresa Privada</option>
                <option value="Empresa Publica">Empresa Publica</option>
                <option value="Instituciones Publicas">Instituciones publicas</option>
                <option value="Autonomos">autonomos</option>
        </select>
      </div>



          <div style={{ marginRight: '20px', marginLeft: '20px' }}>
            <label htmlFor="correo">Correo del Cliente:</label>
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="lilke55@gmail.com"
            />
          </div>
          <div style={{ marginRight: '20px', marginLeft: '20px' }}>
            <label htmlFor="telefono">Teléfono del Cliente:</label>
            <input
              type="tel"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              placeholder="+34 613 62 05 76"
            />
          </div>

          <div style={{ marginRight: '20px', marginLeft: '20px' }}>
            <label>Tipo de Producto:</label>
            <select className='opcion' value={direccion} onChange={(e) => setDireccion(e.target.value)} style={{width:'350px' }}>
                <option value="Acompañamiento y Asesoramiento de Geestion TI">Acompañamiento y sesoramiento de Gestion TI</option>
                <option value="Acompañamiento y Asesoramiento de Gobierno TI">Acompañamiento y sesoramiento de Gobierno TI</option>
                <option value="Acompañamiento y Asesoramiento de Planificacion de Proyectos TI">Acompañamiento y Asesoramiento de Planificacion de Proyectos TI</option>
                <option value="Acompañamiento y Asesoramiento de Planificacion de Proyectos Cientificos">Acompañamiento y Asesoramiento de Planificacion de Proyectos Cientificos</option>
        </select>
      </div>



          <div style={{ marginRight: '20px', marginLeft: '20px' }}>
            <label htmlFor="departamento">Coste del Producto:</label>
            <input
              type="number"
              value={departamento}
              onChange={(e) => setDepartamento(e.target.value)}
              placeholder="5000$"
            />
          </div>
          <div style={{ marginRight: '20px', marginLeft: '20px' }}>
            <label htmlFor="contraseña">Fecha de Inicio:</label>
            <input
              type="date"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              placeholder=""
            />
          </div>
          <div style={{ marginRight: '20px', marginLeft: '20px' }}>
            <label htmlFor="contraseña">Fecha De entrega:</label>
            <input
              type="date"
              value={contraseña2}
              onChange={(e) => setContraseña2(e.target.value)}
              placeholder="Owono7787#"
            />
          </div>
          <br /><br /><br /><br /><br />
          <button type="submit" style={{ marginLeft: '-290px', width: '140px', height: '40px' }}>Guardar</button>
          <button type="button" style={{ marginLeft: '200px', width: '100px', height: '40px' }} onClick={handleBuscarRegistro}>Buscar</button>
        </form>
      </div><br/>

      <div style={{ marginRight: '60px', marginLeft: '960px', marginTop: '-55px', borderRadius: '50px' }}>
        <input
          type="text"
          value={buscar}
          onChange={(e) => setBuscar(e.target.value)}
          placeholder="Busqueda"
        />
      </div><br/><br/><br/>

      <div className="caja-datos" style={{ marginTop: '-50px', width: '100%' }}>
      <h3><a href="https://drive.google.com/drive/u/4/folders/1Q63CGo27DAvJ2fC9mXD6IqiZrW1on9HK" target="_blank" spy={true} smooth={true} duration={200} style={{ cursor: 'pointer', color: 'black', marginLeft:'70px' }}>Enlaces de la Documentacion</a></h3>
        <div className="scroll-container">
        <table className="tabla-registros" style={{ width: '100%' }}>
          <thead style={{ width: '100%' }}>
            <tr>
              <th>Nombres Cliente</th>
              <th>Tipo Cliente</th>
              <th>Correo Cliente</th>
              <th>Telefono</th>
              <th>Tipo de Producto</th>
              <th>Precio Producto</th>
              <th>Fecha Inicio</th>
              <th>Fecha Fin</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          
          <tbody>
            {registros.map((registro) => (
              <tr key={registro._id}>
                <td>{registro.nombre}</td>
                <td>{registro.apellidos}</td>
                <td>{registro.correo}</td>
                <td>{registro.telefono}</td>
                <td>{registro.direccion}</td>
                <td>{registro.departamento}</td>
                <td>{registro.contraseña}</td>
                <td>{registro.contraseña2}</td>
                <td>
                  <button onClick={() => handleBorrarRegistro(registro.nombre)}>Del</button>
                </td>
              </tr>
            ))}
          </tbody>
        
        </table>
      </div>
      </div><br/>

      <footer className="footer">
        <div className="footer-bottom">
          <p>Sesion de Ventas De Servicios de DATATECH DEEP SOLUTION</p>
        </div>
      </footer>
    </div>
  );
};

export default GGestioTis;

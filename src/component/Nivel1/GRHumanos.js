import React, { useState, useEffect } from 'react';
import "../../Estilos/Principal.css";
import "../../Estilos/formgusuarios.css";
import IMG from '../../Imagenes/IMG';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../../Estilos/tabla.css";

const GRHumano = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [sexo, setSexo] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [contraseña, setContraseña] = useState('');

  const [registros, setRegistros] = useState([]);
  const [buscar, setBuscar] = useState('');
  const [registro, setRegistro] = useState(null);

  const obtenerRegistros = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/MostrarDatosRH');
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
      await axios.delete(`http://localhost:3001/api/EliminarRH/${nombre}`);
      obtenerRegistros(); // Vuelve a obtener los registros después de borrar
      alert('Registro borrado correctamente');
    } catch (error) {
      console.error('Error al borrar registro:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { nombre, apellidos, correo, telefono, direccion, departamento, contraseña, sexo };

    if (nombre.trim() === '' || apellidos.trim() === '' || correo.trim() === '' || telefono.trim() === '' || direccion.trim() === '' ||
      departamento.trim() === '' || contraseña.trim() === '' || sexo.trim() === '') {
      alert('Algunos campos están vacíos. Complétalos.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/api/RegistrarDatosRH', formData);
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
    setSexo('');
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
          <h1 style={{ marginLeft: '400px' }}>Servicio de Gestión de Recursos Humanos</h1>
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
            <label>Nombre y Apelido Empleado:</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Jose Domingo"
            />
          </div>
          <div style={{ marginRight: '20px', marginLeft: '20px' }}>
            <label>Fecha de Entrada:</label>
            <input
              type="date"
              value={apellidos}
              onChange={(e) => setApellidos(e.target.value)}
              placeholder="Owono Nchama"
            />
          </div>
          <div style={{ marginRight: '20px', marginLeft: '20px' }}>
            <label>Sexo:</label>
            <input
              type="text"
              value={sexo}
              onChange={(e) => setSexo(e.target.value)}
              placeholder="Hombre/Mujer"
            />
          </div>
          <div style={{ marginRight: '20px', marginLeft: '20px' }}>
            <label htmlFor="correo">Correo Empleado:</label>
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="BeeOwono55@gmail.com"
            />
          </div>
          <div style={{ marginRight: '20px', marginLeft: '20px' }}>
            <label htmlFor="telefono">Salario:</label>
            <input
              type="number"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              placeholder="5000$"
            />
          </div>
          <div style={{ marginRight: '20px', marginLeft: '20px' }}>
            <label htmlFor="direccion">Profesion:</label>
            <input
              type="text"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              placeholder="Tecnico en DAW"
            />
          </div>
          <div style={{ marginRight: '20px', marginLeft: '20px' }}>
            <label htmlFor="departamento">Proyecto:</label>
            <input
              type="text"
              value={departamento}
              onChange={(e) => setDepartamento(e.target.value)}
              placeholder="Santander"
            />
          </div>
          <div style={{ marginRight: '20px', marginLeft: '20px' }}>
            <label htmlFor="contraseña">Departamento:</label>
            <input
              type="text"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              placeholder="Analisis de  datos"
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
        <h2>Datos De los Empleados</h2>
        <div className="scroll-container">
        <table className="tabla-registros" style={{ width: '100%' }}>
          <thead style={{ width: '100%' }}>
            <tr>
              <th>Nombres y Apelidos</th>
              <th>Fecha Entrada</th>
              <th>Sexo</th>
              <th>Correo</th>
              <th>Salario</th>
              <th>Profesion</th>
              <th>Proyecto</th>
              <th>Departamento</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          
          <tbody>
            {registros.map((registro) => (
              <tr key={registro._id}>
                <td>{registro.nombre}</td>
                <td>{registro.apellidos}</td>
                <td>{registro.sexo}</td>
                <td>{registro.correo}</td>
                <td>{registro.telefono}</td>
                <td>{registro.direccion}</td>
                <td>{registro.departamento}</td>
                <td>{registro.contraseña}</td>
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
          <p>Sección de gestión de Empleados de nuestro sistema interno de la empresa DATATECH DEEP SOLUTION</p>
        </div>
      </footer>
    </div>
  );
};

export default GRHumano;
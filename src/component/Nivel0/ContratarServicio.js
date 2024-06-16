import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Textars from '../Nivel0/textarea'
import axios from 'axios';


const ContServicios = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [identificacion, setIdentificacion] = useState('');
  const [apelidos, setApelidos] = useState('');
  const [Telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [codeprob, setCodeprob] = useState('');
  const [descripcion, setDescripcion] = useState(''); 
  const [explpro, setExplpro] = useState(''); 


    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = {
        nombre, apelidos, email, Telefono, direccion, codeprob, identificacion, descripcion,explpro};
      if (nombre.trim() == ''|| apelidos.trim() === '' || email.trim() === '' || Telefono.trim() === ''|| direccion.trim() === ''
      || identificacion.trim() === ''|| descripcion.trim() === ''|| descripcion.trim() === ''|| codeprob.trim() === '' || explpro.trim() === '') {
        console.log('formato invalido')
        alert('algunos campos estan vacios completalos')
        return;
      }
      try {
        const response = await axios.post('http://localhost:3001/api/RegistrarDatosCS', formData);
        console.log(response.data.message);
        alert('el registro se ha hecho correctamente.');
      } 
      catch (error) {
        console.error('Error al guardar los datos:', error.response); // Imprime el error de respuesta detallado
        alert('Error al intentar guardar los datos en el servidor.');
      }
  
      // Limpiar los campos del formulario
      setNombre('');
      setApelidos('');
      setEmail('');
      setTelefono('');
      setDireccion('');
      setCodeprob('')
      setIdentificacion('');
      setDescripcion('');
      setExplpro('');
    };

  return (
    <form>
      <div style={{ marginRight: '20px', marginLeft: '20px' }}>
        <label>DNI o PASAPORTE:</label>
        <input
          type="text"
          value={identificacion}
          onChange={(e) => setIdentificacion(e.target.value)}
          placeholder="HT6767788TY"
        />
      </div>

      <div style={{ marginRight: '20px', marginLeft: '20px' }} >
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Jose Domingo Bee"
        />
      </div>

      <div style={{ marginRight: '20px', marginLeft: '20px' }}>
        <label>Apellidos:</label>
        <input
          type="text"
          value={apelidos}
          onChange={(e) => setApelidos(e.target.value)}
          placeholder="Owono Nchama"
        />
      </div>

      <div style={{ marginRight: '20px', marginLeft: '20px' }}>
        <label>Correo Electronico:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="elsolito25@gmail.com"
        />
      </div>

      <div style={{ marginRight: '20px', marginLeft: '20px' }}>
        <label>Telefono:</label>
        <input
          type="tel"
          value={Telefono}
          onChange={(e) => setTelefono(e.target.value)}
          placeholder="+34 613 62 05 76 "
        />
      </div>

      <div style={{ marginRight: '20px', marginLeft: '20px' }}>
        <label>Direccion:</label>
        <input
          type="text"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          placeholder="G.E/Malabo/Perez"
        />
      </div>

      <div style={{ marginRight: '20px', marginLeft: '20px' }}>
        <label>Fecha:</label>
        <input
          type="date"
          value={codeprob}
          onChange={(e) => setCodeprob(e.target.value)}
        />
      </div>

      <div style={{ marginRight: '20px', marginLeft: '20px' }}>
        <label>Tipo de Servicio:</label>
        <select className='opcion' value={descripcion} onChange={(e) => setDescripcion(e.target.value)} style={{width:'350px' }}>
            <option value="Desarrollo de sistemas informaticos">(Desarrollo de sistemas informaticos)</option>
            <option value="Analisis de datos">Analisis de datos</option>
            <option value="Mantenimiento de sistemas">Mantenimiento de sistemas</option>
            <option value="Additoria de sistemas">Additoria de sistemas</option>
            <option value="Asesoramiento de gestion TI">Asesoramiento de gestion TI</option>
            <option value="Asesoramiento de gobierno TI">Asesoramiento de gobierno TI</option>
            <option value="Planificacion de proyectos Cientificos">Planificacion de proyectos Cientificos</option>
            <option value="Planificacion de proyectos Tecnologicos">Planificacion de proyectos Tecnologicos</option>
      </select>
      </div>

      <div style={{ marginTop: '100px', width: '150px', marginLeft: '150px' }}>
            <label style={{ width: '1000px'}}>Explicacion del servicio a contratar:</label> <br />
            <textarea style={{width: '1000px', height:'200px'}}
                type="text"
                value={explpro}
                onChange={(e) => setExplpro(e.target.value)}
                placeholder="Exponga lo requisitos del servicio que quieres contratar"
            />
      </div>


      
      <div style={{ marginLeft: '150px', marginTop: '400px' }}>
          <button type="button" style={{ marginLeft: '15px', marginBottom: '10px' }} onClick={handleSubmit}> Contratar Servicio </button>
      </div>
    </form>
  );
};

export default ContServicios;
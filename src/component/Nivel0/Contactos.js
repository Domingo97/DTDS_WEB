import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const ContServicios = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [profesion, setProfesion] = useState('');
  const [apelidos, setApelidos] = useState('');
  const [Telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [pais, setPais] = useState('');
  const [cuidad, setCuidad] = useState('');
  const [cpostal, setCpostal] = useState('');
  const [nacionalidad, setNAcionalidad] = useState('');

 
  
  const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = {nombre, apelidos, email, Telefono, direccion, pais, cuidad, cpostal, nacionalidad,profesion};

      if (nombre.trim() == ''|| apelidos.trim() === '' || email.trim() === '' || Telefono.trim() === ''|| direccion.trim() === ''
      || pais.trim() === ''|| cuidad.trim() === ''|| cpostal.trim() === ''|| nacionalidad.trim() === '' || profesion.trim() === ''
      ) {
        console.log('formato invalido')
        alert('algunos campos estan vacios completalos')
        return;
      }
      try {
        const response = await axios.post('http://localhost:3001/api/RegistrarDatosTCN', formData);
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
      setPais('');
      setCuidad('');
      setCpostal('');
      setNAcionalidad('');
      setProfesion('');
    };

  return (
    <form className=''>
      <div style={{ marginRight: '20px', marginLeft: '20px' }}>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Jose Domingo Bee"
        />
      </div>
      

      <div style={{ marginRight: '20px', marginLeft: '20px' }} >
        <label>Apelidos:</label>
        <input
          type="text"
          value={apelidos}
          onChange={(e) => setApelidos(e.target.value)}
          placeholder="Owono Nchama"
        />
      </div>

      <div style={{ marginRight: '20px', marginLeft: '20px' }} >
        <label>Profesion:</label>
        <input
          type="text"
          value={profesion}
          onChange={(e) => setProfesion(e.target.value)}
          placeholder="Ingeniero Informatico"
        />
      </div>

      <div style={{ marginRight: '20px', marginLeft: '20px' }} >
        <label>Correo Electronico:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="elsolito25@gmail.com"
        />
      </div>

      <div style={{ marginRight: '20px', marginLeft: '20px' }} >
        <label>Telefono:</label>
        <input
          type="tel"
          value={Telefono}
          onChange={(e) => setTelefono(e.target.value)}
          placeholder="+34 613 62 05 76"
        />
      </div>

      <div style={{ marginRight: '20px', marginLeft: '20px' }} >
        <label>Direccion:</label>
        <input
          type="text"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          placeholder="G.E/Malabo/Perez"
        />
      </div>

      <div style={{ marginRight: '20px', marginLeft: '20px' }} >
        <label>Pais:</label>
        <input
          type="text"
          value={pais}
          onChange={(e) => setPais(e.target.value)}
          placeholder="Guinea Ecuatorial"
        />
      </div>

      <div style={{ marginRight: '20px', marginLeft: '20px' }}>
        <label>Cuidad:</label>
        <input
          type="text"
          value={cuidad}
          onChange={(e) => setCuidad(e.target.value)}
          placeholder="Malabo"
        />
      </div>

      <div style={{ marginRight: '20px', marginLeft: '20px' }} >
        <label>Codigo Postal:</label>
        <input
          type="text"
          value={cpostal}
          onChange={(e) => setCpostal(e.target.value)}
          placeholder="20200"
        />
      </div>

      <div style={{ marginRight: '20px', marginLeft: '20px',marginBottom:'20px' }} >
        <label>Nacionalidad:</label>
        <input
          type="text"
          value={nacionalidad}
          onChange={(e) => setNAcionalidad(e.target.value)}
          placeholder="Guineana"
        />
      </div>
      <div style={{ marginLeft: '-250px', marginTop: '100px' }}>
      <button type="button" style={{ marginLeft: '15px', marginBottom: '10px' }} onClick={handleSubmit}>
        Enviar
      </button>
    </div>
  </form>
  );
};
export default ContServicios;
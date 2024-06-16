import React, { useState } from "react";
import "../../Estilos/login.css";
import IMG from '../../Imagenes/IMG';
import { useHistory } from 'react-router-dom';


const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Enviar una solicitud al servidor para autenticar el usuario
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        const userData = await response.json();
        console.log('la validacion ha sido correcta')
        //alert('la validacion ha sido correcta')
        history.push(userData.redirectURL);
        //onLogin(userData.username) aqui es donde se va a redirigir la ruta despues del logeo;
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error al intentar iniciar sesión:', error);
      alert('Error al intentar iniciar sesión');
    }

    setUsername('');
    setPassword('');
  };


  return (
  <div style={{backgroundColor: '#00387b', minHeight: '100vh', width:'2000px'}}> 
    <div className="login-container">
      <h2>Acceso al Intranet de DTDS</h2>
      <img src={IMG.img15} alt="" style={{ width: '50%', height: '170px', marginLeft: '10%', marginTop: '20px', marginBottom: '20px',}} />
        <div style={{marginRight: '10px', marginLeft: '10px', width: '70%', marginBottom:'20px' }}>
          <label style={{fontFamily: 'Times New Roman', fontSize:'20px'}}>Usuario:</label>
          <input className="ipt"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="jd9909hh"
          />
        </div>
      

      <div style={{ marginRight: '10px', marginLeft: '10px', width: '70%', marginBottom:'20px' }}>
        <label style={{fontFamily: 'Times New Roman', fontSize:'20px'}}>Contraseña:</label>
        <input className="ipt"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="887837373"
        />
      </div> 
   

      <button className="btn" type="submit" style={{ marginLeft: '15px' }} onClick={handleLogin}>
        Acceder
      </button>
    </div>
  </div>
  );
};


export default Login;
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

function servicios() {
    return (
      <Router>
        <div>
          <header>
            <h1>Bienvenido a la plataforma de gestion de la Empresa MetaSoft</h1>
          </header>
    
          <footer>
            <p>Derechos de autor © 2023 Mi Empresa</p>
          </footer>
        </div>
      </Router>
    );
  }
  
  export default servicios;
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function principal() {
  return (
    <Router>
      <div>
        <header>
          <h1>BIenvenido a la web de analisis de datos</h1>
        </header>
        <nav>
          {/* Enlaces para acceder a las páginas */}
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/registro">Registro</Link>
            </li>
            <li>
              <Link to="/Users">usuario</Link>
            </li>
          </ul>
        </nav>
        </div>
        
        <div>
        <main>
          {/* Configuración de las rutas */}
          <Switch>
            <Route exact path="/login" component={login} />
            <Route path="/registro" component={registro} />
            <Route path="/Users" component={Users} />
          </Switch>
        </main>
        <footer>
          <p>Derechos de autor © 2023 Mi Empresa</p>
        </footer>
      </div>
    </Router>
  );
}

export default principal;
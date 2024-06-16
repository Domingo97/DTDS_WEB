import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import registro from "./component/Home/registro";
import Users from "./component/Home/Users";
import Login from "./component/Home/login";
import principal from "./component/Home/principal";
import IntraPrincipal from "./component/Home/IntraPrincipal";
import block from "./component/Nivel0/Block";
import ContServicios from "./component/Nivel0/ContratarServicio";
import contactos from "./component/Nivel0/Contactos";


import GUsuario from "./component/Nivel1/GUsuarios";
import GADato from "./component/Nivel1/GADatos";


import GAuditorias from "./component/Nivel1/GAuditoria";
import GComunicaciones from "./component/Nivel1/GComunicacion";

import GComunicaciones2 from "./component/Nivel1/GComunicacion2";

import GDevops from "./component/Nivel1/GDevop";
import GFinancieras from "./component/Nivel1/GFinanciera";

import GGestioTis from "./component/Nivel1/GGestioTi";
import GGobernanzaTIs from "./component/Nivel1/GGobernanzaTI";
import GManteniemientos from "./component/Nivel1/GManteniemiento";
import GPlanificacionCients from "./component/Nivel1/GPlanificacionCient";
import GPlanificacionTIs from "./component/Nivel1/GPlanificacionTI";
import GHumano from "./component/Nivel1/GRHumanos";



function App() {
  return (
    <Router>
      <div className="container p-4">
        <Switch>
          <Route exact path="/" component={principal} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/IntraPrincipal" component={IntraPrincipal} />
          <Route exact path="/principal" component={principal} />
          <Route exact path="/ContratarServicio" component={ContServicios} />
          <Route exact path="/Contactos" component={contactos} /> {/*aqui esta el componente de trabajar con nosotros*/}

          <Route exact path="/Nivel1/GUsuarios" component={GUsuario} />
          <Route exact path="/Nivel1/GRHumanos" component={GHumano} />
          <Route exact path="/Nivel1/GFinanciera" component={GFinancieras} />


          <Route exact path="/Nivel1/GADatos" component={GADato} />
          <Route exact path="/Nivel1/GGestioTi" component={GGestioTis} />

          <Route exact path="/Nivel1/GComunicacion" component={GComunicaciones} />
          <Route exact path="/Nivel1/GComunicacion2" component={GComunicaciones2}/>
         


                                {/* no se usan estas rutas de aqui*/}
          <Route exact path="/Nivel1/GAuditoria" component={GAuditorias} />
          <Route exact path="/Nivel1/GDevop" component={GDevops} />
          <Route exact path="/Nivel1/GGobernanzaTI" component={GGobernanzaTIs} />
          <Route exact path="/Nivel1/GManteniemiento" component={GManteniemientos} />
          <Route exact path="/Nivel1/GPlanificacionCient" component={GPlanificacionCients} />
          <Route exact path="/Nivel1/GPlanificacionTI" component={GPlanificacionTIs} />
          <Route exact path="/registro" component={registro} />
          <Route exact path="/Users" component={Users} />
          <Route exact path="/Block" component={block} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;

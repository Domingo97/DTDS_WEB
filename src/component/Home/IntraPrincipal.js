
import React, { Component, useState } from 'react';
import { Link as ScrollLink, Element } from 'react-scroll';
import { Link } from 'react-router-dom';
import "../../Estilos/Principal.css";
import IMG from '../../Imagenes/IMG';


function IntraPrincipal() {
  return (
    <div>
      <div>
        <div>
          <header className="custom-header" >
            <h1>INTRANET-DTDS</h1>
            <h1 style={{ marginLeft: '400px' }}>Servicio de Gestion Interna de DATATECH</h1>
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
                <h1><Link to="/principal" spy={true} smooth={true} duration={200} style={{ cursor: 'pointer', color: 'white' }}> BLOCK DE DATATECH DS </Link></h1>
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
          <div className='bloque1'>
            <div className="secciones1"> <br/>
              <h2 style={{ color: 'Black', padding: '10px' }}> G. Servicios Administrativos de la empresa </h2>
            </div><br />
            <div className="grid-container" style={{ marginLeft: '10px', marginRight: "10px" }}>
              <div className="paragraph">
                <img src={IMG.gt1} alt="" style={{ width: '50%', height: '100px', marginLeft: '35px' }} />
                <h3>Gestion de Usuarios</h3>

                <div className="solicitud">
                  <li>
                  <Link to="/Nivel1/GUsuarios">Acceder a la Gestion </Link>
                  </li>
                </div>
              </div>

              <div className="paragraph">
                <img src={IMG.gt2} alt="" style={{ width: '50%', height: '100px', marginLeft: '35px' }} />
                <h3>Contratacion Empleados</h3>
                <div className="solicitud">
                  <li>
                  <Link to="/Nivel1/GComunicacion">Acceder a la Gestion</Link>
                  </li>
                </div>
              </div>

              <div className="paragraph">
                <img src={IMG.gt3} alt="" style={{ width: '50%', height: '100px', marginLeft: '35px' }} />
                <h3>G. Financiera y administrativa</h3>
                <div className="solicitud" style={{ marginTop: '-15px' }}><br/>
                  <li>
                  <Link to="/Nivel1/GFinanciera">Acceder a la Gestion</Link>
                  </li>
                </div>
              </div>

              <div className="paragraph">
                <img src={IMG.gt4} alt="" style={{ width: '50%', height: '100px', marginLeft: '35px' }} />
                <h3>Gestion de Recursos Humanos</h3>
                <div className="solicitud">
                  <li>
                  <Link to="/Nivel1/GRHumanos">Acceder a la Gestion</Link>
                  </li>
                </div>
              </div>
            </div> <br/> 
            
            <div className="grid-container" style={{ marginLeft: '10px', marginRight: "10px" }}>
              <div className="paragraph">
                <img src={IMG.img6} alt="" style={{ width: '50%', height: '100px', marginLeft: '35px' }} />
                <h3>Contratacion de productos</h3>

                <div className="solicitud">
                  <li>
                  <Link to="/Nivel1/GComunicacion2">Acceder a la Gestion </Link>
                  </li>
                </div>
              </div>
            </div>

            <div>
              <div className='bloque1'>
                <div className="secciones1">
                  <h2 style={{ color: 'Black', padding: '10px' }}> Gestion de Servicios Tecnicos Informaticos</h2>
                </div><br />
                <div className="grid-container" style={{ marginLeft: '10px', marginRight: "10px" }}>
                  <div className="paragraph">
                    <img src={IMG.ic1} alt="" style={{ width: '50%', height: '100px', marginLeft: '35px' }} />
                    <h3>Gestion Analisis de datos</h3>

                    <div className="solicitud">
                      <li>
                      <Link to="/Nivel1/GADatos">Acceder a la Gestion</Link>
                      </li>
                    </div>
                  </div>

                  <div className="paragraph">
                    <img src={IMG.ic2} alt="" style={{ width: '50%', height: '100px', marginLeft: '35px' }} />
                    <h3>G. de Desarrollo de Aplicaciones</h3>
                    <div className="solicitud">
                      <li>
                      <Link to="/Nivel1/GADatos">Acceder a la Gestion</Link>
                      </li>
                    </div>
                  </div>

                  <div className="paragraph">
                    <img src={IMG.ic3} alt="" style={{ width: '50%', height: '100px', marginLeft: '35px' }} />
                    <h3>G. de Mantenimiento de sistemas</h3>
                    <div className="solicitud" style={{ marginTop: '-15px' }}><br />
                      <li>
                      <Link to="/Nivel1/GADatos">Acceder a la Gestion</Link>
                      </li>
                    </div>
                  </div>

                  <div className="paragraph">
                    <img src={IMG.ic4} alt="" style={{ width: '50%', height: '100px', marginLeft: '35px' }} />
                    <h3> Gestion de Auditoria de Sistemas</h3>
                    <div className="solicitud">
                      <li>
                      <Link to="/Nivel1/GADatos">Acceder a la Gestion</Link>
                      </li>
                    </div>
                  </div>
                </div> <br/> <br/><br/><br/>


                <div className='bloque2'>
                  <div className="secciones1">
                    <h2 style={{ color: 'Black', padding: '10px' }}> G. deServicios de Asesoria y Acompanamiento</h2>
                  </div><br />
                  <div className="grid-container" style={{ marginLeft: '10px', marginRight: "10px" }}>
                    <div className="paragraph">
                      <img src={IMG.ic5} alt="" style={{ width: '50%', height: '100px', marginLeft: '35px' }} />
                      <h3> G. de Asesoramiento de Gestion TI</h3>
                      <div className="solicitud" style={{ marginTop: '10px' }}>
                        <li>
                        <Link to="/Nivel1/GGestioTi">Acceder a la Gestion</Link>
                        </li>
                      </div>
                    </div>

                    <div className="paragraph">
                      <img src={IMG.ic6} alt="" style={{ width: '50%', height: '100px' }} />
                      <h3>G. Asesoramiento de Gobierno TI</h3>
                      <div className="solicitud" style={{ marginTop: '10px' }}>
                        <li>
                        <Link to="/Nivel1/GGestioTi">Acceder a la Gestion</Link>
                        </li>
                      </div>
                    </div>

                    <div className="paragraph">
                      <img src={IMG.ic7} alt="" style={{ width: '50%', height: '100px', marginLeft: '35px' }} />
                      <h3>G. Planificacion de P. Cientificos</h3>
                      <div className="solicitud" style={{ marginTop: '10px' }}>
                        <li>
                        <Link to="/Nivel1/GGestioTi">Acceder a la Gestion</Link>
                        </li>
                      </div>
                    </div>
                    <div className="paragraph">
                      <img src={IMG.ic8} alt="" style={{ width: '50%', height: '100px', marginLeft: '35px' }} />
                      <h3>G. Planificacion de Proyectos TI</h3>
                      <div className="solicitud" style={{ marginTop: '0px' }}>
                        <li>
                        <Link to="/Nivel1/GGestioTi">Acceder a la Gestion</Link>
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
              </div> <br/>
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section about">
                <h2>Acerca de Nosotros</h2>
                <p>
                  Somos una empresa pionera en el sector de soluciones e inovacion tecnologica, planteamos soluciones estrategicas a nivel tecniologico a las empresas, no dudes en contactarse con nosotros
                </p>
              </div>

              <div className="footer-section links">
                <h2>Enlaces Rápidos</h2>
                <ul>
                  <li><a href="#">Inicio DATATECH</a></li>
                  <li><a href="#"> Nuestros Servicios</a></li>
                  <li><a href="#">Intranet DATATECH</a></li>
                  <li><a href="#">Contratar Servicio</a></li>
                </ul>
              </div>

              <div className="footer-section contact">
                <h2>Contacto</h2>
                <div className="contact-info">
                  <p><i className="fas fa-envelope"></i>Correo Electronico: datatechdeepsolution@gmail.com</p>
                  <p><i className="fas fa-phone"></i>Telefono: +34 613 62 05 76 /+240 555-49-22-51</p>
                  <p><i className="fas fa-map-marker-alt"></i>Direccion: Perez - Malabo - G.E</p>
                </div>
              </div>

              <div className="footer-section contact">
                <h2>Redes Sociales</h2>
                <div className="contact-info">
                  <p><i className="fas fa-envelope"></i>Cuenta de Instagram: DataTech deep Solution</p>
                  <p><i className="fas fa-phone"></i>Cuenta de Linkedin: DataTech deep Solution</p>
                  <p><i className="fas fa-map-marker-alt"></i>Cuenta Facebook: DataTech deep Solution</p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>Derechos de autor © 2023 MetaNet</p>
          </div>
        </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntraPrincipal;
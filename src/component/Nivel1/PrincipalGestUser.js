
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
            <h1 style={{ marginLeft: '400px' }}> Gestion de Noticias Y Usuar</h1>
            <img src={IMG.lg1} alt="" style={{ width: '30%', height: '50px', marginLeft: '70%', marginTop: '-30px' }} />
          </header>
        </div>
        <div className='cabezara' style={{ backgroundColor: '#00387b', width: '100%', height: '50px', marginBottom: '10px', marginTop: '-7px' }}>
          <nav>
            <ul className="horizontal-list">
              <li>
                <h1><Link to="/" spy={true} smooth={true} duration={200} style={{ cursor: 'pointer', color: 'white' }}>Gestion del Block </Link></h1>
              </li>
              <li>
                <h1><Link to="/" spy={true} smooth={true} duration={200} style={{ cursor: 'pointer', color: 'white' }}>Gestion de Contratacion de Servicio</Link></h1>
              </li>
              <li>
                <h1><Link to="/" spy={true} smooth={true} duration={200} style={{ cursor: 'pointer', color: 'white' }}> Gestion de Nuevos Empleados </Link></h1>
              </li>
            </ul>
          </nav>
        </div>

        
              <footer className="footer">
                <div className="container">
                  <div className="footer-content">
                    <div className="footer-section about">
                      <h2>Acerca de Nosotros</h2>
                      <p>
                        somos una empresa pionera en el sector de soluciones e inovacion tecnologica.
                      </p>
                    </div>

                    <div className="footer-section links">
                      <h2>Enlaces Rápidos</h2>
                      <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Intranet</a></li>
                        <li><a href="#">Contratar Servicio</a></li>
                      </ul>
                    </div>

                    <div className="footer-section contact">
                      <h2>Contacto</h2>
                      <div className="contact-info">
                        <p><i className="fas fa-envelope"></i>Correo Electronico: elsolito25@gmail.com</p>
                        <p><i className="fas fa-phone"></i>Telefono: +34 613 62 05 76</p>
                        <p><i className="fas fa-map-marker-alt"></i>Direccion: Perez - Malabo - G.E</p>
                      </div>
                    </div>

                    <div className="footer-section contact">
                      <h2>Redes Sociales</h2>
                      <div className="contact-info">
                        <p><i className="fas fa-envelope"></i>Instagram: J_Domingo_bee</p>
                        <p><i className="fas fa-phone"></i>Linkedin: J_Domingo_bee</p>
                        <p><i className="fas fa-map-marker-alt"></i>Facebook: Lil kevin el solito</p>
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
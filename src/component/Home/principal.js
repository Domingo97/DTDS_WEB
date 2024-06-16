import React, { Component, useState,useEffect } from 'react';
import { Link as ScrollLink, Element } from 'react-scroll';
import { Link } from 'react-router-dom';
import "../../Estilos/Principal.css";
import IMG from '../../Imagenes/IMG';
import Contactarr from '../Nivel0/Contactos'
import ContServicios from '../Nivel0/ContratarServicio'
//import BlockDePublicaciones from '../Nivel0/Block'



function Principal() {
  const [menuDesplegable, setMenuDesplegable] = useState(false);

  const [fotoActual, setFotoActual] = useState(0);
  const fotos = [IMG.lgo,IMG.img1, IMG.img2, IMG.img3, IMG.img5, IMG.img6, IMG.img7, IMG.img8, IMG.img9, IMG.img10, IMG.img11, IMG.img12,IMG.img13]; // Rutas de tus fotos

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFotoActual(fotoActual => (fotoActual + 1) % fotos.length);
    }, 5000); // Cambia la foto cada 5 segundos

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalId); },[]); 
  
  return (
    <div>
      <div>
        <header className="custom-header" >

          <h1>DataTech Deep Solution</h1>
          <img src={IMG.lgo} alt="" style={{ width: '30%', height: '80px', marginLeft: '70%', marginTop: '-30px' }} />

        </header>
      </div>
      <div className='cabezara' style={{ backgroundColor: '#00387b', width: '100%', height: '50px', marginBottom: '10px', marginTop: '-7px' }}>
        <nav>
          <ul className="horizontal-list">
            <li>
              <h1><ScrollLink to="servicios" spy={true} smooth={true} duration={200} style={{ cursor: 'pointer', color: 'white', marginLeft:'80px' }}>NUESTRO SERVICIOS </ScrollLink></h1>
            </li>
            <li>
              <h1><ScrollLink to="block-datatech" spy={true} smooth={true} duration={200} style={{ cursor: 'pointer', color: 'white' }}> BLOCK DE DATATECH DS </ScrollLink></h1>
            </li>
            <li>
              <h1><ScrollLink to="sobre-nosotros" spy={true} smooth={true} duration={200} style={{ cursor: 'pointer', color: 'white' }}> SOBRE NOSOTROS </ScrollLink></h1>
            </li>
            <li>
              <h1><ScrollLink to="donde-estamos" spy={true} smooth={true} duration={200} style={{ cursor: 'pointer', color: 'white' }}> DONDE ESTAMOS </ScrollLink></h1>
            </li>
            <li>
              <h1> <ScrollLink to="trabaja-nosotros" spy={true} smooth={true} duration={200} style={{ cursor: 'pointer', color: 'white' }}> TRABAJA CON NOSOTROS </ScrollLink></h1>
            </li>
            <li>
              <h1><ScrollLink to="Contactos" spy={true} smooth={true} duration={200} style={{ cursor: 'pointer', color: 'white' }}> CONTACTOS </ScrollLink></h1>
            </li>
            <li>
              <h1><Link to="/login" style={{ cursor: 'pointer', color: 'white' }}>INTRANET-DTDS</Link></h1>
            </li>
          </ul>
        </nav>
      </div>
    {/* Visualización de la foto actual */}
    <div className='fotograma-container'>
      <img  style={{ width: '100%', height: '500px' , objectFit: 'cover'}}  src={fotos[fotoActual]} alt={`Foto ${fotoActual + 1}`} /> 
    </div>

      <Element name="servicios">
        <div className="secciones">
          <h3 style={{ color: 'white', padding: '10px' }}>Nuestros servicios</h3>
        </div>

        <div className='bloque1'>
          <div className="secciones1">
            <h2 style={{ color: 'Black', padding: '10px' }}>Servicios Tecnicos Informaticos</h2>
          </div><br />
          <div className="grid-container" style={{ marginLeft: '10px', marginRight: "10px" }}>
            <div className="paragraph">
              <img src={IMG.ic1} alt="" style={{ width: '50%', height: '100px', marginLeft: '35px' }} />
              <h3>Gestion y Analisis de datos</h3>
              <p>Ayudamos a las empresas y a entidades a usar datos para decisiones estratégicas. Nos especializamos en la creación y gestión 
                de bases de datos, recopilando y analizando información de diversas fuentes. Procesamos estos datos y aplicamos 
                análisis avanzados para identificar patrones y tendencias del mercado. Esto permite a las empresas entender mejor 
                a sus clientes y competidores, y tomar decisiones informadas en desarrollo de productos, precios, marketing y estrategia empresarial.</p>
              <div className="solicitud">
                <li>
                  <ScrollLink to="contratar" spy={true} smooth={true} duration={200} style={{ cursor: 'pointer' }}>Contratar Servicio </ScrollLink>
                </li>
              </div>
            </div>

            <div className="paragraph">
              <img src={IMG.ic2} alt="" style={{ width: '50%', height: '100px', marginLeft: '35px' }} />
              <h3>Desarrollo de Aplicaciones</h3>
              <p>Brindamos servicios de desarrollo de aplicaciones web eficientes. Ofrecemos diseño y desarrollo de páginas 
                web y sistemas informáticos web personalizados, optimizados para brindar una experiencia de usuario excepcional. 
                Nuestro enfoque se centra en adaptar soluciones a las necesidades específicas de cada cliente, asegurando 
                funcionalidad, rendimiento y estética en cada proyecto que realizamos.</p><br/>
              <div className="solicitud">
                <li>
                  <ScrollLink to="contratar" spy={true} smooth={true} duration={200} style={{ cursor: 'pointer' }}>Contratar Servicio </ScrollLink>
                </li>
              </div>
            </div>

            <div className="paragraph">
              <img src={IMG.ic3} alt="" style={{ width: '50%', height: '100px', marginLeft: '35px' }} />
              <h3>Mantenimiento de sistemas</h3>
              <p>Ofrecemos servicios de mantenimiento para sistemas software simples pero esenciales,
                asegurando su funcionamiento óptimo. Esto incluye actualizaciones, soporte técnico, monitoreo,
                optimización y documentación para garantizar la estabilidad y disponibilidad de estos sistemas
                cruciales para las operaciones de la empresa u organización.</p>
              <div className="solicitud" style={{ marginTop: '30px' }}><br />
                <li>
                  <ScrollLink to="contratar" spy={true} smooth={true} duration={200} style={{ cursor: 'pointer' }}>Contratar Servicio </ScrollLink>
                </li>
              </div>
            </div>

            <div className="paragraph">
              <img src={IMG.ic4} alt="" style={{ width: '50%', height: '100px', marginLeft: '35px' }} />
              <h3>Auditoria de Sistemas</h3>
              <p>Brindamos servicios de auditoría de sistemas, que incluyen la evaluación y revisión de la seguridad, eficiencia
                y cumplimiento de sistemas informáticos y tecnológicos de una organización. Nuestro objetivo es identificar
                posibles vulnerabilidades, mejorar el rendimiento y garantizar el cumplimiento de normativas, proporcionando
                recomendaciones para una mejor gestión de la infraestructura tecnológica.</p><br/><br/>
              <div className="solicitud">
                <li>
                  <ScrollLink to="contratar" spy={true} smooth={true} duration={200} style={{ cursor: 'pointer' }}>Contratar Servicio </ScrollLink>
                </li>
              </div>
            </div>
          </div> <br/> <br/><hr/><br/>


          <div className='bloque2'>
            <div className="secciones1">
              <h2 style={{ color: 'Black', padding: '10px' }}>Servicios de Asesoria y Acompanamiento</h2>
            </div><br />
            <div className="grid-container" style={{ marginLeft: '10px', marginRight: "10px" }}>
              <div className="paragraph">
                <img src={IMG.ic5} alt="" style={{ width: '50%', height: '100px', marginLeft: '35px' }} />
                <h3>Asesoramiento de Gestion TI</h3>
                <p>Brindamos asesoramiento en la gestión estratégica de los recursos tecnológicos de una organización,
                  enfocándonos en la alineación de la tecnología con los objetivos empresariales. Esto abarca la
                  planificación estratégica de TI, diseño de procesos, gestión de proyectos, evaluación de
                  tecnologías, gobierno y cumplimiento de TI, y gestión de proveedores.</p>
                <div className="solicitud" style={{ marginTop: '50px' }}>
                  <li>
                    <ScrollLink to="contratar" spy={true} smooth={true} duration={200} style={{ cursor: 'pointer' }}>Contratar Servicio </ScrollLink>
                  </li>
                </div>
              </div>

              <div className="paragraph">
                <img src={IMG.ic6} alt="" style={{ width: '50%', height: '100px' }} />
                <h3>Asesoramiento de Gobierno TI</h3>
                <p>Ayudamos a las empresas a establecer políticas y procedimientos efectivos de gobierno
                  de Tecnologías de la Información (TI). Esto implica asesoramiento en la gestión
                  estratégica de recursos tecnológicos, incluyendo la definición de marcos de referencia,
                  evaluación de riesgos, cumplimiento de regulaciones, planificación estratégica de TI,
                  gestión de proyectos y programas, y mejora continua. </p>
                <div className="solicitud" style={{ marginTop: '47px' }}>
                  <li>
                    <ScrollLink to="contratar" spy={true} smooth={true} duration={200} style={{ cursor: 'pointer' }}>Contratar Servicio </ScrollLink>
                  </li>
                </div>
              </div>

              <div className="paragraph">
                <img src={IMG.ic7} alt="" style={{ width: '50%', height: '100px', marginLeft: '35px' }} />
                <h3>Planificacion de P. Cientificos</h3>
                <p>Brindamos asesoramiento en la planificación y ejecución de proyectos científicos, asegurando
                  que se diseñen efectivamente y cumplan con estándares de calidad científica. Esto involucra
                  definir problemas de investigación, revisar la literatura existente, diseñar metodologías,
                  planificar y organizar proyectos, gestionar recursos, garantizar la ética y el cumplimiento
                  normativo, evaluar resultados y difundir hallazgos. </p>
                <div className="solicitud" style={{ marginTop: '30px' }}>
                  <li>
                    <ScrollLink to="contratar" spy={true} smooth={true} duration={200} style={{ cursor: 'pointer' }}>Contratar Servicio </ScrollLink>
                  </li>
                </div>
              </div>
              <div className="paragraph">
                <img src={IMG.ic8} alt="" style={{ width: '50%', height: '100px', marginLeft: '35px' }} />
                <h3>Planificacion de Proyectos TI</h3>
                <p>Apoyamos a las empresas en la planificación y ejecución de proyectos tecnológicos. Esto implica
                  definir objetivos, evaluar la viabilidad y riesgos, elaborar un plan detallado, gestionar recursos,
                  coordinar equipos, gestionar el cambio y evaluar resultados. Nuestro objetivo es asegurar que los
                  proyectos tecnológicos sean exitosos, dentro del presupuesto y en el plazo previsto, maximizando su
                  valor para la organización y mejorando su competitividad.</p>
                <div className="solicitud" style={{ marginTop: '0px' }}>
                  <li>
                    <ScrollLink to="contratar" spy={true} smooth={true} duration={200} style={{ cursor: 'pointer' }}>Contratar Servicio </ScrollLink>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div> </Element>
      <br />

      <Element name="sobre-nosotros">
        <div className="secciones">
          <h3 style={{ color: 'white', padding: '10px' }}>Sobre Nosotros</h3>
        </div><br />

        <div className='paradondeestamos'>
          <div style={{ color: 'white', padding: '10px', borderRadius: '1px', background: '#00387b', fontFamily: 'Times New Roman', fontSize: '14px', textAlign: 'justify' }}>
            <h3 style={{ marginLeft: '70px' }}>Inovacion</h3><br />
            <img src={IMG.Dic1} alt="" style={{ width: '60%', height: '200px', marginLeft: '35px' }} /><br />
            <p style={{ fontFamily: 'Times New Roman', fontsize: '14px', marginLeft: '15px', marginRight: '10px' }}>DataTech Deep Solution es una empresa líder
              en desarrollo y análisis de datos, destacándose por su enfoque innovador y tecnológicamente avanzado. Pioneros en la adopción de tecnologías emergentes,
              ofrecemos soluciones personalizadas que transforman la forma en que las empresas aprovechan sus datos.En DataTech Deep Solution, no solo ofrecemos soluciones; ofrecemos la clave para desbloquear
              el potencial transformador de los datos, construyendo juntos un futuro más inteligente y eficiente.</p>
          </div>



          <div style={{ color: 'white', padding: '10px', borderRadius: '1px', background: '#00387b', fontFamily: 'Times New Roman', fontSize: '14px', textAlign: 'justify' }}>
            <h3 style={{ marginLeft: '50px' }}>Eficiencia y eficacia</h3><br />
            <img src={IMG.Dic2} alt="" style={{ width: '60%', height: '200px', marginLeft: '35px' }} />
            <p style={{ fontFamily: 'Times New Roman', fontsize: '12px', marginLeft: '15px', marginRight: '10px' }}> Además, nos enorgullece ofrecer soluciones personalizadas
              que se ajustan a las necesidades específicas de cada cliente, garantizando que cada proyecto sea eficaz en la consecución de los objetivos estratégicos planteados.
              En DataTech Deep Solution, la eficacia y la eficiencia no son solo metas, son parte fundamental de nuestra filosofía empresarial, permitiendo a las organizaciones
              aprovechar al máximo su potencial a través de soluciones de análisis de datos que son rápidas, precisas y estratégicamente alineadas.</p>
          </div>


          <div style={{ color: 'white', padding: '10px', borderRadius: '1px', background: '#00387b', fontFamily: 'Times New Roman', fontSize: '14px', textAlign: 'justify' }}>
            <h3 style={{ marginLeft: '80px' }}>Agilidad</h3><br />
            <img src={IMG.Dic3} alt="" style={{ width: '60%', height: '200px', marginLeft: '35px' }} />
            <p style={{ fontFamily: 'Times New Roman', fontsize: '12px', marginLeft: '15px', marginRight: '10px' }}>DataTech Deep Solution se distingue por su agilidad
              excepcional en el desarrollo y análisis de datos. Adoptamos tecnologías avanzadas de manera rápida, permitiendo una respuesta ágil a las necesidades del
              mercado y de nuestros clientes. Nuestro enfoque flexible garantiza soluciones personalizadas entregadas en tiempo récord, acelerando la toma de decisiones
              estratégicas. En DataTech Deep Solution, la agilidad es clave para ofrecer resultados precisos y estratégicos en un entorno empresarial dinámico.</p>
          </div>

          <div style={{ color: 'white', padding: '10px', borderRadius: '1px', background: '#00387b', fontFamily: 'Times New Roman', fontSize: '14px', marginRight: '10px', textAlign: 'justify' }}>
            <h3 style={{ marginLeft: '90px' }}>seguridad</h3><br />
            <img src={IMG.Dic4} alt="" style={{ width: '60%', height: '200px', marginLeft: '35px' }} />
            <p style={{ fontFamily: 'Times New Roman', fontsize: '12px', marginLeft: '15px', marginRight: '10px' }}>DataTech Deep Solution prioriza la seguridad en cada
              etapa del desarrollo y análisis de datos. Implementamos rigurosas prácticas de seguridad para garantizar la protección integral de la información confidencial
              de nuestros clientes. Nuestra empresa cumple con los más altos estándares éticos y regulatorios, asegurando la privacidad de los datos. En DataTech Deep Solution,
              la seguridad no solo es una prioridad, es un compromiso inquebrantable para brindar confianza y tranquilidad a nuestros clientes en el manejo seguro de sus datos.</p>
          </div>
        </div>
      </Element>

      <Element name="donde-estamos">
        <div className="secciones">
          <h3 style={{ color: 'white', padding: '10px' }}>Donde Estamos</h3>
        </div >
        <div>
          <p style={{ fontFamily: 'Times New Roman', fontsize: '12px', marginLeft: '15px', marginRight: '10px' }}>DataTech Deep Solution está en Malabo, Guinea Ecuatorial, integrando tecnología con la comunidad local.
            Nuestras oficinas son un centro vibrante de innovación en el corazón de la ciudad. No solo ofrecemos servicios
            avanzados, también contribuimos al progreso tecnológico y al desarrollo regional. Somos más que una empresa,
            somos parte activa en la construcción de un futuro tecnológico brillante</p>
            <p style={{ fontFamily: 'Times New Roman', fontsize: '12px', marginLeft: '15px', marginRight: '10px' }}>
              Nuestra Oficina se encuentra Ubicado en el Barrio Perez/ Malabo / Guinea Ecuatorial</p>
          <div>
          </div>
          <div>
            <img src={IMG.img4} alt="" style={{ width: '100%', height: '600px' }} />
          </div>
        </div>
      </Element>

      <Element name="trabaja-nosotros">
        <div className="secciones">
          <h3 style={{ color: 'white', padding: '10px' }}>Trabaja con nosotros</h3>
        </div>
        <div style={{ fontFamily: 'Times New Roman', fontsize: '12px', marginLeft: '15px', marginRight: '10px' }}>
          <p style={{ fontFamily: 'Times New Roman', fontsize: '12px', marginLeft: '15px', marginRight: '10px' }}>Únete a DataTech Deep Solution para formar parte de un equipo apasionado
            y dinámico. Aquí, valoramos tu contribución y te brindamos oportunidades
            para crecer profesionalmente. Trabajar con nosotros significa enfrentar
            desafíos tecnológicos significativos, en un ambiente colaborativo que fomenta
            la innovación. Si buscas un viaje profesional emocionante y impactante,
            ¡DataTech Deep Solution es el lugar para ti!  En caso de hacer la solicitud y el sistema 
            no llega a responder, puedes contactarnos a traves del correo: datatechdeepsolution@gmail.com </p>
          <div>
            <div className="secciones1">
              <h2 style={{ color: 'Black', padding: '10px' }}>Rellene el Formulario para Trabajar con Nosotros</h2>
            </div><br />
            <Contactarr />
          </div> <br/>
        </div>
      </Element>

      <Element name="contratar">
        <div className="secciones">
          <h3 style={{ color: 'white', padding: '10px' }}>Contratar nuestros servicios</h3>
        </div>
        <div style={{ fontFamily: 'Times New Roman', fontsize: '12px', marginLeft: '15px', marginRight: '10px' }}>
          <p style={{ fontFamily: 'Times New Roman', fontsize: '12px', marginLeft: '15px', marginRight: '10px' }}>Contratar con DataTech Deep Solution es asegurar la excelencia tecnológica.
            Ofrecemos servicios innovadores respaldados por un equipo apasionado y experto.
            Nos comprometemos a abordar tus desafíos con soluciones creativas y a proporcionar
            resultados que impulsen tu progreso digital. Al elegirnos, te asocias con un líder
            tecnológico comprometido con la calidad y la excelencia. Juntos, construimos el
            hacia un futuro tecnológico brillante para tu empresa. En caso de hacer la solicitud y el sistema 
            no llega a responder, puedes contactarnos a traves del correo: datatechdeepsolution@gmail.com</p>
          <div>
            <div className="secciones1">
              <h2 style={{ color: 'Black', padding: '10px' }}>Rellene el Formulario para Contratar Nuestros Servicios</h2>
            </div><br />
            <ContServicios />
          </div>
          <br />
        </div>
      </Element>

      <Element name="Contactos">
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
      </Element>
    </div>
  );
}

export default Principal;
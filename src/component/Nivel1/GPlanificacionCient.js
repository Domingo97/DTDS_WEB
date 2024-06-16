import React, { Component, useState } from 'react';
import "../../Estilos/Principal.css";
import "../../Estilos/formgusuarios.css";
import IMG from '../../Imagenes/IMG';


const GPlanificacionCients = () => {
    const [datos, setDatos] = useState({
        ids: '',
        nombre: '',
        ddoc: '',
        fecha1: '',
        autor: '',
        tdoc: '',
        departamento: '',
        documento: '',

    });
    const [todosLosDatos, setTodosLosDatos] = useState([]);

    const manejarCambios = (e) => {
        setDatos({ ...datos, [e.target.name]: e.target.value });
    };

    const enviarFormulario = (e) => {
        e.preventDefault();

        // Agrega los nuevos datos al array
        setTodosLosDatos([...todosLosDatos, datos]);
        // Limpia los campos después de enviar el formulario
        setDatos({
            ids: '',
            nombre: '',
            ddoc: '',
            fecha1: '',
            autor: '',
            tdoc: '',
            departamento: '',
            documento: '',
        });
    };

    const eliminarDato = (index) => {
        // Elimina el dato correspondiente al índice proporcionado
        const nuevosDatos = [...todosLosDatos];
        nuevosDatos.splice(index, 1);
        setTodosLosDatos(nuevosDatos);
    };

    {
        return (
            <div>
                <div>
                    <div style={{ width: '1250px' }}>
                        <header className="custom-header" >
                            <h1>INTRANET-DTDS</h1>
                            <h1 style={{ marginLeft: '400px' }}>Servicio de Gestion de planificacion de proyectos cientificos</h1>
                            <img src={IMG.lg1} alt="" style={{ width: '30%', height: '50px', marginLeft: '70%', marginTop: '-30px' }} />
                        </header>
                    </div>

                    <div>
                        <form onSubmit={enviarFormulario}>
                            <div style={{ marginRight: '20px', marginLeft: '20px' }}>
                                <label htmlFor="id">ID del Documento:</label>
                                <input
                                    type="text"
                                    id="ids"
                                    name="ids"
                                    value={datos.ids}
                                    onChange={manejarCambios}
                                    placeholder="AD88988HHYY"
                                />
                            </div>
                            <div style={{ marginRight: '20px', marginLeft: '20px' }} >
                                <label htmlFor="nombre">Nombre del Documento:</label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    value={datos.nombre}
                                    onChange={manejarCambios}
                                    placeholder="Analisis de datos 1"
                                />
                            </div>
                            <div style={{ marginRight: '20px', marginLeft: '20px' }}>
                                <label htmlFor="doc">Descripcion del Documento:</label>
                                <input
                                    type="ddoc"
                                    id="ddoc"
                                    name="ddoc"
                                    value={datos.ddoc}
                                    onChange={manejarCambios}
                                    placeholder="prediccion de productos"
                                />
                            </div>

                            <div style={{ marginRight: '20px', marginLeft: '20px' }}>
                                <label htmlFor="fecha1">Fecha de Publicacion:</label>
                                <input
                                    type="date"
                                    id="fecha1"
                                    name="fecha1"
                                    value={datos.fecha1}
                                    onChange={manejarCambios}
                                    placeholder="2023/12/23"
                                />
                            </div>

                            <div style={{ marginRight: '20px', marginLeft: '20px' }}>
                                <label htmlFor="autor">Autor del Documento:</label>
                                <input
                                    type="text"
                                    id="autor"
                                    name="autor"
                                    value={datos.autor}
                                    onChange={manejarCambios}
                                    placeholder="Jose Domingo Bee"
                                />
                            </div>

                            <div style={{ marginRight: '20px', marginLeft: '20px' }}>
                                <label htmlFor="tdoc">Tipo de Documento:</label>
                                <input
                                    type="text"
                                    id="tdoc"
                                    name="tdoc"
                                    value={datos.tdoc}
                                    onChange={manejarCambios}
                                    placeholder="Material Tecnico"
                                />
                            </div>

                            <div style={{ marginRight: '20px', marginLeft: '20px' }}>
                                <label htmlFor="departamento">Departamento:</label>
                                <input
                                    type="text"
                                    id="departamento"
                                    name="departamento"
                                    value={datos.departamento}
                                    onChange={manejarCambios}
                                    placeholder="Analisis de Datos"
                                />
                            </div>

                            <div style={{ marginRight: '20px', marginLeft: '20px' }}>
                                <label htmlFor="documento">Documento:</label>
                                <input
                                    type="file"
                                    id="documento"
                                    name="documento"
                                    value={datos.documento}
                                    onChange={manejarCambios}
                                    placeholder=""
                                />
                            </div><br /><br/>
                            <button type="submit" style={{ marginLeft: '-290px', width:'140px', height:'40px' }}>Guardar Registro</button>
                            <button type="submit" style={{  marginLeft: '200px', width:'100px', height:'40px' }}>Buscar DOC</button>
                        </form>
                    </div>

                    <div style={{ marginRight: '60px', marginLeft: '960px', marginTop:'-55px', borderRadius:'50px' }}>
                                <input
                                    type="text"
                                    id="nombreb"
                                    name="nombreb"
                                    value={datos.nombreb}
                                    onChange={manejarCambios}
                                    placeholder="Busqueda DEl DOC"
                                />
                    </div>            

                    <div className="caja-datos" style={{ marginTop: '-50px' }}>
                        <h2>Documentos Registrados</h2>
                        <div className="fila-datos encabezado" style={{ width: '96.5vw' }}>
                            {/* Encabezados */}
                            <span>ID DOC</span>
                            <span>Nombre DOC</span>
                            <span>D. DOC</span>
                            <span>Fecha </span>
                            <span>Autor</span>
                            <span>Tipo DOC</span>
                            <span>Departamento</span>
                            <span>Documento</span>
                            <span>Modificar</span>
                            <span>Eliminar</span>
                        </div>
                        <div className="scroll-container">
                        {todosLosDatos.map((dato, index) => (
                            <div key={index}>
                                {/* Datos de cada registro */}
                                <div className="fila-datos">
                                    <span>{dato.id}</span>
                                    <span>{dato.nombre}</span>
                                    <span>{dato.ddoc}</span>
                                    <span>{dato.fecha1}</span>
                                    <span>{dato.autor}</span>
                                    <span>{dato.tdoc}</span>
                                    <span>{dato.departamento}</span>
                                    <span>{dato.documento}</span>
                                    <span>{dato.fecha2}</span>
                                    {/* Agrega botones de eliminar y modificar */}
                                    <span>
                                        <button onClick={() => console.log("Modificar", dato)} style={{ marginLeft: '0px', width: '90px' }}>Modificar</button>
                                    </span>
                                    <span>
                                        <button onClick={() => eliminarDato(index)} style={{ marginLeft: '0px', width: '90px' }}>Eliminar</button>
                                    </span>
                                </div>
                                
                            </div>
                        ))}
                    </div><br/>

                <footer className="footer">
                    <div className="footer-bottom">
                        <p>Seccion de gestion planificacion de proyectos cientificos de nuestro sistema interno de la empresa DATATECH DEEP SOLUTION</p>
                    </div>
                </footer>
                </div>
            </div>
         </div>
        );
    }
};



export default GPlanificacionCients;
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path'); 
const PORT = 3001;
const app = express();


// Middleware para habilitar CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


// Middleware para parsear el cuerpo de la solicitud como JSON
app.use(bodyParser.json());


                      // Uso del servidor para el formulario de trabajar con nosotros
const jsonFilePath = 'BBDD/TrabarConNosotros.json';

// Lectura de nuestro json y lo enviamos como respuesta
app.get('/api/MostrarDatosTCN', (req, res) => {
    console.log('Solicitud recibida en /datos');
    const filePath = path.join(__dirname, jsonFilePath);
  
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error al leer el archivo JSON:', err);
        res.status(500).send('Error interno del servidor');
        return;
      }
  
      try {
        const jsonData = JSON.parse(data);
        res.json(jsonData);
      } catch (error) {
        console.error('Error al parsear el JSON:', error);
        res.status(500).send('Error interno del servidor');
      }
    });
  });


// Ruta para manejar la solicitud POST del formulario de registro
app.post('/api/RegistrarDatosTCN', (req, res) => {
  console.log('hemos encontrado la ruta');
  const formData = req.body;
  let existingData = [];  // Leer los datos existentes del archivo JSON (si existe)
  try {
    const data = fs.readFileSync(jsonFilePath, 'utf8');
    existingData = JSON.parse(data);
  } catch (err) {
    console.error('Error al leer el archivo JSON:', err);
  }

// Agregar los nuevos datos del formulario al arreglo existente ,   // Escribir los datos actualizados en el archivo JSON
  existingData.push(formData);
  try {
    fs.writeFileSync(jsonFilePath, JSON.stringify(existingData, null, 2));
    res.status(200).json({ message: 'Datos guardados en el archivo JSON.' });
  } catch (err) {
    console.error('Error al escribir en el archivo JSON:', err);
    res.status(500).json({ message: 'Error al guardar los datos.' });
  }
});





// Uso del servidor para el formulario de  contratar servicio
const jsonFilePath2 = 'BBDD/Contratarservicio.json';

// Lectura de nuestro json y lo enviamos como respuesta
app.get('/api/MostrarDatosCS', (req, res) => {
    console.log('Solicitud recibida en /datos');
    const filePath = path.join(__dirname, jsonFilePath2);
  
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error al leer el archivo JSON:', err);
        res.status(500).send('Error interno del servidor');
        return;
      }
  
      try {
        const jsonData = JSON.parse(data);
        res.json(jsonData);
      } catch (error) {
        console.error('Error al parsear el JSON:', error);
        res.status(500).send('Error interno del servidor');
      }
    });
  });


// Ruta para manejar la solicitud POST del formulario
app.post('/api/RegistrarDatosCS', (req, res) => {
  console.log('hemos encontrado la ruta');
  const formData1 = req.body;
  let existingData = [];  // Leer los datos existentes del archivo JSON (si existe)
  try {
    const data = fs.readFileSync(jsonFilePath2, 'utf8');
    existingData = JSON.parse(data);
  } catch (err) {
    console.error('Error al leer el archivo JSON:', err);
  }

  // Agregar los nuevos datos del formulario al arreglo existente ,   // Escribir los datos actualizados en el archivo JSON
  existingData.push(formData1);
  try {
    fs.writeFileSync(jsonFilePath2, JSON.stringify(existingData, null, 2));
    res.status(200).json({ message: 'Datos guardados en el archivo JSON.' });
  } catch (err) {
    console.error('Error al escribir en el archivo JSON:', err);
    res.status(500).json({ message: 'Error al guardar los datos.' });
  }
});



                     // Uso del servidor para validar el login

// Ruta para validar el login en nuestro fichero de registros
const registrosFilePath = 'BBDD/Registros.json'


app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  console.log('Datos recibidos para el login:', req.body); // Mensaje de depuración

  // Validar que username y password sean cadenas no vacías
  if (typeof username !== 'string' || typeof password !== 'string' || username.trim() === '' || password.trim() === '') {
    res.status(400).json({ message: 'Formato de entrada inválido' });
    return;
  }

  try {
    const data = fs.readFileSync(registrosFilePath, 'utf8');
    const registros = JSON.parse(data);

    const userExists = registros.some(user => {
      return user.nombre === username && user.contraseña === password;
    });

    if (userExists) {
      res.status(200).json({ username: username, redirectURL: '/IntraPrincipal' }); // Aquí incluimos la URL de redirección
     // res.status(200).json({ username: username });
    } else {
      res.status(401).json({ message: 'Credenciales incorrectas' });
    }
  } catch (err) {
    console.error('Error al cargar o procesar los registros:', err);
    res.status(500).json({ message: 'Error al intentar iniciar sesión' });
  }
});



                            // Uso del servidor para Registros 

const jsonFilePathRT = 'BBDD/Registros.json';

// Lectura de nuestro json y lo enviamos como respuesta
app.get('/api/MostrarDatosRT', (req, res) => {
    console.log('Solicitud recibida en /datos');
    const filePath = path.join(__dirname, jsonFilePathRT);
    
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
        console.error('Error al leer el archivo JSON:', err);
        res.status(500).send('Error interno del servidor');
        return;
        }
    
        try {
        const jsonData = JSON.parse(data);
        res.json(jsonData);
        } catch (error) {
        console.error('Error al parsear el JSON:', error);
        res.status(500).send('Error interno del servidor');
        }
    });
    });


// Ruta para manejar la solicitud POST del formulario de registro
app.post('/api/RegistrarDatosRT', (req, res) => {
    console.log('hemos encontrado la ruta');
    const formData = req.body;
    let existingData = [];  // Leer los datos existentes del archivo JSON (si existe)
    try {
    const data = fs.readFileSync(jsonFilePathRT, 'utf8');
    existingData = JSON.parse(data);
    } catch (err) {
    console.error('Error al leer el archivo JSON:', err);
    }

// Agregar los nuevos datos del formulario al arreglo existente ,   // Escribir los datos actualizados en el archivo JSON
    existingData.push(formData);
    try {
    fs.writeFileSync(jsonFilePathRT, JSON.stringify(existingData, null, 2));
    res.status(200).json({ message: 'Datos guardados en el archivo JSON.' });
    } catch (err) {
    console.error('Error al escribir en el archivo JSON:', err);
    res.status(500).json({ message: 'Error al guardar los datos.' });
    }
});


// Eliminamos datos en el formulario de regitro
const jsonFilePath8 = 'BBDD/Registros.json';
app.delete('/api/registros/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  const filePath = path.join(__dirname, jsonFilePath8);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo JSON:', err);
      res.status(500).send('Error interno del servidor');
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      const index = jsonData.findIndex(record => record.nombre === nombre);

      if (index !== -1) {
        jsonData.splice(index, 1);

        fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
          if (err) {
            console.error('Error al escribir el archivo JSON:', err);
            res.status(500).send('Error interno del servidor');
            return;
          }

          res.sendStatus(200);
        });
      } else {
        res.status(404).send('Registro no encontrado');
      }
    } catch (error) {
      console.error('Error al parsear el JSON:', error);
      res.status(500).send('Error interno del servidor');
    }
  });
});


// Ruta para buscar un registro por nombre
const jsonFilePath9 = 'BBDD/Registros.json';
app.get('/api/Busqueeda/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    jsonFilePath9 = path.join(__dirname, 'registros.json');
  
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.status(500).json({ message: 'Error al leer el archivo de registros' });
        return;
      }
  
      const registros = JSON.parse(data);
      const registro = registros.find(r => r.nombre === nombre);
  
      if (registro) {
        res.json(registro);
      } else {
        res.status(404).json({ message: 'Registro no encontrado' });
      }
    });
  });






      // Uso del servidor para gestion de venta de servicios

      const jsonFilePathRTVP = 'BBDD/VentasProductos1.json';

      // Lectura de nuestro json y lo enviamos como respuesta
      app.get('/api/MostrarDatosVP', (req, res) => {
          console.log('Solicitud recibida en /datos');
          const filePath = path.join(__dirname, jsonFilePathRTVP);
          
          fs.readFile(filePath, 'utf8', (err, data) => {
              if (err) {
              console.error('Error al leer el archivo JSON:', err);
              res.status(500).send('Error interno del servidor');
              return;
              }
          
              try {
              const jsonData = JSON.parse(data);
              res.json(jsonData);
              } catch (error) {
              console.error('Error al parsear el JSON:', error);
              res.status(500).send('Error interno del servidor');
              }
          });
          });
      
      
      // Ruta para manejar la solicitud POST del formulario de registro
      app.post('/api/RegistrarDatosVP', (req, res) => {
          console.log('hemos encontrado la ruta');
          const formData = req.body;
          let existingData = [];  // Leer los datos existentes del archivo JSON (si existe)
          try {
          const data = fs.readFileSync(jsonFilePathRTVP, 'utf8');
          existingData = JSON.parse(data);
          } catch (err) {
          console.error('Error al leer el archivo JSON:', err);
          }
      
      // Agregar los nuevos datos del formulario al arreglo existente ,   // Escribir los datos actualizados en el archivo JSON
          existingData.push(formData);
          try {
          fs.writeFileSync(jsonFilePathRTVP, JSON.stringify(existingData, null, 2));
          res.status(200).json({ message: 'Datos guardados en el archivo JSON.' });
          } catch (err) {
          console.error('Error al escribir en el archivo JSON:', err);
          res.status(500).json({ message: 'Error al guardar los datos.' });
          }
      });
      
      
      // Eliminamos datos en el formulario de regitro
      const jsonFilePathRTVPE = 'BBDD/VentasProductos1.json';
      app.delete('/api/EliminarVP1/:nombre', (req, res) => {
        const nombre = req.params.nombre;
        const filePath = path.join(__dirname, jsonFilePathRTVPE);
      
        fs.readFile(filePath, 'utf8', (err, data) => {
          if (err) {
            console.error('Error al leer el archivo JSON:', err);
            res.status(500).send('Error interno del servidor');
            return;
          }
      
          try {
            const jsonData = JSON.parse(data);
            const index = jsonData.findIndex(record => record.nombre === nombre);
      
            if (index !== -1) {
              jsonData.splice(index, 1);
      
              fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
                if (err) {
                  console.error('Error al escribir el archivo JSON:', err);
                  res.status(500).send('Error interno del servidor');
                  return;
                }
      
                res.sendStatus(200);
              });
            } else {
              res.status(404).send('Registro no encontrado');
            }
          } catch (error) {
            console.error('Error al parsear el JSON:', error);
            res.status(500).send('Error interno del servidor');
          }
        });
      });
      
      
      // Ruta para buscar un registro por nombre
      const jsonFilePathRTVPB = 'BBDD/VentasProductos1.json';
      app.get('/api/Busqueeda/:nombre', (req, res) => {
          const nombre = req.params.nombre;
          jsonFilePathRTVPB = path.join(__dirname, 'registros.json');
        
          fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
              res.status(500).json({ message: 'Error al leer el archivo de registros' });
              return;
            }
        
            const registros = JSON.parse(data);
            const registro = registros.find(r => r.nombre === nombre);
        
            if (registro) {
              res.json(registro);
            } else {
              res.status(404).json({ message: 'Registro no encontrado' });
            }
          });
        });
      





      // Uso del servidor para gestion Financiera
      const jsonFilePathGF = 'BBDD/GFinanciera.json';

      // Lectura de nuestro json y lo enviamos como respuesta
      app.get('/api/MostrarDatosGF', (req, res) => {
          console.log('Solicitud recibida en /datos');
          const filePath = path.join(__dirname, jsonFilePathGF);
          
          fs.readFile(filePath, 'utf8', (err, data) => {
              if (err) {
              console.error('Error al leer el archivo JSON:', err);
              res.status(500).send('Error interno del servidor');
              return;
              }
          
              try {
              const jsonData = JSON.parse(data);
              res.json(jsonData);
              } catch (error) {
              console.error('Error al parsear el JSON:', error);
              res.status(500).send('Error interno del servidor');
              }
          });
          });
      
      
      // Ruta para manejar la solicitud POST del formulario de registro
      app.post('/api/RegistrarDatosGF', (req, res) => {
          console.log('hemos encontrado la ruta');
          const formData = req.body;
          let existingData = [];  // Leer los datos existentes del archivo JSON (si existe)
          try {
          const data = fs.readFileSync(jsonFilePathGF, 'utf8');
          existingData = JSON.parse(data);
          } catch (err) {
          console.error('Error al leer el archivo JSON:', err);
          }
      
      // Agregar los nuevos datos del formulario al arreglo existente ,   // Escribir los datos actualizados en el archivo JSON
          existingData.push(formData);
          try {
          fs.writeFileSync(jsonFilePathGF, JSON.stringify(existingData, null, 2));
          res.status(200).json({ message: 'Datos guardados en el archivo JSON.' });
          } catch (err) {
          console.error('Error al escribir en el archivo JSON:', err);
          res.status(500).json({ message: 'Error al guardar los datos.' });
          }
      });
      
      
      // Eliminamos datos en el formulario de regitro
      const jsonFilePathGFE = 'BBDD/GFinanciera.json';
      app.delete('/api/EliminarGF/:nombre', (req, res) => {
        const nombre = req.params.nombre;
        const filePath = path.join(__dirname, jsonFilePathGFE);
      
        fs.readFile(filePath, 'utf8', (err, data) => {
          if (err) {
            console.error('Error al leer el archivo JSON:', err);
            res.status(500).send('Error interno del servidor');
            return;
          }
      
          try {
            const jsonData = JSON.parse(data);
            const index = jsonData.findIndex(record => record.nombre === nombre);
      
            if (index !== -1) {
              jsonData.splice(index, 1);
      
              fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
                if (err) {
                  console.error('Error al escribir el archivo JSON:', err);
                  res.status(500).send('Error interno del servidor');
                  return;
                }
      
                res.sendStatus(200);
              });
            } else {
              res.status(404).send('Registro no encontrado');
            }
          } catch (error) {
            console.error('Error al parsear el JSON:', error);
            res.status(500).send('Error interno del servidor');
          }
        });
      });
      
      
      // Ruta para buscar un registro por nombre
      const jsonFilePathGFB = 'BBDD/GFinanciera.json';
      app.get('/api/Busqueeda/:nombre', (req, res) => {
          const nombre = req.params.nombre;
          jsonFilePathGFB = path.join(__dirname, 'registros.json');
        
          fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
              res.status(500).json({ message: 'Error al leer el archivo de registros' });
              return;
            }
        
            const registros = JSON.parse(data);
            const registro = registros.find(r => r.nombre === nombre);
        
            if (registro) {
              res.json(registro);
            } else {
              res.status(404).json({ message: 'Registro no encontrado' });
            }
          });
        });
      



      // Uso del servidor para gestion de Recursos Humanos

      const jsonFilePathRH = 'BBDD/GRecursosHumanos.json';

      // Lectura de nuestro json y lo enviamos como respuesta
      app.get('/api/MostrarDatosRH', (req, res) => {
          console.log('Solicitud recibida en /datos');
          const filePath = path.join(__dirname, jsonFilePathRH);
          
          fs.readFile(filePath, 'utf8', (err, data) => {
              if (err) {
              console.error('Error al leer el archivo JSON:', err);
              res.status(500).send('Error interno del servidor');
              return;
              }
          
              try {
              const jsonData = JSON.parse(data);
              res.json(jsonData);
              } catch (error) {
              console.error('Error al parsear el JSON:', error);
              res.status(500).send('Error interno del servidor');
              }
          });
          });
      
      
      // Ruta para manejar la solicitud POST del formulario de registro
      app.post('/api/RegistrarDatosRH', (req, res) => {
          console.log('hemos encontrado la ruta');
          const formData = req.body;
          let existingData = [];  // Leer los datos existentes del archivo JSON (si existe)
          try {
          const data = fs.readFileSync(jsonFilePathRH, 'utf8');
          existingData = JSON.parse(data);
          } catch (err) {
          console.error('Error al leer el archivo JSON:', err);
          }
      
      // Agregar los nuevos datos del formulario al arreglo existente ,   // Escribir los datos actualizados en el archivo JSON
          existingData.push(formData);
          try {
          fs.writeFileSync(jsonFilePathRH, JSON.stringify(existingData, null, 2));
          res.status(200).json({ message: 'Datos guardados en el archivo JSON.' });
          } catch (err) {
          console.error('Error al escribir en el archivo JSON:', err);
          res.status(500).json({ message: 'Error al guardar los datos.' });
          }
      });
      
      
      // Eliminamos datos en el formulario de regitro
      const jsonFilePathRHE = 'BBDD/GRecursosHumanos.json';
      app.delete('/api/EliminarRH/:nombre', (req, res) => {
        const nombre = req.params.nombre;
        const filePath = path.join(__dirname, jsonFilePathRHE);
      
        fs.readFile(filePath, 'utf8', (err, data) => {
          if (err) {
            console.error('Error al leer el archivo JSON:', err);
            res.status(500).send('Error interno del servidor');
            return;
          }
      
          try {
            const jsonData = JSON.parse(data);
            const index = jsonData.findIndex(record => record.nombre === nombre);
      
            if (index !== -1) {
              jsonData.splice(index, 1);
      
              fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
                if (err) {
                  console.error('Error al escribir el archivo JSON:', err);
                  res.status(500).send('Error interno del servidor');
                  return;
                }
      
                res.sendStatus(200);
              });
            } else {
              res.status(404).send('Registro no encontrado');
            }
          } catch (error) {
            console.error('Error al parsear el JSON:', error);
            res.status(500).send('Error interno del servidor');
          }
        });
      });
      
      
      // Ruta para buscar un registro por nombre
      const jsonFilePathRHB = 'BBDD/GRecursosHumanos.json';
      app.get('/api/Busqueeda/:nombre', (req, res) => {
          const nombre = req.params.nombre;
          jsonFilePathRHB = path.join(__dirname, 'registros.json');
        
          fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
              res.status(500).json({ message: 'Error al leer el archivo de registros' });
              return;
            }
        
            const registros = JSON.parse(data);
            const registro = registros.find(r => r.nombre === nombre);
        
            if (registro) {
              res.json(registro);
            } else {
              res.status(404).json({ message: 'Registro no encontrado' });
            }
          });
        });
      

      // Uso del servidor para venta se servicios 2 , asesoramiento y acompañamiento de proyectos ti y gobernanza ti
        const jsonFilePathGP = 'BBDD/VentasProductos2.json';

        // Lectura de nuestro json y lo enviamos como respuesta
        app.get('/api/MostrarDatosGP', (req, res) => {
            console.log('Solicitud recibida en /datos');
            const filePath = path.join(__dirname, jsonFilePathGP);
            
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                console.error('Error al leer el archivo JSON:', err);
                res.status(500).send('Error interno del servidor');
                return;
                }
            
                try {
                const jsonData = JSON.parse(data);
                res.json(jsonData);
                } catch (error) {
                console.error('Error al parsear el JSON:', error);
                res.status(500).send('Error interno del servidor');
                }
            });
            });
        
        
        // Ruta para manejar la solicitud POST del formulario de registro
        app.post('/api/RegistrarDatosGP', (req, res) => {
            console.log('hemos encontrado la ruta');
            const formData = req.body;
            let existingData = [];  // Leer los datos existentes del archivo JSON (si existe)
            try {
            const data = fs.readFileSync(jsonFilePathGP, 'utf8');
            existingData = JSON.parse(data);
            } catch (err) {
            console.error('Error al leer el archivo JSON:', err);
            }
        
        // Agregar los nuevos datos del formulario al arreglo existente ,   // Escribir los datos actualizados en el archivo JSON
            existingData.push(formData);
            try {
            fs.writeFileSync(jsonFilePathGP, JSON.stringify(existingData, null, 2));
            res.status(200).json({ message: 'Datos guardados en el archivo JSON.' });
            } catch (err) {
            console.error('Error al escribir en el archivo JSON:', err);
            res.status(500).json({ message: 'Error al guardar los datos.' });
            }
        });
        
        
        // Eliminamos datos en el formulario de regitro
        const jsonFilePathGPE = 'BBDD/VentasProductos2.json';
        app.delete('/api/EliminarVP2/:nombre', (req, res) => {
          const nombre = req.params.nombre;
          const filePath = path.join(__dirname, jsonFilePathGPE);
        
          fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
              console.error('Error al leer el archivo JSON:', err);
              res.status(500).send('Error interno del servidor');
              return;
            }
        
            try {
              const jsonData = JSON.parse(data);
              const index = jsonData.findIndex(record => record.nombre === nombre);
        
              if (index !== -1) {
                jsonData.splice(index, 1);
        
                fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
                  if (err) {
                    console.error('Error al escribir el archivo JSON:', err);
                    res.status(500).send('Error interno del servidor');
                    return;
                  }
        
                  res.sendStatus(200);
                });
              } else {
                res.status(404).send('Registro no encontrado');
              }
            } catch (error) {
              console.error('Error al parsear el JSON:', error);
              res.status(500).send('Error interno del servidor');
            }
          });
        });
        
        
        // Ruta para buscar un registro por nombre
        const jsonFilePathGPB = 'BDD/VentasProductos2.json';
        app.get('/api/Busqueeda/:nombre', (req, res) => {
            const nombre = req.params.nombre;
            jsonFilePathGPB = path.join(__dirname, 'registros.json');
          
            fs.readFile(filePath, 'utf8', (err, data) => {
              if (err) {
                res.status(500).json({ message: 'Error al leer el archivo de registros' });
                return;
              }
          
              const registros = JSON.parse(data);
              const registro = registros.find(r => r.nombre === nombre);
          
              if (registro) {
                res.json(registro);
              } else {
                res.status(404).json({ message: 'Registro no encontrado' });
              }
            });
          });
        


// Iniciar el servidor y escuchar en el puerto especificado
app.listen(PORT, () => {
  console.log('Servidor escuchando en el puerto ${PORT}');
});
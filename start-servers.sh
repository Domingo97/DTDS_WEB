#!/bin/bash

# Función para mostrar mensajes de inicio
print_start_message() {
  echo "Iniciando servidor web en http://localhost:3000"
  echo "Iniciando servidor adicional en http://localhost:3001"
}

# Función para iniciar el servidor web
start_web_server() {
  echo "Iniciando servidor web..."
  npm start &
}

# Función para iniciar el servidor adicional
start_additional_server() {
  echo "Iniciando servidor adicional..."
  node "$PWD/src/Servidor/servidor.js" &
}

# Mostrar mensajes de inicio
print_start_message

# Iniciar servidores
start_web_server
start_additional_server

# Esperar a que los servidores terminen
wait

# Frontify

Frontify es una plataforma para descubrir y disfrutar de álbumes de música en línea. Ofrece acceso sin necesidad de registro para usuarios y funciones de administrador para gestionar el contenido.

## Tabla de Contenidos
1. [Introducción](#introducción)
2. [Características](#características)
3. [Requisitos del Sistema](#requisitos-del-sistema)
4. [Configuración del Entorno](#configuración-del-entorno)
5. [Instalación](#instalación)
6. [Uso](#uso)
7. [Contribuciones](#contribuciones)
8. [Licencia](#licencia)

## Introducción

Frontify es una plataforma web diseñada para ofrecer una experiencia intuitiva en la exploración y reproducción de álbumes de música. Ya sea que seas un usuario ocasional o un administrador que gestiona el contenido, Frontify tiene algo para ti.

## Características

- Búsqueda y visualización de álbumes de música.
- Acceso como usuario no registrado o como administrador.
- Autenticación de administradores.
- Utilización de variables de entorno para la configuración.

## Requisitos del Sistema

- Node.js y npm instalados.
- Conexión a internet para acceder a la API de música.

## Configuración del Entorno

La página web utiliza las siguientes variables de entorno para la configuración:

- `VITE_API_CLIENT_ID`: ID del cliente para acceder a la API.
- `VITE_API_CLIENT_SECRET`: Secreto del cliente para autenticación en la API.

Asegúrate de configurar estas variables antes de iniciar la aplicación.

## Instalación

1. Clona el repositorio: `git clone https://github.com/tu-usuario/frontify.git`
2. Navega al directorio del proyecto: `cd frontify`
3. Instala las dependencias: `npm install`

## Uso

1. Configura las variables de entorno en un archivo `.env` en el directorio raíz del proyecto.
2. Inicia la aplicación: `npm start`
3. Accede a la página web desde tu navegador: `http://localhost:3000`

### Modo Administrador

- Para ingresar como administrador, utiliza las credenciales correspondientes.
- Accede a las funcionalidades administrativas.

### Modo Usuario

- Explora la página web sin necesidad de registro.
- Busca y escucha tus álbumes favoritos.

## Contribuciones

¡Contribuciones son bienvenidas! Si tienes sugerencias, problemas o mejoras, por favor crea un issue o una pull request.

## Licencia

Este proyecto está bajo la Licencia de FactoriaF5.

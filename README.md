# Prueba técnica backend.

1. Endpoint en tecnología NodeJS que permita guardar la selección de un usuario del punto anterior a través de un botón que diga por ejemplo "Exportar".
2. Crear base de datos local // Docker - Postgres
3. Haz un segundo endpoint que permita consultar el listado de usuarios guardados en base de datos.
4. Exponer el servicio mediante http RESTFUL.

# Probar local.

1. Bajar el repositorio.
2. Instalar las dependencias del package JSON. // cmd: npm install
3. Ejecutar el docker (A su vez ejecuta la aplicación NodeJS). //cmd: docker-compose up --build -d
4. Asegurate que estén corriendo los contenedores de manera correcta.
5. Endpoint para registrar usuarios: 
    Url:http://localhost:3000/create/user
    Método: POST
    Request: JSON,
    Modelo de base de datos:{username:{UserName}, data:{data}, nullValues:true}
5. Endpoint para consultar el listado de usuarios guardados en base de datos.
    Url:http://localhost:3000/users
    Método: GET
6. Una vez levantado el servidor con la aplicación, funcionará automaticamente con el front para importar los usuarios.

# Nota

Para el funcionamiento de la aplicación completa (Front y Back), se recomienda ejecutar el backend primero.

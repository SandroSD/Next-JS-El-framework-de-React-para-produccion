# Next.js OpenJira App

Para correr localmente, se necesita la base de datos

```
docker-compose up -d
```

- El -d, significa **detached**

- MongoDB URL Local:

```
mongodb://localhost:27017/entriesdb
```

## Configurar las variables de entorno

Renombrar el archivo **.env.sample** a **.env**

## Llenar la base de datos con información de pruebas

LLamar a :

```
http://localhost:3000/api/seed
```

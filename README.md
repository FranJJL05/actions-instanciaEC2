# Ejercicio 2: Despliegue CI/CD en AWS EC2 (Nginx)

"Aplicación web estática de Lista de Tareas (To-Do List)."

---

## Objetivo y Flujo de Despliegue

Este proyecto automatiza el despliegue de la aplicación web en una instancia **AWS EC2** configurada con el servidor **Nginx**.

El *workflow* de **GitHub Actions** (`deploy-ec2.yml`) se dispara con cada `push` a la rama `feature/despliegue-ec2` y realiza los siguientes pasos:

1.  **CI (Integración Continua):** Instala dependencias, ejecuta las pruebas con **Mocha** y genera la documentación con **JSDoc**.
2.  **CD (Despliegue Continuo):** Utiliza los Secrets de SSH (`EC2_KEY`, `EC2_HOST`) para conectarse a la instancia EC2 y copiar los archivos (`src/` y `docs/`) a la ruta del servidor (`/var/www/html/app-deploy`).

---

## Enlaces del Proyecto

| Recurso | Enlace |
| :--- | :--- |
| **Repositorio GitHub** | [ENLACE DE TU REPOSITORIO] |
| **Aplicación Desplegada (EC2)** | [http://ec2-52-91-102-189.compute-1.amazonaws.com/app-deploy/index.html](http://ec2-52-91-102-189.compute-1.amazonaws.com/app-deploy/index.html) |
| **Documentación Técnica** | [http://ec2-52-91-102-189.compute-1.amazonaws.com/app-deploy/docs/index.html](http://ec2-52-91-102-189.compute-1.amazonaws.com/app-deploy/docs/index.html) |
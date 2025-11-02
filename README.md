# Ejercicio 2: Despliegue CI/CD en AWS EC2 con Nginx

## Descripción del Proyecto

Este proyecto implementa una **aplicación web estática de Lista de Tareas (To-Do List)** con un sistema completo de **Integración y Despliegue Continuo (CI/CD)** utilizando **GitHub Actions** para automatizar el despliegue en una instancia **AWS EC2** con el servidor web **Nginx**.

### Funcionalidades de la Aplicación

- **Agregar tareas**: Permite crear nuevas tareas en la lista
- **Marcar como completadas**: Las tareas pueden marcarse como completadas con un clic
- **Interfaz intuitiva**: Diseño moderno y responsivo con CSS

---

## Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura de la aplicación
- **CSS3**: Estilos y diseño responsivo
- **JavaScript (ES6)**: Lógica de la aplicación con módulos ES6

### Backend/Infraestructura
- **AWS EC2**: Instancia de servidor virtual
- **Nginx**: Servidor web para servir la aplicación
- **GitHub Actions**: Pipeline de CI/CD automatizado

### Testing y Documentación
- **Mocha**: Framework de pruebas unitarias
- **Chai**: Librería de aserciones para las pruebas
- **JSDoc**: Generación automática de documentación técnica

---

## Estructura del Proyecto

```
actions-instanciaEC2/
├── src/
│   ├── index.html          # Página principal de la aplicación
│   ├── styles.css          # Estilos CSS de la aplicación
│   └── js/
│       └── index.js        # Lógica de negocio (clase GestorTareas)
├── test/
│   └── pruebas.test.js     # Pruebas unitarias con Mocha/Chai
├── docs/                    # Documentación generada por JSDoc
├── .github/
│   └── workflows/
│       └── deploy-ec2.yml   # Workflow de GitHub Actions
├── package.json             # Dependencias y scripts del proyecto
└── README.md               # Este archivo
```

---

## Objetivo y Flujo de Despliegue CI/CD

Este proyecto automatiza completamente el proceso de despliegue de la aplicación web en una instancia **AWS EC2** configurada con el servidor **Nginx**.

El *workflow* de **GitHub Actions** (`deploy-ec2.yml`) se dispara automáticamente con cada `push` a la rama `feature/despliegue-ec2` y realiza los siguientes pasos:

### Fase CI (Integración Continua)

1. **Checkout del código**: Clona el repositorio en el runner de GitHub Actions
2. **Configuración de Node.js**: Instala Node.js versión 20.x
3. **Instalación de dependencias**: Instala Mocha, Chai y JSDoc mediante `npm install`
4. **Ejecución de pruebas**: Ejecuta las pruebas unitarias con Mocha
   - Si las pruebas fallan, el workflow se detiene
5. **Generación de documentación**: Genera automáticamente la documentación técnica con JSDoc

### Fase CD (Despliegue Continuo)

6. **Configuración del servidor EC2**: Se conecta vía SSH e instala/configura Nginx
7. **Creación de directorios**: Crea el directorio `/var/www/html/app-deploy` con permisos adecuados
8. **Copia de archivos**: Transfiere todos los archivos de la aplicación y documentación mediante SCP
9. **Configuración de Nginx**: Configura Nginx para servir la aplicación en la ruta `/app-deploy/`
10. **Reinicio del servicio**: Reinicia Nginx para aplicar los cambios
11. **Verificación final**: Verifica que la aplicación sea accesible mediante una petición HTTP

---

## Requisitos Previos

Antes de utilizar este proyecto, asegúrate de tener configurado:

1. **Instancia EC2**: Una instancia EC2 corriendo en AWS
2. **User Data**: Nginx debe instalarse automáticamente al lanzar la instancia mediante User Data
3. **Security Groups**: Configurar los grupos de seguridad para permitir tráfico HTTP (puerto 80)
4. **GitHub Secrets**: Configurar los siguientes secrets en tu repositorio:
   - `EC2_HOST`: Dirección IP pública o dominio de la instancia EC2
   - `USERNAME`: Usuario SSH de la instancia (ej: `ubuntu`)
   - `KEY`: Clave privada SSH completa para acceder a la instancia

---

## Instalación y Uso Local

Para probar la aplicación localmente:

```bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]
cd actions-instanciaEC2

# Instalar dependencias
npm install

# Ejecutar las pruebas
npm test

# Generar documentación
npm run docs

# Abrir la aplicación (estática, solo necesitas abrir el HTML)
# Abre src/index.html en tu navegador
```

---

## Scripts Disponibles

- `npm test`: Ejecuta las pruebas unitarias con Mocha
- `npm run docs`: Genera la documentación técnica con JSDoc
- `npm start`: Muestra información sobre cómo abrir la aplicación

---

## 🔗 Enlaces del Proyecto

| Recurso | Enlace |
| :--- | :--- |
| **Aplicación Desplegada (EC2)** | [http://ec2-52-91-102-189.compute-1.amazonaws.com/app-deploy/index.html](http://ec2-52-91-102-189.compute-1.amazonaws.com/app-deploy/index.html) |
| **Documentación Técnica** | [http://ec2-52-91-102-189.compute-1.amazonaws.com/app-deploy/docs/index.html](http://ec2-52-91-102-189.compute-1.amazonaws.com/app-deploy/docs/index.html) |

---

## 📝 Notas Adicionales

- El workflow se ejecuta automáticamente al hacer `push` a la rama `feature/despliegue-ec2`
- Todos los archivos se despliegan en `/var/www/html/app-deploy/` en la instancia EC2
- La documentación generada por JSDoc también se despliega junto con la aplicación
- Las pruebas deben pasar exitosamente para que el despliegue continúe

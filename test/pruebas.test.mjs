// test/pruebas.test.mjs - Configuración Final para Módulos ES (ESM)

// Importación de Chai: Usamos '* as' porque Chai no siempre tiene un 'default export'
import * as chai from 'chai'; 
const expect = chai.expect;

// Importación de la Clase: Usamos la importación SIN LLAVES porque en index.js usamos 'export default'
import GestorTareas from '../src/js/index.js';

// 'describe' y 'beforeEach' funcionan igual que en Mocha
describe('Pruebas para la clase GestorTareas', () => {
    let gestor;

    // Antes de cada prueba, inicializamos un nuevo gestor y reseteamos el ID
    beforeEach(() => {
        gestor = new GestorTareas();
        // Nota: Asegúrate de que el constructor de GestorTareas inicializa nextId o que esta línea esté en tu código fuente.
        // gestor.nextId = 1; 
    });

    // Caso 1: Agregar tarea con éxito
    it('debe agregar una tarea y la lista debe tener longitud 1', () => {
        gestor.agregarTarea("Comprar pan");
        expect(gestor.obtenerTareas()).to.have.lengthOf(1);
        expect(gestor.obtenerTareas()[0].descripcion).to.equal("Comprar pan");
        expect(gestor.obtenerTareas()[0].completada).to.be.false; 
    });

    // Caso 2: Manejo de error al agregar tarea vacía
    it('debe lanzar un error si la descripcion está vacía', () => {
        // expect(() => ...) es la sintaxis correcta para probar errores lanzados.
        expect(() => gestor.agregarTarea("")).to.throw("La descripción de la tarea no puede estar vacía.");
    });

    // Caso 3: Marcar una tarea como completada
    it('debe marcar una tarea existente como completada', () => {
        gestor.agregarTarea("Hacer ejercicio");
        // Capturamos el ID dinámico de la tarea recién agregada
        const idTarea = gestor.obtenerTareas()[0].id;

        gestor.marcarCompletada(idTarea);

        // Verificamos el estado
        expect(gestor.obtenerTareas()[0].completada).to.be.true;
    });

    // Caso 4: Intentar marcar una tarea con ID inexistente
    it('debe devolver false si el ID de la tarea no se encuentra', () => {
        // No hay tareas, así que cualquier ID debe fallar.
        const resultado = gestor.marcarCompletada(9999);
        expect(resultado).to.be.false;
    });
});
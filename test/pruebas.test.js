// test/pruebas.test.js - Adaptado a Mocha y Chai

import chai from 'chai';
const expect = chai.expect; // Usamos la aserción 'expect' de Chai

// Importa la clase del archivo de código fuente
import { GestorTareas } from ('../src/js/index.js');

// 'describe' y 'beforeEach' funcionan igual que en Jest (son nativos de Mocha)
describe('Pruebas para la clase GestorTareas', () => {
    let gestor;

    // Antes de cada prueba, inicializamos un nuevo gestor vacío
    beforeEach(() => {
        gestor = new GestorTareas();
    });

    // Caso 1: Agregar tarea con éxito
    it('debe agregar una tarea y la lista debe tener longitud 1', () => {
        gestor.agregarTarea("Comprar pan");
        // Adaptación: expect(...).to.have.lengthOf(1);
        expect(gestor.obtenerTareas()).to.have.lengthOf(1);

        // Adaptación: expect(...).to.equal("Comprar pan");
        expect(gestor.obtenerTareas()[0].descripcion).to.equal("Comprar pan");
        expect(gestor.obtenerTareas()[0].completada).to.be.false; // Chai usa .to.be.false
    });

    // Caso 2: Manejo de error al agregar tarea vacía
    it('debe lanzar un error si la descripcion está vacía', () => {
        // Adaptación: expect(() => ...).to.throw(...)
        expect(() => gestor.agregarTarea("")).to.throw("La descripción de la tarea no puede estar vacía.");
    });

    // Caso 3: Marcar una tarea como completada
    it('debe marcar una tarea existente como completada', () => {
        gestor.agregarTarea("Hacer ejercicio");
        const idTarea = gestor.obtenerTareas()[0].id;

        gestor.marcarCompletada(idTarea);

        // Adaptación: expect(...).to.be.true
        expect(gestor.obtenerTareas()[0].completada).to.be.true;
    });

    // Caso 4: Intentar marcar una tarea con ID inexistente
    it('debe devolver false si el ID de la tarea no se encuentra', () => {
        const resultado = gestor.marcarCompletada(9999);
        // Adaptación: expect(...).to.be.false
        expect(resultado).to.be.false;
    });
});
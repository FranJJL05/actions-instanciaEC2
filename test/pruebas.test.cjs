// test/pruebas.test.js (CommonJS)

// Importaciones CommonJS
const chai = require('chai');
const expect = chai.expect;

// Importar la clase usando require()
const { GestorTareas } = require('../src/js/index.js');

describe('Pruebas para la clase GestorTareas', () => {
    let gestor;

    beforeEach(() => {
        gestor = new GestorTareas();
        gestor.nextId = 1; 
    });

    it('debe agregar una tarea y verificar la longitud', () => {
        gestor.agregarTarea("Comprar pan");
        expect(gestor.obtenerTareas()).to.have.lengthOf(1);
        expect(gestor.obtenerTareas()[0].descripcion).to.equal("Comprar pan");
        expect(gestor.obtenerTareas()[0].completada).to.be.false;
    });

    it('debe lanzar un error si la descripcion está vacía', () => {
        expect(() => gestor.agregarTarea("")).to.throw("La descripción de la tarea no puede estar vacía.");
    });

    it('debe marcar una tarea existente como completada', () => {
        gestor.agregarTarea("Hacer ejercicio");
        const idTarea = gestor.obtenerTareas()[0].id;

        gestor.marcarCompletada(idTarea);
        expect(gestor.obtenerTareas()[0].completada).to.be.true;
    });

    it('debe devolver false si el ID de la tarea no se encuentra', () => {
        const resultado = gestor.marcarCompletada(9999);
        expect(resultado).to.be.false;
    });
});
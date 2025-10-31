// test/pruebas.test.js (Módulos ES)

// 1. Importación de Chai con * as (para librerías sin 'export default')
import * as chai from 'chai'; 
const expect = chai.expect;

// 2. Importación Nombrada (con llaves) para GestorTareas
import { GestorTareas } from '../src/js/index.js'; // 

describe('Pruebas para la clase GestorTareas', () => {
    let gestor;

    beforeEach(() => {
        gestor = new GestorTareas();
        gestor.nextId = 1; 
    });
    
    // ... (El resto de tus tests son correctos) ...
    it('debe agregar una tarea y verificar la longitud', () => {
        gestor.agregarTarea("Comprar pan");
        expect(gestor.obtenerTareas()).to.have.lengthOf(1);
        expect(gestor.obtenerTareas()[0].descripcion).to.equal("Comprar pan");
        expect(gestor.obtenerTareas()[0].completada).to.be.false; 
    });
    
    it('debe lanzar un error si la descripcion está vacía', () => {
        expect(() => gestor.agregarTarea("")).to.throw("La descripción de la tarea no puede estar vacía.");
    });
    
    // ... (restos de los tests) ...
});
// index.js

/**
 * Clase simple para gestionar una lista de tareas (To-Do List).
 * @class
 */
export default class GestorTareas {
    constructor() {
        this.tareas = [];
    }

    /**
     * Agrega una nueva tarea a la lista.
     * @param {string} descripcion - Descripción de la tarea a agregar.
     * @returns {number} La nueva cantidad de tareas en la lista.
     * @throws {Error} Si la descripción está vacía.
     */
    agregarTarea(descripcion) {
        if (!descripcion || descripcion.trim() === '') {
            throw new Error("La descripción de la tarea no puede estar vacía.");
        }
        this.tareas.push({
            id: Date.now(),
            descripcion: descripcion.trim(),
            completada: false
        });
        return this.tareas.length;
    }

    /**
     * Marca una tarea como completada por su ID.
     * @param {number} idTarea - El ID único de la tarea.
     * @returns {boolean} True si la tarea fue marcada como completada, false si el ID no se encontró.
     */
    marcarCompletada(idTarea) {
        const tarea = this.tareas.find(t => t.id === idTarea);
        if (tarea) {
            tarea.completada = true;
            return true;
        }
        return false;
    }

    /**
     * Obtiene la lista actual de tareas.
     * @returns {Array<Object>} La lista de tareas.
     */
    obtenerTareas() {
        return this.tareas;
    }
}

// Exportamos la clase para que Jest pueda probarla.
module.exports = { GestorTareas };
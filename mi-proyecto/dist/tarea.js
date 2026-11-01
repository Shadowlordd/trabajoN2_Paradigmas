"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestorTareas = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
class GestorTareas {
    constructor() {
        this.tareas = [];
        this.contador = 1;
    }
    // === Listados ===
    verTodas() {
        this.listar(this.tareas, "Todas las tareas");
    }
    verPendientes() {
        const pendientes = this.tareas.filter(t => t.estado === "pendiente");
        this.listar(pendientes, "Tareas pendientes");
    }
    verEnCurso() {
        const enCurso = this.tareas.filter(t => t.estado === "en curso");
        this.listar(enCurso, "Tareas en curso");
    }
    verTerminadas() {
        const terminadas = this.tareas.filter(t => t.estado === "terminada");
        this.listar(terminadas, "Tareas terminadas");
    }
    // === Listar con opción de detalles ===
    listar(lista, titulo) {
        if (lista.length === 0) {
            console.log(`No hay ${titulo.toLowerCase()}.`);
            return;
        }
        console.log(`=== ${titulo} ===`);
        lista.forEach(t => console.log(`${t.id}: ${t.descripcion}`));
        let id;
        do {
            id = Number(readline_sync_1.default.question("¿Desea ver los detalles de alguna? Introduzca el numero o 0 para volver: "));
            if (id === 0) {
                console.log("Volviendo al menu anterior...");
                break;
            }
            const tarea = lista.find(t => t.id === id);
            if (tarea) {
                this.mostrarDetalles(tarea);
            }
            else {
                console.log("Número inválido. Intente de nuevo.");
            }
        } while (id !== 0);
    }
    // === Mostrar detalles ===
    mostrarDetalles(tarea) {
        console.log("\n=== Detalles de Tarea ===");
        console.log(`Esta es la tarea que elegiste: ${tarea.descripcion}`);
        console.log(`Estado: ${tarea.estado}`);
        console.log(`Creación: ${tarea.creacion.toLocaleString()}`);
        console.log(`Vencimiento: ${tarea.vencimiento ? tarea.vencimiento.toLocaleDateString() : "No definido"}`);
        const opcion = readline_sync_1.default.question("¿Desea editarla? Presione E, o presione 0 para volver: ");
        if (opcion.toLowerCase() === "e") {
            this.editarTarea(tarea);
        }
        else {
            console.log("Volviendo al menu anterior...");
        }
    }
    // === Editar tarea ===
    editarTarea(tarea) {
        console.log("\n=== Menú de edicion ===");
        console.log("1: Cambiar descripcion");
        console.log("2: Cambiar estado");
        console.log("3: Cambiar vencimiento");
        console.log("0: Volver");
        const opcion = Number(readline_sync_1.default.question("Elija una opcion: "));
        switch (opcion) {
            case 1:
                tarea.descripcion = readline_sync_1.default.question("Nueva descripcion: ");
                break;
            case 2:
                console.log("Seleccione el nuevo estado:");
                console.log("1: Pendiente");
                console.log("2: En curso");
                console.log("3: Terminada");
                const estadoOpcion = Number(readline_sync_1.default.question("Elija una opcion: "));
                if (estadoOpcion === 1)
                    tarea.estado = "pendiente";
                else if (estadoOpcion === 2)
                    tarea.estado = "en curso";
                else if (estadoOpcion === 3)
                    tarea.estado = "terminada";
                else
                    console.log("Opción inválida.");
                break;
            case 3:
                const fecha = readline_sync_1.default.question("Ingrese nueva fecha de vencimiento (YYYY-MM-DD): ");
                tarea.vencimiento = new Date(fecha);
                break;
            case 0:
                console.log("Volviendo...");
                break;
            default:
                console.log("Opción invalida.");
        }
    }
    // === Buscar tarea por ID ===
    buscarTarea(id) {
        const tarea = this.tareas.find(t => t.id === id);
        if (tarea) {
            console.log(`Tarea encontrada: ${tarea.id} - ${tarea.descripcion} [${tarea.estado}]`);
        }
        else {
            console.log("No se encontró la tarea.");
        }
    }
    // === Agregar tarea ===
    agregarTarea(descripcion) {
        const nueva = {
            id: this.contador++,
            descripcion,
            estado: "pendiente",
            creacion: new Date()
        };
        this.tareas.push(nueva);
        console.log("Tarea agregada:", nueva);
    }
}
exports.GestorTareas = GestorTareas;

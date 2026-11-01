"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const tarea_1 = require("./tarea");
console.log("¡Hola Usuario!");
function main() {
    const gestor = new tarea_1.GestorTareas();
    let opcion;
    do {
        console.log("\n=== Menú Principal ===");
        console.log("1: Ver mis tareas");
        console.log("2: Buscar tarea");
        console.log("3: Agregar tarea");
        console.log("0: Salir");
        opcion = Number(readline_sync_1.default.question("Elija una opción: "));
        switch (opcion) {
            case 1:
                let subopcion;
                do {
                    console.log("\n=== Submenú de tareas ===");
                    console.log("1: Todas");
                    console.log("2: Pendientes");
                    console.log("3: En curso");
                    console.log("4: Terminadas");
                    console.log("0: Volver");
                    subopcion = Number(readline_sync_1.default.question("Elija una opción: "));
                    switch (subopcion) {
                        case 1:
                            gestor.verTodas();
                            break;
                        case 2:
                            gestor.verPendientes();
                            break;
                        case 3:
                            gestor.verEnCurso();
                            break;
                        case 4:
                            gestor.verTerminadas();
                            break;
                        case 0:
                            console.log("Volviendo al menú principal...");
                            break;
                        default:
                            console.log("Opción inválida. Intente de nuevo.");
                    }
                } while (subopcion !== 0);
                break;
            case 2: {
                const texto = readline_sync_1.default.question("Ingrese el nombre o parte del nombre de la tarea: ");
                gestor.buscarTarea(texto);
                break;
            }
            case 3:
                const desc = readline_sync_1.default.question("Ingrese la descripción de la tarea: ");
                gestor.agregarTarea(desc);
                break;
            case 0:
                console.log("Saliendo...");
                break;
            default:
                console.log("Opción inválida. Intente de nuevo.");
        }
    } while (opcion !== 0);
}
main();

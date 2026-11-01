import readlineSync from "readline-sync";
import { GestorTareas } from "./tarea";

console.log("¡Hola Usuario!");
function main(): void {
  const gestor = new GestorTareas();
  let opcion: number;

  do {
    console.log("\n=== Menú Principal ===");
    console.log("1: Ver mis tareas");
    console.log("2: Buscar tarea");
    console.log("3: Agregar tarea");
    console.log("0: Salir");

    opcion = Number(readlineSync.question("Elija una opción: "));

    switch (opcion) {
      case 1:
        let subopcion: number;
        do {
          console.log("\n=== Submenú de tareas ===");
          console.log("1: Todas");
          console.log("2: Pendientes");
          console.log("3: En curso");
          console.log("4: Terminadas");
          console.log("0: Volver");

          subopcion = Number(readlineSync.question("Elija una opción: "));
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
        const texto = readlineSync.question(
          "Ingrese el nombre o parte del nombre de la tarea: "
        );

        gestor.buscarTarea(texto);
        break;
      }
      case 3:
        const desc = readlineSync.question("Ingrese la descripción de la tarea: ");
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

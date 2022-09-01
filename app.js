const tareas = require("./funcionesDeTareas");

let arg = process.argv[2];

switch (arg) {
  case undefined:
    console.log("Atención-Tienes que pasar una acción.");
    break;
  case "--listar":
    console.table(JSON.parse(tareas));
    break;
  default:
    console.log("No entiendo qué quieres hacer.");
    break;
}

//console.table(JSON.parse(tareas));

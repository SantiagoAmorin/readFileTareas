const fs = require("fs");

/*fs.writeFile("books.txt", data, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
      console.log("The written has the following contents:");
      console.log(fs.readFileSync("books.txt", "utf8"));
    }
  });*/

function leerTareas(){
    return fs.readFileSync("./tareas.json", "utf8")
}

module.exports = leerTareas();


let competidores = ["Anna", "Beth", "Cara", "David"];

function mostrarGanadores(nombre, indice, arreglo) {
    let esSiguienteItem = indice + 1 < arreglo.length ? true : false;
    if (esSiguienteItem) {
        console.log(`El ganador #${indice+1} es ${nombre}.`);
    } else {
        console.log(`Perdón, ${nombre} no es uno de los ganadores.`);
    }
}

competidores.filter((nombre, indice, arreglo) => mostrarGanadores(nombre, indice, arreglo));

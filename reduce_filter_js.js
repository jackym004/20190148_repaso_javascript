// Definir la función fuera del evento de clic
function mostrarGanadores(nombre, indice, arreglo) {
    let esSiguienteItem = indice + 1 < arreglo.length ? true : false;
    if (esSiguienteItem) {
        console.log(`El ganador #${indice + 1} es ${nombre}.`);
        return true; // Retornar true para incluir el elemento en el nuevo array
    } else {
        console.log(`Perdón, ${nombre} no es uno de los ganadores.`);
        return false; // Retornar false para no incluir el elemento en el nuevo array
    }
}

// Usar el método filter correctamente
let competidores = ["Anna", "Beth", "Cara", "David"];
let ganadores = competidores.filter((nombre, indice, arreglo) => mostrarGanadores(nombre, indice, arreglo));

console.log(ganadores); // Esto imprimirá el nuevo array con los ganadores



// Definir la función fuera del evento de clic
function sumarNumerosPares(acumulador, numero, indice, arreglo) {
    if (numero % 2 === 0) {
        return acumulador + numero; // Si el número es par, lo sumamos al acumulador
    }
    return acumulador; // Si el número es impar, mantenemos el acumulador sin cambios
}

// Usar el método reduce correctamente
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumaPares = numeros.reduce((acumulador, numero, indice, arreglo) => sumarNumerosPares(acumulador, numero, indice, arreglo), 0);

console.log(sumaPares); // Esto imprimirá la suma de los números pares del array
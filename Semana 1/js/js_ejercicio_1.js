// Reduce Method Example
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(`Sum of array elements: ${sum}`);

// Filter Method Example
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers2.filter(number => number % 2 === 0);
console.log(`Even numbers in array: ${evenNumbers.join(', ')}`);

// Arreglo de objetos
const favoritos = [
    {
        nombre: 'Eliza',
        top: '1',
        variante: 'Sobresaliente', 
        rol: 'Atacante',
        imagen: 'https://static.wikia.nocookie.net/skullgirlsmobile/images/b/b2/Stand_Out.png/revision/latest/scale-to-width-down/1000?cb=20181210231145'
    },
    {
        nombre: 'Fukua',
        top: '2',
        variante: 'Coletas Fantasma', 
        rol: 'Mixto',
        imagen: 'https://static.wikia.nocookie.net/skullgirlsmobile/images/9/9e/Phantom_Threads.png/revision/latest/scale-to-width-down/1000?cb=20200324011055'
    },
    {
        nombre: 'Filia',
        top: '3',
        variante: 'Nota de Corte', 
        rol: 'Mixto',
        imagen: 'https://static.wikia.nocookie.net/skullgirlsmobile/images/0/05/Class_Cutter.png/revision/latest/scale-to-width-down/1000?cb=20181210231059'
    },
    {
        nombre: 'Valentine',
        top: '4',
        variante: 'Cirujana General', 
        rol: 'Mixto',
        imagen: 'https://static.wikia.nocookie.net/skullgirlsmobile/images/b/b3/Surgeon_General.png/revision/latest/scale-to-width-down/1000?cb=20181019154325'
    },
    {
        nombre: 'Umbrella',
        top: '5',
        variante: 'Deseo de Muerte', 
        rol: 'Atacante',
        imagen: 'https://static.wikia.nocookie.net/skullgirlsmobile/images/9/9c/Death_Wish.png/revision/latest/scale-to-width-down/1000?cb=20220929232601'
    },
    {
        nombre: 'Valentine',
        top: '6',
        variante: 'Caos Primordial', 
        rol: 'Mixto',
        imagen: 'https://static.wikia.nocookie.net/skullgirlsmobile/images/a/ab/Love_Crafted.png/revision/latest/scale-to-width-down/1000?cb=20181210231251'
    },
    {
        nombre: 'Parasoul',
        top: '7',
        variante: 'Hermana Salada', 
        rol: 'Atacante',
        imagen: 'https://static.wikia.nocookie.net/skullgirlsmobile/images/e/ed/Summer_Salt.png/revision/latest/scale-to-width-down/1000?cb=20181210231259'
    },
    {
        nombre: 'Double',
        top: '8',
        variante: 'Plaga Arcoiris', 
        rol: 'Atacante',
        imagen: 'https://static.wikia.nocookie.net/skullgirlsmobile/images/c/c4/Rainbow_Blight.png/revision/latest/scale-to-width-down/1000?cb=20181019144842'
    },
    {
        nombre: 'Painwheel',
        top: '9',
        variante: 'Neuromante', 
        rol: 'Atacante',
        imagen: 'https://static.wikia.nocookie.net/skullgirlsmobile/images/d/d1/Neuromancer.png/revision/latest/scale-to-width-down/1000?cb=20191105003503'
    },
    {
        nombre: 'Marie',
        top: '10',
        variante: 'Aspira Fantasmas', 
        rol: 'Mixto',
        imagen: 'https://static.wikia.nocookie.net/skullgirlsmobile/images/a/af/Gust_Buster.png/revision/latest/scale-to-width-down/1000?cb=20230927173627'
    },
    {
        nombre: 'Black Dahlia',
        top: '11',
        variante: 'Huésped Impía', 
        rol: 'Mixto',
        imagen: 'https://static.wikia.nocookie.net/skullgirlsmobile/images/7/7f/Unholy_Host.png/revision/latest/scale-to-width-down/1000?cb=20221201183312'
    },
    {
        nombre: 'Cerebella',
        top: '12',
        variante: 'Arlequín', 
        rol: 'Atacante',
        imagen: 'https://static.wikia.nocookie.net/skullgirlsmobile/images/c/cd/Harlequin.png/revision/latest/scale-to-width-down/1000?cb=20181019144001'
    },
    {
        nombre: 'Peacock',
        top: '13',
        variante: 'Sine Qua Non', 
        rol: 'Atacante',
        imagen: 'https://static.wikia.nocookie.net/skullgirlsmobile/images/6/6e/Deal_Breaker.png/revision/latest/scale-to-width-down/1000?cb=20240326120752'
    },
    {
        nombre: 'Beowulf',
        top: '14',
        variante: 'Rey de las Bestias', 
        rol: 'Atacante',
        imagen: 'https://static.wikia.nocookie.net/skullgirlsmobile/images/1/14/Beast_King.png/revision/latest/scale-to-width-down/1000?cb=20210821013304'
    },
    {
        nombre: 'Big Band',
        top: '15',
        variante: 'Megasonic', 
        rol: 'Defensivo',
        imagen: 'https://static.wikia.nocookie.net/skullgirlsmobile/images/9/92/Megasonic.png/revision/latest/scale-to-width-down/1000?cb=20181019142755'
    },
    {
        nombre: 'Ms. Fortune',
        top: '16',
        variante: 'Soldado Raso', 
        rol: 'Atacante',
        imagen: 'https://static.wikia.nocookie.net/skullgirlsmobile/images/8/89/Foot_Soldier.png/revision/latest/scale-to-width-down/1000?cb=20230927174936'
    },
    {
        nombre: 'Robo-Fortune',
        top: '17',
        variante: 'X-Bot', 
        rol: 'Atacante',
        imagen: 'https://static.wikia.nocookie.net/skullgirlsmobile/images/0/0f/X-Bot.png/revision/latest/scale-to-width-down/1000?cb=20191105004055'
    },
];

// Función para mostrar la información en tarjetas de Bootstrap
function mostrarInformacion() {
    const outputDiv = document.getElementById('output');
    let outputHTML = '';
    favoritos.forEach((personaje, index) => {
        if (index % 3 === 0) {
            // Abrir una nueva fila cada tres tarjetas
            outputHTML += '<div class="row">';
        }
        const card = `
        <div class="col-md-4">
          <div class="card">
            <img src="${personaje.imagen}" class="card-img-top" alt="${personaje.nombre}">
            <div class="card-body">
              <h5 class="card-title">${personaje.nombre}</h5>
              <p class="card-text">Posición: ${personaje.top}</p>
              <p class="card-text">Variante favorita: ${personaje.variante}</p>
              <p class="card-text">Rol dentro del juego: ${personaje.rol}</p>
            </div>
          </div>
        </div>
      `;
        outputHTML += card;
        if ((index + 1) % 3 === 0 || index === favoritos.length - 1) {
            // Cerrar la fila al final de cada tres tarjetas o cuando lleguemos al final del arreglo
            outputHTML += '</div>';
        }
    });
    outputDiv.innerHTML = outputHTML;
}

mostrarInformacion();
// Llama a la función para mostrar la información al cargar la página
window.onload = mostrarInformacion;

async function getMeals() {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const data = await response.json();
        return data.meals;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

async function displayMeals() {
    const meals = await getMeals();
    const mealsContainer = document.getElementById('meals');
    mealsContainer.innerHTML = '';

    meals.forEach(meal => {
        const mealCard = `
        <div class="col-md-4 justify content center">
          <div class="card meal-card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="Meal Image">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">Category: ${meal.strCategory}</p>
              <p class="card-text">Area: ${meal.strArea}</p>
              <p class="card-text">Instructions: ${meal.strInstructions}</p>
            </div>
          </div>
        </div>
      `;
        mealsContainer.innerHTML += mealCard;
    });
}

displayMeals();

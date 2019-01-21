// Inicializador Materialize//
/*
$(document).ready(function () {
    $('select').formSelect();
});

$(document).ready(function () {
    $('input.autocomplete').autocomplete({
        data: {
            "Apple": null,
            "Microsoft": null,
            "Google": 'https://placehold.it/250x250'
        },
    });
});
*/
$('.carousel.carousel-slider').carousel({
    fullWidth: true
  });

window.M.AutoInit();

//// Variables
let totalData = "";
const root = document.querySelector("#root");
const root1 = document.querySelector("#root1");
const perfilPage = document.getElementsByClassName("card-img");

window.onload= fetcheame()
function fetcheame() {
    fetch("https://cors-anywhere.herokuapp.com/http://hp-api.herokuapp.com/api/characters")
      .then(data => data.json())
      .then(data => {
  
        totalData = data;
          console.log(totalData)
          principalPage (totalData)
      })
  }

  //Mostrar  Todos
function principalPage(totalData) {
    root.innerHTML = "";
     
    for (let valor of totalData) {
      root.innerHTML += `
      <div class="col s12 m3 14">
      <div class="card hoverable black medium">
          <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="${valor.image}">
          </div>
          <div class="card-content">
              <span class="card-title activator purple-text text-lighten-5"><b>${valor.name}</b><i class="mdi-navigation-more-vert right"></i></span>
              <p>${valor.house}</p>
          </div>
          <div class="card-reveal  black">
              <span class="card-title purple-text text-lighten-5"> <b>${valor.name}</b> <i class="mdi-navigation-close right"></i></span>
              <p> Actor : ${valor.actor} </p>    
              <p>Especie:  ${valor.species}</p>
              <p>Tipo de Sangre: ${valor.ancestry}</p>
              <p>Fecha de Nacimiento: ${valor.dateOfBirth}</p>
          </div>
      </div>
  </div>`;
        }
  }

// FILTRAR X CASA
document.getElementById("filtered").addEventListener("change", (evento) => {
    evento.preventDefault();
    let house = document.getElementById("filtered").value;
    principalPage(window.potter.potterFilter(totalData, house));
  })

// ORDENAR

document.getElementById("ordered").addEventListener("change", (event) => {
    event.preventDefault();
    root.innerHTML = ""

    if (document.getElementById("ordered").value === "az") {
        for (let valor of window.potter.orderAZ(totalData, "name", "az")) {
            root.innerHTML += `
        <div class="col s12 m3 14">
        <div class="card hoverable black medium">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="${valor.image}">
            </div>
            <div class="card-content">
                <span class="card-title activator purple-text text-lighten-5"><b>${valor.name}</b><i class="mdi-navigation-more-vert right"></i></span>
                <p>${valor.house}</p>
            </div>
            <div class="card-reveal  black">
                <span class="card-title purple-text text-lighten-5"> <b>${valor.name}</b> <i class="mdi-navigation-close right"></i></span>
                <p> Actor : ${valor.actor} </p>    
                <p>Especie:  ${valor.species}</p>
                <p>Tipo de Sangre: ${valor.ancestry}</p>
                <p>Fecha de Nacimiento: ${valor.dateOfBirth}</p>
            </div>
        </div>
    </div>`;
        }
    }
    if (document.getElementById("ordered").value === "za") {
        for (let valor of window.potter.orderZA(totalData, "name", "za")) {
            root.innerHTML +=
                `
        <div class="col s12 m3 14">
        <div class="card hoverable black medium">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="${valor.image}">
            </div>
            <div class="card-content">
                <span class="card-title activator purple-text text-lighten-5"><b>${valor.name}</b><i class="mdi-navigation-more-vert right"></i></span>
                <p>${valor.house}</p>
            </div>
            <div class="card-reveal  black">
                <span class="card-title purple-text text-lighten-5"> <b>${valor.name}</b> <i class="mdi-navigation-close right"></i></span>
                <p> Actor : ${valor.actor} </p>    
                <p>Especie:  ${valor.species}</p>
                <p>Tipo de Sangre: ${valor.ancestry}</p>
                <p>Fecha de Nacimiento: ${valor.dateOfBirth}</p>  
                
            </div>
        </div>
    </div>`;
        }
    }
})

//CASAS


document.getElementById("house1").addEventListener("click", (event) => {
    event.preventDefault();
    root1.innerHTML = ""
    root1.innerHTML += `

    <div class="container"
    <div class="col s12 m12">
    <h3 class="header green-text text-darken-2"><b>Slytherin</b></h3>
     <div class="card horizontal">
      <div class="card-image">
        <img class="responsive-image" src="/./imagenes/0.61_Slytherin_Crest_Transparent.png">
      </div>
      <div class="card-stacked">
        <div class="card-content green darken-4 text-flow">
         
        <p><b>Jefe de la Casa: </b>Severus Snape. En el séptimo libro Horace Slughorn ocupa este cargo ya que Severus Snape se convierte en director.</p>
          <p><b>Colores representativos: </b>Verde esmeralda y plata.</p>
          <p><b>Animal representativo:</b> Serpiente.</p>
          <p><b>Fundador:</b> Salazar Slytherin.</p>
          <p><b>Fantasma: </b>El Barón Sanguinario.</p>
          <p><b>Significado:</b> Es una variación del verbo en ingles "Slithering" que significa literalmente "deslizándose"</p>
          <p><b>Características:</b> Gente que utiliza cualquier medio para lograr sus fines, determinación, ambición, un cierto desdén por las normas, astucia, aspiraciones de grandeza y hambre de poder. Tienden a dudar antes de actuar, con el fin de sopesar todos los posibles resultados antes de decidir exactamente lo que se debe hacer y una vez que lo averiguan, lo consiguen, dándole igual los medios para lograrlo.</p>
          <p><b>Elemento de Slytherin:</b> Agua, asociado a la versatilidad y capacidad de adaptación de los Slytherins.</p>
        </div>
      </div>
    </div>
  </div>
    </div>`

})

document.getElementById("house2").addEventListener("click", (event) => {
    event.preventDefault();
    root1.innerHTML = ""
    root1.innerHTML += `

    <div class="container"
    <div class="col s12 m12">
    <h3 class="header blue-text text-darken-2"><b>Ravenclaw</b></h3>
     <div class="card horizontal">
      <div class="card-image">
        <img class="responsive-image" src="/./imagenes/0.41_Ravenclaw_Crest_Transparent.png">
      </div>
      <div class="card-stacked">
        <div class="card-content blue darken-4 text-flow">
         
        <p><b>Jefe de la Casa: </b>Filius Flitwick.</p>
          <p><b>Colores representativos: </b>Azul y Bronce en los libros, Azul y Plata en las películas.</p>
          <p><b>Animal representativo:</b>  Águila.</p>
          <p><b>Fundador:</b> Rowena Ravenclaw.</p>
          <p><b>Fantasma: </b>Helena Ravenclaw (Hija de Rowena Ravenclaw), mejor conocida como La Dama Gris..</p>
          <p><b>Significado:</b> Garra de cuervo (aunque en la versión francesa se llama Serdaigle -del francés serre d'aigle, literalmente garra de águila-).
          "Una inteligencia sin límites es el mayor tesoro de los hombres", se considera la frase que resume el espíritu de la casa.</p>
          <p><b>Cualidades requeridas:</b> Inteligencia, curiosidad y sabiduría. Una mente dispuesta y creatividad.</p>
          <p><b>Elemento:</b> Aire, ya que se asocia con la creatividad y la sabiduría, dos características fundamentales de esta casa.</p>
        </div>
      </div>
    </div>
  </div>
    </div>`

})

document.getElementById("house3").addEventListener("click", (event) => {
    event.preventDefault();
    root1.innerHTML = ""
    root1.innerHTML += `

    <div class="container"
    <div class="col s12 m12">
    <h3 class="header red-text text-darken-2"><b>Gryffindor</b></h3>
     <div class="card horizontal">
      <div class="card-image">
        <img class="responsive-image" src="/./imagenes/0.31_Gryffindor_Crest_Transparent.png">
      </div>
      <div class="card-stacked">
        <div class="card-content red darken-4 text-flow">
         
        <p><b>Jefe de la Casa: </b> Minerva McGonagall.</p>
          <p><b>Colores representativos: </b> Escarlata y dorado.</p>
          <p><b>Animal representativo:</b>   León.</p>
          <p><b>Fundador:</b> Godric Gryffindor.</p>
          <p><b>Fantasma: </b>Sir Nicholas de Mimsy-Porpington (más conocido como Nick Casi Decapitado).</p>
          <p><b>Características:</b> Coraje y valentía. Un buen miembro de Gryffindor tiene gran osadía, temple y caballerosidad. Son capaces de todo por defender en lo que creen y nunca se dan por vencidos. También son capaces de romper las reglas si es necesario y les encantan los retos, cuanto más difíciles, mejor. Se atreven a lo que la mayoría no se atreve En cada obstáculo ven una oportunidad para demostrar quienes son realmente.</p>
          <p><b>Reliquia más preciada:</b> Su Espada (perteneció a Godric Gryffindor), aunque también está el Sombrero Seleccionador, que es el sombrero de Godric Gryffindor.</p>
          <p><b>Elemento:</b>  Fuego, pues está asociado con el valor y el coraje de esta casa..</p>
        </div>
      </div>
    </div>
  </div>
    </div>`

})


document.getElementById("house4").addEventListener("click", (event) => {
    event.preventDefault();
    root1.innerHTML = ""
    root1.innerHTML += `

    <div class="container"
    <div class="col s12 m12">
    <h3 class="header amber-text text-darken-2"><b>Hufflepuff</b></h3>
     <div class="card horizontal">
      <div class="card-image">
        <img class="responsive-image" src="/./imagenes/59d94589b591e9ec30a31ce3a4d1fcfcee43c66e_hq.jpg">
      </div>
      <div class="card-stacked">
        <div class="card-content amber darken-4 text-flow">
         
        <p><b>Jefe de la Casa: </b>Filius Flitwick.</p>
          <p><b>Colores representativos: </b>Azul y Bronce en los libros, Azul y Plata en las películas.</p>
          <p><b>Animal representativo:</b>  Águila.</p>
          <p><b>Fundador:</b> Rowena Ravenclaw.</p>
          <p><b>Fantasma: </b>Helena Ravenclaw (Hija de Rowena Ravenclaw), mejor conocida como La Dama Gris..</p>
          <p><b>Significado:</b> Garra de cuervo (aunque en la versión francesa se llama Serdaigle -del francés serre d'aigle, literalmente garra de águila-).
          "Una inteligencia sin límites es el mayor tesoro de los hombres", se considera la frase que resume el espíritu de la casa.</p>
          <p><b>Cualidades requeridas:</b> Inteligencia, curiosidad y sabiduría. Una mente dispuesta y creatividad.</p>
          <p><b>Elemento de Slytherin:</b> Agua, asociado a la versatilidad y capacidad de adaptación de los Slytherins.</p>
        </div>
      </div>
    </div>
  </div>
    </div>`

})
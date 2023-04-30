const peli1 = {
    imagen: "https://www.themoviedb.org/t/p/original/ahLU52SKLuqQbObBtXWsPxTMtIE.jpg",
    titulo: 'Stranger Things',
    rating: '4.5',
    descripcion: 'La historia se sitúa en el pueblo ficticio de Hawkins, en el estado Indiana, Estados Unidos, durante los años ochenta, cuando un niño de doce años llamado Will Byers desaparece misteriosamente. Poco después, Eleven (Once, en español), una niña aparentemente fugitiva y con poderes telequinéticos, se encuentra con Mike, Dustin y Lucas, amigos de Will, y los ayuda en la búsqueda del mismo.',
    ranking: 5,
    edad: '12+'
};
const peli2 = {
    imagen: "https://www.themoviedb.org/t/p/original/22cq85ZsAA0UzLq2uRf9MXf4OIx.jpg",
    titulo: 'The Boys',
    rating: '3.5',
    descripcion: 'The Boys está ambientada en un universo en el que los individuos superpoderosos son reconocidos como héroes por el público en general y trabajan para la poderosa corporación Vought International, que los comercializa y monetiza. Fuera de sus personajes heroicos, la mayoría son arrogantes, egoístas y corruptos. La serie se centra principalmente en dos grupos: los Siete, el principal equipo de superhéroes de Vought International, y The Boys (lit. Los muchachos) como protagonistas, vigilantes que buscan derribar a Vought y a los superhéroes corruptos.',
    ranking: 4,
    edad: '18+'
}
const peli3 = {
    imagen: "https://www.themoviedb.org/t/p/original/kQkzOpOdUAO0DYdf07Leyvp1oXA.jpg",
    titulo: 'The Umbrella Academy',
    rating: '4.0',
    descripcion: 'The Umbrella Academy está ambientada en un universo donde 43 mujeres de todo el mundo dan a luz simultáneamente a las 12:00 p. m. del 1 de octubre de 1989, a pesar de que ninguna de ellas había mostrado ningún signo de embarazo hasta ese momento. Siete de esos niños son adoptados por el multimillonario Reginald Hargreeves y se convierten en un equipo de superhéroes al que él llama "The Umbrella Academy". Hargreeves les da a los niños números en lugar de nombres, pero eventualmente son nombrados (excepto Número 5) por su madre robot, Grace, como Luther, Diego, Allison, Klaus, Ben y Vanya. Mientras pone a luchar a seis de sus hijos contra el crimen, Reginald mantiene a Vanya al margen de las actividades de sus hermanos, ya que supuestamente ella no tiene poderes propios.',
    ranking: 3,
    edad: '24+'
}
const peli4 = {
    imagen: "https://www.themoviedb.org/t/p/original/hqqLQMQMWQS6CS5qEeMe3UDn9uT.jpg",
    titulo: 'Game of Thrones',
    rating: '8.0',
    descripcion: 'Los conceptos y elementos mágicos predominan en la serie, ya sea en forma de dragones, gigantes, espectros, cadáveres reanimados, control telepático de personas y animales, y profecías.39​ De acuerdo con Luke Holland, de The Guardian: «las batallas y las explosiones son simplemente la cereza en la parte superior. Podrías eliminar por completo todos los elementos fantásticos de Game of Thrones y seguiría siendo un programa irresistible»',
    ranking: 2,
    edad: '18+'
}
const peli5 = {
    imagen: "https://www.themoviedb.org/t/p/original/dQllVL5OGZ7T7qppgRKbhNTcpLF.jpg",
    titulo: 'Black Mirror',
    rating: '9.0',
    descripcion: ' la serie se caracteriza por presentar relatos distópicos autoconclusivos que muestran generalmente un sentimiento de «tecno-paranoia» y analizan cómo la tecnología afecta al ser humano.',
    ranking: 1,
    edad: '12+'
}


const peliculas = new Map ([
    ["pelicula1", peli1],
    ["pelicula2", peli2],
    ["pelicula3", peli3],
    ["pelicula4", peli4],
    ["pelicula5", peli5],
]);

// Banner
let peliculaSeleccionada = peliculas.get('pelicula4');
let imagenLink = peliculaSeleccionada.imagen; 
console.log("Hola " + imagenLink)
let contenedor = document.getElementById("contenedor");
contenedor.style.backgroundImage = "url('" + imagenLink + "')";

let infoTitulo = document.getElementById("infoTitulo");
let tituloPelicula = document.createElement('h3');
tituloPelicula.innerHTML = peliculaSeleccionada.titulo + " <span>(" + peliculaSeleccionada.rating +" rating)</span>"; 
infoTitulo.appendChild(tituloPelicula);
let descripcionPelicula = document.createElement('p');
descripcionPelicula.className = "pp";
descripcionPelicula.innerHTML = peliculaSeleccionada.descripcion;
infoTitulo.appendChild(descripcionPelicula);

let divBotones = document.createElement('div');
divBotones.className = "button";
let botonPlay = document.createElement('button');
botonPlay.innerHTML = '<span><i class="fa-solid fa-play"></i></span> Play'
let botonSave = document.createElement('button');
botonSave.innerHTML = 'Save <span><i class="fa-solid fa-bookmark"></i></span>'
let spanEdad = document.createElement('span');
spanEdad.className = "edad"
spanEdad.innerHTML = peliculaSeleccionada.edad
divBotones.appendChild(botonPlay);
divBotones.appendChild(botonSave);
divBotones.appendChild(spanEdad);
infoTitulo.appendChild(divBotones);

// Recomendaciones
peliculas.forEach(pelicula => {
    let imagen = document.createElement('img');
    imagen.src = pelicula.imagen;
    let contendor = document.getElementById('item');
    //contendor.appendChild(imagen);

    let c, r, t;
    t = document.createElement('table');
    r = t.insertRow(0); 
    c = r.insertCell(0);
    c.style.textAlign = 'center';
    c.colSpan = "2";
    c.appendChild(imagen);
    r = t.insertRow(1); 
    c = r.insertCell(0);
    c.style.color = "white";
    c.style.width = "50%";
    c.innerHTML = pelicula.edad;
    c = r.insertCell(1);
    for (let index = 0; index < pelicula.ranking; index++) {
        let inputRadio = document.createElement('input');
        inputRadio.type = "radio"
        let labelStar = document.createElement('label');
        labelStar.innerHTML = '<i class="fa-solid fa-star" style="color: gold"></i>';
        c.appendChild(inputRadio);
        c.appendChild(labelStar);
    }
    contendor.appendChild(t);
});

// Tendencia
peliculas.forEach(pelicula => {
    let imagen = document.createElement('img');
    imagen.src = pelicula.imagen;
    let contendor = document.getElementById('item2');
    //contendor.appendChild(imagen);

    let c, r, t;
    t = document.createElement('table');
    r = t.insertRow(0); 
    c = r.insertCell(0);
    c.style.textAlign = 'center';
    c.colSpan = "2";
    c.appendChild(imagen);
    r = t.insertRow(1); 
    c = r.insertCell(0);
    for (let index = 0; index < pelicula.ranking; index++) {
        let inputRadio = document.createElement('input');
        inputRadio.type = "radio"
        let labelStar = document.createElement('label');
        labelStar.innerHTML = '<i class="fa-solid fa-star" style="color: gold"></i>';
        c.appendChild(inputRadio);
        c.appendChild(labelStar);
    }
    c = r.insertCell(1);
    c.style.color = "white";
    c.style.width = "50%";
    c.innerHTML = pelicula.edad;
    contendor.appendChild(t);
});

function cambiarTitulo() {

}

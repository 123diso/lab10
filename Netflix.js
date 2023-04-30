const peli1 = {
    imagen: "https://www.themoviedb.org/t/p/original/ahLU52SKLuqQbObBtXWsPxTMtIE.jpg",
    titulo: 'La pelicula 1',
    ranking: 5,
    edad: '18+'
};
const peli2 = {
    imagen: "https://www.themoviedb.org/t/p/original/22cq85ZsAA0UzLq2uRf9MXf4OIx.jpg",
    titulo: 'La pelicula 1',
    ranking: 4,
    edad: '18+'
}
const peli3 = {
    imagen: "https://www.themoviedb.org/t/p/original/kQkzOpOdUAO0DYdf07Leyvp1oXA.jpg",
    titulo: 'La pelicula 1',
    ranking: 3,
    edad: '18+'
}
const peli4 = {
    imagen: "https://www.themoviedb.org/t/p/original/hqqLQMQMWQS6CS5qEeMe3UDn9uT.jpg",
    titulo: 'La pelicula 1',
    ranking: 2,
    edad: '18+'
}
const peli5 = {
    imagen: "https://www.themoviedb.org/t/p/original/dQllVL5OGZ7T7qppgRKbhNTcpLF.jpg",
    titulo: 'La pelicula 1',
    ranking: 1,
    edad: '18+'
}


const peliculas = new Map ([
    ["pelicula1", peli1],
    ["pelicula2", peli2],
    ["pelicula3", peli3],
    ["pelicula4", peli4],
    ["pelicula5", peli5],
]);


let imagenLink = peliculas.get('pelicula2').imagen; 
console.log("Hola " + imagenLink)
let imagen = document.getElementById("imagen");
imagen.style.backgroundImage = "url('"+imagenLink+"')";


peliculas.forEach(pelicula => {
    let imagen = document.createElement('img');
    imagen.src = pelicula.imagen;
    let contendor = document.getElementById('item');
    //contendor.appendChild(imagen);

    let c, r, t;
    t = document.createElement('table');
    r = t.insertRow(0); 
    c = r.insertCell(0);
    r.style.textAlign = 'center';
    c.appendChild(imagen);
    r = t.insertRow(1); 
    c = r.insertCell(0);
    for (let index = 0; index < pelicula.ranking; index++) {
        var inputRadio = document.createElement('input');
        inputRadio.type = "radio"
        var labelStar = document.createElement('label');
        labelStar.innerHTML = '<i class="fa-solid fa-star"></i>';
        c.appendChild(inputRadio);
        c.appendChild(labelStar);
    }
    c = r.insertCell(1);
    c.innerHTML = pelicula.edad;
    contendor.appendChild(t);
});

peliculas.forEach(pelicula => {
    let imagen = document.createElement('img');
    imagen.src = pelicula.imagen;
    let contendor = document.getElementById('item2');
    //contendor.appendChild(imagen);

    let c, r, t;
    t = document.createElement('table');
    r = t.insertRow(0); 
    c = r.insertCell(0);
    r.style.textAlign = 'center';
    c.appendChild(imagen);
    r = t.insertRow(1); 
    c = r.insertCell(0);
    for (let index = 0; index < pelicula.ranking; index++) {
        var inputRadio = document.createElement('input');
        inputRadio.type = "radio"
        var labelStar = document.createElement('label');
        labelStar.innerHTML = '<i class="fa-solid fa-star"></i>';
        c.appendChild(inputRadio);
        c.appendChild(labelStar);
    }
    c = r.insertCell(1);
    c.innerHTML = pelicula.edad;
    contendor.appendChild(t);
});

function cambiarTitulo() {

}
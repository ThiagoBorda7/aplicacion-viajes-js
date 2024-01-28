import { barcelona, roma, paris, londres } from "./ciudades.js";

//Obtener elementos del DOM

let enlaces = document.querySelectorAll('a');

let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');


//Agregar un EVENTO CLICK a cada enlace

enlaces.forEach(function(enlace){
    enlace.addEventListener('click', function(){
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
        });

        //Agregar class ACTIVE al elemento actual
        this.classList.add('active');

        //Obtener la informacion del enlace correspondiente
        let contenido = obtenerContenido(this.textContent);

        //Mostrar en el DOM
        tituloElemento.innerHTML = contenido.titulo;
        subtituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;
    });
});

//Funcion para traer la informacion correcta desde ciudades.js

function obtenerContenido(enlace){
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}
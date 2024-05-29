import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");//capturamos el formulario dentro de una variable

async function crearVideo(evento){
    evento.preventDefault();

    const titulo = document.querySelector("[data-titulo]").value;
    const url = document.querySelector("[data-url]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    const descripcion = Math.floor(Math.random*10).toString();//representa la visualizacion

    await conexionAPI.enviarVideo(titulo,descripcion, url, imagen);

    window.location.href="../pages/envio-concluido.html";
}

formulario.addEventListener("submit",evento=>crearVideo(evento));
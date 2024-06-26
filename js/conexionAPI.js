async function listarVideos(){
    const conexion = await fetch("http://localhost:3001/videos");
    const conexionConvertida=conexion.json();
    //console.log(conexionConvertida);
    return conexionConvertida
}

async function enviarVideo(titulo, descripcion, imagen, url){
    const conexion = await fetch("http://localhost:3001/videos",{
        method: "POST", //Especificamos metodo
        headers:{"content-type":"aplication/json"},//conjunto de info relacionada al archivo mediante consulta
        body:JSON.stringify({
            titulo: titulo,
            descripcion: `${descripcion} mil visualizaciones`,
            url: url,
            imagen: imagen
        })//contiene el cuerpo de como estara descrito nuestro 
    });//colocamos la url donde encontramos el archivo json, ademas de que colocamos la peticion tipo POST

    const conexionConvertida= conexion.json();
    return conexionConvertida;
}

async function buscarVideos(palabraClave){
    const conexion= await fetch(`http://localhost:3001/videos?q=${palabraClave}`);
    const conexionConvertida= conexion.json();
    return conexionConvertida;
}


export const conexionAPI={
    listarVideos,enviarVideo, buscarVideos
}

//listarVideos()
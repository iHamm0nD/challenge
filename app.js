let amigos = [];
let sorteados = [];


//-------- FUNCIONES DE ASIGNACION DE TEXTO ---------------


function asignarTexto(id, texto){
    let idHTML = document.querySelector(id);
    idHTML.innerHTML += `<li>${texto}</li>`;
}

function asignarResultado(id, texto){
    let idHTML = document.querySelector(id);
    idHTML.innerHTML = texto
}


//--------- FUNCIONES PARA LIMPIAR ------------------------ 

function limpiar(){
    document.querySelector('#amigo').value = '';
}

function limpiarLista(){
    document.querySelector('#listaAmigos').innerHTML = '';
}

// -----------FUNCIONES PARA MOSTRAR LA LISTA ----------------


function mostrarListaAmigos(){

    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = '';

    for(let i = 0; i < amigos.length; i++){
        asignarTexto('#listaAmigos', amigos[i] )
    }
}

// // -----------FUNCIONES PARA AGREGAR NOMBRES ----------------


function agregarAmigo(){

    let nombre = document.getElementById('amigo').value;

    if(nombre === ''){
        alert('Porfavor Ingrese un nombre!!!')
    }else{
        if(amigos.includes(nombre)){
        alert('El nombre que ingresaste ya está añadido')
        }
        else{
            amigos.push(nombre);
            console.log(amigos);
            mostrarListaAmigos();
            limpiar();
        }
    }
}


// --------------FUNCION PARA HACER EL SORTEO----------------



function sortearAmigo() {
    if (amigos.length < 2) {
        if (amigos.length === 0) {
            alert('Aún no añadiste amigos para iniciar el sorteo');
        } else {
            alert('Debe haber mínimo 2 personas ingresadas para iniciar el sorteo');
        }
        return;
    }

    let disponibles = []; // Array para los amigos que no fueron sorteados

    for (let i = 0; i < amigos.length; i++) {
        let amigoActual = amigos[i];

        if (!sorteados.includes(amigoActual)) {
            disponibles.push(amigoActual);
        }
    }

    //Se verifica si ya no quedan amigos disponibles

    if (disponibles.length === 0) {
        asignarResultado('#resultado', 'Ya fueron sorteados todos los nombres');
        return;
    }

    // Realiza el sorteo entre los amigos disponibles

    let amigosRestantes = Math.floor(Math.random() * disponibles.length);
    let amigoSorteado = disponibles[amigosRestantes];

    sorteados.push(amigoSorteado);
    asignarResultado('#resultado', `Tu amigo secreto es: ${amigoSorteado}`);
}





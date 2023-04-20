var nombre = document.getElementById('Name');
var email = document.getElementById('Email');
var mensaje = document.getElementById('Mensaje');

/*var miTitulo = document.querySelector('h1');
miTitulo.innerHTML = 'Prueba'*/

error.style.color = 'red';

function enviarFormulario(){
    console.log("Enviando formulario...");

var mensajeError = [];

if(nombre.value === null || nombre.value === "") {
    mensajeError.push("Ingrese su nombre");
}

if(email.value === null || email.value ==="") {
    mensajeError.push("Ingrese su email");
}

if(mensaje.value === null || mensaje.value === "") {
    mensajeError.push("Ingrese su mensaje");
}

error.innerHTML = mensajeError.join(", ");

return false;
}



/*function messageSucces(){
    alert("Hemos recibido su mensaje, ¡Pronto nos pondremos en contacto!")
    console.log(nombre+email+mensaje)
}*/




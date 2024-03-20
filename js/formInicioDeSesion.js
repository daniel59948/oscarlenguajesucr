const validaciones = (valores) => {
// Expresión regular para validar la contraseña
const regexContrasenna = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
// Expresión regular:
// ^: inicio de la cadena
// (?=.*\d): al menos un dígito
// (?=.*[a-z]): al menos una letra minúscula
// (?=.*[A-Z]): al menos una letra mayúscula
// (?=.*[!@#$%^&*]): al menos un caracter especial
// (?=.*[a-zA-Z]): al menos una letra (puede ser minúscula o mayúscula)
// .{8,}: longitud mínima de 8 caracteres
// $: fin de la cadena

// Expresión regular para validar la correo
const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Expresión regular:
// ^: inicio de la cadena
// [^\s@]+: al menos un caracter que no sea espacio ni @
// @: el caracter @
// [^\s@]+: al menos un caracter que no sea espacio ni @ después del @
// \.: el caracter .
// [^\s@]+: al menos un caracter que no sea espacio ni @ después del .
// $: fin de la cadena

const esValido = regexContrasenna.test(valores.contrasenna) && regexCorreo.test(valores.nombreUsuario);

return esValido ? true : false;

};


const iniciarSesion = () => {

    // Obtener los valores de los campos del formulario
    var nombreUsuario = document.getElementById("correo").value;
    var contrasenna = document.getElementById("contrasenna").value;

    // Devolver los valores en un objeto
    var valores = {
        nombreUsuario: nombreUsuario,
        contrasenna: contrasenna
    };

    
    alert(validaciones(valores));

    return valores;
};


document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById("formulario").addEventListener("submit", function(event) {

        // Prevenir el comportamiento predeterminado del formulario
        event.preventDefault();
    
        // Obtener los valores del formulario
        var valores = iniciarSesion();
    
        // Alerta con los valores ingresados
        alert("Usuario: " + valores.nombreUsuario + " Contraseña: " + valores.contrasenna);

        // Alerta con los valores ingresados
        limpiarCajasDeTexto();
    });

  
});


const limpiarCajasDeTexto = () => {

    document.getElementById("correo").value = "";
    document.getElementById("contrasenna").value = "";

};


// Función para validar la telefono
  function validar_telefono(string) {
      alert(string); // mostrar lo que esta llegando en el string
    // defincion de variale y asignación de valor que si esta valido el parametro
    var valido = 1;
    var msg = "El telefono ingresado esta correcto";
        
    // validando la longitud minina
    if (string.length < 7) {
        // estableciendo que no es valido
        valido = 0;
        msg = "Debe ingresar un telefono con mínimo 7 caracteres";
    }
    // validando la longitud minina
    if (valido == 1 && string.length > 10) {
        // estableciendo que no es valido
        valido = 0;
        msg = "Debe ingresar un telefono con máximo 10 caracteres";
    }
    if (
        (valido == 1 && typeof string != "string")
        ||
        (valido == 1 && isNaN(string))
       )
    {
    // estableciendo que no es valido
    valido = 0;
    msg = "Debe ingresar un telefono con sólo digitos";
    }
    // mostrando un mensaje del resultado obtenido
    alert(msg);
    // retornando el resultado obtenido.
    return valido;
    }

   /*  validar_telefono('1234567890');
    validar_telefono('1254634567890'); */


// Función para validar la direccion
function validar_direccion(string) {
    // defincion de variale y asignación de valor que si esta valido el parametro
    var valido = 1;
    var msg = "La drección ingresada esta correcta";


    // validando la direccion que contenga el caracter #
    if (!string.includes('#')) {
        // estableciendo que no es valido
        valido = 0;
        msg = "La direccion debe contener el caracter #";
    }
        
    // validando la longitud minina
    if (string.length < 7) {
        // estableciendo que no es valido
        valido = 0;
        msg = "Debe ingresar una direccion con mínimo 7 caracteres";
    }

    // validando que la direccion inicie con Carrera, Transversal, Circular, Calle
    if ((!string.startsWith('Carrera'))  && (!string.startsWith('Transversal'))  && (!string.startsWith('Circular')) && (!string.startsWith('Calle')))
    {
        // estableciendo que no es valido
        valido = 0;
        msg = "La direccion debe iniciar con Carrera o con Transversal o con Circular o con Calle";
    }

    // validando la longitud minina
    if (valido == 1 && string.length > 30) {
        // estableciendo que no es valido
        valido = 0;
        msg = "Debe ingresar una direccion con máximo 30 caracteres";
    }

    // mostrando un mensaje del resultado obtenido
    alert(msg);
    // retornando el resultado obtenido.
    return valido;
}

    /*    validar_direccion("123456");
    validar_direccion("12sdd3456");
    validar_direccion("12322222456"); */

    module.exports.validar_telefono = validar_telefono;
    module.exports.validar_direccion = validar_direccion;
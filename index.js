// Esperemos a que el documento este cargado antes de ejecutar el codigo JS
$(document).ready(function () { 
    // Cuando el usuario envia el formulario, ejecutar esta funcion
    $("#formulario-cliente").submit(function (event) {
        // Prevenimoos que el formulario se envie automatico
        event.preventDefault();
        // Obtener valores ingresados en el formulario
        let nombre = $("#nombre").val();
        let apellido = $("#apellido").val();
        let correo = $("#correo").val();
        let genero = $("#genero").val();
        let fechaNacimiento = $("#fecha-nacimiento").val();

        // Validar campos
        if (nombre == "" || nombre.length > 50 || nombre.length <2) {
            alert("Por favor ingrese su nombre correctamente.");
            return; // detener la ejecucion de la funcion
        }
        if (apellido == "" || nombre.length > 80 || nombre.length <2) {
            alert("Por favor ingrese su apellido correctamente.");
            return; // detener la ejecucion de la funcion
        }
        if (correo == "" || correo.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) == null) {
            alert("Por favor ingrese su correo correctamente.");
            return; // detener la ejecucion de la funcion
        }
        if (genero == "") {
            alert("Por favor ingrese su genero correctamente.");
            return; // detener la ejecucion de la funcion
        }
        if (fechaNacimiento == "") {
            alert("Por favor ingrese su fecha de Nacimiento correctamente.");
            return; // detener la ejecucion de la funcion
        }
        // Confirmar que el usuario desea enviar los datos
        if (!confirm("¿Está seguro de enviar los datos?")) {
            return;
        }
        // Mostrar un mensaje de alerta confirmando que se envió el formulario
        alert("El formulario ha sido enviado..");
    })
})
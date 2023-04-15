//conectar con el formulario
var formulario1 = document.querySelector('#formulario-1');

formulario1.addEventListener('submit', function (e){
    //evitar que se recargue el formulario.
    e.preventDefault();

    let resultado = validarFormulario1();
    if (resultado == true) {
        enviar();
    };
});



function validarFormulario1() {
    //variables desde el formulario.
    var f1nombre = document.getElementById('f1nombre').value;
    var f1correo = document.getElementById('f1correo').value;
    var f1telefono = document.getElementById('f1telefono').value;
    var f1motivo = document.getElementById('f1motivo').value;
    var f1mensaje = document.getElementById('f1mensaje').value;

    //variable para comprobar si el formulario esta completo.
    var validar = true;

    if (f1nombre === "") {
        validar = false;
        console.log(f1nombre)
        alert('El campo Nombre es requerido');
    }
    if (f1correo === "") {
        validar = false;
        alert('El campo Correo es requerido');
    }
    if (f1telefono == "") {
        validar = false;
        alert('El campo Teléfono es requerido');
    }
    if (f1motivo == "") {
        validar = false;
        alert('El campo Motivo es requerido');
    }
    if (f1mensaje == "") {
        validar = false;
        alert('El campo Mensaje es requerido');
    }

    return validar;
}

function enviar() {
    console.log('mensaje...')
    alert(`Muchas gracias ${f1nombre.value} hemos recibido su sugerencia y enviaremos una pronta respuesta al correo ${f1correo.value}`)
}

/**En pantalla pequeña, los formularios quedan ocultos a la vista. Al hacer clic en el enlace al formulario
para comunicarse con nuestra tienda o al de reserva, deberá desplegar el formulario para que
podamos completarlo. Solo se mostrará el formulario que el usuario necesita utilizar. */

var menu3 = document.querySelector('#menu3');
var menu4 = document.querySelector('#menu4');

var formComuniquemonos = document.querySelector('#form-comuniquemonos');
var formReserva = document.querySelector('#form-reserva');

menu3.addEventListener('click', mostrarFormulario1);
menu4.addEventListener('click', mostrarFormulario2);

function mostrarFormulario1() {
    formComuniquemonos.className  = "p-3 mx-auto d-block d-sm-block d-md-block";
}

function mostrarFormulario2() {
    formReserva.className  = "p-3 mx-auto d-block d-sm-block d-md-block";
}


/*** JQUERY Desafió 10 ***/


$("#btnReservar").click(function(e){
    e.preventDefault();

    var nombre = $("#f2nombre").val();
    var correo = $("#f2correo").val();
    var telefono = $("#f2telefono").val();
    var fecha = $("#f2fecha").val();
    var hora = $("#f2hora").val();
    var asistentes = $("#f2asistentes").val();


    if (nombre == "") {
        alert("El campo Nombre es requerido.")
    } else if (correo == "") {
        alert("El campo Correo es requerido.")
    } else if (telefono == "") {
        alert("El campo Telefono es requerido.")
    } else if (fecha == "") {
        alert("El campo Fecha es requerido.")
    } else if (hora == "") {
        alert("El campo Hora es requerido.")
    } else if (asistentes == "") {
        alert("El campo Cantidad de Asistentes es requerido.")
    } else {
        alert(`Estimado: ${nombre} agradecemos por reservar con nosotros. Hemos
registrado ${asistentes} asistentes. Se ha enviado el código de confirmación al
correo ${correo}
Gracias por preferirnos`)
    }
    
});


$(".imagen-producto").click(function(){
    // Se crean variables para obtener la ruta de la imagen, el titulo y la descripcion de los productos.
    var rutaImagen = this.src;
    var titulo = this.parentNode.querySelector('h4').innerHTML;
    var descripcion = this.parentNode.querySelector('p').innerHTML;

    // Se inyectan los valores de las variables en el modal.
    $("#modal-titulo").text(titulo);
    $("#modal-descripcion").text(descripcion);
    $("#modal-imagen").attr('src', rutaImagen)

    $('.modal-productos').show();
});

$('.modal-cerrar').click(function(){
    $(".modal-productos").hide();
});


/*** JQUERY Desafió 12 ***/

$("#menu2").click(function(){
    $('.carousel-nosotros').show();
});

$(".carousel-nosotros-cerrar").click(function(){
    $(".carousel-nosotros").hide();
});
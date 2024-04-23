function mostrarRegistroAlumno() {
    ocultarFormularios();
    document.getElementById("registroAlumno").style.display = "block";
}

function mostrarRegistroNotas() {
    ocultarFormularios();
    document.getElementById("registroNotas").style.display = "block";
}

function mostrarRegistroMaterias() {
    ocultarFormularios();
    document.getElementById("registroMaterias").style.display = "block";
}

function ocultarFormularios() {
    var formularios = document.getElementsByClassName("formulario");
    for (var i = 0; i < formularios.length; i++) {
        formularios[i].style.display = "none";
    }
}

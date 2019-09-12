/**
 * SECCION DE VARIABLES GLOBALES.
 * DEFINIR AQUI LAS VARIABLES GLOBALES NECESARIAS.
 */





// 1- HACER UNA FUNCION QUE RECIBE POR PARAMETROS UN ARRAY DE PERSONAS Y UN ID. 
// ESTA FUNCION DEBE BUSCAR EN EL ARRAY Y RETORNAR LA UBICACION DE LA PERSONA QUE 
// TIENE COMO id EL ID PASADO POR PARAMETRO.



// 2- COMPLETAR LA FUNCION agregarPersona(nombre, apellido, edad) PARA QUE 
// CON LA INFORMACION RECIBIDA CREE UN OBJETO CON LAS SIGUIENTES PROPIEDADES
// id, nombre, apellido, edad.
// el id es un identificador unico para cada persona. lo creamos nosotros de manera
// interna, puede ser un numero, una letra, un string, pero debe ser unico para cada persona.
// USAR LA FUNCION recargarLista(personas) QUE RECIBE POR PARAMETRO UN ARRAY DE PERSONAS
// Y SE ENCARGA DE MOSTRARLO EN LA LISTA DE LA PANTALLA.

 /**
 * funcion que recibe la informacion necesaria para crear una persona y la agrega al listado de personas.
 * @param {string} nombre 
 * @param {string} apellido 
 * @param {number} edad 
 */
function agregarPersona(nombre, apellido, edad) {

    alert("Usar la informacion recibida para crear una persona y agregarla a la lista de personas.");
}


// 3- COMPLETAR LA FUNCION eliminarPrimero() PARA QUE ELIMINE LA PRIMERA PERSONA 
// DE LA LISTA. REFRESCAR LA LISTA QUE SE ESTA VISUALIZANDO.
// USAR LA FUNCION recargarLista(personas) QUE RECIBE POR PARAMETRO UN ARRAY DE PERSONAS
// Y SE ENCARGA DE MOSTRARLO EN LA LISTA DE LA PANTALLA.

/**
 * elimina la primera persona de la lista
 */
function eliminarPrimero() {

    alert("Hacer funcionalidad para eliminar la primera persona de la lista.");
}

// 4- COMPLETAR LA FUNCION eliminarUltimo() PARA QUE ELIMINE LA ULTIMA PERSONA 
// DE LA LISTA. REFRESCAR LA LISTA QUE SE ESTA VISUALIZANDO.
// USAR LA FUNCION recargarLista(personas) QUE RECIBE POR PARAMETRO UN ARRAY DE PERSONAS
// Y SE ENCARGA DE MOSTRARLO EN LA LISTA DE LA PANTALLA.

/**
 * elimina la ultima persona de la lista.
 */
function eliminarUltimo() {

    alert("Hacer funcionalidad para eliminar la ultima persona de la lista.");
}

// 5- COMPLETAR LA FUNCION buscarPersonaPorNombre(nombre) PARA QUE QUITE DEL LISTADO
// LOS QUE NO COINCIDEN CON EL CRITERIO RECIBIDO.
// EJ. SI EN EL CRITERIO PUSIERON gab EN LA LISTA DEBERIAN QUEDAR NOMBRES COMO gabriel, gaby
// PERO NO raul, javier.
// USAR LA FUNCION string.search(criterio) QUE DEVUELVE LA POSICION DONDE SE ENCUENTRA EL CRITERIO
// -1 SI NO CONTIENE EL CRITERIO.
// https://www.w3schools.com/jsref/jsref_search.asp
// USAR LA FUNCION recargarLista(personas) QUE RECIBE POR PARAMETRO UN ARRAY DE PERSONAS
// Y SE ENCARGA DE MOSTRARLO EN LA LISTA DE LA PANTALLA

/**
 * del total de personas cargadas, filtra las que no coinciden con el criterio de busqueda.
 * @param {string} nombre 
 */
function buscarPersonaPorNombre(nombre) {

    alert("Hacer funcionalidad para filtrar las personas que no coincidan con el criterio de busqueda.");

}


// 6- COMPLETAR LA FUNCION limpiarBusquedaPersona() PARA QUE VUELVA A MOSTRAR EL LISTADO COMPLETO
// DE PERSONAS.
// USAR LA FUNCION recargarLista(personas) QUE RECIBE POR PARAMETRO UN ARRAY DE PERSONAS
// Y SE ENCARGA DE MOSTRARLO EN LA LISTA DE LA PANTALLA

/**
 * limpia la busqueda de persona.
 */
function limpiarBusquedaPersona() {

    alert("Hacer funcionalidad para mostrar la lista completa de personas cargadas.");
}





// 7- COMPLETAR LA FUNCION editarPersona(id) PARA QUE ENCUENTRA LA PERSONA CON EL ID
// QUE RECIBE POR PARAMETRO, Y SE LA PASE A LA FUNCION abrirActualizacionPersona(persona)
// DICHA FUNCION SE VA A ENCARGAR DE ABRIR EL FORMULARIO PARA LA EDICION.

/**
 * recibe un id de persona, debe buscar esa persona en el listado de personas
 * y abrir el formulario de edicion.
 * @param {number} id 
 */
function editarPersona(id) {

    alert("Hacer funcionalidad para abrir la edicion de una persona.");

    // UNA VEZ ENCONTRADA LA PERSONA, DESCOMENTAR LA SIGUIENTE LINEA Y PASARLE LA PERSONA 
    // ENCONTRADA, DE MODO QUE SE ABRA LA VENTANA DE EDICION.
    // abrirActualizacionPersona(persona);
}



// 8- COMPLETAR LA FUNCION actualizarPersona(id, nombre, apellido, edad) 
// PARA QUE ENCUENTRA LA PERSONA CON EL ID QUE RECIBE POR PARAMETRO, Y ACTUALICE SUS 
// PROPIEDADES.
// USAR LA FUNCION recargarLista(personas) QUE RECIBE POR PARAMETRO UN ARRAY DE PERSONAS
// Y SE ENCARGA DE MOSTRARLO EN LA LISTA DE LA PANTALLA

/**
 * funcion que recibe la informacion necesaria para actualizar una persona.
 * @param {number} id 
 * @param {string} nombre 
 * @param {string} apellido 
 * @param {number} edad 
 */
function actualizarPersona(id, nombre, apellido, edad) {

    alert("Usar la informacion recibida para actualizar una persona.");
}


// 9- COMPLETAR LA FUNCION eliminarPersona(id) 
// PARA QUE ENCUENTRA LA PERSONA CON EL ID QUE RECIBE POR PARAMETRO, Y LA QUITE DE LA LISTA.
// para eliminar un item de un array podemos usar la funcion 
// array.splice(indiceItemAEliminar, 1)
// USAR LA FUNCION recargarLista(personas) QUE RECIBE POR PARAMETRO UN ARRAY DE PERSONAS
// Y SE ENCARGA DE MOSTRARLO EN LA LISTA DE LA PANTALLA

/**
 * indica que persona hay que eliminar 
 * pasando por parametro el id.
 * @param {number} idPersona 
 */
function eliminarPersona(id) {

    
    alert("Hacer la funcionalidad necesaria para eliminar la persona que tiene el id recibido.");
    
}









/********************************************************************************************* */
// ////////// LAS SIGUIENTES FUNCIONES SON PARA COMUNICAR EL DOM CON EL JS. /////////////////////
// //////////////////////////// NO DEBEN SER MODIFICADAS. ///////////////////////////////////////
/********************************************************************************************* */





/**
 * Recibe un array de personas y lo 
 * agrega a la lista de la pantalla.
 * @param {Array} personas 
 */
function recargarLista(personas) {
    
    // creacion de tabla y registro
    var table = document.getElementById("tablePersonas");
    var tbody = table.getElementsByTagName("tbody")[0];

    var tbodyNew = document.createElement('tbody');

    for(var i = 0; i < personas.length; i++) {

        var tr = tbodyNew.insertRow(i);

        // celda
        var tdId = tr.insertCell(0);
        tdId.className = "text-center";
        tdId.innerText = personas[i].id;

        // celda
        var tdNombre = tr.insertCell(1);
        tdNombre.className = "text-center";
        tdNombre.innerText = personas[i].nombre;

        // celda
        var tdApellido = tr.insertCell(2);
        tdApellido.innerText = personas[i].apellido;
        tdApellido.className = "text-center";

        // celda
        var tdEdad = tr.insertCell(3);
        tdEdad.innerText = personas[i].edad;
        tdEdad.className = "text-center";

        // boton de accion
        var button = document.createElement("button");
        button.className = "btn btn-primary btn-sm mr-1";
        button.type = "button";
        button.setAttribute( "onClick", "javascript: eliminarPersona(" + personas[i].id + ");" );
        button.innerText = "Eliminar";

        var button2 = document.createElement("button");
        button2.className = "btn btn-primary btn-sm mr-1";
        button2.type = "button";
        button2.setAttribute( "onClick", "javascript: editarPersona(" + personas[i].id + ");" );
        button2.innerText = "Actualizar";

        // celda
        var tdAccion = tr.insertCell(4);
        tdAccion.className = "text-center";
        tdAccion.appendChild(button);
        tdAccion.appendChild(button2);
    }

    table.replaceChild(tbodyNew, tbody);
}

/**
 * funcion de agregar persona
 */
function leerPersona() {

    // si no es valido el form, fin.
    if(!isNuevaPersonaValid())
        return;

    // datos de la persona
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;

    // close modal.
    document.getElementById("btnCloseNuevaPersona").click();

    // metodo que va a agregar una persona
    agregarPersona(nombre, apellido, edad);
}

/**
 * valida el formulario de nueva persona.
 */
function isNuevaPersonaValid() {

    // formulario de validacion
    var form = document.getElementById('frmPersona');
    
    // chequea la validacion
    if (form.checkValidity() === false) {

        form.classList.add('was-validated');
        return false;
    }
    
    // valid
    return true;
}

/**
 * funcion de validacion del formulario de actualizacion.
 */
function validarActualizacionPersona() {

    // formulario de validacion
    var form = document.getElementById('frmUpdatePersona');

    // chequea la validacion
    if (form.checkValidity() === false) {

        form.classList.add('was-validated');
        return false;
    }
    
    // valid
    return true;
}


/**
 * funcion de agregar persona
 */
function abrirActualizacionPersona(persona) {

    limpiarActualizarPersona();

    // datos de la persona
    document.getElementById("idUpdate").value = persona.id;
    document.getElementById("nombreUpdate").value = persona.nombre;
    document.getElementById("apellidoUpdate").value = persona.apellido;
    document.getElementById("edadUpdate").value = persona.edad;

    document.getElementById("btnUpdate").click();

}

/**
 * funcion de agregar persona
 */
function leerPersonaActualizada() {

    if(!validarActualizacionPersona())
        return;

    // datos de la persona
    let id = document.getElementById("idUpdate").value;
    let nombre = document.getElementById("nombreUpdate").value;
    let apellido = document.getElementById("apellidoUpdate").value;
    let edad = document.getElementById("edadUpdate").value;

    document.getElementById("btnCloseUpdatePersona").click();

    // metodo que va a agregar una persona
    actualizarPersona(id, nombre, apellido, edad);
}

/**
 * limpia el modal de nueva persona.
 */
function limpiarNuevaPersona() {
    
    // formulario de validacion
    var form = document.getElementById('frmPersona');
        
    form.classList.remove('was-validated');

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("edad").value = "";

}

/**
 * limpia el modal de nueva persona.
 */
function limpiarActualizarPersona() {
    
    // formulario de validacion
    var form = document.getElementById('frmUpdatePersona');
        
    form.classList.remove('was-validated');
}

/**
 * evento de busqueda de personas
 */
function onBusquedaPersona() {

    let criterio = document.getElementById("busquedaNombre").value;

    if(!nombre) {
        return;
    }

    buscarPersonaPorNombre(criterio);
}

/**
 * evento de limpiar busqueda.
 */
function onLimpiarBusquedaPersona() {

    document.getElementById("busquedaNombre").value = "";

    limpiarBusquedaPersona();

}




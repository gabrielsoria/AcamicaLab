
personas = [];
identificador = 1;
personasEncontradas = [];

/**
 * limpia la busqueda de persona.
 */
function limpiarBusquedaPersona() {

    recargarLista(personas);
}

/**
 * 
 * @param {string} nombre 
 */
function buscarPersonaPorNombre(nombre) {

    personasEncontradas = [];
    for(var i = 0; i < personas.length; i++) {

        if(personas[i].nombre.toLowerCase().search(nombre.toLowerCase()) > -1) {
            personasEncontradas.push(personas[i]);
        }
    }

    recargarLista(personasEncontradas);

}

/**
 * elimina el primer registro
 */
function eliminarPrimero() {

    if(personas.length == 0) {
        return;
    }

    personas.shift();

    recargarLista(personas);
}

/**
 * elimina el ultimo registro
 */
function eliminarUltimo() {

    if(personas.length == 0) {
        return;
    }

    personas.pop();

    recargarLista(personas);
}

/**
 * abre una persona para editarla
 * @param {number} id 
 */
function editarPersona(id) {

    var index = buscarPorId(personas, id);

    var persona = personas[index];

    abrirActualizacionPersona(persona);
}

/**
 * Funcion que recibe la persona agregada por pantalla.
 * @param {number} id 
 * @param {string} nombre 
 * @param {string} apellido 
 * @param {number} edad 
 */
function actualizarPersona(id, nombre, apellido, edad) {

    var indexPersona = buscarPorId(personas, id);

    let personaActualizada = personas[indexPersona];

    personaActualizada.nombre = nombre;
    personaActualizada.apellido = apellido;
    personaActualizada.edad = edad;

    recargarLista(personas);
}

/**
 * Funcion que recibe la persona agregada por pantalla.
 * @param {string} nombre 
 * @param {string} apellido 
 * @param {number} edad 
 */
function agregarPersona(nombre, apellido, edad) {

    let nuevaPersona = {
        id: identificador ++,
        nombre: nombre,
        apellido: apellido,
        edad: edad
    }

    personas.push(nuevaPersona);

    recargarLista(personas);
}

/**
 * indica que persona hay que eliminar 
 * pasando por parametro el id.
 * @param {number} idPersona 
 */
function eliminarPersona(idPersona) {

    
    var index = buscarPorId(personas, idPersona);

    if(index < 0)
        return;

    personas.splice(index, 1);

    recargarLista(personas);
    
}

/**
 * busca en el array de personas y retorna
 * el index del encontrado.
 * @param {Array} array 
 * @param {number} idPersona 
 */
function buscarPorId(array, idPersona) {

    var encontrado = -1;
    for(var i = 0; i < array.length; i++) {

        if(array[i].id == idPersona) {
            encontrado = i;
            break;
        }
    } 

    return encontrado;
}


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




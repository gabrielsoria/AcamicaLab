
personas = [];
identificador = 1;

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

    
    var index = buscarPorId(idPersona);

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

    // datos de la persona
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;

    // metodo que va a agregar una persona
    agregarPersona(nombre, apellido, edad);
}


/**
 * funcion de agregar persona
 */
function abrirActualizacionPersona(persona) {

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

    // datos de la persona
    let id = document.getElementById("idUpdate").value;
    let nombre = document.getElementById("nombreUpdate").value;
    let apellido = document.getElementById("apellidoUpdate").value;
    let edad = document.getElementById("edadUpdate").value;

    // metodo que va a agregar una persona
    actualizarPersona(id, nombre, apellido, edad);
}




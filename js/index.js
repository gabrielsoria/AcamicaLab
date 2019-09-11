



function recibirPersona(nombre, apellido, edad) {
    
    var table = document.getElementById("tablePersonas");
    var tr = table.insertRow(1);
    var tdNombre = tr.insertCell(0);
    tdNombre.innerText = nombre;
    var tdApellido = tr.insertCell(1);
    tdApellido.innerText = apellido;
    var tdEdad = tr.insertCell(2);
    tdEdad.innerText = edad;

    // tr.appendChild(tdNombre);
    // tr.appendChild(tdApellido);
    // tr.appendChild(tdEdad);

    // table.insertRow(tr);
}

function agregarPersona() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    recibirPersona(nombre, apellido, edad);
}


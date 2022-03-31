
function validarFormulario(){
   var nombre = document.getElementById("nombre").value;
   var apellido = document.getElementById("apellido").value;
   var telefono = document.getElementById("telefono").value;
   var direccion = document.getElementById("direccion").value;
   var correo = document.getElementById("correo").value;
        if(nombre.length == 0){
          document.getElementById("estadoNombre").innerHTML = "* El campo debe ser diligenciado"
        }else {
            if(apellido.length == 0){
                document.getElementById("estadoNombre").innerHTML = ""
                document.getElementById("estadoApellido").innerHTML = "* El campo debe ser diligenciado"
              }else {
                if(telefono.length == 0){
                    document.getElementById("estadoNombre").innerHTML = ""
                    document.getElementById("estadoApellido").innerHTML = ""
                    document.getElementById("estadoNoTelefono").innerHTML = "* El campo debe ser diligenciado"
                  }
                  else {
                    if(direccion.length == 0){
                        document.getElementById("estadoNombre").innerHTML = ""
                        document.getElementById("estadoApellido").innerHTML = ""
                        document.getElementById("estadoNoTelefono").innerHTML = ""
                        document.getElementById("estadoDireccion").innerHTML = "* El campo debe ser diligenciado"
                      } else {
                        if(correo.length == 0){
                            document.getElementById("estadoNombre").innerHTML = ""
                            document.getElementById("estadoApellido").innerHTML = ""
                            document.getElementById("estadoNoTelefono").innerHTML = ""
                            document.getElementById("estadoDireccion").innerHTML = ""
                            document.getElementById("estadoMail").innerHTML = "* El campo debe ser diligenciado"
                          }
                          else {
                            document.getElementById("estadoNombre").innerHTML = ""
                            document.getElementById("estadoApellido").innerHTML = ""
                            document.getElementById("estadoNoTelefono").innerHTML = ""
                            document.getElementById("estadoDireccion").innerHTML = ""
                            document.getElementById("estadoMail").innerHTML = ""

                            document.getElementById("nombre").value = ""
                            document.getElementById("apellido").value = ""
                            document.getElementById("telefono").value = ""
                            document.getElementById("direccion").value = ""
                            document.getElementById("correo").value = ""

                            

                            var usuario = {
                                nombre : nombre,
                                apellido : apellido,
                                telefono : telefono,
                                direccion : direccion,
                                correo : correo
                            }
                            
                            
                            mostrarUsuarios(usuario);
                          }
                      }
                  }
              }
        }

    
  
}



function mostrarUsuarios(usuario){
    var usuarios = [];
     usuarios.push(usuario);
    for (const usuario of usuarios) {
  
        var y = document.createElement("TR");
        y.setAttribute("id", usuario.telefono);
        document.getElementById("tabla").appendChild(y);
    //____________________________Nombre________________________
        var columnaNombre = document.createElement("TD");
        var valorNombre = document.createTextNode(usuario.nombre);
        columnaNombre.appendChild(valorNombre);
        document.getElementById(usuario.telefono).appendChild(columnaNombre);
    //__________________________Apellido__________________________
        var columnaApellido = document.createElement("TD");
        var valorApellido = document.createTextNode(usuario.apellido);
        columnaApellido.appendChild(valorApellido);
        document.getElementById(usuario.telefono).appendChild(columnaApellido);
    //________________________Telefono___________________________
        var columnaTelefono = document.createElement("TD");
        var valorTelefono = document.createTextNode(usuario.telefono);
        columnaTelefono.appendChild(valorTelefono);
        document.getElementById(usuario.telefono).appendChild(columnaTelefono);

        //________________________Direccion___________________________
        var columnaDireccion = document.createElement("TD");
        var valorDireccion = document.createTextNode(usuario.direccion);
        columnaDireccion.appendChild(valorDireccion);
        document.getElementById(usuario.telefono).appendChild(columnaDireccion);

        //________________________Correo___________________________
        var columnaCorreo = document.createElement("TD");
        var valorCorreo = document.createTextNode(usuario.correo);
        columnaCorreo.appendChild(valorCorreo);
        document.getElementById(usuario.telefono).appendChild(columnaCorreo);

        //__________________Editar_______Eliminar__________________
        var columnaOpciones = document.createElement("TD");
        var opcionEditar = document.createElement("button");
        opcionEditar.setAttribute("onclick", "modificar()");
        var valorEditar = document.createTextNode("Editar");
        opcionEditar.appendChild(valorEditar);
        columnaOpciones.appendChild(opcionEditar);
        document.getElementById(usuario.telefono).appendChild(opcionEditar);
       
        var opcionEliminar = document.createElement("button");
        opcionEliminar.setAttribute("onclick", "eliminar()");
        var valorEliminar = document.createTextNode("Eliminar");
        opcionEliminar.appendChild(valorEliminar);
        columnaOpciones.appendChild(opcionEliminar);
        document.getElementById(usuario.telefono).appendChild(opcionEliminar);
    
    }
}


function modificar(){
    alert("Estoy Modificando");
}
function eliminar(){
    var rowId = event.target.parentNode.parentNode.id;
    document.getElementById(rowId).querySelectorAll(".row-data");
    
    let posicion = usuarios.indexOf(rowId);
    alert(posicion)
}
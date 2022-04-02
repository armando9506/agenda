
var usuarios = [];

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

                            

                            var bandera = false;
                            for (const user of usuarios) {
                                if(user.telefono == telefono){
                                    bandera = true;
                                }
                            }
                            if (!bandera){
                                var usuario = {
                                    nombre : nombre,
                                    apellido : apellido,
                                    telefono : telefono,
                                    direccion : direccion,
                                    correo : correo
                                }
                                usuarios.push(usuario);
                                console.log( usuarios)
                                mostrarUsuarios(usuarios);
                                    document.getElementById("nombre").value = ""
                                    document.getElementById("apellido").value = ""
                                    document.getElementById("telefono").value = ""
                                    document.getElementById("direccion").value = ""
                                    document.getElementById("correo").value = ""
                                    //-----------------colocando mensaje de guardado emergente-------------------
                                        document.getElementById("mensajeGuardado").style.visibility = "visible";

                                        setTimeout(quitarMensaje, 5000);

                                        function quitarMensaje(){
                                            document.getElementById("mensajeGuardado").style.visibility = "hidden";
                                        }
                            }else{
                                document.getElementById("estadoNoTelefono").innerHTML = "* El numero de telefono ya existe"
                            }
                            
                          }
                      }
                  }
              }
        }

    
  
}

function mostrarUsuarios(usuarios){
    var tabla = document.getElementById("cuerpoTabla");
    tabla.innerHTML = ""
     
    for (const usuario of usuarios ) {
       if(document.getElementById(usuario.telefono)){
        console.log("Encontrado!!")
       }else{
       

        var y = document.createElement("TR");
        y.setAttribute("id", usuario.telefono);
        document.getElementById("cuerpoTabla").appendChild(y);
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
        var opcionEditar = document.createElement("a");
        opcionEditar.setAttribute("href", "#");
        opcionEditar.setAttribute("style", "margin : 10px");
        opcionEditar.setAttribute("onclick", `prepararModificacion(${usuario.telefono})`);
        var imgEditar = document.createElement("img");
        imgEditar.setAttribute("src", "imagenes/lapiz.png");
        imgEditar.setAttribute("style", "margin-top : 9px");
        opcionEditar.appendChild(imgEditar);
        columnaOpciones.appendChild(opcionEditar);
        document.getElementById(usuario.telefono).appendChild(opcionEditar);
       
        var opcionEliminar = document.createElement("a");
        opcionEliminar.setAttribute("href", "#");
        opcionEliminar.setAttribute("style", "margin : 10px");
        opcionEliminar.setAttribute("onclick", `eliminar(${usuario.telefono})`);
        var imgEliminar = document.createElement("img");
        imgEliminar.setAttribute("src", "imagenes/papelera.png");
        imgEliminar.setAttribute("style", "margin-top : 9px");
        opcionEliminar.appendChild(imgEliminar);
        columnaOpciones.appendChild(opcionEliminar);
        document.getElementById(usuario.telefono).appendChild(opcionEliminar);
    
    }
}
}
let posicionModificar ;
function prepararModificacion(telefono){
    
   
    for (const usuario of usuarios) {
        if(usuario.telefono == telefono){
            posicionModificar = usuarios.indexOf(usuario);
        }
    }
    let usuarioModificar = usuarios[posicionModificar];
    document.getElementById("nombre").value = usuarioModificar.nombre;
    document.getElementById("apellido").value = usuarioModificar.apellido;
    document.getElementById("telefono").value = usuarioModificar.telefono;
    document.getElementById("direccion").value = usuarioModificar.direccion;
    document.getElementById("correo").value = usuarioModificar.correo;
    // ------------Colocando visible el boton Modificar
    document.getElementById("btnModificar").style.visibility = "visible";
    // ------------Colocando Invisible el boton Modificar
    document.getElementById("btnGuardar").style.visibility = "hidden";
    //para limpiar los mensajes de warning debajos de los campos
    document.getElementById("estadoNombre").innerHTML = ""
    document.getElementById("estadoApellido").innerHTML = ""
    document.getElementById("estadoNoTelefono").innerHTML = ""
    document.getElementById("estadoDireccion").innerHTML = ""
    document.getElementById("estadoMail").innerHTML = ""
}

function modificar(){
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

                            usuarios[posicionModificar] = "";                           

                            var bandera = false;
                            for (const user of usuarios) {
                                if(user.telefono == telefono){
                                    bandera = true;
                                }
                            }
                            if (!bandera){
                                var usuario = {
                                    nombre : nombre,
                                    apellido : apellido,
                                    telefono : telefono,
                                    direccion : direccion,
                                    correo : correo
                                }
                                usuarios[posicionModificar] = usuario;
                                console.log( usuarios)
                                // ------------Colocando visible el boton Modificar
                                document.getElementById("btnModificar").style.visibility = "hidden";
                                // ------------Colocando Invisible el boton Modificar
                                document.getElementById("btnGuardar").style.visibility = "visible";
                                mostrarUsuarios(usuarios);
                                    document.getElementById("nombre").value = ""
                                    document.getElementById("apellido").value = ""
                                    document.getElementById("telefono").value = ""
                                    document.getElementById("direccion").value = ""
                                    document.getElementById("correo").value = ""
                                    //-----------------colocando mensaje de guardado emergente-------------------
                                    document.getElementById("mensajeModificado").style.visibility = "visible";

                                    setTimeout(quitarMensaje, 5000);

                                    function quitarMensaje(){
                                        document.getElementById("mensajeModificado").style.visibility = "hidden";
                                    }

                            }else{
                                document.getElementById("estadoNoTelefono").innerHTML = "* El numero de telefono ya existe"
                            }
                            
                          }
                      }
                  }
              }
        }
}
function eliminar(telefono){
    let posicion ;
    
    for (const usuario of usuarios) {
        if(usuario.telefono == telefono){
            posicion = usuarios.indexOf(usuario);
        }   
    }
    let elementoEliminado = usuarios.splice( posicion, 1);
    
    var tbody = document.getElementById("cuerpoTabla");
    var tr = document.getElementById(telefono);
    tbody.removeChild(tr);
    var tabla = document.getElementById("cuerpoTabla");
    tabla.innerHTML = ""
    mostrarUsuarios(usuarios)
   //-----------------colocando mensaje de Eliminacion emergente-------------------
   document.getElementById("mensajeEliminado").style.visibility = "visible";

   setTimeout(quitarMensaje, 4000);

   function quitarMensaje(){
       document.getElementById("mensajeEliminado").style.visibility = "hidden";
   }
}
  


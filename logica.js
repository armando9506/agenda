function pruebaMetodo(){
   var nombre = document.getElementById("nombre").value;
   var apellido = document.getElementById("apellido").value;
   var telefono = document.getElementById("telefono").value;
   var direccion = document.getElementById("direccion").value;
   var correo = document.getElementById("correo").value;
 
   var usuarios = [];

   var usuario = {
       nombre : nombre,
       apellido : apellido,
       telefono : telefono,
       direccion : direccion,
       correo : correo
   }
    usuarios.push(usuario)
    console.log(usuario)
    console.log(usuarios)
    
   mostrarUsuarios(usuarios)
}
function mostrarUsuarios(usuarios){
    alert("hola mundo")
   
      
  
for (const usuario of usuarios) {
    alert(usuario.nombre)

    
  
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
   
}
}
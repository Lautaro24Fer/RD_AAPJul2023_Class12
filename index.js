function saludar(nombre){
    alert("Hola " + nombre);
}

let nombreUsuario = prompt("Ingrese su nombre");
while(nombreUsuario.trim() == ""){
    nombreUsuario = prompt("Ingrese su nombre");
}
saludar(nombreUsuario);
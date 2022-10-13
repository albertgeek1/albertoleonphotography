document.addEventListener("DOMContentLoaded", function() {
document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

 
function validarFormulario(evento) {

evento.preventDefault(); 
let name = document.getElementById('nombre').value;

if(name.length == 0) {
alert('¡No has escrito tu nombre!');
return;
}

let lastname = document.getElementById('apellidos').value;
if (lastname.length == 0) {
alert('¡No has escrito tus apellidos!');
return;
}
   

let emailField = document.getElementById('user-email').value;
             
// Definición de una expresión regular.

let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

// Usando .test podemos verificar si el texto coincide con el patrón.

if( validEmail.test(emailField) ){

alert('Los datos han sido validados');
           

this.submit();
              

}
else{

alert('El correo no es válido o falta llenar el campo');

return;
}          
}
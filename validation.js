document.addEventListener("DOMContentLoaded", function() {
document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

 
function validarFormulario(evento) {


 evento.preventDefault(); //Para evitar que el formulario sea enviado sin validar los datos
 
let name = document.getElementById('nombre').value; // Validando el campo nombre
if(name.length == 0) {
alert('¡No has escrito tu nombre!');
return;
}

let lastname = document.getElementById('apellidos').value; // Validando el campo apellidos
if (lastname.length == 0) {
alert('¡No has escrito tus apellidos!');
return;
}
   

let emailField = document.getElementById('user-email').value; // Validando el campo e-mail
             
// Definición de una expresión regular.

let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

// Usando .test podemos verificar si el texto coincide con el patrón.

if( validEmail.test(emailField) ){

alert('Los datos han sido validados');
           

this.submit();  // Se envia el formulario una vez que los datos han sido validados
              

}
else{

alert('El correo no es válido o falta llenar el campo');

return;
}          
}

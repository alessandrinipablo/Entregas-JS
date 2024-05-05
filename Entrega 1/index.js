/*
Cumpliendo con la premisa de la primera Entrega, se realiza un programa que 

-Permite Crear un usuario segun requerimientos.-
-Valida que cumpla con los requisitos.-
-Permite Loguearse, validando si el usuario esta dado de alta, y luego valida usuario y contraseña.
-Muestra mensajes de bienvenida al usuario logueado.-
- Se aplican variables, constantes,  estructuras repetitivas, funciones y demas.
- Se crearon dos funciones para poder usarlas una vez avanzado el curso,    
*/


// Funcion que va a permitir mostrar el menu, validando que ingrese correctamente los numeros SI O SI.
function mostrarMenuPrincipal() {
  let opcion_elegida
  do {
      opcion_elegida = parseInt(prompt("=== Menú Principal ===\n\n" +
      "1. Crear Usuario\n" +
      "2. Loguearse\n" +
      "3. Ver Productos\n" +
      "4. Comprar\n" +
      "5. Salir\n" +
      "          "))

  } while (isNaN(opcion_elegida) || opcion_elegida < 1 || opcion_elegida > 5)
  return opcion_elegida
}

// funcion que devuelve 
// Verdadero --> si la creacion del usuario y contraseña cumple con las reglas
// usuario --> que no ingrese un usuario en blanco
// contraseña --> entre 8-20 caracteres y alguna mayuscula

//----------------------------------------------------------------------------------------------
// funcion que valida si  el usuario no es vacio
function validar_Usuario(nombre) {
  // Verifica que el nombre de usuario no esté vacío
  return nombre.trim() !== ""
}
//----------------------------------------------------------------------------------------------
// funcion que valida condiciones de contraseña
function validar_Contraseña(pass) {
  // Verifica que la contraseña cumpla con las reglas
  return pass.trim() !== "" && pass.length >= 8 && pass.length <= 20 && /[A-Z]/.test(pass) && /[0-9]/.test(pass) 
}
//----------------------------------------------------------------------------------------------
// funcion de logueo
function logueo(user, pass) {
  const intentos_permitidos = 3;
  let intentos = 0;

  // Verifica si el usuario es válido
  if (!validar_Usuario(user)) {
      alert("El usuario no está registrado.");
      return false;
  }

  // Continuar intentos hasta que se agoten o se ingrese una contraseña válida
  while (intentos < intentos_permitidos) {
      // Verifica si la contraseña es válida
      if (validar_Contraseña(pass)) {
          alert("Contraseña válida. Verificando...");
          if (pass === contraseñaUsuario) {
              alert("Bienvenido " + user + "!!!!");
              return true;
          } else {
              alert('Error de autenticación');
          }
      } else {
          alert("La contraseña es incorrecta o no cumple con los requisitos.");
      }
      
      // Incrementa el número de intentos y muestra los intentos restantes
      intentos++;
      alert('Intentos restantes: ' + (intentos_permitidos - intentos));
      
      // Solicita al usuario que ingrese una nueva contraseña
      pass = prompt('Contraseña: ');
  }

  // Se agotaron los intentos
  alert('Se agotaron los intentos. Usuario bloqueado.');
  return false;
}
//----------------------------------------------------------------------------------------------
// funcion para usar mas adelante
function productos() {
  alert("Seccion --> en Desarrollo")
}
//----------------------------------------------------------------------------------------------
// funcion para usar mas adelante
function compras() {
  alert("Seccion --> en Desarrollo")
}

// -------------------------------------------------------------------------------------
// cuerpo principal

let salir = false
// do while  que mostrara el menu principal y segun opcion elegida mostrara lo solicitado.
do {
  let opcion = mostrarMenuPrincipal()

  switch (opcion) {
    // creacion de usuario
    case 1:
      alert("Seleccionaste: Crear Usuario")
      nombreUsuario = prompt("Ingrese su nombre de usuario:")
      contraseñaUsuario = prompt("Ingrese su contraseña:\n-DE 8 A 20 CARACTERES\n-AL MENOS UNA MAYUSCULA\n-AL MENOS UN NUMERO:")

      if (validar_Usuario(nombreUsuario) && validar_Contraseña(contraseñaUsuario)) {
        alert("El usuario se ha creado correctamente")
      } else {
        alert("La creación de usuario no cumple con las normas exigidas, intente nuevamente..")
      }
      break
    
    // loguearse, si existe el usuario
    case 2:
      alert("Seleccionaste: Loguearse")
      let usuario = prompt("Nombre de usuario: ")
      let clave = prompt(" Ingrese la clave: ")
      logueo(usuario,clave)
      break
    // secciones creadas, para proximas entregas
    case 3:
      alert("Seleccionaste: Ver Productos")
      productos()
      break
    // secciones creadas, para proximas entregas
    case 4:
      alert("Seleccionaste: Comprar")
      compras()
      break 
    // seccion salir
    case 5:
      alert("Seleccionaste: Salir")
      salir = true
      alert("Gracias por usar nuestro programa")
      break
    // por si ingresa alguna opcion no valida
    default:
      alert("Opción no válida")
      break
  }
  if (!salir) {
    let opcionSeguir = prompt("Desea seguir S/N").toLowerCase()
    if (opcionSeguir !== 's') {
      salir = true
    }
  }
} while (!salir)

alert("===FIN===")
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');//se agrega el punto porque es una clase
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

//Se agrega palabra reservada async 
async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  //data no está definido, definimos data como la respuesta de fetch
  const data = response.json();
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);

//Nota: Todavía me cuesta odentificar algunos errores, necesitaría mas tiempo para completarlo
//voy a completar el ejercicio pero después de la hora de entrega, para continuar con los siguientes

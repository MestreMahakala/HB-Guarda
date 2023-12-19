

// Dados a serem enviados no corpo da solicitação POST
const data = new FormData();
data.append('linha', '5'); // Substitua '1' pelo número da linha que você deseja modificar

// URL do script do Google Apps
const url = 'https://script.google.com/macros/s/AKfycbx28bXzP35juBDTlBp8MyaB3TSFGXj3aYWqignxi6HnD0V3prrUqD94qo9LybDjXclxYA/exec';

fetch(url, {
  method: 'POST',
  body: data,
})
  .then(response => response.text())
  .then(data => {
    console.log(data); // Resposta do script, se houver
  })
  .catch(error => {
    console.error('Erro:', error);
  });
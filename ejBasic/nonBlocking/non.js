const fs = require('fs');

console.log('Inicio');

fs.readFile('./nonBlocking/archivo.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err.message);
    return;
  }
  console.log('Archivo leído:', data);
});

console.log('Fin');

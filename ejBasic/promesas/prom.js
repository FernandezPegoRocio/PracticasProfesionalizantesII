console.log('Inicio');

const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

esperar(2000).then(() => {
  console.log('Timeout ejecutado');
});

console.log('Inicio');

const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

(async () => {
  await esperar(2000);
  console.log('Timeout ejecutado');
})();

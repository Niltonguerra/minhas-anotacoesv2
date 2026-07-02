// main.js
const { Worker } = require('worker_threads');

function executarNaThread(dados) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', {
      workerData: dados
    });

    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker parou com código ${code}`));
    });
  });
}

console.log('Iniciando cálculo na thread...');
executarNaThread(45)
  .then(resultado => {
    console.log(`Resultado: ${resultado}`);
  })
  .catch(err => {
    console.error(err);
  });
console.log('Continuando execução...');
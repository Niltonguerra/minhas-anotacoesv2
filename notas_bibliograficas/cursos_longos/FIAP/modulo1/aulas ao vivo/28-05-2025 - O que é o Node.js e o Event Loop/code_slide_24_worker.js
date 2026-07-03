// worker.js
const { parentPort, workerData } = require('worker_threads');

function calcularFibonacci(n) {
  if (n <= 1) return n;
  return calcularFibonacci(n - 1) + calcularFibonacci(n - 2);
}

const resultado = calcularFibonacci(workerData);
parentPort.postMessage(resultado);
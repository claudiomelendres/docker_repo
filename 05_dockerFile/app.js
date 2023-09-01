const os = require('os');

function mostrarUsoDeMemoria() {
  const memoriaTotal = formatBytes(os.totalmem());
  const memoriaUsada = formatBytes(os.totalmem() - os.freemem());

  console.log(`RAM total: ${memoriaTotal}`);
  console.log(`RAM utilizada: ${memoriaUsada}`);
//   console.log('==================================');
}

function formatBytes(bytes) {
  const kb = bytes / 1024;
  return kb < 1024 ? kb.toFixed(2) + " KB" : (kb / 1024).toFixed(2) + " MB";
}

// Mostrar el uso de memoria cada 5 segundos
setInterval(mostrarUsoDeMemoria, 5000);
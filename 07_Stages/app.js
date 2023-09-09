const os = require('os');
const {formatBytes} = require('./core/format');


const mostrarUsoDeMemoria = () => {
  const memoriaTotal = formatBytes(os.totalmem());
  const memoriaUsada = formatBytes(os.totalmem() - os.freemem());

  console.log(`RAM total: ${memoriaTotal}`);
  console.log(`RAM utilizada: ${memoriaUsada}`);
  console.log('=================================');
};



// Mostrar el uso de memoria cada 5 segundos
setInterval(mostrarUsoDeMemoria, 5000);

module.exports = {
  mostrarUsoDeMemoria
};
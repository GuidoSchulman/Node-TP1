import fs from 'fs';
const entradaInvalida = null;
const entrada = "./entrada.txt";
const salida = "./salida.txt";


fs.rename(entrada, salida, function (err) {
    if (err) throw err;
    console.log('File Renamed.');
  });
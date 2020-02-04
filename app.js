//const fs = require('express');
//const fs = require('./fs');

//console.log(module);

const { argv } = require('./config/yargs');
const colors = require('colors');

const { crearArchivo, listar } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log('Archivo  creado: ', `${archivo}`.green)).catch(err => console.log(err))
        break;

    default:
        console.log('comando no reconocido');
}

console.log(argv);

//let parametro = argv[2].split('=')[1];
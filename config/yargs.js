const opts = {
    base: { demand: true },
    limite: { default: 10 }
}
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'crea archivo de tabla de multiplicar', opts)
    .argv;


module.exports = { argv }
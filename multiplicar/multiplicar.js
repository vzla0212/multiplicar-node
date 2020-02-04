const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor: ${base} introducido no es un número`)
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tabla-${base}.txt`)
            console.log('El archivo ha sido creado!');
        });

    })

}

let listar = (base, limite) => {

    if (!Number(base)) {
        reject(`El valor: ${base} introducido no es un número`)
        return;
    }

    if (!Number(limite)) {
        reject(`El valor: ${limite} introducido no es un número`)
        return;
    }


    console.log('========================================'.green);
    console.log(`===========tabla del ${base}===============`.green);
    console.log('========================================'.green);


    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }

}

module.exports = { crearArchivo, listar };
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)
//     .catch(err => console.log(err));

// clima.getClima("6.244747222", "-75.574827777")
//     .then(console.log)
//     .catch(err => {
//         console.log(err);
//     });

const getInfo = async(direccion) => {
    try {
        const coord = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coord.lat, coord.lng)

        return `El clima de ${coord.direccion} es de ${temp}.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${coord.direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);
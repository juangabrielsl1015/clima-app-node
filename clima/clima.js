const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=fea2f213a436b374bf16a37501f75867&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}
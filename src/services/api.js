import axios from "axios";

const API_KEY = 'ec88cf235c2fda6f2dd96e0540cdc079';
const API_URL = 'http://api.openweathermap.org/data/2.5/weather';

const getWeather = async (city, country) => {
    try {
        let response = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        console.log('Error while calling the API', error.message);
        return error.response;
    }
};

export default getWeather; // Ensure this export is default

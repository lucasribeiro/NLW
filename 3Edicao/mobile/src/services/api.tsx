import axios from 'axios';

const api = axios.create( { 
    // baseURL: 'http://localhost:3333',    este caminho é para debugar via emulador
    baseURL: 'http://192.168.15.8:3333',    //este caminho é para debugar via emulador
} );

export default api;
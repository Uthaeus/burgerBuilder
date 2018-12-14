import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://builder2-3e73b.firebaseio.com/'
});

export default instance;
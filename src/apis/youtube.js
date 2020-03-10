import axios from 'axios';

const KEY = 'AIzaSyCxUEKK3p3LXgQjVDt4BBJEh7GQ4uceVxM'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const getFeedback = (response) => API.post('/feedback', { response });
export const getHistory = () => API.get('/history');

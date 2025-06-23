import axios from 'axios';

const API = axios.create({
  baseURL: 'https://backend-6bkk.onrender.com',
});

export const getFeedback = (response) => API.post('/feedback', { response });
export const getHistory = () => API.get('/history');

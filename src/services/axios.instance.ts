import axios from 'axios';

// if using emulator
const BASE_URL = 'http://localhost:1337';

export const api = axios.create({
  baseURL: BASE_URL,
});

// apiConfig.ts
import axios from 'axios';

// Retrieve CSRF token from meta tag
const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

const api = axios.create({
  baseURL: 'https://test.hoodies.fun/api', // Replace with your API URL
  headers: {
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': csrfToken || '', // Add CSRF token header
  },
});

export default api;

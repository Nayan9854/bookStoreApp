// API Configuration
const API_BASE_URL = (import.meta.env.VITE_API_URL || 'http://localhost:4001').replace(/\/$/, '');

export default API_BASE_URL;

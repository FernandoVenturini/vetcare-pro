cat > src / services / api.js << 'EOF'
const API_URL = 'http://localhost:3001';

export const apiRequest = async (endpoint, options = {}) => {
  const token = localStorage.getItem('token');

  const defaultHeaders = {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
  };

  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      headers: defaultHeaders,
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

export const authAPI = {
  login: (credentials) =>
    apiRequest('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    }),

  register: (userData) =>
    apiRequest('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    }),

  verify: () => apiRequest('/api/auth/verify'),
};

export const clientsAPI = {
  getAll: () => apiRequest('/api/clients'),
  create: (clientData) =>
    apiRequest('/api/clients', {
      method: 'POST',
      body: JSON.stringify(clientData),
    }),
};
EOF
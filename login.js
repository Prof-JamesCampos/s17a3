// login.js - Modified version in feature-Login branch

async function authenticateUser(username, password) {
    // Enhanced authentication logic with API call
    try {
      const response = await fetch('/api/authenticate', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      return data.authenticated;
    } catch (error) {
      console.error('Authentication error:', error);
      return false;
    }
  }
  
  module.exports = { authenticateUser };